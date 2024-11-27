"use client";
import { IMail } from "@/app/utils/interfaces";
import { sendMail } from "@/app/utils/sendMail";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";

function Contact() {
  const text = "Let's work together";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

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
  const [loading,setLoading] = useState(false);

  async function handleFormSubmit(e: any) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await sendMail(formData);
      if (res?.success) {
        resetFormData();
        formRef.current?.reset();
        window.alert(res.message || "Mail sent successfully!");
      } else {
        window.alert(
          res.message || "Error while sending mail, Please try again later!"
        );
      }
    } catch (err) {
      console.log("🚀 ~ handleFormSubmit ~ err:", err);
      window.alert("Error while sending mail, Please try again later!");
    } finally {
      setLoading(false);
    }
  }

  function resetFormData() {
    for(const key in formData) {
      formData[key as keyof IMail] = ''
    }
  }

  const updateFormData = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      className="py-4 pr-6 lg:py-12 lg:px-10 xl:px-0 h-full"
    >
      <div className="lg:h-full flex justify-center items-center gap-4 lg:flex-row flex-col">
        <div className="p-6 flex flex-col gap-4 bg-[#27272c] rounded-lg">
          <h2 className="font-bold text-xl md:text-2xl text-accent pt-4 ">
            {displayedText}
          </h2>
          <p className="text-white/80 md:text-base text-sm">
            Got a cool idea or project? Let’s make it happen together! Reach out
            and let’s create something awesome!
          </p>
          <form
            className="flex flex-col gap-4 text-base"
            onSubmit={handleFormSubmit}
            id="contactForm"
            ref={formRef}
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
                disabled={loading}
                onChange={(e) => updateFormData("from_name", e)}
                className="w-full p-2 rounded bg-[#333333] outline-none text-white/80"
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
                disabled={loading}
                onChange={(e) => updateFormData("from_email", e)}
                className="w-full p-2 rounded bg-[#333333] outline-none text-white/80"
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
                disabled={loading}
                onChange={(e) => updateFormData("from_phone", e)}
                className="w-full p-2 rounded bg-[#333333] outline-none text-white/80"
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
                disabled={loading}
                onChange={(e) => updateFormData("subject", e)}
                className="w-full p-2 rounded bg-[#333333] outline-none text-white/80"
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
                disabled={loading}
                onChange={(e) => updateFormData("message", e)}
                className="w-full p-2 rounded bg-[#333333] outline-none text-white/80"
                required
                rows={5}
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                disabled={loading}
                className="py-2 px-4 bg-accent/50 text-white rounded hover:bg-accent-dark transition duration-300"
              >
                <div role="status" className="flex justify-between items-center">
                <span className="pr-2">Hit me up!</span>
               
                  {
                    loading && (
                     <div>
                       <svg
                      aria-hidden="true"
                      className="w-5 h-5 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                      </div>
                    )
                  }
                </div>
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
                {Array.isArray(contact.value) ? (
                  contact.value.map((v, ind) => <p key={ind}>{v}</p>)
                ) : (
                  <p>{contact.value}</p>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
