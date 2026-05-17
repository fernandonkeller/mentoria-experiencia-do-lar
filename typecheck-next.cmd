@echo off
setlocal
cd /d "%~dp0"
"C:\Program Files\nodejs\node.exe" ".\node_modules\typescript\bin\tsc" --noEmit
