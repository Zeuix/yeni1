# yeni1

## Proje Hakkında
Bu repo, OPPSC ortak altyapısı temel alınarak oluşturulmuş yeni bir proje şablonudur. Uygulamanın konusu henüz netleşmedi — bkz. `.oppsc/planlar.md`.

## Kurulum

### Gereksinimler
- Git
- Node.js (OPPSC ile aynı sürüm — CI'da Node 20 kullanılıyor)

### Adımlar
```bash
git clone <repo-url>
cd yeni1
npm install
```

### Ortam Değişkenleri
`.env.example` dosyasını `.env` olarak kopyalayıp kendi değerlerinizle doldurun:
```bash
cp .env.example .env
```

## Geliştirme
- Branch stratejisi: `main` (stabil) / `dev` (geliştirme) / `feature/*` (özellikler)
- Değişiklikler PR üzerinden gönderilir, doğrudan `main`'e push yapılmaz
- Katkı kuralları için `CONTRIBUTING.md` dosyasına bakın

## Test
```bash
npm test
npm run lint
```

## Lisans
Belirlenecek.
