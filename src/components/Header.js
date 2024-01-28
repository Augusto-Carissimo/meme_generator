import '../index.css'
import troll_face from '../images/troll_face.png'

function Header() {
  return(
    <header className='header'>
      <img src={troll_face} alt='troll_face' className='header-img'/>
      <h2 className='header-title'> Meme Generator </h2>
      <h4 className='header-text'> React Course - Project 3 </h4>
    </header>
  )
}

export default Header