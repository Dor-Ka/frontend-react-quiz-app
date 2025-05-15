import styled from 'styled-components';

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    min-height: 100vh;
    background-color: #f4f4f4;
`;

export const ScoreText = styled.h2`
    font-size: 32px;
    color: #333;
    margin-bottom: 16px;
`;

export const Message = styled.p`
    font-size: 20px;
    color: #666;
    margin-bottom: 24px;
`;

export const RestartButton = styled.button`
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;
