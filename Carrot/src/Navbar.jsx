import React from 'react';
import './navbar.css';
import logo from './assets/img/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <img src={logo} alt="Logo" />
          </div>
          <div className="col-sm-6">
            <div className="input-group mb-4">
              <input
                type="search"
                placeholder="Search for items"
                aria-describedby="button-addon5"
                style={{ border: '1px solid #64b496',borderRadius: '0px'  }}
                className="form-control"
              />
              
              {/* Dropdown for All Categories */}
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle p-2"
                  style={{ border: '1px solid #64b496',borderRadius: '0px' }}
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Categories
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              
              {/* Search Button */}
              <div className="input-group-append">
                <button
                  id="button-addon5"
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: '#64b496', color: 'white',borderRadius: '0px', paddingBottom:'8px' }}
                >
                  <SearchIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
