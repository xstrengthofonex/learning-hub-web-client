import React, {useState} from 'react';
import showError from "./showError";
import userService from "../services/UserService"


function Register(props){
    const [email, setEmail] = useState(""),
      [username, setUsername] = useState(""),
      [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const user = {email: email, username: username, password: password};
            await userService.register(user);
            props.history.push("/");
        } catch (error) {
            showError(error);
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} method="POST">
                <div>
                    <label>Email</label>
                    <input id="emailInput" value={email} type="email" onChange={function (event) {
                        setEmail(event.target.value);
                    }} required />
                </div>
                <div>
                    <label>Username</label>
                    <input id="usernameInput" value={username} type="text" onChange={function (event) {
                        setUsername(event.target.value)
                    }} required />
                </div>
                <div>
                    <label>Password</label>
                    <input id="passwordInput" value={password} type="password" onChange={function (event) {
                        setPassword(event.target.value);
                    }} required />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    )
}

export default Register;