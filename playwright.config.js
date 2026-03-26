const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  use: { headless: true, baseURL: 'https://example.com' }
});