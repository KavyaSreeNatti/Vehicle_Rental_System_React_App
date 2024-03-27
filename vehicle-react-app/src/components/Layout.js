import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-info navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/addcustomer" className="nav-link">Add Customer</Link>
              
            </li>

            <li className='nav-item'>
            <Link to="/deletecustomer" className="nav-link">Delete Customer</Link>
            </li>

            <li className='nav-item'>
            <Link to="/viewcustomer" className="nav-link">View All Customers</Link>
            </li>
            
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
