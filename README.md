# Konfigurasi CI/CD untuk Frontend dan Backend

Ini adalah konfigurasi CI/CD untuk aplikasi frontend React dan backend Elysia.js menggunakan GitHub Actions dengan berbagai opsi deployment.

## Opsi Deployment Frontend

### 1. GitHub Pages (frontend-deploy.yml)

Workflow ini akan men-deploy aplikasi ke GitHub Pages setiap kali ada push ke branch `main` yang mengubah file di luar direktori `backend/`.

Langkah-langkah yang dilakukan:
- Checkout kode
- Setup Node.js 18
- Install dependencies dengan `npm ci`
- Build aplikasi dengan `npm run build`
- Deploy hasil build ke branch `gh-pages`

### 2. Netlify Deployment (netlify-deploy.yml)

Workflow ini akan men-deploy aplikasi ke Netlify setiap kali ada push ke branch `main` yang mengubah file di luar direktori `backend/`.

Langkah-langkah yang dilakukan:
- Checkout kode
- Setup Node.js 18
- Install dependencies dengan `npm ci`
- Build aplikasi dengan `npm run build`
- Deploy hasil build ke Netlify

### 3. Vercel Deployment

Aplikasi dikonfigurasi untuk deployment ke Vercel menggunakan file `vercel.json`. Vercel akan otomatis mendeteksi perubahan di repository dan men-deploy aplikasi.

Konfigurasi utama:
- Build output directory: `dist`
- Routing untuk API dan SPA
- Environment variables yang diperlukan

### 4. Docker VPS Deployment (docker-deploy.yml)

Workflow ini akan membangun dan men-push Docker image ke DockerHub setiap kali ada push ke branch `main` yang mengubah file di luar direktori `backend/`.

Langkah-langkah yang dilakukan:
- Checkout kode
- Setup Docker Buildx
- Login ke DockerHub
- Build dan push Docker image dengan tag latest dan SHA commit

### 5. Static Site VPS di /var/www/ (vps-deploy.yml)

Workflow ini akan men-deploy aplikasi ke VPS sebagai static site di direktori `/var/www/html/` setiap kali ada push ke branch `main`.

Langkah-langkah yang dilakukan:
- Checkout kode
- Setup Node.js 18
- Install dependencies dan build
- Upload hasil build ke VPS menggunakan SCP
- Menjalankan perintah deployment di VPS melalui SSH

Alternatif manual menggunakan script `deploy-vps.sh`.

## Opsi Deployment Backend

### 1. Docker VPS Deployment (backend-docker-deploy.yml)

Workflow ini akan men-deploy backend ke VPS menggunakan Docker setiap kali ada push ke branch `main` yang mengubah file di direktori `backend/`.

Langkah-langkah yang dilakukan:
- Checkout kode
- Build dan push Docker image ke DockerHub
- Deploy ke VPS menggunakan SSH dan docker-compose

## Konfigurasi yang Diperlukan

### Untuk GitHub Pages

Tidak diperlukan konfigurasi tambahan selain mengaktifkan GitHub Pages di repository settings.

### Untuk Netlify Deployment

Tambahkan secrets berikut di repository GitHub:
- `NETLIFY_AUTH_TOKEN`: Token autentikasi Netlify
- `NETLIFY_SITE_ID`: ID situs Netlify

### Untuk Vercel Deployment

Hubungkan repository dengan Vercel dan tambahkan environment variable berikut:
- `VITE_API_URL`: URL API backend

### Untuk Docker Deployment (Frontend dan Backend)

Tambahkan secrets berikut di repository GitHub:
- `DOCKERHUB_USERNAME`: Username DockerHub
- `DOCKERHUB_TOKEN`: Token autentikasi DockerHub

### Untuk VPS Deployment (Static Site dan Docker)

Tambahkan secrets berikut di repository GitHub:
- `VPS_HOST`: Hostname atau IP VPS
- `VPS_USERNAME`: Username untuk SSH ke VPS
- `VPS_SSH_KEY`: Private key untuk SSH ke VPS
- `VPS_PORT`: Port SSH (biasanya 22)

## Cara Menggunakan

### GitHub Actions

1. Push kode ke repository GitHub
2. GitHub Actions akan otomatis menjalankan workflow yang sesuai
3. Cek tab "Actions" di repository GitHub untuk melihat status workflow

### Docker Lokal

Untuk menjalankan aplikasi frontend menggunakan Docker secara lokal:

```bash
# Build dan jalankan dengan docker-compose
docker-compose up --build

# Atau build dan jalankan hanya frontend
docker build -t frontend .
docker run -p 80:80 frontend
```

Untuk menjalankan backend menggunakan Docker secara lokal:

```bash
# Masuk ke direktori backend
cd backend

# Build dan jalankan dengan docker-compose
docker-compose up --build

# Atau build dan jalankan hanya backend
docker build -t backend .
docker run -p 3000:3000 backend
```

### Deployment Manual ke VPS Static Site

1. Edit file `deploy-vps.sh` dan sesuaikan variabel konfigurasi
2. Berikan izin eksekusi: `chmod +x deploy-vps.sh`
3. Jalankan script: `./deploy-vps.sh`