
import axios from "axios";

const baseURL = "http://worhx.ddns.net:5000";

class UserSvc{
    async loginUser(username, password) {
        const loginUser = await axios.post(`${baseURL}/login`,
            {
                "username": username,
                "password": password
            }
        )
    
        return loginUser.data;
    }
}

export default UserSvc;

