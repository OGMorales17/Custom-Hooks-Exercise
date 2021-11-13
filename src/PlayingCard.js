import backOfCard from "./back.png";
import { useFlip } from './hooks'
import "./PlayingCard.css"

/* Renders a single playing card. */
const PlayingCard = ({ front, back = backOfCard }) => {
  const [isFacingUp, flip] = useFlip()

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
