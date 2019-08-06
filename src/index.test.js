import { app } from ".";

test("app start", ()=> {
    expect(app()).toBe("ane Doe");
});