import React, { useContext } from 'react'

import Logo from "../../img/bb-logo.png";

import "./Welcome.css";
import { QuizContext } from '../../context/quiz';

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    console.log(quizState);

    return (
        <div id='welcome'>
            <div className="container">
                <img src={Logo} alt="Logo Breaking Bad" />
                <h1>Mini Quiz</h1>
                <p>
                Bem-vindo ao Mini Quiz de Breaking Bad!<br></br>
                Clique no botão abaixo para começar:</p>
                <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
            </div>
            <div className="container2">
                <p>Projeto desenvolvido por Natália Manosso para estudo de ReactJS.</p>
            </div>
        </div>
  )
}

export default Welcome