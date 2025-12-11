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

    const resetQuiz = () => {
    // Begin the quiz all over again
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    };



    return (
        <div className="max-w-2xl mx-auto mt-10">
            <h1 className="text-3xl font-extrabold text-center text-stone-800 mb-8">
              What Do You Know About These Felines?
            </h1>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-100">
              {/* CONDITIONAL RENDERING: Show The Score OR Show The Question? */}
              {showScore ? (
              /* SCORE SCREEN */
              <div className="text-center py-10">
                  <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
                  <p className="text-xl mb-6">
                  You scored <span className="text-orange-600 font-bold text-3xl">{score}</span> out of {questions.length}
                  </p>
                    
                  <div className="space-x-4">
                      <button 
                      onClick={resetQuiz}
                      className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition-colors"
                      >
                      Play Again
                      </button>
                      <Link 
                      to="/"
                      className="bg-stone-200 text-stone-800 px-6 py-2 rounded-full font-bold hover:bg-stone-300 transition-colors"
                      >
                      Back to Wiki
                      </Link>
                  </div>
              </div>

              ) : (

              /* QUESTION CARD */
              <div>
                  <div className="mb-6">
                      <div className="flex justify-between items-end mb-2">
                          <span className="text-sm font-bold text-stone-400 uppercase tracking-widest">Question {currentQuestion + 1}/{questions.length}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-stone-800 h-20">
                          {questions[currentQuestion].questionText}
                      </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                  {questions[currentQuestion].options.map((option, index) => (
                      <button
                      key={index}
                      onClick={() => handleAnswerOptionClick(option.isCorrect)}
                      className="w-full text-left p-4 rounded-xl border-2 border-stone-100 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 font-medium text-stone-700"
                      >
                      {option.text}
                      </button>
                  ))}
                  </div>
              </div>
              )}
            </div>

        </div>
    );
}

export default Quiz;
