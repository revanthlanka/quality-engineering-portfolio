@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed.
  echo Install Node.js 20 or newer, then run this file again.
  pause
  exit /b 1
)
if not exist "node_modules" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo.
    echo Dependency installation failed. The error above is the useful part.
    pause
    exit /b 1
  )
)
echo.
echo Starting portfolio...
call npm run dev
pause
