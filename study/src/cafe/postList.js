import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from 'react-virtualized';
import { AppContext } from '../cafe/App.js';
import { PostContainer, SubTitle, SubTitleContainer, PostListHeader, ListItem, ListText,ItemText } from '../style/postListStyle.js';
import { Button } from '../style/style.js';

const PostList = () => {
  const { data, writePost } = useContext(AppContext);
  const navigate = useNavigate();
  const handleItemClick = (id) => {
    navigate(`/content/${id}`);
  };
  const writePostClick = () => {
    navigate(`/edit/${data.length + 2}`);
  }

  const rowRenderer = ({ index, key, style }) => {
    const item = data[index];
    return (
      <ListItem key={key} style={style} onClick={() => handleItemClick(item.id)}>
        <ItemText width="10%">{item.id}</ItemText>
        <ItemText width="40%">{item.title}</ItemText>
        <ItemText width="20%">{item.writer}</ItemText>
        <ItemText width="20%">{item.dateCreated}</ItemText>
        <ItemText width="10%">{item.views}</ItemText>
      </ListItem>
    );
  };

  return (
    <div className="App">
      <SubTitleContainer>
        <SubTitle>게시물 리스트</SubTitle>
        <Button onClick={() =>writePostClick()}>글쓰기</Button>
      </SubTitleContainer>
      <PostListHeader>
        <ItemText width="10%">번호</ItemText>
        <ItemText width="40%">제목</ItemText>
        <ItemText width="20%">작성자</ItemText>
        <ItemText width="20%">작성일</ItemText>
        <ItemText width="10%">조회</ItemText>
      </PostListHeader>
      <PostContainer>
        <List
          width={1500}
          height={400}
          rowCount={data.length}
          rowHeight={40}
          rowRenderer={rowRenderer}
        />
      </PostContainer>
    </div>
  );
};

export default PostList;
