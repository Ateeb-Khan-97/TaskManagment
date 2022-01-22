import React from 'react'

const ToDoLists = (props) => {

    return <div className='task animate__animated animate__backInDown'>
        <h2>{props.text}</h2>
        <button onClick={() => {
            props.onSelect(props.id);
        }}>X</button>
    </div>
}

export default ToDoLists
