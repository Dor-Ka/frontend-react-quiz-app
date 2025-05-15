import React from 'react';
import { ResultContainer, ResultTitle, ScoreText, PlayAgainButton } from './ResultScreenStyles';

const ResultScreen = ({ score, total, onRestart }) => {
    return (
        <ResultContainer>
            <ResultTitle>Quiz Finished!</ResultTitle>
            <ScoreText>Your score: {score} / {total}</ScoreText>
            <PlayAgainButton onClick={onRestart}>Play Again</PlayAgainButton>
        </ResultContainer>
    );
};

export default ResultScreen;
