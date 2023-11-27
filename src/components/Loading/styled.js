import styled, { keyframes }from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`
export const Container = styled.div`
    position: absolute;
    left: 45%;
    bottom: 50%;
`;
export const Loading = styled.div`
    border: 6px solid rgba(0, 0, 0, 0.1);
    border-left-color: #26748A;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    animation: ${spin} .5s linear  infinite;
`;