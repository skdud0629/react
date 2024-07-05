import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from './App.js';
import { SubTitle, Button, Writer, ContentContainer, ProfileImage, SubTitleContainer, ProFile, CommentInput, WriteCommentContainer, CommentImage, Comment, CommentContainer } from '../style/editStyle.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Content = () => {
  const { id } = useParams();
  const { data, deletePost, writeComment } = useContext(AppContext);
  const navigate = useNavigate();
  const post = data.find(item => item.id === Number(id));
  const [newComment, setNewComment] = useState("");

  const handleItemClick = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    deletePost(id);
    navigate(-1); // 이전 화면으로 이동
  };

  const handleSubmitComment = () => {
    if (!newComment.trim()) {
      toast.error("댓글을 입력해주세요.");
      return;
    }

    writeComment(post.id, newComment.trim());
    setNewComment("");
  };

  if (!post) {
    navigate(-1);
    return null;
  }

  return (
    <ContentContainer>
      <SubTitle>{post.title}</SubTitle>
      <SubTitleContainer>
        <ProFile>
          <ProfileImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="프로필 이미지" />
          <div>
            <p>{post.writer}</p>
            <p>{post.dateCreated} 조회 {post.views}</p>
          </div>
        </ProFile>

        <div>
          <Button onClick={() => handleItemClick(post.id)}>수정</Button>
          <Button onClick={() => handleDelete(post.id)}>삭제</Button>
        </div>
      </SubTitleContainer>

      <hr />

      <p>{post.content}</p>
      <Comment>댓글 ({post.comments ? post.comments.length : 0})</Comment>

      {post.comments && post.comments.map((commentItem, index) => (
        <div key={index}>
          <CommentContainer>
            <CommentImage src="https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png" />
            <div>
              <Writer>{commentItem.writer}</Writer>
              <p>{commentItem.content}</p>
              <p>{commentItem.dateCreated}</p>
            </div>
          </CommentContainer>
        </div>
      ))}

      <WriteCommentContainer>
        <CommentInput
          placeholder="댓글을 남겨주세요."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button onClick={handleSubmitComment}>등록</Button>
      </WriteCommentContainer>
    </ContentContainer>
  );
};

export default Content;
