import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import { NavLink } from "react-router-dom";


const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
    
  var showdate = new Date();
  var displaytodaysdate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
  var dt = showdate.toDateString();
  var displaytime = showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();
  if (item.length === 0) {
    return (
      <>


        <section className="main-cart-section">
          <h1>Expenditure on extra items (non-medicine) to be ordered monthly for hospital wards.</h1>
          <p className="total-items">
            We Want to  <span className="total-items-count">{totalItem} </span>{" "}
             items for this month.
             
             <center> <b> {dt} - {displaytime}</b></center>
          </p>
          
        </section>
      </>
    );
  }

  return (
    <>

<nav className="navbar-light-came">
        <form className="container-start">
        <div>
             <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                  </li>
                  <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <NavLink  to='/logout'> <button  class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Logout</button></NavLink>
                  </li>
                  </ul>
               </div>
        </form>
      </nav>
 
    
      <section className="main-cart-section">
        <h1>Expenditure on extra items (non-medicine) to be ordered monthly for hospital wards.</h1>
        <p className="total-items">
        We Want to purchase <span className="total-items-count">{totalItem} </span> 
        items for this month.    
                             <center> <b> {dt} - {displaytime}</b></center>
        </p>
        
           
          
         

        <div className="cart-items">
          <div className="cart-items-container">
          <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          
          <h3>
             Total : <span>Rs.{totalAmount}</span>
          </h3>
          
        
          <button>Print Here</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear
          </button>
        </div>
      </section>

    </>
  );
};

export default ContextCart;