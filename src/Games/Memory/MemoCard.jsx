/* eslint-disable react/prop-types */
export function MemoryCard({ card, set, ind }) {

  return (

    <div onClick={() => set(ind)} className={`rounded-lg w-36 h-36 bg-white border-4 border-black cursor-pointer overflow-hidden flex justify-center items-center`}>
      <img src={card.img} className={`min-h-20 ${!card.visible ? `invisible` : ``}`} alt="Imagen gatito" />
    </div>
  )
}
