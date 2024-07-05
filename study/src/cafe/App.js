import React, { useState, useRef, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import PostList from './postList.js';
import Content from './content.js';
import Edit from './edit.js';

export const AppContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(1);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('postsData'));
    if (storedData && storedData.length > 0) {
      setData(storedData);
      dataId.current = storedData.length + 1;
    } else {
      writePost("제목1", "내용1", "작성자1", 10);
      writePost("제목2", "내용2", "작성자2", 20);
      writePost("제목3", "내용3", "작성자3", 30);
    }
    setData(storedData);
    dataId.current = storedData.length + 1;

  }, []);

  const writePost = (title, content, writer) => {
    const newItem = {
      id: dataId.current,
      title,
      content,
      writer,
      views: 0,
      dateCreated: new Date().toLocaleDateString(),
    };
    dataId.current += 1;
    const newData = [newItem, ...data];
    setData(newData);
    localStorage.setItem('postsData', JSON.stringify(newData));
  };

  const writeComment = (postId, commentContent) => {
    const randomAuthor = `익명${Math.floor(Math.random() * 1000)}`; // 임의의 숫자 생성
    const newComment = {
      content: commentContent,
      writer: randomAuthor,
      dateCreated: new Date().toLocaleDateString(),
    };
  
    const newData = data.map(item => {
      if (item.id === postId) {
        const updatedItem = {
          ...item,
          comments: item.comments ? [...item.comments, newComment] : [newComment]
        };
        return updatedItem;
      }
      return item;
    });
  
    setData(newData);
    localStorage.setItem('postsData', JSON.stringify(newData));
  };


  const modifyPost = (id, title, content) => {
    const newData = data.map(item =>
      item.id === id ? { ...item, title, content } : item
    );
    setData(newData);
    localStorage.setItem('postsData', JSON.stringify(newData));
  };

  const deletePost = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
    localStorage.setItem('postsData', JSON.stringify(newData));
  };

  return (
    <AppContext.Provider value={{ data, setData, writePost, modifyPost, deletePost, writeComment }}>
      <Router>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/content/:id" element={<Content />} />
          <Route path="/Edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
