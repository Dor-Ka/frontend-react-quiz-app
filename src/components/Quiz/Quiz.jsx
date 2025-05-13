import React, { useState } from 'react';
import {
    QuizContainer,
    QuestionTitle,
    AnswersContainer,
    AnswerButton,
    NextButton,
} from './QuizStyles';

const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
    },
];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNextClick = () => {
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
        } else {
            setQuizFinished(true);
        }
    };

    return (
        <QuizContainer>
            <QuestionTitle>{currentQuestion.question}</QuestionTitle>
            <AnswersContainer>
                {currentQuestion.answers.map((answer, index) => (
                    <AnswerButton
                        key={index}
                        onClick={() => handleAnswerClick(answer)}
                        disabled={selectedAnswer !== null}
                        style={{
                            backgroundColor: selectedAnswer === answer ? '#d3d3d3' : '',
                        }}
                    >
                        {answer}
                    </AnswerButton>
                ))}
            </AnswersContainer>

            {!quizFinished && selectedAnswer !== null && (
                <NextButton onClick={handleNextClick}>Next</NextButton>
            )}

            {quizFinished && <div>Your score: {score}/{questions.length}</div>}
        </QuizContainer>
    );
};

export default Quiz;
