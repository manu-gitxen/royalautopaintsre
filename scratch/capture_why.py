import urllib.request
import json
import base64
import subprocess
import time
import os

edge_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
cmd = [
    edge_path,
    '--headless=new',
    '--remote-debugging-port=9222',
    '--window-size=1440,1000',
    'http://127.0.0.1:5500/index.html'
]
proc = subprocess.Popen(cmd)
time.sleep(2)

try:
    tabs = json.loads(urllib.request.urlopen('http://127.0.0.1:9222/json').read())
    ws_url = tabs[0]['webSocketDebuggerUrl']
    
    import websocket
    ws = websocket.create_connection(ws_url)
    
    # Scroll to Why Choose Us
    ws.send(json.dumps({'id': 1, 'method': 'Runtime.evaluate', 'params': {'expression': 'document.querySelector(".elementor-element-9558e2d").scrollIntoView(); window.scrollBy(0, -60);'}}))
    time.sleep(1.5)
    
    # Capture screenshot
    ws.send(json.dumps({'id': 2, 'method': 'Page.captureScreenshot', 'params': {'format': 'png'}}))
    res = json.loads(ws.recv())
    img_data = base64.b64decode(res['result']['data'])
    
    out_path = r'C:\Users\manuj\.gemini\antigravity\brain\656d0c98-d96d-47ea-b5e2-8300861d213d\current_why_choose_us.png'
    with open(out_path, 'wb') as f:
        f.write(img_data)
    print('Screenshot saved to:', out_path)
    ws.close()
finally:
    proc.terminate()
