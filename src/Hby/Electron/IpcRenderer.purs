module Hby.Electron.IPCRenderer where

import Prelude
import Data.Argonaut (Json)
import Hby.Task (Task)
import Hby.Electron.Data (IpcRendererEvent, EventName)

foreign import send :: EventName -> Json -> Task Unit

foreign import on :: EventName -> (IpcRendererEvent -> Json -> Task Unit) -> Task Unit

foreign import sendSync :: EventName -> Json -> Task Json
