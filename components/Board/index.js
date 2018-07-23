import React, { Component } from 'react'
import Lane from '../Lane'

export default class Board extends Component {
  render () {
    if (!this.props.board) return (null)
    return (
    <div className="board">
        <h1 className="board__heading">{this.props.board.title}</h1>
        <div className="board__lane--container">{
            this.props.board.columns.map(column => 
                <div className="board__lane"><Lane column={column}/></div>
            )
        }</div>

        <style jsx>{`
            .board__heading {
                display: block;
                text-align: center;
                color: white;
            }
            .board__lane--container {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(1em, 1fr));
            }
        `}</style>

    </div>
    )
  }
}