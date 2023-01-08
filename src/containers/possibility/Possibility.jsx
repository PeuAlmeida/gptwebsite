import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="Mulher utilizando VR" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Ganhe seu acesso antecipado para iniciar</h4>
        <h1 className='gradient__text'>As possibilidades estão além da sua imaginação</h1>
        <p>Nullam libero nisl, dapibus pulvinar porttitor congue, condimentum et tellus.
          Maecenas eget leo condimentum, pretium elit nec, mollis nisl. Suspendisse suscipit,
          magna ac hendrerit eleifend, justo nisl vestibulum leo, quis tincidunt erat erat vel
          felis.</p>
        <h4>Ganhe seu acesso antecipado para iniciar</h4>
      </div>

    </div>
  )
}

export default Possibility