import { useState } from 'react'
import './App.css'
import { Sprite } from './Games/Sprite/Sprite'
import { Memory } from './Games/Memory/Memory'
import { Tiktaktoe } from './Games/TikTakToe/Tiktaktoe'

function App() {

  const [rainBow, setRainBow] = useState("tiktak")

  return (
    <div className='h-screen grid grid-cols-10'>
      <nav className='border-r-2 col-span-2 h-screen border-black p-4 flex flex-col justify-start items-center gap-8'>
        <header className='h-24 text-xl'>
          <h1>Choose and <br /><span className='colorRainbow text-transparent animate-gradient text-4xl'>PLAY BIGBANGTECH!!!</span></h1>
        </header>
        <main className='w-full h-1/2 flex flex-col justify-center gap-8 text-xl pl-2'>
          <h1 className={`${rainBow === "tiktak" ? `colorRainbow text-transparent animate-gradient` : ``} cursor-pointer [word-spacing:-10px]`} onClick={() => setRainBow("tiktak")}>Tik Tak Toe</h1>
          <h1 className={`${rainBow === "sprites" ? `colorRainbow text-transparent animate-gradient` : ``} cursor-pointer`} onClick={() => setRainBow("sprites")} /*onMouseLeave={() => setRainBow("")}*/>Draw Sprites</h1>
          <h1 className={`${rainBow === "memo" ? `colorRainbow text-transparent animate-gradient` : ``} cursor-pointer`} onClick={() => setRainBow("memo")}>Memory</h1>
        </main>
      </nav> 

      <main className='col-span-8'>
        {
          rainBow === "tiktak" &&
          <Tiktaktoe />
        }
        {
          rainBow === "sprites" &&
          <Sprite />
        }
        {
          rainBow === "memo" &&
          <Memory />
        }
      </main>
    </div>
  )
}

export default App