import styled from 'styled-components';


export const PostListHeader = styled.div`
  margin:20px;
  display: flex; 
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-top: 1px solid black;
`;

export const SubTitleContainer = styled.div`
  padding:20px;
  display: flex;
  justify-content: space-between;
`;

export const SubTitle = styled.h1`
  font-size: 20px; /* 폰트 크기 24px로 설정 */
`;

export const WriteButton = styled.button`
  background-color: #3b5998;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const PostContainer = styled.div`
  margin: 20px; 
  height: 400px;
   border: 1px solid black;
  border-radius: 8px;
  overflow-y: auto;
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  &:nth-child(2) {
    width: 40%;
  }
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    width: 15%;
  }
  &:nth-child(6) {
    width: 10%;
  }
`;

export const Text = styled.span`
  flex: 1;
  margin-left: 10px;
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
`;

export const ItemText = styled.h3`
  margin: 0;
  font-size: 16px;
  ${({ width }) => width && `width: ${width};`}
`;
