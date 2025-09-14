# Gunakan image Bun resmi
FROM oven/bun:1 as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build aplikasi jika diperlukan
# RUN bun run build

# Stage produksi
FROM oven/bun:1-slim

WORKDIR /app

# Copy dari builder stage
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/src /app/src
COPY --from=builder /app/tsconfig.json /app/tsconfig.json

# Expose port yang digunakan aplikasi
EXPOSE 3000

# Command untuk menjalankan aplikasi
CMD ["bun", "run", "src/index.ts"]