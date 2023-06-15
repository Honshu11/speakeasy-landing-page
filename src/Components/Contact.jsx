import React, {useState} from 'react';


function Contact() {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [eventType, setEventType] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send form data to back end server or email service here. Need to implement separately.
    
    console.log('Form Submitted', {name, phoneNumber, email});

    setName('');
    setPhoneNumber('');
    setEmail('');
    setEventType('');
    };

    return (
    <div className="container" id='contact'>
        <hr className='text-light'/>
        <h1 className='contact-header text-white'>Contact Us</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-6 mx-auto">
                    <div className="mb-2">
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input type="text" className='form-control' id='name' value={name} placeholder='Name' onChange={(event) => setName(event.target.value)} required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="phone-number" className='form-label'>Phone Number</label>
                        <input type="tel" className="form-control" id='phone-number' value={phoneNumber} placeholder='Phone Number' onChange={(event) => setPhoneNumber(event.target.value)} required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id='email' value={email} placeholder='Email' onChange={(event) => setEmail(event.target.value)} required />
                    </div>  
                    <div className="mb-2">
                        <label htmlFor="event-type" className="form-label">Event Type</label>
                        <input type="text" className="form-control" id='event-type' value={eventType} placeholder='Event Type' onChange={(event) => setEventType(event.target.value)} />
                    </div>
                    <div className="pt-1">
                        <label htmlFor="additional-info" className="form-label">Additional Info</label>
                        <textarea name="additional-info" id="additional-info" cols="60" rows="6" placeholder='Additional Info'></textarea>
                    </div>
                    <button type='submit' className="btn btn-primary btn-lg my-4">Submit</button>
                </div>
            </div>  
        </form>
    </div>
    )
};

export default Contact;