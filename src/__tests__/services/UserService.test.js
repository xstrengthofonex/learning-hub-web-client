
import userService from "../../services/UserService";
import axios from "axios";

jest.mock("axios");


describe("UserService", () => {
    it("registers", async () => {
        const token = "token";
        const resp = {data: {userId: "UserId", token: token}};
        const userData = {email: "email@example.com",
            username: "Username", password: "12345678"};
        axios.post.mockResolvedValue(resp);

        const result = await userService.register(userData);

        expect(userService.userId).toEqual(result);
        expect(localStorage.getItem("token")).toEqual(token);
    });
});