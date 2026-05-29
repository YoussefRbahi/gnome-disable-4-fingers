#!/bin/bash
set -e

echo "[*] Building GNOME extension archive..."
cd src
zip -r ../disable-4-fingers.zip ./*
cd ..
echo "[*] Success! Ready to upload: disable-4-fingers.zip"
