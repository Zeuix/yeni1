# Katkı Rehberi

Bu proje, OPPSC altyapısını kullanan iki kişilik bir ekip tarafından geliştirilmektedir. Aşağıdaki kurallar tutarlılığı korumak için uygulanır.

## Branch Stratejisi
- `main`: her zaman stabil ve deploy edilebilir durumda
- `dev`: aktif geliştirme dalı
- `feature/<kisa-aciklama>`: her yeni özellik/iş için ayrı dal
- Antigravity/Claude agent'larının açtığı dallar `agent/<kisa-aciklama>` şeklinde isimlendirilir

## Commit Mesajları
- Kısa, açıklayıcı, imperative (`Add user login`, `Fix null check in parser`)
- İlgili issue varsa referans verin: `Fix login bug (#12)`

## Pull Request Süreci
1. Değişikliğinizi kendi branch'inizde yapın, **asla `main` veya `dev`'e doğrudan commit/push yapmayın**
2. PR açarken kısa bir açıklama ve varsa ilgili issue linki ekleyin
3. En az 1 kişi (diğer geliştirici) review yapmadan merge edilmez
4. CI kontrolleri (lint + test) geçmeden merge edilmez
5. Merge sonrası branch silinir

## Kod Standartları
- Ortak linter/formatter ayarlarına uyun (`.editorconfig` ve ilgili config dosyaları)
- Yeni özellikler için mümkün olduğunca test ekleyin

## AI/Agent Üretimi Kod (Antigravity/Claude Code)
- Agent tarafından üretilen kod da normal PR süreci ve review'dan geçer, otomatik güvenilir kabul edilmez
- Production'ı etkileyen (deploy, migration, silme vb.) işlemler agent'a otomatik onay verilmeden, mutlaka manuel gözden geçirilir
- Agent görevleri küçük ve net kapsamlı tutulmalı (tek bir PR'lık iş)

## Modüler Script Mimarisi (Base + Kullanıcı Script'leri)
OPPSC'den miras alınan yapı bu projede de kullanılır:

- **Base script dosyası** (`scripts/base.js`): Tüm kullanıcı script'lerini içine bağlayan/tanımlayan tek merkezi dosya. Kendi başına iş mantığı barındırmaz, sadece kullanıcı script'lerini import/register eder.
- **Kullanıcı script dosyaları**: Her geliştirici kendine ait ayrı bir script dosyasında çalışır (`zeuix.js`, `emir.js`). Bir kullanıcının kendi dosyasında yaptığı değişiklik, diğer kullanıcının script dosyasını etkilemez.
- **Bağlama kuralı**: Bir kullanıcı kendi script'ini base dosyasına yeni tanımlarken, bu değişiklik çift taraflı kontrol edilir — diğer kullanıcının da onaylaması gerekir. Base dosyaya dokunan her değişiklik normal PR sürecinden geçer, tek taraflı merge edilmez.

## Hassas Bilgiler
- `.env`, API anahtarları, şifreler asla commit edilmez
- Yeni bir ortam değişkeni eklerseniz `.env.example` dosyasını da güncelleyin

## İletişim
- Büyük mimari kararlar önce bir issue içinde tartışılır, sonra uygulanır
- Belirsiz durumlarda kod yazmadan önce sorun
