/**
 * Flashcard.jsx
 * By: Will Soylemez
 * JumboCode Fall 2025
 * 
 * The Flashcard component represents a single flashcard that can be flipped
 * to show either the question or the answer. It also includes a delete button
 * to remove the flashcard.
 */

import { useState } from "react";
import DeleteButton from "./DeleteButton";

export default function Flashcard({ question, answer, onDelete }) {

  /* This is another example of using the useState hook to manage state in a
   * component, just like we did in HelloPage.jsx! Here, we're using it to
   * keep track of whether the answer side of the flashcard is currently shown.
   */
  const [showAnswer, setShowAnswer] = useState(false);

  /* flipCard
   * This function toggles the state of showAnswer between true and false,
   * effectively flipping the card to show either the question or the answer.
   * It isn't getting called yet...
   */  
  const flipCard = () => {
    setShowAnswer(!showAnswer);
  };

  return (

    /* TODO: showing an alert here isn't very useful if we actually want to flip the card */
    <div className="w-80 h-48 cursor-pointer mt-5" onClick={() => flipCard()}>

      {/* You shouldn't have to touch anything below this line. Most of this is CSS used to display the flip animation */}
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${showAnswer ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center p-6">

          {/* Delete button. How can we change what this button does? What function is it actually calling? */}
          <DeleteButton onDelete={onDelete} />
          <h2 className="text-xl font-semibold text-white text-center">{question}</h2>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg flex items-center justify-center p-6 rotate-y-180">
          <DeleteButton onDelete={onDelete} />
          <p className="text-lg text-white text-center">{answer}</p>
        </div>
      </div>
    </div>
  )
}