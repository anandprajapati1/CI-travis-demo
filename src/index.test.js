import { app } from ".";

test("app start", ()=> {
    expect(app()).toBe("Jane Doe");
});