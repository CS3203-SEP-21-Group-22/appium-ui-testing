describe("Clerk Accept Reservation Request Test", () => {
  it("should be able to accept a reservation request", async () => {
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
    // Accept Reservation Request
    const el9 = await driver.$(
      "accessibility id:Switch (Cisco), Lab: ICE Lab, Reserved user: Alice Harris, From: 2024-11-01 To: 2024-11-04"
    );
    await el9.click();
    const el10 = await driver.$("accessibility id:Assign an Item");
    await el10.click();
    const el11 = await driver.$("accessibility id:GY24236J7U");
    await el11.click();
    const el12 = await driver.$("accessibility id:Assign");
    await el12.click();
  });
});
