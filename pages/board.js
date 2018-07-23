// @flow
import React from 'react'
import Layout from '../components/Layout'
import Board from '../components/Board'
import fetch from 'isomorphic-fetch'

import BoardEntity from '../server/entity/board'

// TODO: Fix this
const port = parseInt(process.env.PORT, 10) || 3000

const BoardPage = ({board}) => (<Layout><Board board={board} /></Layout>)

BoardPage.getInitialProps = async function(props) {
  const url = (typeof window !== 'undefined' && window.location && window.location.origin) ? window.location.origin : `http://localhost:${port}`
  const res = await fetch(`${url}/api/v1/board/${props.query.boardType}/${props.query.boardId}?apiKey=${props.req.query.apiKey}`)
  const board = await res.json()
  return {
    board
  }
}

export default BoardPage