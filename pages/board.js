import Board from '../components/Board'
import fetch from 'isomorphic-fetch'

// TODO: Fix this
const port = parseInt(process.env.PORT, 10) || 3000

const BoardPage = ({board, loaded}) => (loaded === true ? 
    <html>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous" />
      <Board board={board} />
    </html> : null)

BoardPage.getInitialProps = async function(props) {
  const url = (typeof window !== 'undefined' && window.location && window.location.origin) ? window.location.origin : `http://localhost:${port}`
  const res = await fetch(`${url}/api/v1/board/${props.query.boardType}/${props.query.boardId}?apiKey=${props.req.query.apiKey}`)
  const board = await res.json()
  return {
    loaded: true,
    board
  }
}

export default BoardPage