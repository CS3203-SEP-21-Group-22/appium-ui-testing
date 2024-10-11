describe("User Login Test", () => {
  it("should login with valid credentials", async () => {
    var el1, el2, el3, el4, el5, el6;
    var iterations = 0;
    while (true) {
      el1 = await driver.$(
        '-android uiautomator:new UiSelector().text("Sign In with Institution Account")'
      );
      await browser.pause(10000);
      const existing1 = await el1.isExisting();
      if (!existing1) {
        break;
      }
      await el1.click();
      el2 = await driver.$("id:com.android.chrome:id/terms_accept");
      await browser.pause(5000);
      const existing = await el2.isExisting();
      if (existing) {
        await el2.click();
        el3 = await driver.$("id:com.android.chrome:id/negative_button");
        await el3.click();
      }
      el4 = await driver.$(
        '-android uiautomator:new UiSelector().resourceId("email")'
      );
      await el4.addValue("JohnsonKA@uoe.us");
      el5 = await driver.$(
        '-android uiautomator:new UiSelector().resourceId("password")'
      );
      await el5.addValue("5432#ghi");
      el6 = await driver.$("class name:android.widget.Button");
      await el6.click();
      iterations++;
    }
  });
});
