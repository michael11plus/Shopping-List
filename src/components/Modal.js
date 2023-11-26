import './css/modal.css';
import { useState } from 'react';

const Modal = ({ setModalVisible, setShoppingList }) => {
    const [ input, setInput] = useState("");
    const handleChange = (event) => {
        setInput(event.target.value) 
    }

    const handleSubmit = (event) => {
        const list = {
            id: Math.floor(Math.random() * 300),
            name: input,
        }
        setShoppingList(previousShoppingList => [...previousShoppingList, list] );
        event.preventDefault();
        setModalVisible(false);
    }
    
    return(
        <div className='modal'>
            <button className="modal-close-btn" onClick={() => setModalVisible(false)}>ESC</button>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleChange}/>
                <button className="modal-create-btn" type='submit'>Create</button>
            </form>
        </div>
    )
}


export default Modal;