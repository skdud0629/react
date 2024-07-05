import React, { useContext, useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from './App.js';
import { Editor } from '@toast-ui/react-editor';
import { SubTitle, Button, ContentContainer, TitleEdit } from '../style/editStyle.js';
import '@toast-ui/editor/dist/toastui-editor.css';
import { SubTitleContainer } from '../style/postListStyle.js';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, writePost, modifyPost } = useContext(AppContext);
  const post = data.find(item => item.id === Number(id));
  const editorRef = useRef();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const randomAuthor = `익명${Math.floor(Math.random() * 1000)}`;

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    } else {
      fetchData();
    }
  }, [post]);

  const fetchData = () => {
    const storedData = JSON.parse(localStorage.getItem('postsData'));
    const storedPost = storedData.find(item => item.id === Number(id));
    if (storedPost) {
      setTitle(storedPost.title);
      setContent(storedPost.content);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!title.trim() && !content.trim()) {
        const confirmationMessage = '제목이나 게시글을 입력하지 않았습니다. 이 페이지를 벗어나시겠습니까?';
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    };

    const handleUnload = () => {
      window.location.href = '/';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, [title, content]);

  const handleSave = () => {
    const content = editorRef.current.getInstance().getMarkdown();
    if (!title.trim() || !content.trim()) {
      alert('글을 입력해주세요.');
      return;
    }
    if (post) {
      modifyPost(Number(id), title, content);
    } else {
      writePost(title, content, randomAuthor, 0);
    }
    navigate('/');
  };

  const handleContentChange = () => {
    const content = editorRef.current.getInstance().getMarkdown();
    setContent(content);
  };

  const subTitleText = "카페 글쓰기";

  return (
    <div>
      <SubTitleContainer>
        <SubTitle>{subTitleText}</SubTitle>
        <Button onClick={handleSave}>등록</Button>
      </SubTitleContainer>
      <ContentContainer>
        <TitleEdit
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Editor
          ref={editorRef}
          initialValue={post ? post.content.toString() : " "}
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={false}
          onChange={handleContentChange}
        />
      </ContentContainer>
    </div>
  );
};

export default Edit;
