import styled from 'styled-components';

export const SubTitle = styled.h3`
  font-size: 1.2rem;
`;

export const ProfileImage = styled.img`
  width: 71px;
  height: 71px;
  border-radius: 100%;
  padding-right: 10px;
`;

export const ProFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const Button = styled.button`
    background-color: #DAF9D7;
    color: #219B3C;
    border: none;
    padding: 10px;
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    width: 77px;
    height: 51px;
    font-weight: bold;
`;
export const TitleEdit = styled.input`
  font-size: 1.2rem;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: none;
  background-color: #eceff1;
  &::placeholder {
    padding-left: 10px;
    color: #adb5bd;
  }
  &::defaultValue {
    padding-left: 10px;
    color: #adb5bd;
  }
`;
export const SubTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    horizontal-align: center;
`;

export const ContentContainer = styled.div`
  align-items: center;
  justify-content: center; 
  margin: 0 20px;
`;

export const Comment = styled.h3`
  margin-top: 50px;
  font-size: 1.2rem;
`;

export const CommentItem = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const WriteCommentContainer = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #eceff1;
  border-radius: 7px;
`;

export const CommentInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  &::placeholder {
    padding-left: 10px;
    color: #adb5bd;
  }
  &:focus {
    outline: none;
  }
`;

export const CommentContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: start;
`;


export const CommentImage = styled.img`
  width: 41px;
  height: 41px;
  border-radius: 100%;
  padding-right: 10px;
`;


export const Writer = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;