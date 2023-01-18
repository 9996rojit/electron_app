const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path')
const fs = require('fs')

function createWindow() {
  const win = new BrowserWindow({
    darkTheme: true,
    backgroundColor: '#787979',
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile('./window/index.html')
  // win.webContents.openDevTools({ mode: 'detach' });

  // win.loadURL(isDev ? 'http://localhost:5714' : `file://${path.join(__dirname + '../build/index.html')}`)
}
app.whenReady().then(createWindow);

app.on('window-all-close', () => {
  app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})