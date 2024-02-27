import React from 'react';
import '../index.css'

function Meme() {

  const [meme, setMeme] = React.useState({
    topText: '',
    bottonText: '',
    randomImage:'http://i.imgflip.com/1bij.jpg'
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getRandomImgMeme() {
    const random = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[random].url
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
        <img src={meme.randomImage} alt='meme' className='meme-image'/>
        <h2 className='meme-text top'> {meme.topText} </h2>
        <h2 className='meme-text bottom'> {meme.bottonText} </h2>
      </div>
    </main>
  )
}

export default Meme