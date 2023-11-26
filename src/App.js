import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path="/:id" element={<ShoppingList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
