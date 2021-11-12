import { useState } from "react";
import axios from "axios";
import uuid from "uuid";


const useFlip = (initialState = true) => {
    const [flip, setFlip] = useState(initialState)
    const toggleFlip = () => {
        setFlip(flip => !flip)
    }
    return [flip, toggleFlip]
}

const useAxios = (url) => {
    const [data, setData] = useState([]);
    const addData = async () => {
        const response = await axios.get(url);
        setData(data => [...data, { ...response.data, id: uuid() }]);
    };
    return [data, addData]
}

// function useAxios(keyInLS, baseUrl) {
//     const [responses, setResponses] = useLocalStorage(keyInLS);

//     const addResponseData = async (formatter = data => data, restOfUrl = "") => {
//         const response = await axios.get(`${baseUrl}${restOfUrl}`);
//         setResponses(data => [...data, formatter(response.data)]);
//     };

//     const clearResponses = () => setResponses([]);

//     return [responses, addResponseData, clearResponses];
// }


export default useFlip;
export { useAxios };


