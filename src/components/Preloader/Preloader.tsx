import React from 'react'
import loading from '../../assets/loading.svg'

const Preloader = () => {
  return (
    <div style={{maxWidth:'100vw', maxHeight:'100vh', textAlign:'center'}}>
      <img src={loading} alt='loading...'/>
    </div>
  )
}

export default Preloader
