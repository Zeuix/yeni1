/**
 * Base Script Dosyası (scripts/base.js)
 * Modüler Script Mimarisi'nin giriş noktasıdır.
 * İş mantığı barındırmaz, sadece kullanıcı script'lerini bağlar ve doğrular.
 */

const fs = require('fs');
const path = require('path');

// Kullanıcı script'lerinin yolları
const userScripts = {
  zeuix: path.join(__dirname, 'zeuix.js'),
  emir: path.join(__dirname, 'emir.js'),
};

/**
 * Token harcamayan otomatik kod hatası algılama mekanizması.
 * Script'lerin varlığını, sözdizimini (syntax) ve temel arayüzünü kontrol eder.
 */
function validateScript(name, filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(
      `\x1b[31m[Antigravity/Claude Code] Burda bir kod yazılım hatası olmuş: ${name} script dosyası bulunamadı!\x1b[0m`
    );
    return null;
  }

  try {
    // Modülü yüklemeyi dene (require, syntax ve runtime yükleme hatalarını yakalar)
    const moduleInstance = require(filePath);

    // Temel arayüz kontrolü
    if (!moduleInstance || typeof moduleInstance !== 'object') {
      throw new Error(`Modül geçerli bir obje export etmelidir.`);
    }

    if (typeof moduleInstance.init !== 'function') {
      throw new Error(`Modülde 'init()' başlatma fonksiyonu bulunmalıdır.`);
    }

    return moduleInstance;
  } catch (error) {
    console.error(
      `\x1b[31m[Antigravity/Claude Code] Burda bir kod yazılım hatası olmuş (${name}): ${error.message}\x1b[0m`
    );
    if (error.stack) {
      // Hatanın detayını ve satır numarasını göstererek token harcamadan hızlı hata tespiti sağlarız
      console.error(error.stack);
    }
    return null;
  }
}

function run() {
  console.log('=========================================');
  console.log('Modüler Script Sistemi Başlatılıyor...');
  console.log('=========================================');

  let hasError = false;
  const loadedModules = {};

  // Tüm kullanıcı script'lerini doğrula
  for (const [name, filePath] of Object.entries(userScripts)) {
    const mod = validateScript(name, filePath);
    if (!mod) {
      hasError = true;
    } else {
      loadedModules[name] = mod;
    }
  }

  if (hasError) {
    console.error(
      '\n\x1b[31m[Antigravity/Claude Code] HATA: Doğrulama başarısız oldu. Lütfen yukarıdaki hataları düzeltin.\x1b[0m'
    );
    process.exit(1);
  }

  console.log("\n\x1b[32m[Antigravity/Claude Code] Tüm script'ler başarıyla doğrulandı.\x1b[0m\n");
  console.log('=== Alt Uygulama İşlevleri Çalıştırılıyor ===');

  // Modülleri başlat ve çalıştır
  for (const [name, mod] of Object.entries(loadedModules)) {
    try {
      console.log(`[Base] Modül başlatılıyor: ${mod.name || name}...`);
      mod.init();
    } catch (runError) {
      console.error(
        `\x1b[31m[Antigravity/Claude Code] Modül çalışma hatası (${name}): ${runError.message}\x1b[0m`
      );
      process.exit(1);
    }
  }

  console.log('=========================================');
  console.log('Sistem başarıyla tamamlandı.');
  console.log('=========================================');
}

// Doğrudan çalıştırıldığında ana fonksiyonu koştur
if (require.main === module) {
  run();
}

module.exports = {
  userScripts,
  validateScript,
  run,
};
