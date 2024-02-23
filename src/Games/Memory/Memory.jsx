import { useState, useEffect } from 'react'
import '../../App.css'
import { MemoryCard } from './MemoCard';
import confetti from 'canvas-confetti';


export function Memory() {

    const CAT_IMAGES_API = "https://api.thecatapi.com/v1/images/search?limit=6"

    const [catImage, setCatImage] = useState([])
    const [memory, setMemory] = useState(shuffle([]))
    const [check1, setCheck1] = useState({ img: "", ind: null })
    const [check2, setCheck2] = useState({ img: "", ind: null })
    const [endGame, setEndGame] = useState(false)
    const [newImg, setNewImg] = useState(false)

    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "live_6ODnhDCTbINt4nqa3oa9Ff7nX5UdoEkPYxDIiMN80YKls7TPY6sUmDqd4Ie7KdJL"
        }
    }

    useEffect(() => {
        console.log(endGame)
        fetch(CAT_IMAGES_API, requestOptions)
            .then(resp => resp.json())
            .then(data => setCatImage(data.flatMap(dat => [{ img: dat.url, visible: false, ind: null }, { img: dat.url, visible: false, ind: null }])))
    }, [newImg])

    useEffect(() => {
        setMemory(shuffle(catImage?.map((item, i) => { return { ...item, ind: i } })))
    }, [catImage])


    function shuffle(array) {
        let counter = array.length;
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }


    const handleChange = (ind) => {
        let array = [...memory]
        console.log(ind, array[ind])
        if (memory[ind].visible) {
            return
        } else if (check1.img === "") {
            array[ind].visible = true
            setMemory(array)
            setCheck1({ img: array[ind].img, ind: ind })
        } else if (check1.img !== "" && check2.img === "") {
            array[ind].visible = true
            setMemory(array)
            setCheck2({ img: array[ind].img, ind: ind })
        }
    }

    useEffect(() => {

        if (check1.img !== "") {
            if (check2.img !== check1.img) {
                let memo = [...memory]
                memo[check1.ind].visible = false
                memo[check2.ind].visible = false

                setTimeout(() => {
                    setCheck1({ img: "", ind: null })
                    setCheck2({ img: "", ind: null })
                    setMemory(memo)
                }, 1000)
            } else if (check2.img === check1.img) {
                setCheck1({ img: "", ind: null })
                setCheck2({ img: "", ind: null })
            }
        }
    }, [check2])

    useEffect(() => {
        if (memory.length) {
            if (memory?.every((val) => val.visible === true)) {
                setEndGame(true)
                confetti()
            }
        }
    }, [memory])

    return (
        <div className='h-screen flex flex-col'>
            <div className='h-1/6'>
                {
                    endGame &&
                    <h1 className='w-fit m-auto mt-16 text-4xl'>HAS GUANYAT!!!</h1>
                }
            </div>
            <div className='h-5/6 flex flex-col justify-evenly items-center'>
                {
                    catImage.length !== 0
                        ? <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
                            {
                                memory.map((memo, ind) => <MemoryCard key={memo.ind} card={memo} ind={ind} set={handleChange} />)
                            }
                        </div>
                        : <h1>Cargando Memory</h1>
                }
                <section className='flex gap-16'>
                    <button className='colorRainbow hover:text-transparent hover:animate-gradient' onClick={() => setMemory(shuffle(catImage?.map((item, i) => { return { ...item, ind: i } })))}>Mezclar</button>
                    <button className='colorRainbow hover:text-transparent hover:animate-gradient' onClick={() => setNewImg(!newImg)}>Nuevas Imagenes</button>
                </section>
            </div>
        </div >
    )
}