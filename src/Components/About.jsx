import React from 'react';

function About() {
  return (
    <section className="py-5 text-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="display-4 mb-4">Welcome to The Midnight Social Club</h2>
            <p className="lead">
              Step back in time to the era of Prohibition and indulge in the clandestine world of The Midnight Social Club. We are a mobile cocktail business specializing in recreating the ambiance of the roaring 1920s speakeasies. 
            </p>
            <p className="lead">
              Our expert mixologist are dedicated to crafting the finest handcrafted cocktails using the highest quality of ingredients. We pride ourselves to our attention to detail and commitment to delivering an unforgettable experience for our clients. 
            </p>
          </div>
          <div className="col-lg-6">
            <img src="" alt="speakeasy mobile interior or mixologist in action (picture)" className='img-fluid rounded' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;