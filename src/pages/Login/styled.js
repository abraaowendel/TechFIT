import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
   width: 100vw;
   font-family: 'Ubuntu', sans-serif;
`;
export const Box = styled.div`
  border: 1px solid transparent;
  max-width: 430px;
  height: 320px;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
 
`
export const Title = styled.h1`
  color: #C7493A;
  letter-spacing: 5px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const Form = styled.form`
   display: flex;
   justify-content: center;
   flex-direction: column;
`;
export const Label = styled.label`
   margin: 10px 0 3px;
`;
export const Input = styled.input`
   margin-top: 15px;
   padding: 20px;
   font-size: 18px;
   width: 100%;
   background-color: #E6E6E6;
   outline: none;
   border: 1px solid #ccc;
   border-radius: 5px;
   color: #C7493A;
   &:focus{
    border-color: #C7493A;
    font-weight: bold;
   }
`;
export const Button = styled.button`
  padding: 20px;
  background-color: #C7493A;
  cursor: pointer;
  border: none;
  margin-top: 25px;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  &:hover{
    opacity: .8;
  }
`;
