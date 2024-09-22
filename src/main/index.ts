import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { SentenceTokenizer } from 'natural'
import { context, ReversoSupportedLanguages } from './reverso'

export const TITLE_BAR_WINDOW_CONTROLS_HEIGHT = 31

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    },

    // window frame configuration

    titleBarStyle: 'hidden'

    /** Removed because it imposibilited the focus mode feature */
    // titleBarOverlay: {
    //   height: TITLE_BAR_WINDOW_CONTROLS_HEIGHT,
    //   // this is probably going to change with the possibility of different themes
    //   color: '#dfdfdf00'
    // }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.akiri')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  ipcMain.handle('sentenceTokenizer', (evt, contents: string) => {
    const tokenizer = new SentenceTokenizer([])
    return tokenizer.tokenize(contents)
  })

  ipcMain.handle('reverso-context', async (evt, query) => {
    const response = await context(
      query,
      ReversoSupportedLanguages.ENGLISH,
      ReversoSupportedLanguages.FRENCH
    )

    return response
  })

  ipcMain.handle('maximize', async () => {
    const window = BrowserWindow.getFocusedWindow()

    if (!window) return null

    window.setFullScreen(true)
  })

  ipcMain.handle('unmaximize', async () => {
    const window = BrowserWindow.getFocusedWindow()

    if (!window) return null

    window.setFullScreen(false)
  })

  ipcMain.handle('minimize', async () => {
    const window = BrowserWindow.getFocusedWindow()

    if (!window) return null

    window.minimize()
  })

  ipcMain.handle('close-window', async () => {
    app.quit()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
