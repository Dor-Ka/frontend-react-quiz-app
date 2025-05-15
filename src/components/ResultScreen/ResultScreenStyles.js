import styled from 'styled-components';

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
`;

export const ResultTitle = styled.h2`
    font-size: 32px;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 20px;
`;

export const ScoreText = styled.p`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 30px;
`;

export const PlayAgainButton = styled.button`
    padding: 12px 24px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
    }
`;
