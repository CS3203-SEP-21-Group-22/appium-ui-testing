describe("Clerk Review Maintenance Test", () => {
  it("should be able to update maintenance status", async () => {
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
    // Review Maintenance
    const el44 = await driver.$("accessibility id:, Maintenances");
    await el44.click();
    const el45 = await driver.$(
      '-android uiautomator:new UiSelector().resourceId("ongoing")'
    );
    await el45.click();
    const el46 = await driver.$(
      "accessibility id:Switch (Cisco), Serial Number: GY24236J7U, Lab: ICE Lab, End Date: 2024-11-23, Status: UnderReview"
    );
    await el46.click();
    const el47 = await driver.$("accessibility id:Review Maintenance");
    await el47.click();
    const el48 = await driver.$("class name:android.widget.EditText");
    await el48.addValue("Maintenance Complete");
    const el49 = await driver.$("accessibility id:Mark as Completed");
    await el49.click();
    const el50 = await driver.$("id:android:id/button1");
    await el50.click();
  });
});
