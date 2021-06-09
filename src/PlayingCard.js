import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useToggleState from './hooks/useFlip'

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, setIsFacingUp] = useToggleState(true);
 
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={setIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;

