import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f638cd4aaaeb4dbfbc32f91084457220'
    }
})