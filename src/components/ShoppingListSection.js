import './shoppinglistsection.css';
import ShoppingList from './ShoppingList';
import { ShoppingListData } from '../data/ShoppingListData'; 

const ShoppingListSection = () => {
    return(
        <div className='shoppinglistsection'>    
            <ShoppingList data={ ShoppingListData }/>
        </div>
    )
}


export default ShoppingListSection;