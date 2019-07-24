/* eslint-disable no-undef */

import React from "react";
import { mount } from "enzyme";
import Register from "../../views/Register";
import userService from "../../services/UserService";
import showError from "../../views/showError";
jest.mock("../../views/showError");


describe("Register", () => {
    let wrapper;
    let historyMock = {push: jest.fn()};
    const user = {email: "example@email.com", username: "username", password: "1234567"};

    beforeEach(() => {
        wrapper = mount(<Register history={historyMock}/>);

    });

    it("registers the user", async () => {
        userService.register = jest.fn(()=> Promise.resolve());
        wrapper.find("#emailInput").simulate("change", {target: {value: user.email}});
        wrapper.find("#usernameInput").simulate("change", {target: {value: user.username}});
        wrapper.find("#passwordInput").simulate("change", {target: {value: user.password}});
        wrapper.find("form").simulate("submit", {preventDefault: () => {}});
        await flushPromises();

        expect(userService.register).toHaveBeenCalledWith(user);
        expect(historyMock.push).toHaveBeenCalledWith("/");
    });

    it("handles authentication error", async () => {
        showError.mockClear();
        const anError = new Error("some register error");
        userService.register = jest.fn(()=> Promise.reject(anError));
        wrapper.find("form").simulate("submit", {preventDefault: () => {}});
        await  flushPromises();

        expect(userService.register).toHaveBeenCalled();
        expect(showError).toHaveBeenCalledWith(anError);
    });
});
