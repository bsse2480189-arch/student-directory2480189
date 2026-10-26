// useState hook import kiya (state ke liye)
import { useState } from 'react'
// Form component import kiya (contact form)
import Form from '../components/Form'
// List component import kiya (submitted messages ki list)
import List from '../components/List'

// Contact page ka component
function Contact() {

  // State: all submitted messages are stored here
  // messages = array jis mein saare messages hain, shuru mein khali array
  const [messages, setMessages] = useState([])

  // This function is passed to the Form component as a prop
  // Form jab naya message bheje to ye function chalta hai
  function handleAddMessage(newMessage) {
    // naya array bana ke state update karo
    setMessages([
      newMessage, // naya message sab se pehle (upar)
      ...messages // phir purane saare messages copy (spread operator)
    ])
  }

  // UI return ho rahi hai
  return (

    // container: content center karta hai, mt-4 = upar margin
    <div className="container mt-4">

      {/* page ki main heading */}
      <h1 className="mb-4">
        {/* heading ka text */}
        Contact Us
      {/* h1 khatam */}
      </h1>

      {/* Bootstrap row, g-4 = columns ke darmiyan gap */}
      <div className="row g-4">

        {/* pehla column: chhoti screen par poori width, medium par aadhi */}
        <div className="col-12 col-md-6">
          {/* Form component, handleAddMessage function prop (onSubmitData) ke taur par bheja */}
          <Form onSubmitData={handleAddMessage} />
        {/* column khatam */}
        </div>

        {/* doosra column: aadhi width */}
        <div className="col-12 col-md-6">
          {/* List component, messages array prop (items) ke taur par bheji */}
          <List items={messages} />
        {/* column khatam */}
        </div>

      {/* row khatam */}
      </div>

    {/* container khatam */}
    </div>

  )
}

// default export taake App.jsx mein import ho sake
export default Contact
