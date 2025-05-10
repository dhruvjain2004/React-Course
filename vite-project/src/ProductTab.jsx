import Product from './Product.jsx';

function ProductTab() {
    let options = [<li>"hi-tech"</li>,<li>"durable"</li>];
    return (
        <>
        <Product title="Phone" price="10000" features={options}/>
        <Product title="Laptop" price="100000"/>
        <Product title="Pen" price="100"/>
        </>
    )
}
export default ProductTab;