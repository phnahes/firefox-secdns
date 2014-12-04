#!/bin/bash

DEST_DIR="/opt/secdns"
DEST_BIN_DIR="$DEST_DIR/bin"
INIT_FILE="/etc/init.d/secdns"

echo "Creating directories..."
mkdir -p $DEST_DIR
mkdir -p $DEST_DIR_BIN

echo "Coping files..."
cp extras/secdns.py $DEST_BIN_DIR
cp extras/secdns.init $INIT_FILE

echo "Installing add-on..."
$(which firefox) secdns.xpi &

echo "End..."
