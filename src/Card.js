let Card = (props) => {
   let loop = (n) => {
      let stars = [];
      for(let i=1;i<=n;i++){
         stars.push(<img src="https://img.icons8.com/fluency/18/000000/star.png" />)
      }
      return stars;
      }
   return (
   <div className="col mb-5">
            <div className="card h-100">
                  {/*  Sale badge */}
            <div className="badge bg-dark text-white position-absolute sale-badge" >{ props.card.saleBadge?"Sale":"" }</div>
                  {/*  Product image */}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  {/* Product details */}
                  <div className="card-body p-4">
                     <div className="text-center">
                        {/* Product name */}
                        <h5 className="fw-bolder">{ props.card.product }</h5>
                        {/* Product reviews */}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                           { 
                              loop(props.card.review).map((star)=> star)                  
                           }
                        </div>
                        {/*  Product price */}
                        <span className={props.card.mutedPrice ? "text-muted text-decoration-line-through" : ""}> {  props.card.mutedPrice?props.card.mutedPrice:"" }</span>
                        {  " "+props.card.price }
                     </div>
                  </div>
                  {/*  Product actions */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                     <div className="text-center">
                        <button id={`btn-${props.card.id}`} className="btn btn-outline-dark mt-auto" onClick={() =>  props.card.btn== "Add to cart"? props.btnClick(props.card):"" } disabled={props.cartItems.some((obj)=>obj.id==props.card.id)}>{props.card.btn}</button>
                     </div>
                  </div>
            </div>
         </div>      
   )
}

export default Card;