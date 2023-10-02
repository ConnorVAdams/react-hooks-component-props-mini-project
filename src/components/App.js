import React from "react";
import blogData from "../data/blog";
import About from './About.js';
import ArticleList from './ArticleList.js'
import Header from './Header.js';

function App({about, image, name}) {
  return (
    <div className="App">
      <Header name={name}/>
      <About image={image} about={about} />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
