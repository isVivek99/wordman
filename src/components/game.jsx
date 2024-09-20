import { useState } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
import GameInput from './game-input';
import GameStatus from './game-status';

const Game = ({ children }) => {
  const [colorGuess, setColorGuess] = useState('');
  /*
    https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state
  
   we can declare this state value both ways
   1. where we are not using any anonymous fn 
   2. where we are using an anonymous fn () =>
      generateRandomColor()
   3. where we are using an anonymous fn generateRandomColor
  
   in the 1. case we can see that whenever the input changes i.e. setColorGuess is called we see 
   a re-render of the component in which generateRandomColor() is called on every render 
  
   in 2. & 3.  react runs the fn once when the component mounts and initialises the state
   
   */

  const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor);
  // const [correctAnswer, setCorrectAnswer] = useState(() =>
  //   generateRandomColor(),
  // );
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  if (hasGuessed) {
    if (correctAnswer === colorGuess) {
      setIsWinner(true);
    }
  }
  return (
    <div>
      <ColorSwatch color={correctAnswer} />
      <GameInput
        value={colorGuess}
        onChange={(e) => setColorGuess(e.target.value)}
        onSubmit={() => setHasGuessed(true)}
        disabled={hasGuessed}
      />
      {children}
      <GameStatus isWinner={isWinner} hasGuessed={hasGuessed} />
      <button
        onClick={() => {
          setCorrectAnswer(generateRandomColor());
          setHasGuessed(false);
          setColorGuess('');
        }}
        type={hasGuessed ? 'submit' : 'button'}
      >
        Reset Color
      </button>
    </div>
  );
};
export default Game;
