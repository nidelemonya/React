import React from "react";

const chapterTree = {
  name: "总章节",
  children: [
    {
      name: "章节一",
      children: [
        {
          name: "第一节",
          children: [{ name: "第一小节" }, { name: "第二小节" }]
        },
        { name: "第二节" }
      ]
    },
    { name: "章节二", children: [{ name: "第三节" }, { name: "第四节" }] }
  ]
};

export default function App() {
  const node = tree => {
    return (
      <ul>
        <li>{tree.name}</li>
        {tree.children?.map(child => {
          return <li>{node(child)}</li>;
        })}
      </ul>
    );
  };
  return <div className="App">{node(chapterTree)}</div>;
}
