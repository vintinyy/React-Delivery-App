export default function ProductCard(props) {
    return (
      <div>
        <p>{props.id}</p>
        <h1>{props.name} </h1>
        <img src={props.image} />
        <h1>{props.price}</h1>
        <h1>{props.description}</h1>
      </div>
    );
  } 