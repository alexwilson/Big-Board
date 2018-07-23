import Image from '../Image'

export default props => (<div className="card">
  <div className="card--container">
    <Image className="card__image" src={props.card.priority.iconUrl} height="14px" width="14px" />
    <strong>{props.card.id}</strong>
    <p>{props.card.title}</p>
  </div>
  <style jsx>{`
    .card {
      padding: 0.25em;
      margin: 0.25em;
      border: 1px solid black;

      display: flex;
      flex-direction: column;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: .25rem;
    }
    .card__image {
        height: 14px;
        width: 14px;
    }
    p {
      margin: 0;
    }
  `}</style>
</div>)