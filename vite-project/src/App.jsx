import './App.css';
import ProductTab from './ProductTab.jsx';
import Button from './button.jsx';
import Form from './Form.jsx';

/*function Title() {
  return (
    <div>
      <h1>I am the title</h1>
    </div>
  )
}

function Description(){
  return(
    <div>
      <h3>I am the description</h3>
    </div>
  )
}*/
function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      <ProductTab />
      <Button text='Click me' />
      <Form />

      {/*<Title />
      <Description />*/}
    </>  
  )
}

export default App;
