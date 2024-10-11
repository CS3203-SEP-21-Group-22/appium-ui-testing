describe("Add Equipment Test", () => {
  it("should add equipment", async () => {
    // Login as a Clerk
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
    // Add Equipment
    const el7 = await driver.$("accessibility id:, Equipments");
    await el7.click();
    const el8 = await driver.$(
      "accessibility id:Network Lab, Lab Code : Lab234"
    );
    await el8.click();
    const el9 = await driver.$("accessibility id:Add New Equipment");
    await el9.click();
    const el10 = await driver.$(
      '-android uiautomator:new UiSelector().text("Enter Equipment Name")'
    );
    await el10.addValue("Switch");
    const el11 = await driver.$(
      '-android uiautomator:new UiSelector().text("Enter Equipment Model")'
    );
    await el11.addValue("Cisco");
    const el12 = await driver.$("accessibility id:Add Equipment");
    await el12.click();
    const el13 = await driver.$("id:android:id/button1");
    await el13.click();
  });
});
