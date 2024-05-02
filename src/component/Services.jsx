import React from 'react';

const Services = () => {
    return (
        <div className='mb-5'>

            <div id="Services">
      <div className="container">
        <div className="row">
          <div className="col mt-5 mb-5 text-center">
            <h1>Our Services</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 ">
            <div className="card shadow">
              <img
                src="../../img/service-images/service-1.jpg"
                className="card-img-top"
                alt="service-img1"
              />
              <div className="card-body">
                <h5 className="card-title">Lab Assistant</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#labassistant"
                  className="btn btn-primary"
                  >Read About</a
                >
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card shadow">
              <img
                src="../../img/service-images/service-3.jpg"
                className="card-img-top"
                alt="service-img2"
              />
              <div className="card-body">
                <h5 className="card-title">Project</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#Project"
                  className="btn btn-primary"
                  >Read About</a
                >
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card shadow">
              <img
                src="../../img/service-images/service-2.jpg"
                className="card-img-top"
                alt="service-img3"
              />
              <div className="card-body">
                <h5 className="card-title">Finance</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#Finance"
                  className="btn btn-primary"
                  >Read About</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Services;