import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return(
        <>
            <div id="notfound">
                <div className="container">
                    <div className="notfound-404">
                        <h1>404</h1>

                    </div>
                      <h2>We are sorry, page not found!</h2>
                      <p className="mb-5">
                          The page you are looking for might have been removed
                          had its name changed or is temporarily unavailable.
                      </p>
                      <div class="d-grid gap-2 col-6 mx-auto">
                      <NavLink className="" to="/FirstPage">  <button class="btn btn-info" type="button">Back to Page</button></NavLink>
                        
                    </div>
                     
                </div>

            </div>
        
        </>
    )

}
export default ErrorPage