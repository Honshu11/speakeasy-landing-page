import React from 'react';

function Testimonials() {
  return (
    <div className='container mt-5' id='testimonials'>
        <hr className='border border-light'/>
        <h2 className='mb-4 text-white'>Testimonials</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"The Midnight Social Club was absolutely fantastic! From the professional and friendly Mixologist, to the delicious and expertly crafted cocktails, it was a wonderful experience. I highly recommend their services."</p>
                            <h5 className="card-title">-John Doe</h5>
                            <p className='card-text'>Business Owner</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"I recently hired The Midnight Social Club for one of my events, and they exceeded all expectations. The mixologists were incredibly skilled and professional, and the cocktails they served were simply devine. The speakeasy theme added a unique touch, making it a memorable experience for all attendees."</p>
                            <h5 className="card-title">-Jane Smith</h5>
                            <p className='card-text'>Event Planner</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"As a food critic, I've had the pleasure of experiencing various cocktail services, and I must say, Midnight Social Club stands out from the rest. The professionalism of their Mixologist, combined with the exceptional quality and craft of their cocktails, created a truly delightful and memorable experience. I will certainly book them again!"</p>
                            <h5 className="card-title">-Sam Johnson</h5>
                            <p className='card-text'>Food Critic</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Testimonials;