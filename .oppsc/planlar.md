# yeni1 — Altyapı Planı

Bu doküman, `yeni1` projesinin OPPSC ortak altyapısı üzerine nasıl kurulduğunu ve henüz netleşmemiş kararları takip eder.

## 1. Amaç ve Kapsam
- [ ] Proje adı ve kısa açıklaması netleştirilecek (şu an sadece `yeni1` klasör adı var, uygulama konusu belirsiz)
- [ ] Hedef platform(lar): web / mobil / masaüstü / CLI
- [ ] Roller: kim hangi modülden sorumlu
- [ ] İletişim kanalı

## 2. OPPSC'den Devralınan Altyapı
- Modüler Script Mimarisi (`scripts/base.js` + `scripts/zeuix.js` + `scripts/emir.js`) — bkz. `CONTRIBUTING.md`
- Lint/format: ESLint (`eslint.config.js`) + Prettier (`.prettierrc`) + `.editorconfig`
- Test: Vitest (`scripts/base.test.js` örnek testleri içerir)
- Git hook'ları: Husky ile `pre-commit` (lint) ve `pre-push` (main/dev'e direkt push engeli + lint & test)
- CI: `.github/workflows/ci.yml` (checkout → npm ci → lint → test → build)
- `.env.example` ile ortam değişkeni şablonu
- Branch stratejisi ve PR süreci: `CONTRIBUTING.md`

## 3. Sonraki Adımlar
- [ ] Uygulamanın konusu/kapsamı belirlenince bu dosya ve `README.md` güncellenmeli
- [ ] Gerekirse OPPSC'deki gibi ayrı bir GitHub reposuna taşınabilir (deprem projesinde yapıldığı gibi)
- [ ] `npm install` çalıştırılıp husky hook'larının aktif olduğu doğrulanmalı
- [ ] İlk `npm test` ve `npm run lint` ile altyapının sorunsuz çalıştığı teyit edilmeli
