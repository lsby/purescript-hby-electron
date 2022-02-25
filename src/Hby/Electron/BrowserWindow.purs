module Hby.Electron.BrowserWindow where

import Prelude
import Hby.Task (Task)
import Hby.Electron.Data (BrowserWindow, BrowserWindowConf, PathString, UrlString, WebContents)

foreign import newBrowserWindow :: BrowserWindowConf -> Task BrowserWindow

foreign import loadFile :: BrowserWindow -> PathString -> Task Unit

foreign import loadURL :: BrowserWindow -> UrlString -> Task Unit

foreign import getAllWindows :: Task (Array BrowserWindow)

foreign import getWebContents :: BrowserWindow -> WebContents
