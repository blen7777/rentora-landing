# EQUITTY Deployment Guide

## Prerequisites Checklist

Before deploying, ensure you have:

- ✅ PostgreSQL database URL (from Supabase, Neon, or self-hosted)
- ✅ Resend API key for email functionality
- ✅ Domain name (optional, can use Vercel subdomain)
- ✅ Git repository (GitHub, GitLab, or Bitbucket)

---

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Push to Git

```bash
git init
git add .
git commit -m "Initial EQUITTY waitlist platform"
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js

### Step 3: Configure Environment Variables

In Vercel dashboard, add these variables:

```
DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

### Step 4: Deploy

Click "Deploy" and wait for build to complete (~2 minutes).

### Step 5: Setup Database

After first deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Run database setup
vercel env pull .env.local
npm run db:push
```

---

## Option 2: Deploy to VPS (Ubuntu/Debian)

### Server Requirements

- Ubuntu 20.04+ or Debian 11+
- Node.js 18+
- PostgreSQL 14+
- Nginx (for reverse proxy)
- PM2 (for process management)

### Step 1: Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx
```

### Step 2: Database Setup

```bash
# Create database and user
sudo -u postgres psql

CREATE DATABASE equitty_waitlist;
CREATE USER equitty_user WITH ENCRYPTED PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE equitty_waitlist TO equitty_user;
\q
```

### Step 3: Clone and Build Application

```bash
# Clone repository
git clone <your-repo-url> /var/www/equitty
cd /var/www/equitty

# Install dependencies
npm install

# Create .env file
nano .env
```

Add:
```
DATABASE_URL=postgresql://equitty_user:your_secure_password@localhost:5432/equitty_waitlist
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production
```

```bash
# Push database schema
npm run db:push

# Build application
npm run build
```

### Step 4: Configure PM2

```bash
# Create PM2 ecosystem file
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'equitty-waitlist',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/equitty',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Start application
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME
```

### Step 5: Configure Nginx

```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/equitty
```

Add:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/equitty /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### Step 6: Setup SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal is configured automatically
```

---

## Option 3: Deploy with Docker

### Step 1: Create Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Step 2: Create docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - RESEND_API_KEY=${RESEND_API_KEY}
      - NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
    depends_on:
      - db

  db:
    image: postgres:14-alpine
    environment:
      - POSTGRES_DB=equitty_waitlist
      - POSTGRES_USER=equitty_user
      - POSTGRES_PASSWORD=${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

### Step 3: Deploy

```bash
# Build and start
docker-compose up -d

# Run database migrations
docker-compose exec app npm run db:push
```

---

## Database Providers Comparison

### Supabase (Recommended for Beginners)

**Pros:**
- Free tier includes 500MB database
- Built-in dashboard
- Automatic backups
- Global CDN

**Setup:**
1. Create project at [supabase.com](https://supabase.com)
2. Go to Settings → Database
3. Copy "Connection string" (Transaction mode)
4. Use as `DATABASE_URL`

### Neon (Recommended for Scale)

**Pros:**
- Serverless PostgreSQL
- Auto-scaling
- Generous free tier (3GB)
- Instant branching

**Setup:**
1. Create project at [neon.tech](https://neon.tech)
2. Copy connection string
3. Use as `DATABASE_URL`

### Railway

**Pros:**
- Simple deployment
- Built-in PostgreSQL
- GitHub integration

**Setup:**
1. Create project at [railway.app](https://railway.app)
2. Add PostgreSQL service
3. Copy connection string

### Self-Hosted PostgreSQL

**Pros:**
- Full control
- No external dependencies
- No usage limits

**Cons:**
- Requires maintenance
- Manual backups
- Security management

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] Language toggle works (ES ↔ EN)
- [ ] Form submission succeeds
- [ ] Email is sent (check Resend dashboard)
- [ ] Success dashboard displays
- [ ] Referral link works
- [ ] Mobile responsive design
- [ ] SSL certificate is active
- [ ] Database connection is stable
- [ ] Rate limiting functions

---

## Monitoring Setup

### Vercel Analytics (Automatic)

Already included if deployed to Vercel.

### Custom Monitoring

Add to `app/layout.tsx`:

```typescript
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

---

## Backup Strategy

### Automated Database Backups

**Supabase/Neon:** Built-in daily backups

**Self-hosted:**
```bash
# Create backup script
cat > /usr/local/bin/backup-equitty-db.sh << 'EOF'
#!/bin/bash
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
pg_dump equitty_waitlist > /backups/equitty_$TIMESTAMP.sql
find /backups -name "equitty_*.sql" -mtime +7 -delete
EOF

chmod +x /usr/local/bin/backup-equitty-db.sh

# Add to cron (daily at 2 AM)
(crontab -l 2>/dev/null; echo "0 2 * * * /usr/local/bin/backup-equitty-db.sh") | crontab -
```

---

## Rollback Procedure

If deployment fails:

### Vercel
1. Go to Deployments
2. Click on previous working deployment
3. Click "Promote to Production"

### VPS
```bash
cd /var/www/equitty
git log --oneline  # Find working commit
git checkout <commit-hash>
npm install
npm run build
pm2 restart equitty-waitlist
```

---

## Troubleshooting

### Build Fails

**Error:** `MODULE_NOT_FOUND`
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Database Connection Fails

**Error:** `ECONNREFUSED`

Check:
1. Database is running
2. Connection string is correct
3. Firewall allows connection (port 5432)
4. SSL mode is correct (add `?sslmode=require` for cloud databases)

### Email Not Sending

1. Verify Resend API key is active
2. Check Resend dashboard for error logs
3. Ensure sender domain is verified
4. Check `from` address in `lib/email.ts`

---

## Scaling Considerations

### When to Scale

Monitor these metrics:
- Response time > 1 second
- CPU usage > 70% sustained
- Database connections > 80% of limit
- Memory usage > 80%

### Horizontal Scaling

**Vercel:** Automatic with Pro plan

**VPS:**
```bash
# Increase PM2 instances
pm2 scale equitty-waitlist +2

# Or set specific count
pm2 scale equitty-waitlist 4
```

### Database Scaling

- Upgrade to paid tier for more connections
- Enable connection pooling (Supabase: automatic, Neon: enable in dashboard)
- Consider read replicas for high traffic

---

## Security Hardening

### Production Checklist

- [ ] HTTPS enabled (SSL certificate)
- [ ] Database uses strong password
- [ ] Environment variables are secret
- [ ] Rate limiting is active
- [ ] CORS is configured (if needed)
- [ ] Security headers enabled
- [ ] Regular dependency updates

### Add Security Headers

In `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
  ];
},
```

---

## Support

For deployment assistance:
- Email: info@omegasolutions.sv
- WhatsApp: +503 7207 6611

**Built by OMEGA Solutions** 🚀
