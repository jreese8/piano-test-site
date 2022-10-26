import React from 'react';

function ContactForm() {
  return (
    <div>
      <div className="contact">
          <h1>Contact Us</h1>
  
          <form target="_blank" action="https://formsubmit.co/905dfbcbc473117283581859ec676ab6" method="POST">

                <div className="pt-3">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                </div>
        
                <div className="pt-3">
                  <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                </div>

            <div className="pt-3">
              <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
            </div>

            <div className="pt-3">
              <button type="submit">Submit</button>
            </div>

          </form>
      </div>

    </div>
   
  );
}

export default ContactForm;