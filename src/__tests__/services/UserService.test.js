
import userService from "../../services/UserService";


describe("UserService", () => {
    it("registers", async () => {
        const userData = {email: "email@example.com",
            username: "Username", password: "12345678"};
        const result = await userService.register(userData);
        expect(userService.userId).toEqual(result);
        expect(localStorage.getItem("token")).not.toBeNull();
    });
});