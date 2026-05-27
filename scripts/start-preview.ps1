$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root
$ErrorActionPreference = "Continue"
& "C:\Users\oscar\AppData\Local\Programs\nodejs\node-v24.15.0-win-x64\node.exe" "node_modules\vite\bin\vite.js" preview --host 127.0.0.1 --port 5173 --config vite.config.js --configLoader runner *> (Join-Path $Root "preview.log")
