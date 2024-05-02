import React from 'react';

const Price = () => {
  return (
    <div>
      
      <div id="Price" className="mb-5">
      <div className="container">
        <div className="row">
          <div className="col mb-4 mt-4 text-center">
            <h1>Price</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="card shadow">
              <img src="../../img/furniture.jpg" className="card-img-top" alt="img-1" />
              <div className="card-body">
                <h5 className="card-title">Lab Area</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Computer</li>
                <li className="list-group-item">Laptop</li>
                <li className="list-group-item">CPU</li>
              </ul>
              <div className="card-body">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#cardLink"
                  className="card-link btn btn-primary btn-sm "
                  >Information</a                 
                >
                
                <a href="#" className="card-link btn btn-success btn-sm ">About</a>
              </div>
            </div>
          </div>
      
          <div className="col-sm-12 col-md-4">
            <div className="card shadow">
              <img
                src="../../img/lab.png"
                className="card-img-top"
                alt="img-2"
              />
              <div className="card-body">
                <h5 className="card-title">Furniture</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Chair</li>
                <li className="list-group-item">Desk</li>
                <li className="list-group-item">White Board</li>
              </ul>
              <div className="card-body">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#cardLink1"
                  className="card-link btn btn-primary btn-sm "
                  >Information</a
                >
                <a href="#" className="card-link btn btn-success btn-sm">About</a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-4">
            <div className="card shadow">
              <img src="../../img/tools.jpg" className="card-img-top" alt="img-3" />
              <div className="card-body">
                <h5 className="card-title">Electric Tools</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Drill Machine</li>
                <li className="list-group-item">Generator</li>
                <li className="list-group-item">Scru Driver</li>
              </ul>
              <div className="card-body">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#cardLink2"
                  className="card-link btn btn-primary btn-sm  "
                  >Information</a
                >
                <a href="#" className="card-link btn btn-success btn-sm">About</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Price;