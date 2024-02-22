import './App.css'

function App() {

  return (
    <div className=' h-screen'>
      <nav className='border-r-2 w-96 h-screen border-black p-4 flex flex-col justify-start items-center gap-16'>
        <header className='h-24 text-xl'>
          <h1>Choose the game you want to <br /> <span className='colorRainbow'>PLAY!!!</span></h1>
        </header>
        <main className='w-full h-full m-auto flex flex-col justify-start text-xl pl-2'>
          <h1>Tik Tak Toe</h1>
          <h1>Draw Sprites</h1>
          <h1>Memory</h1>
        </main>
      </nav>
    </div>
  )
}

export default App