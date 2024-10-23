import { IMail } from "@/app/utils/interfaces";
import { sendMail } from "@/app/utils/sendMail";
import { motion } from "framer-motion";
import { p } from "framer-motion/client";
import { easeIn } from "framer-motion/dom";
import React, { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";

function Contact() {
  const text = "Let's work together";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const form = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (displayedText.length > 1) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex(1);
        }
      } else {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      }
    };

    const typingSpeed = isDeleting ? 100 : 200;
    const timer = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(timer);
  }, [displayedText, isDeleting, index, text]);

  const contacts = [
    {
      text: "Phone",
      icon: <FaPhoneAlt />,
      value: ["+971 556057887", "+91 8086924467"],
    },
    {
      text: "Email",
      icon: <FaEnvelope />,
      value: "aryaglekshmi@gmail.com",
      onClick: () => {
        window.location.href = "mailto:aryalekshmi@gmail.com";
      },
    },
    {
      text: "Address",
      icon: <FaLocationDot />,
      value: "Dubai, UAE",
    },
    {
      text: "Home Address",
      icon: <IoHomeSharp />,
      value: "Kollam, Kerala, India",
    },
  ];
  const [formData, setFormData] = useState({} as IMail);

  async function handleFormSubmit(e: any) {
    e.preventDefault();
    const res = await sendMail(formData);
    console.log("🚀 ~ go ~ res:", res)
  
  }

  const updateFormData = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [field]: e.target.value?.trim(),
    });
};

  return (
    <motion.section
      initial={{ opacity: 0, x: 500 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
      className="lg:min-h-[80vh] min-h-[70vh] flex flex-col justify-center py-4 pr-5 lg:py-12 lg:px-10 xl:px-0"
    >
      <div className="container mx-auto h-full flex justify-center items-center gap-4 lg:flex-row flex-col">
        <div className="p-6 flex flex-col gap-4 bg-[#27272c] ">
          <h2 className="font-bold text-xl text-accent">{displayedText}</h2>
          <p className="text-white/80 md:text-base text-sm">
            Got a cool idea or project? Let’s make it happen together! Reach out
            and let’s create something awesome!
          </p>
          <form
            className="flex flex-col gap-4 text-base"
            onSubmit={handleFormSubmit}
            id="contactForm"
            ref={form}
          >
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Your good name?
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Name"
                onChange={(e) => updateFormData('from_name', e)}               
                className="w-full p-2 rounded bg-[#333333] outline-none text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="from_email" className="block text-white mb-2">
                How can i connect?
              </label>
              <input
                type="from_email"
                id="from_email"
                name="from_email"
                placeholder="Email"
                onChange={(e) => updateFormData('from_email', e)}               
                className="w-full p-2 rounded bg-[#333333] outline-none text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="from_email" className="block text-white mb-2">
                Contact number?
              </label>
              <input
                type="from_phone"
                id="from_phone"
                name="from_phone"
                placeholder="Phone number"
                onChange={(e) => updateFormData('from_phone', e)}               
                className="w-full p-2 rounded bg-[#333333] outline-none text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="from_email" className="block text-white mb-2">
                Subject
              </label>
              <input
                type="subject"
                id="subject"
                name="subject"
                placeholder="Subject"
                onChange={(e) => updateFormData('subject', e)}               
                className="w-full p-2 rounded bg-[#333333] outline-none text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Share your thoughts!
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                onChange={(e) => updateFormData('message', e)}               
                className="w-full p-2 rounded bg-[#333333] outline-none text-black"
                required
                rows={5}
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="py-2 px-4 bg-accent/50 text-white rounded hover:bg-accent-dark transition duration-300"
              >
                Hit me up!
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col lg:pl-10 pt-6">
          {contacts.map((contact, ind) => (
            <div
              className="flex text-base w-full py-5 items-center"
              key={ind}
              onClick={contact.onClick ? contact.onClick : undefined}
            >
              <span
                className="h-12 w-12 bg-[#27272c] flex items-center 
            justify-center text-accent text-2xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
              >
                {contact.icon}
              </span>
              <span className="pl-6">
               
                {
                  Array.isArray(contact.value) ? 
                  contact.value.map((v,ind)=>(
                   <p key={ind}>{v}</p>
                  ))
                  :  <p>{contact.value}</p>
                }
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
