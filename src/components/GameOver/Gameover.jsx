import { useContext } from "react";

import { QuizContext } from "../../context/quiz";


import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <div className="container">
      
      <h2>FIM DE JOGO!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas!
      </p>
      
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
      </div>
      <div className="container2">
        <h3>Obrigada pela atenção! Se puder me dar um feedback ficaria muito grata :&#41;</h3>
      </div>
    </div>
  );
};

export default GameOver;