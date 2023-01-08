import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Você quer embarcar no futuro antes dos outros</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Ganhe o acesso antecipado</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links__logo'>
          <img src={gpt3Logo} alt="Logo" />
          <p>São Rafael, Colinas de pituaçu, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Redes Sociais</p>
          <p>Contadores</p>
          <p>Contato</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Empresa</h4>
          <p>Temos e condições</p>
          <p>Politicas e contrato</p>
          <p>Contato</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Fale comigo</h4>
          <p>São Rafael, Conjunto Colinas de Pituaçu</p>
          <p>71 9 99858360</p>
          <p>pedroalmeida.programador@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer