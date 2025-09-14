#!/bin/bash

# Script untuk deployment ke VPS static site di /var/www/

# Variabel konfigurasi
VPS_USER="username"
VPS_HOST="your-vps-host.com"
VPS_PORT="22"
VPS_PATH="/var/www/html"
BUILD_DIR="./dist"

# Warna untuk output
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
RED="\033[0;31m"
NC="\033[0m" # No Color

# Fungsi untuk menampilkan pesan
function log() {
  echo -e "${GREEN}[INFO]${NC} $1"
}

function warn() {
  echo -e "${YELLOW}[WARNING]${NC} $1"
}

function error() {
  echo -e "${RED}[ERROR]${NC} $1"
  exit 1
}

# Cek apakah build directory ada
if [ ! -d "$BUILD_DIR" ]; then
  error "Build directory tidak ditemukan. Jalankan 'npm run build' terlebih dahulu."
fi

# Build aplikasi
log "Memulai proses build..."
npm run build || error "Gagal melakukan build aplikasi."
log "Build selesai."

# Kompres hasil build
log "Mengompres hasil build..."
tar -czf dist.tar.gz -C $BUILD_DIR . || error "Gagal mengompres hasil build."
log "Kompresi selesai."

# Upload ke VPS
log "Mengupload ke VPS..."
scp -P $VPS_PORT dist.tar.gz $VPS_USER@$VPS_HOST:/tmp/ || error "Gagal mengupload file ke VPS."
log "Upload selesai."

# Deploy ke direktori /var/www/
log "Menjalankan deployment di VPS..."
ssh -p $VPS_PORT $VPS_USER@$VPS_HOST "sudo rm -rf $VPS_PATH/* && \
                                     sudo mkdir -p $VPS_PATH && \
                                     sudo tar -xzf /tmp/dist.tar.gz -C $VPS_PATH && \
                                     sudo chown -R www-data:www-data $VPS_PATH && \
                                     sudo chmod -R 755 $VPS_PATH && \
                                     sudo rm /tmp/dist.tar.gz" || error "Gagal melakukan deployment di VPS."

# Hapus file tar.gz lokal
rm dist.tar.gz

log "Deployment ke VPS selesai! Aplikasi sekarang tersedia di $VPS_HOST"