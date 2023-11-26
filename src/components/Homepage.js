import "./css/homepage.css";
import Modal from "./Modal";
import Navbar from "./Navbar";
import { useState } from 'react';
import { Link } from "react-router-dom";

 const Homepage = () => {  

    const [shoppingList, setShoppingList] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <div className="homepage">
            <Navbar />
            {modalVisible && <Modal setModalVisible={setModalVisible} setShoppingList={setShoppingList}/>}
            <button className="button-addnewlist" onClick={() => {setModalVisible(true)}}>Add List</button>
            <div className="shoppinglists-overview">
                {shoppingList.map(list => (
                    <Link to={`/${list.id}`}>
                        <div key={list.id} className="shopping-list-tile">
                        {list.name}
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Homepage;