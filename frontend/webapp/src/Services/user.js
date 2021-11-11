
import axios from "axios";

const baseURL = "worhx.ddns.net";

class UserSvc{
    async loginUser(username, password) {
        const loginUser = await axios.post(`${baseURL}/login`,
            {
                "username": username,
                "password": password
            }
        )
    
        return loginUser;
    }
}

export default UserSvc;

