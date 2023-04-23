const { app, BrowserWindow,screen } = require("electron");

const createWindow = () => {
    const display = screen.getPrimaryDisplay()
    
    const size = {
        width: +(display.workArea.width * 0.35).toFixed(0),
        height: +(display.workArea.height * 0.24).toFixed(0),
    }
    
    const position = {
        x: display.workArea.width - size.width,
        y: +(display.workArea.height * .10).toFixed(0)
    }

    const window = new BrowserWindow({
        width: size.width,
        height: size.height,
        x: position.x,
        y: position.y,
        alwaysOnTop: true,
        resizable: false,
        fullscreenable: false,
        transparent: true,
        autoHideMenuBar: true,
        movable: false,
        frame: process.env.NODE_ENV == "development"
    })
    window.loadFile("src/index.html")
}


app.whenReady().then(()=>{
    createWindow()
})