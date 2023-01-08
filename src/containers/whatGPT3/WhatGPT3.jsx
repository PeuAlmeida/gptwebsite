import React from 'react'
import Feature from '../../components/feature/Feature'

import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgp3-feature'>
        <Feature
          title="O que é o GPT3"
          text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sit, quia voluptatum
           doloremque nisi nemo vero quis repellendus numquam 
          reprehenderit molestias illo molestiae provident aliquid illum repellat dicta et dolorum.' />
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>As possibilidades estão além da sua imaginação</h1>
          <p>Explore os Recursos</p>
        </div>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title='Chatbots'
          text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sit, quia voluptatum
          doloremque nisi nemo vero quis repellendus numquam '/>
        <Feature
          title='Conhecimento'
          text=' doloremque nisi nemo vero quis repellendus numquam 
          reprehenderit molestias illo molestiae provident aliquid illum repellat dicta et dolorum.' />
        <Feature
          title='Educação'
          text=' doloremque nisi nemo vero quis repellendus numquam 
          reprehenderit molestias illo molestiae provident aliquid illum repellat dicta et dolorum.' />
      </div>
    </div>
  )
}

export default WhatGPT3