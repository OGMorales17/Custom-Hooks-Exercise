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
    const [cards, setCards] = useState([]);
    const addCard = async () => {
        const response = await axios.get(url);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };
    return [cards, addCard]
}



export default useFlip;
export { useAxios };


