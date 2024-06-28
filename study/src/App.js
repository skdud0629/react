import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { List } from 'react-virtualized';
import { FaPlus, FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import { GlobalStyle, Container, Title, InputRow, Input, Button, ListContainer, ListItem, Checkbox, Text, IconButton } from './style';

const App = () => {
  const [data, setData] = useState([]);
  const [objective, setObjective] = useState("");
  const dataId = useRef(0);

  const onCreate = (check, content, modify) => {
    const newItem = {
      check,
      content,
      modify,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };


  const achieve = id => {
    setData(data.map(item => {
      if (item.id === id) {
        return { ...item, check: !item.check };
      }
      return item;
    }));
  };

  const AddData = () => {
    onCreate(false, objective, false);
    setObjective("");
  };

  const DeleteData = id => {
    setData(data.filter(item => item.id !== id));
  };

  const modify = id => {
    setData(data.map(item => {
      if (item.id === id) {
        return { ...item, modify: true };
      }
      return item;
    }));
  };

  const modifyData = (id, content) => {
    setData(data.map(item => {
      if (item.id === id) {
        return { ...item, content };
      }
      return item;
    }));
  };

  const checkContent = id => {
    setData(data.map(item => {
      if (item.id === id) {
        return { ...item, modify: false };
      }
      return item;
    }));
  };

  const ShowToast = () => {
    toast.error('할 일을 입력해주세요', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const rowRenderer = ({ index, key, style }) => {
    const item = data[index];
    return (
      <ListItem key={key} style={style}>
        <Checkbox checked={item.check} onClick={() => achieve(item.id)}>
          {item.check && <FaCheck color="white" />}
        </Checkbox>
        {!item.modify ? (
          <>
            <Text checked={item.check}>{item.content}</Text>
            <IconButton onClick={() => modify(item.id)}>
              <FaEdit />
            </IconButton>
            <IconButton onClick={() => DeleteData(item.id)}>
              <FaTrash />
            </IconButton>
          </>
        ) : (
          <>
            <Input
              value={item.content}
              onChange={(e) => modifyData(item.id, e.target.value)}
            />
            <IconButton onClick={() => checkContent(item.id)}>
              <FaCheck />
            </IconButton>
          </>
        )}
      </ListItem>
    );
  };

  return (
    <Container>
      <GlobalStyle />
      <ToastContainer />
      <Title>To Do List</Title>
      <InputRow>
        <Input
          placeholder="Add New Task"
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
        />
        <Button onClick={() => objective.trim() === '' ? ShowToast() : AddData()}>
          <FaPlus />
        </Button>
      </InputRow>
      <ListContainer>
        <List
          width={500}
          height={400}
          rowCount={data.length}
          rowHeight={40}
          rowRenderer={rowRenderer}
        />
      </ListContainer>
    </Container>
  );
};

export default App;


