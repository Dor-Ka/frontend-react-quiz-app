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

const Quiz = ({ onFinish }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNextClick = () => {
        const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
        const updatedScore = isCorrect ? score + 1 : score;

        if (currentQuestionIndex + 1 < questions.length) {
            setScore(updatedScore);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
        } else {
            onFinish(updatedScore);
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

            {selectedAnswer && (
                <NextButton onClick={handleNextClick}>Next</NextButton>
            )}
        </QuizContainer>
    );
};

export default Quiz;
