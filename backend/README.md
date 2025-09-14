# Kanata Bot Backend API

Backend API untuk website Kanata Bot menggunakan Elysia.js dan Bun.

## Persyaratan

- [Bun](https://bun.sh/) (runtime JavaScript/TypeScript)

## Instalasi

```bash
# Instal dependensi
bun install
```

## Menjalankan Aplikasi

```bash
# Mode development dengan hot reload
bun run dev

# Build untuk production
bun run build

# Menjalankan versi production
bun run start
```

## Struktur API

API ini menyediakan endpoint untuk:

### Team

- `GET /api/team` - Mendapatkan semua anggota tim
- `GET /api/team/:id` - Mendapatkan anggota tim berdasarkan ID

### Features

- `GET /api/features` - Mendapatkan semua fitur
- `GET /api/features/:id` - Mendapatkan fitur berdasarkan ID

### Contact

- `GET /api/contact` - Mendapatkan semua pesan kontak
- `POST /api/contact` - Membuat pesan kontak baru
- `GET /api/contact/:id` - Mendapatkan pesan kontak berdasarkan ID

## Dokumentasi API

Dokumentasi API tersedia melalui Swagger UI di `/swagger` setelah server berjalan.