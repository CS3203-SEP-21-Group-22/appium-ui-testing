describe("Add New Item Test", () => {
  it("should add new item", async () => {
    // Login as a Clerk
    const el41 = await driver.$(
      '-android uiautomator:new UiSelector().text("Sign In with Institution Account")'
    );
    await el41.click();
    const el42 = await driver.$(
      '-android uiautomator:new UiSelector().resourceId("email")'
    );
    await el42.addValue("JohnsonKA@uoe.us");
    const el43 = await driver.$(
      '-android uiautomator:new UiSelector().resourceId("password")'
    );
    await el43.addValue("5432#ghi");
    const el44 = await driver.$("class name:android.widget.Button");
    await el44.click();
    // Add new item
    const el1 = await driver.$("accessibility id:, Equipments");
    await el1.click();
    const el2 = await driver.$("accessibility id:ICE Lab, Lab Code : 23319fs");
    await el2.click();
    const el3 = await driver.$(
      "accessibility id:Switch, Model : Cisco, Lab : ICE Lab"
    );
    await el3.click();
    const el4 = await driver.$("accessibility id:View Items");
    await el4.click();
    const el5 = await driver.$("accessibility id:Add New Item");
    await el5.click();
    const el6 = await driver.$("class name:android.widget.EditText");
    await el6.addValue("GY24236J7U");
    const el7 = await driver.$("accessibility id:Add Item");
    await el7.click();
    const el8 = await driver.$("id:android:id/button1");
    await el8.click();
  });
});
