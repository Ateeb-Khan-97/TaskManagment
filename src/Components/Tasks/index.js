import React, { useState } from 'react';
import ToDoList from "./ToDoLists";
const Index = () => {
    const [item, setItem] = useState("");
    const [allItems, setAllItems] = useState([]);

    const itemAdder = () => {
        if (item === "") {

        } else {
            setAllItems((oldItems) => {
                return [...oldItems, item];
            });
            setItem("");
        }
    }

    const deleteItems = (id) => {
        setAllItems((oldItems) => {
            return oldItems.filter((arrElement, index) => {
                return index !== id;
            });
        });
    };
    const enterFunction = (e) => {
        if (e.keyCode == 13) {
            itemAdder();
        }
    }
    return (
        <>
            <div className='logOutDiv'>
                <a href='/'>LogOut</a>
            </div>
            <div className='taskMainBody'>
                <h1 className='taskBodyMainHeading'>Task Manager</h1>
                <div className='taskBody'>
                    <div className='taskAdderDiv'>
                        <input autoComplete='off' onKeyDown={enterFunction} onChange={e => setItem(e.target.value)} value={item} placeholder='Enter Task' />
                        <button onClick={itemAdder}>Add</button>
                    </div>
                    <div className='taskListDiv'>

                        {
                            allItems.map((itemValue, index) => {
                                return <ToDoList
                                    key={index}
                                    id={index}
                                    text={itemValue}
                                    onSelect={deleteItems}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
