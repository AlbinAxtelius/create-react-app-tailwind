const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true
    }
  });

  ipcMain.on("toggleAlwaysOnTop", (_, newStatus) => {
    mainWindow.setAlwaysOnTop(newStatus);
  });

  ipcMain.on("setOpacity", (_, newOpacity) => {
    mainWindow.setOpacity(newOpacity);
  });

  mainWindow.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function() {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
