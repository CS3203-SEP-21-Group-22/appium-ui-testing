describe("User Login Test", () => {
  it("should login with valid credentials", async () => {
    const el1 = await driver.$(
      '-android uiautomator:new UiSelector().text("Sign In with Institution Account")'
    );
    await el1.click();
    const el2 = await driver.$(
      '-android uiautomator:new UiSelector().resourceId("email")'
    );
    await el2.addValue("JohnsonKA@uoe.us");
    const el3 = await driver.$(
      '-android uiautomator:new UiSelector().resourceId("password")'
    );
    await el3.addValue("5432#ghi");
    const el4 = await driver.$("class name:android.widget.Button");
    await el4.click();
  });
});
