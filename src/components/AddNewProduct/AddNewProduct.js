export default function AddNewProduct(props){
  return(
    <form>
    <input
      placeholder="Add a New Product"
      value={props.newProduct}
      onChange={event => props.setNewProduct(event.value)}
    />
    <button onClick={event => props.addItems(event)}> add product </button>
    </form>
    );
  }