import React, { useState } from "react";

const Noticeboard = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "첫 번째 글",
      contents: "React 첫 Study",
    },
    {
      id: 2,
      title: "두 번째 글",
      contents: "다음 화이팅!",
    },
  ]);

  const [inputtitle, setinputtitle] = useState("");
  const [inputcontents, setinputcontents] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setinputtitle(e.target.value);
  const onChange2 = (e) => setinputcontents(e.target.value);

  const onClick = () => {
    const nextLists = lists.concat({
      id: nextId,
      title: inputtitle,
      contents: inputcontents,
    });
    setNextId(nextId + 1);
    setLists(nextLists);
    setinputtitle("");
    setinputcontents("");
  };

  const onRemove = (id) => {
    const nextLists = lists.filter((name) => name.id !== id);
    setLists(nextLists);
  };

  const nameLists = lists.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      글 제목 : {name.title}
      <br></br>
      내용 : {name.contents}
    </li>
  ));

  return (
    <div>
      <h1>게시판</h1>
      <input
        type="text"
        name="title"
        placeholder="글 제목"
        value={inputtitle}
        onChange={onChange}
      />
      <br />
      <textarea
        type="text"
        name="contents"
        placeholder="내용"
        value={inputcontents}
        onChange={onChange2}
      />
      <br />
      <input type="file" 속성="값"></input>
      <br />
      <button onClick={onClick}>작성하기</button>
      <ul style={{listStyle:"none"}}>{nameLists}</ul>
    </div>
  );
};

export default Noticeboard;
