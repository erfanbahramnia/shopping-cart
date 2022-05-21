import axios from "axios";

const getApi = async () => {
    const baseUrl = "https://fakestoreapi.com/products";
    const response = await axios.get(baseUrl);
    return response.data;
}

export { getApi };