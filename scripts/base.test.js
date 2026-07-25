import { describe, it, expect } from 'vitest';
const path = require('path');
const { validateScript } = require('./base');

describe('Modüler Script Doğrulama Testleri', () => {
  it('Geçerli bir scripti başarıyla doğrulamalıdır (zeuix.js)', () => {
    const filePath = path.join(__dirname, 'zeuix.js');
    const mod = validateScript('zeuix', filePath);
    expect(mod).toBeDefined();
    expect(mod.name).toBe('Zeuix Module');
    expect(typeof mod.init).toBe('function');
  });

  it('Geçerli bir scripti başarıyla doğrulamalıdır (emir.js)', () => {
    const filePath = path.join(__dirname, 'emir.js');
    const mod = validateScript('emir', filePath);
    expect(mod).toBeDefined();
    expect(mod.name).toBe('Emir Module');
    expect(typeof mod.init).toBe('function');
  });

  it('Var olmayan bir dosya için null dönmelidir', () => {
    const filePath = path.join(__dirname, 'nonexistent.js');
    const mod = validateScript('nonexistent', filePath);
    expect(mod).toBeNull();
  });
});
