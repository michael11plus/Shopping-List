import './css/shoppinglist.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import List from './List';
import Navbar from './Navbar';

const ShoppingList = ({ data }) => {
    const [ nameInput, setNameInput ] = useState("");

    const [ isChange, setIsChange ] = useState(false);

    const [ listName, setListName ] = useState('');

    const handleInputChange = (event) => {
        setNameInput(event.target.value)
    } 

    const change = () => {
        setIsChange(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setListName(nameInput)
        setIsChange(false)
        
        
    }


    return(
        <div className='shoppinglist'>    
           <Navbar />
       

            <div className='shoppinglist--section'>
                <List />

                <div className='shoppinglist--actions'>
                    
                    <div className="shoppinglist--actions--add-user">
                        <h4>Add User</h4>
                        
                        <div className="shoppinglist--actions--add-user-input">
                            <input type="text" className="user-input" placeholder="Username"/>
                            <button className="shoppinglist--actions--add-user-btn">+</button>
                        </div>
                    </div>

                    <div className="shoppinglist--actions--filter-section">
                        <h4>Filter</h4>
                        <div className="shoppinglist--actions--filter-options">
                            <label className='solved'>
                                <input type="radio" name="filter" value="solved"/> Solved
                            </label>
                            <label className='solved'>
                                <input type="radio" name="filter" value="unsolved"/> Unsolved
                            </label>
                        </div>
                        <button className="shoppinglist--actions--filter-btn">Filter</button>
                    </div>
                    <Link to='/'>
                        <button className="shoppinglist--actions--quit-list-btn">QUIT LIST</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}


export default ShoppingList;