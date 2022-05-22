import React from 'react'
import './Form.scss'

const Form = () => {
  return (
    <section className="contact-in" id="contact">
    <div className="contact-map" >
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.744365190312!2d15.87891341589127!3d49.22437498282095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d423cc7826003%3A0x3b76432ef286e1d6!2zSmFyb3NsYXZhIEhhxaFrYSA2NzQvNiwgTm92w6kgRHZvcnksIDY3NCAwMSBUxZllYsOtxI0!5e0!3m2!1scs!2scz!4v1632589015390!5m2!1scs!2scz" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    </div>
    <div className="contact-form" >
        <h1>Pošlete mi email:</h1>
         <form method="POST" action="https://formsubmit.co/dejwatest2@gmail.com"> 
        
            <input className="contact-form-item" type="text" placeholder="Vaše jméno" name="name" required/>
            <input className="contact-form-item"type="text" placeholder="Váš email" name="_replyto" required/>
            <textarea className="contact-form-textArea" type="text" placeholder="Text zprávy" id="" cols="30" rows="10" name="comment" required></textarea>
            <input type="submit" name="Submit" className="contact-form-btn btn" value="Odešli dotaz" />
        </form>
      
    </div>
</section>
  )
}

export default Form