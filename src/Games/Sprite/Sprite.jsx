import { useEffect, useState } from 'react'
import '../../App.css'
import { Table } from './Table'
export function Sprite() {

    const [size, setSize] = useState(0)
    const [color, setColor] = useState("#FFFFFF")
    const [canvas, setCanvas] = useState(new Array(size * size).fill("#FFFFFF"))

    useEffect(() => {
        setCanvas(Array(size * size).fill("#FFFFFF"))
    }, [size])

    const clickCell = (pos) => {
        let newCanvas = [...canvas]
        newCanvas[pos] = color
        setCanvas(newCanvas)
    }

    const neteja = () => {
        const cleanedCanvas = new Array(size * size).fill("#FFFFFF")
        setCanvas(cleanedCanvas)
    }

    const handleColorChange = (event) => {
        const nuevoColor = event.target.value;
        setColor(nuevoColor);
    };

    return (
        <div className='h-full '>
            <header className='text-6xl py-8 text-center'>
                <h1>DRAW SPRITE</h1>
            </header>
            <main className='flex flex-col justify-center items-center gap-4'>
                <label htmlFor="size">Canvas Size:</label>
                <input className='border-4 border-black w-16' min="0" onChange={(e) => setSize(e.target.value)} type="number" />
                <label htmlFor="colorPicker">Color:</label>
                <input
                    className='w-16 h-16 border-4 border-black'
                    type="color"
                    id="colorPicker"
                    name="colorPicker"
                    value={color}
                    onChange={handleColorChange}
                />
                <Table canvas={canvas} click={clickCell} mida={size} />
                <button onClick={neteja}>Clean Sprite</button>
            </main>
        </div>
    )
}