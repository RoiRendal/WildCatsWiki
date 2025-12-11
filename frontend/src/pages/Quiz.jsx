import {questions} from '../data/questions' ;
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Quiz() {
    // STATE MANAGEMENT
    // 1. Shows the questions the user currently sees.
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // 2. User's score obviously.
    const [score, setScore] = useState(0);
    // 3. If the quiz is done, show the score.
    const [showScore, setShowScore] = useState(false);

    /* THIS IS AN ENTIRE BLOCK */
    const handleAnswerOptionClick = (isCorrect) => {
    // Plus one points when the user gets it right
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    // Checking to see if there are more questions to ask
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    };
    /* THIS IS AN ENTIRE BLOCK */

    

    return (
        <div>
            <Navbar />

            <h1 className="text-3xl font-extrabold text-center text-stone-800 mb-8">
              What Do You Know About These Felines?
            </h1>
        </div>
    );
}

export default Quiz;
