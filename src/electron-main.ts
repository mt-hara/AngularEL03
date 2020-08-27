import { app, BrowserWindow, screen } from "electron";
import * as path from "path";

let isDev: boolean;

switch (process.env.NODE_ENV) {
  case "development":
    isDev = true;
    break;

  case "production":
    isDev = false;
    break;

  default:
    isDev = false;
    break;
}

let win: BrowserWindow | null = null;

function createWindow(): BrowserWindow {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    x: 0,
    y: 0,

    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nodeIntegrationInWorker: true,
    },
  });
  win.setMenu(null);
  win.loadURL(path.resolve(app.getAppPath(), "dist", "index.html"));

  if (isDev) {
    win.webContents.openDevTools();
  }

  win.on("closed", () => {
    win = null;
  });

  return win;
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
