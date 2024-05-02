import React from 'react';

const ContactUs = () => {
    return (
        <div className='container mb-5'>
            <section id="Contact">
      <div class="container mb-5">
        <div class="row">
          <div class="col text-center p-5 shadow bg-light border">
            <h2>If you want you can contact us !!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              nisi placeat laborum nam nihil architecto at quaerat explicabo
              fugiat eius ab tempora sapiente tempore velit quasi esse maxime a
              excepturi.
            </p>
            <button
              class="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#ContactHere"
            >
              Contact Here
            </button>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ContactUs;