import React from 'react';
import '../index.css'
import memeData from '../memeData.js'

function Meme() {

  const [meme, setMeme] = React.useState({
    topText: '',
    bottonText: '',
    randomImage: 'Group 77.png'
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memeData)

  function getRandomImgMeme() {
    const memeArray = allMemeImages.data.memes
    const random = Math.floor(Math.random() * memeArray.length)
    const url = memeArray[random].url
    setMeme(prevState => ({
      ...prevState,
      randomImage: url
    }))
  }

  return(
    <main>
      <div className='form'>
        <input type='text' placeholder='Top text' className='form-input'/>
        <input type='text' placeholder='Bottom text' className='form-input'/>
        <button onClick={getRandomImgMeme} className='form-button'> Get a new image </button>
      </div>

      <img src={require("../images/memes/" + meme.randomImage)} className='meme-image'/>
    </main>
  )
}

export default Meme