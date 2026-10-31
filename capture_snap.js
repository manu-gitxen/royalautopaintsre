const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function run() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const port = 59124;
  const tmpDir = path.join(process.env.TEMP || 'C:\\Users\\manuj\\AppData\\Local\\Temp', 'edge_snap_' + Date.now());

  const edgeProc = spawn(edgePath, [
    `--remote-debugging-port=${port}`,
    '--remote-allow-origins=*',
    `--user-data-dir=${tmpDir}`,
    '--headless=new',
    '--disable-extensions',
    '--disable-component-extensions-with-background-pages',
    '--disable-gpu',
    '--no-sandbox',
    'about:blank'
  ]);

  try {
    let wsUrl = '';
    for (let i = 0; i < 20; i++) {
      try {
        await new Promise(r => setTimeout(r, 400));
        const res = await fetch(`http://127.0.0.1:${port}/json/list`);
        const targets = await res.json();
        const pageTarget = targets.find(t => t.type === 'page');
        if (pageTarget) {
          wsUrl = pageTarget.webSocketDebuggerUrl;
          break;
        }
      } catch (e) {}
    }

    if (!wsUrl) throw new Error('Could not find page target on port ' + port);

    console.log('Connected to debugger page target:', wsUrl);
    const ws = new WebSocket(wsUrl);
    await new Promise((resolve) => ws.onopen = resolve);

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const timer = setTimeout(() => {
          ws.removeEventListener('message', handler);
          reject(new Error(`Timeout waiting for ${method} (id=${id})`));
        }, 15000);

        const handler = (event) => {
          const data = JSON.parse(event.data);
          if (data.id === id) {
            clearTimeout(timer);
            ws.removeEventListener('message', handler);
            if (data.error) reject(data.error);
            else resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });

    console.log('Navigating to contact.html...');
    await send('Page.navigate', { url: 'http://127.0.0.1:5500/contact.html' });
    await new Promise(r => setTimeout(r, 2000));

    // Evaluate logo display in DOM
    const logoStatus = await send('Runtime.evaluate', {
      expression: `(() => {
        const white = document.querySelector('.royal-nav-logo-white');
        const dark = document.querySelector('.royal-nav-logo-dark');
        return {
          currentUrl: window.location.href,
          whiteExists: !!white,
          darkExists: !!dark,
          whiteDisplay: white ? window.getComputedStyle(white).display : 'null',
          darkDisplay: dark ? window.getComputedStyle(dark).display : 'null',
          whiteVisible: white ? (white.offsetWidth > 0 && white.offsetHeight > 0) : false,
          darkVisible: dark ? (dark.offsetWidth > 0 && dark.offsetHeight > 0) : false
        };
      })()`,
      returnByValue: true
    });
    console.log('Logo DOM Status:', JSON.stringify(logoStatus.result.value, null, 2));

    const artifactDir = 'C:\\Users\\manuj\\.gemini\\antigravity\\brain\\656d0c98-d96d-47ea-b5e2-8300861d213d';

    console.log('Capturing Top Nav screenshot...');
    const shotTop = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'contact_nav_fixed_top.png'), Buffer.from(shotTop.data, 'base64'));
    console.log('SUCCESS: Captured contact_nav_fixed_top.png');

    console.log('Scrolling to sticky nav position (300px)...');
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, 300);` });
    await new Promise(r => setTimeout(r, 600));

    const stickyStatus = await send('Runtime.evaluate', {
      expression: `(() => {
        const white = document.querySelector('.royal-nav-logo-white');
        const dark = document.querySelector('.royal-nav-logo-dark');
        return {
          isSticky: document.querySelector('.luxore-navbar-header')?.classList.contains('sticky-active'),
          whiteDisplay: white ? window.getComputedStyle(white).display : 'null',
          darkDisplay: dark ? window.getComputedStyle(dark).display : 'null',
          whiteVisible: white ? (white.offsetWidth > 0 && white.offsetHeight > 0) : false,
          darkVisible: dark ? (dark.offsetWidth > 0 && dark.offsetHeight > 0) : false
        };
      })()`,
      returnByValue: true
    });
    console.log('Sticky DOM Status:', JSON.stringify(stickyStatus.result.value, null, 2));

    const shotSticky = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'contact_nav_fixed_sticky.png'), Buffer.from(shotSticky.data, 'base64'));
    console.log('SUCCESS: Captured contact_nav_fixed_sticky.png');

    console.log('Scrolling to inquiry form...');
    await send('Runtime.evaluate', { expression: `document.getElementById('inquiry-form').scrollIntoView({ behavior: 'instant', block: 'center' });` });
    await new Promise(r => setTimeout(r, 800));

    console.log('Capturing Form screenshot...');
    const shotForm = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'contact_rfq_redesign_proof.png'), Buffer.from(shotForm.data, 'base64'));
    console.log('SUCCESS: Captured contact_rfq_redesign_proof.png');

    ws.close();
  } catch (err) {
    console.error('Error during execution:', err);
  } finally {
    edgeProc.kill();
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch (e) {}
  }
}

run();
