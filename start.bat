@echo off
REM Startet CMD-Fenster 1: Navigiert zum Frontend und startet den http-server
start cmd /k "cd /d kiosk-frontend/browser && http-server --port 4200"

REM Startet CMD-Fenster 2: Navigiert zum Backend (Websocket) und startet den Node-Server
start cmd /k "cd /d kiosk-backend/websocket && node server.js"

REM Startet CMD-Fenster 3: Navigiert zum Pocketbase-Ordner und startet Pocketbase
start cmd /k "cd /d kiosk-backend/pocketbase && .\pocketbase.exe serve --http 0.0.0.0:8090"
