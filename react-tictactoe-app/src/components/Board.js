import Square from './Square' //defalt 내보내기한 함수를 가져왔을 때
// import { Square } from './Square' //특정 함수만 가져왔을 때
import "./Board.css"

const Board = ({ squares, onClick }) => {

  const renderSquare = (i) => {
    return <Square
      value={squares[i]}
      onClick={() => onClick(i)}
    />
  }

  return (
    <div className='board-wrapper'>

      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )

}


export default Board

//this는 여기서 클래스를 가리킨다. this.renderSquare()라고 작성하면 이곳에서 renderSquare 함수를 호출한다는 뜻이 됨.
//<button className="square">Square Component</button>라고 하나하나 board-row에 작성해 주는 것도 가능하지만, 비효율적이다.
//이때 this.renderSquare()라고 작성해서 효율적으로 만들 수 있다.

