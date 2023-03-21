import { test, expect } from "@playwright/test";

test.describe("Wikipedia", () => {
  test("検索", async ({ page }, testInfo) => {

    await page.goto(
      "https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8"
    );
    await page.locator('[placeholder="Wikipedia内を検索"]').click();
    await page.locator('[placeholder="Wikipedia内を検索"]').fill("トカゲ");
    await page.locator('input:has-text("表示")').click();
    await expect(page).toHaveURL("https://ja.wikipedia.org/wiki/%E3%83%88%E3%82%AB%E3%82%B2");
    await page.locator('div[role="main"] a:has-text("爬虫類")').click();
    await expect(page).toHaveURL("https://ja.wikipedia.org/wiki/%E7%88%AC%E8%99%AB%E9%A1%9E");
    await page.locator('div[role="main"] >> text=昆虫').click();
    await expect(page).toHaveURL("https://ja.wikipedia.org/wiki/%E6%98%86%E8%99%AB");
  });
});
