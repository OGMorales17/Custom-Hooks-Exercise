import { useState, useEffect } from "react";
import axios from "axios";


const useFlip = (initialState = true) => {
    const [flip, setFlip] = useState(initialState)

    const toggleFlip = () => {
        setFlip(flip => !flip)
    }
    return [flip, toggleFlip]
}

const useAxios = (keyInLS, baseUrl) => {
    const [resp, setResp] = useLocalStorage(keyInLS);

    const addRespData = async (formatter = data => data, ept = "") => {
        const response = await axios.get(`${baseUrl}${ept}`);
        setResp(data => [...data, formatter(response.data)]);
    };

    const clearResp = () => setResp([]);

    return [resp, addRespData, clearResp];
}

const useLocalStorage = (key, initialValue = []) => {
    if (localStorage.getItem(key)) {
        initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}


export default useFlip;
export { useFlip, useAxios, useLocalStorage };


