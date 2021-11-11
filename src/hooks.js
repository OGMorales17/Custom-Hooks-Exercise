import { useEffect, useState } from "react";
import axios from "axios";
import uuid from "uuid";


const useFlip = (initialState = true) => {
    const [flip, setFlip] = useState(initialState)

    const toggleFlip = () => {
        setFlip(flip => !flip)
    }
    return [flip, toggleFlip]
}


export const useAxios = (url, options = {}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // after the first render, fetch our data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setResponse(cards => [...cards, { ...response.data, id: uuid() }]);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [url]);

    return { response, error, isLoading };
}


export default useFlip;


