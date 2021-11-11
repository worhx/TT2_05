
import axios from "axios";

const baseURL = "http://worhx.ddns.net:5000";

class ProjectSvc {

    // GET BY ID
    async getById(projectId) {
        const loginUser = await axios.get(`${baseURL}/projects/${projectId}`,
        )

        return loginUser;
    }
}

export default ProjectSvc;

