import React, { Component } from 'react'
import ColumnHeading from '../ColumnHeading'
import Card from '../Card'

export default class extends Component {
  render () {
    return <div className="column">
    <h4 className="column__heading">{this.props.column.title}</h4>
    <div>{this.props.column.cards.map(card => <Card key={card.id} card={card}/>)}</div>
    <style jsx>{`
            .column {
                display: flex;
                flex-direction: column;
            }
            .column__heading {
                color: #eee;
                display: block;
                text-align: center;
            }
        `}</style>
    </div>
  }
}