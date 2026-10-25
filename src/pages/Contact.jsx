import { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'

function Contact() {

  // State: all submitted messages are stored here
  const [messages, setMessages] = useState([])

  // This function is passed to the Form component as a prop
  function handleAddMessage(newMessage) {
    setMessages([
      newMessage,
      ...messages
    ])
  }

  return (

    <div className="container mt-4">

      <h1 className="mb-4">
        Contact Us
      </h1>

      <div className="row g-4">

        <div className="col-12 col-md-6">
          <Form onSubmitData={handleAddMessage} />
        </div>

        <div className="col-12 col-md-6">
          <List items={messages} />
        </div>

      </div>

    </div>

  )
}

export default Contact
