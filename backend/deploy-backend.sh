#!/bin/bash

# Script untuk deployment backend ke VPS Docker

# Variabel konfigurasi
VPS_USER="username"  # Ganti dengan username VPS Anda
VPS_HOST="your-vps-ip"  # Ganti dengan IP atau hostname VPS Anda
DOCKER_IMAGE="yourusername/backend:latest"  # Ganti dengan nama image Docker Anda
CONTAINER_NAME="backend-app"
NGINX_CONF_PATH="./nginx.conf"
ENV_FILE=".env.production"

# Periksa apakah file konfigurasi ada
if [ ! -f "$NGINX_CONF_PATH" ]; then
    echo "Error: File konfigurasi nginx tidak ditemukan di $NGINX_CONF_PATH"
    exit 1
 fi

if [ ! -f "$ENV_FILE" ]; then
    echo "Warning: File .env.production tidak ditemukan. Pastikan variabel lingkungan sudah dikonfigurasi di VPS atau Docker."
    read -p "Lanjutkan deployment? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Salin file konfigurasi nginx ke VPS
echo "Menyalin file konfigurasi nginx ke VPS..."
scp "$NGINX_CONF_PATH" "$VPS_USER@$VPS_HOST:/tmp/backend-nginx.conf"

# Salin file .env jika ada
if [ -f "$ENV_FILE" ]; then
    echo "Menyalin file .env.production ke VPS..."
    scp "$ENV_FILE" "$VPS_USER@$VPS_HOST:/tmp/.env.production"
fi

# Jalankan perintah deployment di VPS
echo "Menjalankan deployment di VPS..."
ssh "$VPS_USER@$VPS_HOST" << 'EOF'
    # Buat direktori untuk konfigurasi jika belum ada
    mkdir -p ~/backend-config
    
    # Pindahkan file konfigurasi
    if [ -f /tmp/backend-nginx.conf ]; then
        mv /tmp/backend-nginx.conf ~/backend-config/nginx.conf
    fi
    
    if [ -f /tmp/.env.production ]; then
        mv /tmp/.env.production ~/backend-config/.env
    fi
    
    # Pull image Docker terbaru
    echo "Pulling latest Docker image..."
    docker pull $DOCKER_IMAGE
    
    # Hentikan dan hapus container lama jika ada
    echo "Stopping and removing old container if exists..."
    docker stop $CONTAINER_NAME 2>/dev/null || true
    docker rm $CONTAINER_NAME 2>/dev/null || true
    
    # Jalankan container baru
    echo "Starting new container..."
    docker run -d \
        --name $CONTAINER_NAME \
        --restart always \
        -p 3000:3000 \
        -v ~/backend-config/.env:/app/.env \
        -v ~/backend-logs:/app/logs \
        --network backend-network \
        $DOCKER_IMAGE
    
    # Konfigurasi nginx jika belum ada
    if [ ! -f /etc/nginx/sites-available/backend ]; then
        echo "Configuring nginx..."
        sudo cp ~/backend-config/nginx.conf /etc/nginx/sites-available/backend
        sudo ln -sf /etc/nginx/sites-available/backend /etc/nginx/sites-enabled/
        sudo nginx -t && sudo systemctl reload nginx
    else
        # Update konfigurasi nginx jika sudah ada
        echo "Updating nginx configuration..."
        sudo cp ~/backend-config/nginx.conf /etc/nginx/sites-available/backend
        sudo nginx -t && sudo systemctl reload nginx
    fi
    
    # Buat direktori untuk logs jika belum ada
    mkdir -p ~/backend-logs
    
    # Tampilkan status container
    echo "Container status:"
    docker ps | grep $CONTAINER_NAME
EOF

echo "Deployment selesai!"