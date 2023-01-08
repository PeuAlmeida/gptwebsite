import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const Features = () => {

  const featuresData = [
    {
      title: 'Melhorando constantemente ',
      text: 'Praesent sit amet sagittis ipsum, ut porttitor sem. In tempus consectetur diam.'
    },
    {
      title: 'Seja ativo ',
      text: 'varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent sodales nisl eu laoreet condimentum. Curabitur ultricies augue et mauris cursus auctor'
    },
    {
      title: 'Ajude a IA a melhorar ',
      text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      title: 'A IA aprende com comandos simples ',
      text: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in est malesuada, sagittis justo sed, maximus ex. Integer a convallis ante. Phasellus leo ex, luctus id auctor non, vehicula at elit. Phasellus sed semper nunc, ut dignissim nulla. Praesent eu bibendum magna.' 
    }
  ]

  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>O Futuro é Agora e Você Só Precisa Concretizá-lo.
          Entre no futuro hoje e faça acontecer.</h1>
        <p>Ganhe seu acesso antecipado para iniciar</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature key={item.title + index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default Features