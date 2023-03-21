import { test, expect } from "@playwright/test";

test.describe("page", () => {
  test("check", async ({ page }) => {

    await page.goto(
      "https://example.com/",
    );
    await expect(page.locator('body')).toContainText("Example");
  });
});
