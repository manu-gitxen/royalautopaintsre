const { spawn } = require('child_process');
const fs = require('fs');

async function run() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const port = 9422;
  const tmpDir = 'C:\\Users\\manuj\\AppData\\Local\\Temp\\edge_snap_' + Date.now();
  const edgeProc = spawn(edgePath, [
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${tmpDir}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    'about:blank'
  ]);

  try {
    let connected = false;
    let wsUrl = '';
    for (let i = 0; i < 15; i++) {
      try {
        await new Promise(r => setTimeout(r, 400));
        const res = await fetch(`http://127.0.0.1:${port}/json/list`);
        const targets = await res.json();
        if (targets && targets.length > 0) {
          wsUrl = targets[0].webSocketDebuggerUrl;
          connected = true;
          break;
        }
      } catch (e) {}
    }

    if (!connected) throw new Error('Could not connect to Edge debugger');

    const ws = new WebSocket(wsUrl);
    await new Promise((resolve) => ws.onopen = resolve);

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (event) => {
          const data = JSON.parse(event.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1400,
      height: 950,
      deviceScaleFactor: 1,
      mobile: false
    });

    await send('Page.navigate', { url: 'http://127.0.0.1:5500/about.html' });
    await new Promise(r => setTimeout(r, 2000));

    await send('Runtime.evaluate', { expression: `document.getElementById('story').scrollIntoView({ behavior: 'instant', block: 'start' });` });
    await new Promise(r => setTimeout(r, 800));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/manuj/.gemini/antigravity/brain/656d0c98-d96d-47ea-b5e2-8300861d213d/about_story_new_placement.png', Buffer.from(shot.data, 'base64'));
    console.log('SUCCESS: Captured about_story_new_placement.png');

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    edgeProc.kill();
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch (e) {}
  }
}

run();
