module Hby.Electron.IpcMainEvent where

import Prelude
import Data.Argonaut (Json)
import Hby.Task (Task)
import Hby.Electron.Data (EventName, IpcMainEvent)

foreign import reply :: IpcMainEvent -> EventName -> Json -> Task Unit

foreign import setReturnValue :: IpcMainEvent -> Json -> Task Unit
