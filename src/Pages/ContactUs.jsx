import React from "react"

import ContactDetails from "../Components/ContactDetails"
import ContactForm from "../Components/ContactForm"
import Footer from "../Components/Footer"
const ContactUs = () => {
  return (
    <div className="flex flex-col h-[100vh]">
        <div className="max-w-5xl  mx-auto ">
      <div className="mx-auto mt-20 flex w-11/12  max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row pb-4">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default ContactUs