import axios from "axios"

const baseURL = "worhx.ddns.net";

class CategorySvc {

    async get(){
        const categoryList = await axios.get(`${baseURL}`)

        return categoryList;
    }
}

export default CategorySvc