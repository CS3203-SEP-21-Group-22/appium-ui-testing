describe("Technician Borrow Maintenance Update Test", () => {
  it("should be able to update maintenance status", async () => {
    // Login as an Technician
    const el1 = await driver.$(
      '-android uiautomator:new UiSelector().text("Sign In with Institution Account")'
    );
    await el1.click();
    const el2 = await driver.$(
      '-android uiautomator:new UiSelector().resourceId("email")'
    );
    await el2.addValue("TaylorMB@uoe.us");
    const el3 = await driver.$(
      '-android uiautomator:new UiSelector().resourceId("password")'
    );
    await el3.addValue("6789#jkl");
    const el4 = await driver.$("class name:android.widget.Button");
    await el4.click();
    // Update Maintenance Status
    const el37 = await driver.$(
      "accessibility id:Switch (Cisco), Serial Number: GY24236J7U, Lab: ICE Lab, Due Date: 2024-11-23, Status: Scheduled"
    );
    await el37.click();
    const el38 = await driver.$("accessibility id:Borrow Item");
    await el38.click();
    const el39 = await driver.$("id:android:id/button1");
    await el39.click();
  });
});
