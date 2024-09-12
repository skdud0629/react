import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to bottom, #3b5998, #ccc);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
`;

export const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 80%;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: #3b5998;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  height: 400px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow-y: auto;
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.checked ? '#000' : 'transparent')};
  cursor: pointer;
`;

export const Text = styled.span`
  flex: 1;
  margin-left: 10px;
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 20px;
  margin-left: 5px;
`;
