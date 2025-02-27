import React from "react";
import Facility from "@/components/Common/Facility";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactForm from "@/components/ContactUs/ContactForm";

const ContactUs = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />

      <ContactForm />

      <Facility />
    </>
  );
};

export default ContactUs;
