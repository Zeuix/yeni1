/**
 * Zeuix Geliştirici Script Dosyası
 * Bu dosyada Zeuix'e ait iş mantığı ve geliştirmeler yer alır.
 * Diğer script'lerden bağımsızdır.
 */

const zeuixModule = {
  name: 'Zeuix Module',

  /**
   * Modül başlatma fonksiyonu. Base script tarafından çağrılır.
   */
  init() {
    console.log('[Zeuix] Modül başarıyla yüklendi ve başlatıldı.');
    // Geliştirmeler ve işlevler buraya eklenecektir
    this.helloWorld();
    return true;
  },

  /**
   * Örnek bir işlev
   */
  helloWorld() {
    console.log('[Zeuix] Merhaba Dünya! Modüler script mimarisi çalışıyor.');
  },
};

module.exports = zeuixModule;
