// import React, { useState } from "react";
// import uuid from "uuid";
// import axios from "axios";
import PlayingCard from "./PlayingCard";
import useAxios from './hooks';
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/"

function CardTable() {
  const [cards, addCard] = useAxios('cards', BASE_URL);
  // const [cards, setCards] = useState();

  // const addCard = async () => {
  //   const response = await axios.get(`${BASE_URL}`);
  //   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  // };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">

        {/* <PlayingCard key={cards.id} front={cards.cards[0].image} /> */}

        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
