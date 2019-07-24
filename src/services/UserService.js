import axios from "axios";
import APIError from "../domain/APIError";


axios.interceptors.response.use(
    response => response,
    error => error.response
        ? Promise.reject(new APIError(error.response))
        : Promise.reject(error)
);

class UserService{
        async register(user){
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}users`,
            JSON.stringify({email: user.email,
                username: user.username, password: user.password})
        );
        const token = response.data.token;
        localStorage.setItem("token", token);
        return response.data.userId;
    }
}

export default new UserService();
