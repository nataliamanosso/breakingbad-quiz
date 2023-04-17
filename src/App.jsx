// react, componentes, estáticos
import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome/Welcome.jsx';
import Question from './components/Questions/Questions.jsx';
import Gameover from './components/GameOver/Gameover.jsx';

import './App.css'


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    // embaralhar as perguntas
    dispatch({type: "REORDER_QUESTIONS"});
  }, []);

  return (
    <div className="App">
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <Gameover />}
    </div>
  )
}

export default App
