import React from 'react'
import './header.css'

import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Vamos construir algo incrível com GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, nemo libero. 
          Adipisci quasi, numquam sint eos ratione eligendi expedita commodi sunt, 
          maiores perspiciatis cupiditate harum alias iure unde molestiae natus.</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Seu Email' />
          <button type='button'>Inicie</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="People" />
          <p>1.600 pessoas acessaram em 24 horas</p>
        </div>
      </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header