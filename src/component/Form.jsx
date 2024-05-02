import React from 'react';

const Form = () => {
    return (
        <div className='container mb-5'>
             <section className='mb-5' id="Form">
      <div className="container">
        <h1 className="text-center mt-4">Form</h1>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            <div className="card shadow p-5">
              <div className="card-body">
                
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                  </div>
                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label"
                      >Password</label
                    >
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="col-12">
                    <label for="inputAddress2" className="form-label"
                      >Address 2</label
                    >
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" for="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      data-bs-toggle="modal"
                      data-bs-target="#SignInForm"
                      className="btn btn-primary"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default Form;