module Hby.Electron.WebContents where

import Prelude
import Hby.Task (Task)
import Hby.Electron.Data (WebContents)

foreign import openDevTools :: WebContents -> Task Unit
