import React from 'react';

function Footter(){
    return(
      <div className="footer">
        <div>
        <p class="follow" align="left"><b> Follow Us On:</b></p>
          <div className="social-icons">
          <a href="https://www.facebook.com"><img src="./images/fb1.png" alt="" width="30px" height="30px"/></a>
          <img src="./images/goo.png" alt="" width="30px" height="30px"/>
          <img src="./images/tw.png" alt="" width="30px" height="30px"/>
          </div>
        <p class="payment" align="right"><b> Payment Methods: </b></p>
        <div class="pay-icons">
        <img src="./images/visa.png" alt="" width="30px" height="30px"/>
          <img src="./images/master.png" alt="" width="30px" height="30px"/>
        </div>
        </div>
      </div>
    );
}
export default Footter;