module Hby.Electron.Data where

foreign import data BrowserWindow :: Type

type PathString
  = String

type BrowserWindowConf
  = { width :: Number
    , height :: Number
    , resizable :: Boolean
    , webPreferences ::
        { contextIsolation :: Boolean
        , preload :: PathString
        }
    }

foreign import data WebContents :: Type

type EventName
  = String

foreign import data IpcMainEvent :: Type

foreign import data IpcRendererEvent :: Type

type UrlString
  = String
