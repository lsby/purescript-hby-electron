module Hby.Electron.IPCMain where

import Prelude
import Data.Argonaut (Json)
import Hby.Task (Task)
import Hby.Electron.Data (EventName, IpcMainEvent)

foreign import on :: EventName -> (IpcMainEvent -> Json -> Task Unit) -> Task Unit
