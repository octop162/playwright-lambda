const { devices } = require("@playwright/test");
const config = {
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 10000,
  },
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: [['html', { outputFolder: '/tmp/report' }]],
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          args: [
            '--autoplay-policy=user-gesture-required',
            '--disable-background-networking',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-breakpad',
            '--disable-client-side-phishing-detection',
            '--disable-component-update',
            '--disable-default-apps',
            '--disable-dev-shm-usage',
            '--disable-domain-reliability',
            '--disable-extensions',
            '--disable-features=AudioServiceOutOfProcess',
            '--disable-hang-monitor',
            '--disable-ipc-flooding-protection',
            '--disable-notifications',
            '--disable-offer-store-unmasked-wallet-cards',
            '--disable-popup-blocking',
            '--disable-print-preview',
            '--disable-prompt-on-repost',
            '--disable-renderer-backgrounding',
            '--disable-setuid-sandbox',
            '--disable-speech-api',
            '--disable-sync',
            '--disk-cache-size=33554432',
            '--hide-scrollbars',
            '--ignore-gpu-blacklist',
            '--metrics-recording-only',
            '--mute-audio',
            '--no-default-browser-check',
            '--no-first-run',
            '--no-pings',
            '--no-sandbox',
            '--no-zygote',
            '--password-store=basic',
            '--use-gl=swiftshader',
            '--use-mock-keychain',
            '--single-process'
          ]
        }
      },
    },
  ],

  outputDir: "/tmp/test-results/",
};
module.exports = config;
