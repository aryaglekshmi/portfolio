import { motion } from "framer-motion";
import { easeIn } from "framer-motion/dom";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

function Contact() {

  const text = "Let's work together";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

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
      text: 'Phone',
      icon: <FaPhone />,
      value: ['+971 556057887', '+91 8086924467']
    },
    {
      text: 'Email',
      icon: <FaEnvelope />,
      value: 'aryaglekshmi@gmail.com'
    },
    {
      text: 'Address',
      icon: <FaLocationPin />,
      value: 'Dubai, UAE'
    },
    {
      text: 'Home Address',
      icon: <FaHome />,
      value: 'Kollam, Kerala, India'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: 500 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto h-full flex justify-center gap-4 lg:flex-row flex-col-reverse">
        <div className="p-6 flex flex-col gap-4 bg-[#27272c] ">
          <h2 className="font-bold text-xl text-accent">{displayedText}</h2>
          <p className="text-white/80 text-base">
            Got a cool idea or project? Let’s make it happen together! Reach out
            and let’s create something awesome!
          </p>
          <form className="flex flex-col gap-4 text-base">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Your good name?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                // value={formData.name}
                // onChange={handleChange}
                className="w-full p-2 rounded bg-white/70 outline-none text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                How can i connect?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                // value={formData.email}
                // onChange={handleChange}
                className="w-full p-2 rounded bg-white/70 outline-none text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Contact number?
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Phone number"
                // value={formData.phone}
                // onChange={handleChange}
                className="w-full p-2 rounded bg-white/70 outline-none text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Share your thoughts!{" "}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                // value={formData.message}
                // onChange={handleChange}
                className="w-full p-2 rounded bg-white/70 outline-none text-black"
                rows={5}
                required
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
              className="flex text-base w-full py-5"
              key={ind}
            >
              <span
                className="h-10 w-10 bg-[#27272c] flex items-center 
            justify-center text-accent text-xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
              >
                {contact.icon}
              </span>
              <span className="pl-10">
                <p>{contact.text}</p>
                <p>{contact.value}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;