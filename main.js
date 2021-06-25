const { app, BrowserWindow, ipcMain, Notification } = require("electron");

const path = require("path");

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 1200,
        height: 800,        
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,  
        }
    });

    mainWindow.loadFile(path.join(__dirname, "public/html/home.html"));
}
const takeRemaning=()=>{
  if (process.platform !== "darwin") {
    app.quit();
  }
}
const actiavteWindow=()=>{
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
}
/* [&] Events [&] */ 

app.on("ready", loadMainWindow);

app.on("window-all-closed", takeRemaning);

app.on("activate", actiavteWindow);



/* custom event */
ipcMain.handle('show-notification', (event, ...args) => {
    const notification = {
        title: 'New Task',
        body: `Added: ${args[0]}`
    }

    new Notification(notification).show()
});