describe("Add Equipment Test", () => {
  it("should add equipment", async () => {
    const el1 = await driver.$(
      "accessibility id:Sign In with Institution Account"
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
    const el5 = await driver.$(
      '-android uiautomator:new UiSelector().text("")'
    );
    await el5.click();
    const el6 = await driver.$(
      'xpath:(//android.view.ViewGroup[@resource-id="background-container"])[2]/android.view.ViewGroup'
    );
    await el6.click();
    const el7 = await driver.$(
      '-android uiautomator:new UiSelector().text("Add New Equipment")'
    );
    await el7.click();
    const el8 = await driver.$(
      '-android uiautomator:new UiSelector().text("Enter Equipment Name")'
    );
    await el8.addValue("Network Switch");
    const el9 = await driver.$(
      '-android uiautomator:new UiSelector().text("Enter Equipment Model")'
    );
    await el9.addValue("Cisco");
    const el10 = await driver.$("id:android:id/button1");
    await el10.click();
  });
});
