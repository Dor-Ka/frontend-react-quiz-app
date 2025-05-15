import React, { useState } from 'react';
import StartScreen from './components/StartScreen/StartScreen';
import Quiz from './components/Quiz/Quiz';
import ResultScreen from './components/ResultScreen/ResultScreen';

const App = () => {
    const [screen, setScreen] = useState('start');
    const [score, setScore] = useState(0);
    const totalQuestions = 2;
    const handleStart = () => {
        setScore(0);
        setScreen('quiz');
    };

    const handleFinish = (finalScore) => {
        setScore(finalScore);
        setScreen('result');
    };

    const handleRestart = () => {
        setScore(0);
        setScreen('start');
    };

    return (
        <>
            {screen === 'start' && <StartScreen onStart={handleStart} />}
            {screen === 'quiz' && <Quiz onFinish={handleFinish} />}
            {screen === 'result' && (
                <ResultScreen score={score} total={totalQuestions} onRestart={handleRestart} />
            )}
        </>
    );
};

export default App;
