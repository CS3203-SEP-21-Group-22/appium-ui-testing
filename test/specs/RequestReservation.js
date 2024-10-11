describe("Student Request Reservation Test", () => {
  it("should be able to request a reservation", async () => {
    // Login as a Student
    const el41 = await driver.$(
      '-android uiautomator:new UiSelector().text("Sign In with Institution Account")'
    );
    await el41.click();
    const el42 = await driver.$(
      '-android uiautomator:new UiSelector().resourceId("email")'
    );
    await el42.addValue("HarrisAG@uoe.us");
    const el43 = await driver.$(
      '-android uiautomator:new UiSelector().resourceId("password")'
    );
    await el43.addValue("1590#stu");
    const el44 = await driver.$("class name:android.widget.Button");
    await el44.click();
    // Request a reservation
    const el9 = await driver.$("accessibility id:ICE Lab, Code: 23319fs");
    await el9.click();
    const el10 = await driver.$(
      "accessibility id:Switch, Model: Cisco, Lab: ICE Lab"
    );
    await el10.click();
    const el11 = await driver.$("accessibility id:Select Start Date");
    await el11.click();
    const el20 = await driver.$("accessibility id:Next month");
    await el20.click();
    const el12 = await driver.$("accessibility id:01 November 2024");
    await el12.click();
    const el13 = await driver.$("id:android:id/button1");
    await el13.click();
    const el14 = await driver.$("accessibility id:Select End Date");
    await el14.click();
    const el15 = await driver.$("accessibility id:Next month");
    await el15.click();
    const el16 = await driver.$("accessibility id:04 November 2024");
    await el16.click();
    const el17 = await driver.$("id:android:id/button1");
    await el17.click();
    const el18 = await driver.$("accessibility id:Reserve Equipment");
    await el18.click();
    const el19 = await driver.$("id:android:id/button1");
    await el19.click();
  });
});
