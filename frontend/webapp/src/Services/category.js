import axios from "axios"

const baseURL = "http://worhx.ddns.net:5000";

class CategorySvc {

    async get(){
        const categoryList = await axios.get(`${baseURL}`)

        return categoryList;
    }
}

export default CategorySvc