import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function NavBar (){
  return <h1>NavBar tools</h1>
}

function Home (){
  return <h2>Home tools</h2>
}

function App() {
  return (
    <div>
      <Home/>
      <NavBar/>
      <Article />
      <Comment />
    </div>
  );
}

export default App;
