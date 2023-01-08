import React from 'react'
import Article from '../../components/article/Article'
import './blog.css'

import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Muita coisa está acontecendo, estamos escrevendo sobre isso.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgUrl={blog03} date="Janeiro, 2022" title="GPT-3 e Open AI são o futuro. Vamos explorar como é?" />
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article imgUrl={blog02} date='Janeiro, 2022' title="GPT-3 e Open AI são o futuro. Vamos explorar como é?" />
          <Article imgUrl={blog01} date="Janeiro, 2022" title="GPT-3 e Open AI são o futuro. Vamos explorar como é?" />
          <Article imgUrl={blog04} date="Janeiro, 2022" title="GPT-3 e Open AI são o futuro. Vamos explorar como é?" />
          <Article imgUrl={blog05} date="Janeiro, 2022" title="GPT-3 e Open AI são o futuro. Vamos explorar como é?" />
        </div>
      </div>
    </div>
  )
}

export default Blog