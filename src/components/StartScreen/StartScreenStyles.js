import styled from 'styled-components';

export const StartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
`;

export const StartTitle = styled.h1`
    font-size: 32px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text};
`;

export const StartButton = styled.button`
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
