import React from 'react'

class ContactForm extends React.Component {
  render () {
    return (
<div id='move-left'>
  <h3>Contact</h3>

  <form action="https://mailthis.to/austinloveless5171@gmail.com"
      method="POST">

    <label for="fname"> Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Email</label>
    <input type="email" type="text" id="email" name="_replyto" name="email" placeholder="Your email"/>


    <label for="subject">Message</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input type="submit" value="Submit"/>


  </form>
  
</div>
    )
  }
}




export default ContactForm
