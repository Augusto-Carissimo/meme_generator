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

  function handleChange(event) {
    const {name, value} = event.target

    setMeme(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  console.log(meme)

  return(
    <main>
      <div className='form'>
        <input
          type='text'
          placeholder='Top text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
          className='form-input'
        />
        <input
          type='text'
          placeholder='Bottom text'
          name='bottonText'
          value={meme.bottonText}
          onChange={handleChange}
          className='form-input'
        />
        <button onClick={getRandomImgMeme} className='form-button'> Get a new image </button>
      </div>
      <div className='meme'>
        <img src={require("../images/memes/" + meme.randomImage)} className='meme-image'/>
        <h2 className='meme-text top'> {meme.topText} </h2>
        <h2 className='meme-text bottom'> {meme.bottonText} </h2>
      </div>
    </main>
  )
}

export default Meme