# EQUITTY Waitlist Platform - Quick Start Guide

## 🎯 What You Have

A **production-ready** Next.js waitlist platform with:
- ✅ Full source code (no vendor lock-in)
- ✅ PostgreSQL database schema
- ✅ Email integration (Resend)
- ✅ Referral system
- ✅ Bilingual support (EN/ES)
- ✅ Security features (rate limiting, anti-bot)
- ✅ Mobile-responsive design
- ✅ Comprehensive documentation

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies

```bash
cd /app
npm install
```

### Step 2: Get Your Database

**Option A: Supabase (Easiest)**
1. Go to https://supabase.com
2. Create free account
3. Click "New Project"
4. Copy the connection string from Settings → Database

**Option B: Neon**
1. Go to https://neon.tech
2. Sign up (free)
3. Create project
4. Copy connection string

### Step 3: Get Email API Key

1. Go to https://resend.com
2. Sign up (free tier: 100 emails/day)
3. Verify your domain OR use test mode
4. Copy API key from dashboard

### Step 4: Configure Environment

Create `.env` file:

```env
DATABASE_URL=postgresql://[YOUR_DB_STRING]
RESEND_API_KEY=re_[YOUR_KEY]
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Step 5: Setup Database

```bash
npm run db:push
```

### Step 6: Run Application

```bash
npm run dev
```

Open http://localhost:3000 🎉

---

## 📋 Testing Checklist

Try these features:

1. **Form Submission**
   - Fill email + nationality
   - Click "Reserve your spot"
   - See success dashboard

2. **Referral System**
   - Copy referral link from success page
   - Open in incognito window
   - Submit another email
   - Check database: should show `referred_by`

3. **Language Toggle**
   - Click ES/EN toggle in navbar
   - Page content should change

4. **Rate Limiting**
   - Try submitting same email 6 times
   - Should show error after 5 attempts

5. **Email Delivery**
   - Check your inbox (or Resend logs)
   - Should receive welcome email

---

## 🔍 Database Inspection

### Using Drizzle Studio (Built-in)

```bash
npm run db:studio
```

Opens visual database browser at http://localhost:4983

### Using TablePlus/DBeaver

Connection details:
- Host: [from your DATABASE_URL]
- Port: 5432
- Database: [your database name]
- User: [from your DATABASE_URL]
- Password: [from your DATABASE_URL]

---

## 📊 Understanding Your Data

### Users Table Structure

```sql
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;
```

Each user has:
- `email` - Unique email address
- `nationality` - Selected country
- `referral_code` - Their unique 8-char code
- `referred_by` - Who referred them (if any)
- `position` - Their spot in line
- `created_at` - When they joined

### Useful Queries

**Total signups:**
```sql
SELECT COUNT(*) FROM users;
```

**Referral leaderboard:**
```sql
SELECT referred_by, COUNT(*) as referrals 
FROM users 
WHERE referred_by IS NOT NULL 
GROUP BY referred_by 
ORDER BY referrals DESC 
LIMIT 10;
```

**Nationality distribution:**
```sql
SELECT nationality, COUNT(*) as count 
FROM users 
GROUP BY nationality 
ORDER BY count DESC;
```

**Recent signups:**
```sql
SELECT email, nationality, position, created_at 
FROM users 
ORDER BY created_at DESC 
LIMIT 20;
```

---

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  brand: {
    blue: '#YOUR_BLUE',
    cyan: '#YOUR_CYAN',
    // ... etc
  }
}
```

### Modify Content

All text is in `lib/translations.ts`:

```typescript
export const translations = {
  en: {
    hero_title: 'Your New Title Here',
    // ...
  },
  es: {
    hero_title: 'Tu Nuevo Título Aquí',
    // ...
  }
}
```

### Add FAQ Questions

Edit `components/FAQ.tsx`:

```typescript
const faqs = [
  { id: 'faq1', q: 'faq1_q', a: 'faq1_a' },
  { id: 'faq4', q: 'faq4_q', a: 'faq4_a' }, // NEW
];
```

Then add translations in `lib/translations.ts`.

### Change Email Template

Edit `lib/email.ts` - `sendWelcomeEmail()` function.

---

## 🚀 Deploy to Production

### Easiest: Vercel

1. Push code to GitHub
2. Go to https://vercel.com
3. Import repository
4. Add environment variables
5. Deploy (automatic)

Full guide: See `DEPLOYMENT.md`

### Alternative: VPS

See `DEPLOYMENT.md` for complete instructions.

---

## 📈 Growth Strategy

### Phase 1: Launch (Week 1)
- Share on social media
- Email to existing contacts
- Post in relevant communities

### Phase 2: Viral Growth (Week 2-4)
- Top referrers get rewards
- Leaderboard on website
- Share milestones (1K, 5K, 10K users)

### Phase 3: Engagement (Ongoing)
- Send weekly updates
- Share platform progress
- Build anticipation for launch

---

## 🔒 Security Best Practices

### Before Going Live

1. **Change default secrets**
   - Generate strong database password
   - Rotate API keys if shared

2. **Enable HTTPS**
   - Vercel: Automatic
   - VPS: Use Let's Encrypt (see DEPLOYMENT.md)

3. **Monitor logs**
   - Check Resend dashboard for bounces
   - Review signup patterns for anomalies

4. **Backup database**
   - Supabase/Neon: Automatic
   - VPS: Setup cron job (see DEPLOYMENT.md)

---

## 🐛 Common Issues & Solutions

### Issue: "Module not found" error

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Database connection fails

**Checklist:**
- [ ] Is DATABASE_URL correct?
- [ ] Does it include `?sslmode=require`?
- [ ] Is database accessible from your location?
- [ ] Try connection with TablePlus/DBeaver first

### Issue: Emails not sending

**Checklist:**
- [ ] Is RESEND_API_KEY set?
- [ ] Is key active (check Resend dashboard)?
- [ ] Check console logs for "MOCK EMAIL" (means key not set)
- [ ] Verify sender email in `lib/email.ts`

### Issue: Form submission fails

**Check:**
1. Browser console for errors (F12)
2. Network tab for API response
3. Server logs: `npm run dev` output

---

## 📞 Support & Questions

### Documentation
- `README.md` - Complete technical documentation
- `DEPLOYMENT.md` - Deployment guide for all platforms
- This file - Quick start guide

### Get Help
- Email: info@omegasolutions.sv
- WhatsApp: +503 7207 6611
- Instagram: @omegasolutions.sv

### Developer Notes

Everything is **open source** and **fully yours**:
- Modify any code
- Deploy anywhere
- No licensing restrictions
- Full database access
- No hidden dependencies

---

## 🎓 Next Steps

### Immediate (Day 1)
1. ✅ Test all features locally
2. ✅ Setup production database
3. ✅ Get Resend API key
4. ✅ Deploy to Vercel/VPS

### Short-term (Week 1)
1. Customize colors/content
2. Add custom domain
3. Setup analytics (Google Analytics)
4. Announce launch

### Long-term (Month 1+)
1. Monitor growth metrics
2. Analyze referral effectiveness
3. A/B test copy variants
4. Prepare for platform launch

---

## 💡 Pro Tips

### Maximize Signups
- Add urgency ("First 1000 get bonus")
- Social proof ("5000+ already joined")
- Clear value proposition
- Minimal form fields

### Viral Growth
- Make referral link prominent
- Reward top referrers publicly
- Gamify the experience (leaderboards)
- Share milestones on social media

### Data Analysis
- Track conversion rate (visits → signups)
- Monitor referral effectiveness
- Analyze peak signup times
- Geographic distribution insights

---

## ✅ Pre-Launch Checklist

Before announcing to public:

- [ ] All features tested
- [ ] Database is production-ready
- [ ] HTTPS enabled
- [ ] Custom domain configured (optional)
- [ ] Email deliverability verified
- [ ] Mobile design checked
- [ ] Analytics installed
- [ ] Social media posts prepared
- [ ] Error monitoring setup (Sentry)
- [ ] Backup strategy implemented

---

## 🎉 You're Ready!

Your EQUITTY waitlist platform is:
- ✅ Secure
- ✅ Scalable
- ✅ Professional
- ✅ Production-ready

**Time to launch!** 🚀

---

**Built with ❤️ by OMEGA Solutions**

*Questions? We're here to help: info@omegasolutions.sv*
