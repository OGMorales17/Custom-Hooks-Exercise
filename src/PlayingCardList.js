// import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import { useAxios } from "./hooks";
import { formatCard } from "./helpers";
import "./PlayingCardList.css";

const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/"

/* Renders a list of playing cards.
 * Can also add a new card at random. */

function CardTable() {
  const [cards, addCard, clearCards] = useAxios("cards", BASE_URL);
  console.log(cards)
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear the table</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
