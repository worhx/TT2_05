
import axios from "axios";

const baseURL = "http://worhx.ddns.net";

class ProjectSvc {

    // GET ALL PROJECTS
    async get() {

        const loginUser = await axios.get(`${baseURL}/projects`)
        return loginUser;
    }

    // GET BY ID
    async getById(username, password) {
        const loginUser = await axios.post(`${baseURL}/projects`,
            {
                "username": username,
                "password": password
            }
        )

        return loginUser;
    }
}

export default ProjectSvc;

