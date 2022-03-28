let Cart = (props) => {
   return (
      <li className="d-flex"><span className="dropdown-item"><span className="h5">{props.card.product} </span><span className="text-warning">{props.card.price}</span></span><button className="badge rounded-pill bg-danger ms-auto m-1 border border-0" onClick={()=>{props.btnClick(props.card)}}>X</button></li>
   )
}

export default Cart;