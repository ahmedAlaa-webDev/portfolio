import React, { useRef,useState } from "react";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "@emailjs/browser";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "ahmedrbee2001@gmail.com",
    link: "mailto:ahmedrbee2001@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "RedaTech",
    link: "https://m.me/houdareda.99",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "+201033774955",
    link: "https://api.whatsapp.com/send?phone=201033774955",
  },
];

function Contact() {
   const [open, setOpen] = useState(false);
   const [status, setStatus] = useState("success");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1kjsoov", "template_8k5vjop", form.current, {
        publicKey: "hvk6ogHlTPT3-xj46",
      })
      .then(
        () => {
          handleClick("success")
        },
        () => {
          handleClick("error")
        }
      );

    e.target.reset();
  };

   const handleClick = (type) => {
    setStatus(type);
    setOpen(true);
  };

  return (
    <section className="contact" id="contact">
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={status}
          sx={{ width: "100%", backgroundColor:"green" ,fontWeight:'20px',color:"white" }}
        >
          {status === "success"
            ? " Message sent successfully "
            : " Failed to send message!"}
        </Alert>
      </Snackbar>
      <div className="top_section">
        <h5>Get in Touch</h5>
        <h2>Contact My</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Send Message
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" name="name" />
          <input type="email" placeholder="Youer Email" name="message" />
          <textarea
            rows={16}
            placeholder="Enter Your message"
            name="message"
            id=""
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
