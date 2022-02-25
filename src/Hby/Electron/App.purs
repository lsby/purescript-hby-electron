module Hby.Electron.App where

import Prelude
import Hby.Task (Task)

foreign import onActivate :: Task Unit -> Task Unit

foreign import onWindowAllClosed :: Task Unit -> Task Unit

foreign import quit :: Task Unit

foreign import whenReady :: Task Unit
