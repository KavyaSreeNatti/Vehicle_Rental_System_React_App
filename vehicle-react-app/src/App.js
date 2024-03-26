import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddCustomer from './components/AddCustomer';
import DeleteCustomerComponent from './components/DeleteCustomer';
import Layout from './components/Layout';

function App() {
  return (
    <div className='App'>
      <h1>Welcome to React Router!</h1>
    
      <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path="addcustomer" element={<AddCustomer />} />
          <Route path='deletecustomer' element={<DeleteCustomerComponent />}/>
          </Route>
      </Routes>
    
    </div>
  );
}

export default App;
