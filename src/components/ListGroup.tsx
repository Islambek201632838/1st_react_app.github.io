import React from 'react'
import {useState} from 'react'
function ListGroup () {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    //arr[0] selectedIndex
    //arr[1] updater function
   
    return (
    <> 
        <h1 className='list title'>List</h1>
        {items.length===0 ? <p>No item Found</p> : null}
        <ul className="list-group">
            {items.map((item, index) => 
                <li className = {selectedIndex === index ? 
                                    "list-group-item-active" :
                                    "list-group-item"} 
                    key ={item}
                    onClick={() => setSelectedIndex(index)}
                >
                    {item}
                </li>)}
        </ul>
  </>)
}

export default ListGroup;