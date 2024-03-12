import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

function QuizPage() {
  
  // Define the questions and answers
  const questions = [
    {
      question: 'What\'s Your Favorite Season?',
      options: ['Winter', 'Spring', 'Summer', 'Fall']
    },
    {
      question: 'When do You Typically Wear Perfume?',
      options: ['Night Out', 'Date Night', 'Everyday', 'At Work']
    },
    {
      question: 'How Do You Want Your Perfume to Make You Feel?',
      options: ['Pretty', 'Happy', 'Comfortable', 'Confident']
    },
    {
      question: 'What\'s Your Role In Your Friend Group?',
      options: ['The Leader', 'The Shoulder to Cry On', 'The Go-With-the-Flow', 'The Life of The Party']
    },
    {
      question: 'Do You Prefer Your Fragrance to',
      options: ['Make a Statement', 'Be Your Skin but Better', 'Get You Compliments', 'Grab Peoples Attention']
    }
  ];

  // State to track user answers
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));

  // Function to handle user answer selection
  const handleAnswerSelect = (questionIndex, selectedAnswer) => {
    setUserAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = selectedAnswer;
      return newAnswers;
    });
  };

  // Function to handle quiz submission
  const navigate = useNavigate(); // Get the navigate function
  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to QuizResultsPage with userAnswers
    navigate('/quizresults'); // Navigate to the quiz results page
  };

  return (
    <div className="quiz-body">
      <header>
        <h1 className="quizheader">Tell us about yourself...</h1>
      </header>

      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <section className="fullq" key={index}>
            <h2 className="quizquestion">{`Question ${index + 1}: ${question.question}`}</h2>
            <ul className="answers">
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      value={option}
                      checked={userAnswers[index] === option}
                      onChange={() => handleAnswerSelect(index, option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </section>
        ))}

<Link to={{pathname: "/quizresults", state: { userAnswers }}} className="button-link" onClick={handleSubmit}>Submit</Link>

      
      </form>
    </div>
  );
}

export default QuizPage;
