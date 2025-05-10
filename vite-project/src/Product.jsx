import "./Product.css";

function Product({title,price,features}) {
  let styles = {backgroundColor : "blue"};
  return (
    <div className='Product' style={styles}>
        <h3>{title}</h3>
        <h5>Price:{price}</h5>
        <p>{features}</p>
    </div>
  );
}
 export default Product;
