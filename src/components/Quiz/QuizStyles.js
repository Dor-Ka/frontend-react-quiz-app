import styled from 'styled-components';

export const QuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    min-height: 100vh;
    background-color: #f9f9f9; 
`;

export const QuestionTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 20px;
    color: #333; 
    font-weight: 600;
`;

export const AnswersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px; 
`;

export const AnswerButton = styled.button`
    padding: 12px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #e0e0e0;
    }

    &:disabled {
        background-color: #d3d3d3;
        cursor: not-allowed;
    }

    &:not(:disabled):active {
        background-color: #007bff;
        color: white;
    }
`;

export const NextButton = styled.button`
    padding: 12px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;
