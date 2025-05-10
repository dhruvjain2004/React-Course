function dosomething(){
    console.log("hello world");
}
function handlemouseover(){
    console.log("hemloooo");
}


export default function Button() {
  return (
    <div>
        <button onClick={dosomething}>Click Me</button>
        <p onDoubleClick={handlemouseover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus similique recusandae, natus neque possimus tempore consequuntur quisquam dolorem illum enim magnam pariatur voluptatem autem in qui, voluptatum consectetur cum?</p>
    </div>
  )
}

