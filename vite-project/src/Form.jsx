import React from 'react'

function handleformsumbit(event){
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form() {
  return (
    <div><form>
        <input placeholder='write something' />
        <button onClick={handleformsumbit}>Sumbit</button>

    </form>
    </div>
  )
}
