
export function Cell({canvas, pos, click}) {
    
    const cellStyle = {
        backgroundColor: `${canvas[pos]}`
    }


    return(
        <div className="w-4 h-4 border hover:" style={cellStyle} onClick={() =>click(pos)}>
        </div>
    )
}