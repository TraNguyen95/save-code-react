import axios from 'axios';

const handleError = (err: any) => {
    if (err.response.data.msg) {
        // console.log(err.response.data.msg);
        throw new Error(err.response.data.msg);
    } else {
        // console.log(err.message);
        throw new Error(err.message);
    }
};

export const getData = async ({ pageParam = 1, queryKey, thamso }: any) => {
    try {
        // console.log(pageParam, queryKey, thamso);
        const res = await axios.get(`http://localhost:3001/api/products?_page=${pageParam}&_limit=3`);
        return res.data;
    } catch (err) {
        handleError(err);
    }
};
