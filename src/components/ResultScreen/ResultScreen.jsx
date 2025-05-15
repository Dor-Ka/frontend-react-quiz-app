import {
    ResultContainer,
    ScoreText,
    Message,
    RestartButton,
} from './ResultScreenStyles';

const ResultScreen = ({ score, totalQuestions, onRestart }) => {
    const percentage = (score / totalQuestions) * 100;
    let message = 'Good effort!';

    if (percentage === 100) {
        message = 'Perfect score! 🎉';
    } else if (percentage >= 70) {
        message = 'Well done!';
    } else if (percentage >= 50) {
        message = 'Not bad!';
    } else {
        message = 'Keep practicing!';
    }

    return (
        <ResultContainer>
            <ScoreText>Your score: {score}/{totalQuestions}</ScoreText>
            <Message>{message}</Message>
            <RestartButton onClick={onRestart}>Restart Quiz</RestartButton>
        </ResultContainer>
    );
};

export default ResultScreen;
