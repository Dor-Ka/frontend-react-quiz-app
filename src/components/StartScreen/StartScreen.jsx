import React from 'react';
import { StartContainer, StartTitle, StartButton } from './StartScreenStyles';

const StartScreen = ({ onStart }) => {
    return (
        <StartContainer>
            <StartTitle>Welcome to the Quiz!</StartTitle>
            <StartButton onClick={onStart}>Start Quiz</StartButton>
        </StartContainer>
    );
};

export default StartScreen;
