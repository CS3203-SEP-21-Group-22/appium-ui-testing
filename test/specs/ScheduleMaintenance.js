describe("Clerk Schedule Maintenance Test", () => {
  it("should be able to schedule maintenance", async () => {
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
    // Schedule Maintenance
    const el13 = await driver.$("accessibility id:, Maintenances");
    await el13.click();
    const el14 = await driver.$(
      '-android uiautomator:new UiSelector().resourceId("ongoing")'
    );
    await el14.click();
    const el15 = await driver.$("accessibility id:Create New Maintenance");
    await el15.click();
    const el16 = await driver.$("accessibility id:Select Lab");
    await el16.click();
    const el17 = await driver.$("accessibility id:ICE Lab");
    await el17.click();
    const el18 = await driver.$("accessibility id:Select Equipment");
    await el18.click();
    const el19 = await driver.$("accessibility id:Switch");
    await el19.click();
    const el20 = await driver.$("accessibility id:Select Item");
    await el20.click();
    const el21 = await driver.$("accessibility id:GY24236J7U");
    await el21.click();
    const el22 = await driver.$("accessibility id:Select Start Date");
    await el22.click();
    const el23 = await driver.$("accessibility id:Next month");
    await el23.click();
    const el24 = await driver.$("accessibility id:21 November 2024");
    await el24.click();
    const el25 = await driver.$("id:android:id/button1");
    await el25.click();
    const el26 = await driver.$("accessibility id:Select End Date");
    await el26.click();
    const el27 = await driver.$("accessibility id:Next month");
    await el27.click();
    const el28 = await driver.$("accessibility id:23 November 2024");
    await el28.click();
    const el29 = await driver.$("id:android:id/button1");
    await el29.click();
    const el30 = await driver.$("accessibility id:Select Technician");
    await el30.click();
    const el31 = await driver.$("accessibility id:Mary");
    await el31.click();
    const el32 = await driver.$("class name:android.widget.EditText");
    await el32.addValue("Test Maintenance");
    const el33 = await driver.$("accessibility id:Create Maintenance");
    await el33.click();
    const el34 = await driver.$("id:android:id/button1");
    await el34.click();
  });
});
