import React, { Component } from 'react'
import BoardHeading from '../BoardHeading'
import Column from '../Column'

export default class Board extends Component {
  render () {
    console.log(this.props)
    if (!this.props.board) return (null)
    return (
    <div className="board">

        <h1 className="board__heading">{this.props.board.title}</h1>

        <div className="board__column--container">{
            this.props.board.columns.map(column => 
                <div className="board__column"><Column column={column}/></div>
            )
        }</div>

        <style jsx>{`
            .board {
                height: 100vh;
            }
            .board__heading {
                display: block;
                text-align: center;
            }
            .board__column--container {
                width: 100%;
                display: flex;
                flex-direction: "column";
            }
            .board__column {
                flex: 1 0 0;
            }
        `}</style>

    </div>
    )
  }
}