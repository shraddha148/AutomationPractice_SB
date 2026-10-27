// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: 'html',

  // Test timeout: 60 seconds
  timeout: 600000,

  use: {
    headless: false,
    actionTimeout: 600000,
  },

  // Run only in Chromium
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});