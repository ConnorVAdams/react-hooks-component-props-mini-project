import React from 'react'
import Article from './Article.js'

const ArticleList = (posts) => {
  const articles = posts.posts.map(post => <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/> )
  return (
    <main>
        {articles}
    </main>
  )
}

export default ArticleList