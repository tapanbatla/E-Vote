#!/bin/bash

# Download Go 1.19 for Linux AMD64
wget https://go.dev/dl/go1.19.linux-amd64.tar.gz

# Extract the archive to /usr/local
sudo tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz

# Add Go binary directory to PATH
export PATH=$PATH:/usr/local/go/bin

# Verify Go installation
go version

echo "Go 1.19 installed successfully."