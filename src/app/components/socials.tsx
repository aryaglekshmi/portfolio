import React from 'react'
import Image from 'next/image';

const socialIcons = [
  {
    name: "Instagram",
    icon: "/instagram.svg",
  },
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
  },
  {
    name: "WhatsApp",
    icon: "/whatsapp.svg",
  },
  {
    name: "Github",
    icon: "/github.svg",
  },
];

function Socials() {
  return (
    <div className="flex justify-between">
    {socialIcons.map((social, i) => (
      <Image
        key={i}
        src={social.icon}
        alt={social.name}
        width={24} 
        height={24}
        className='mx-3 cursor-pointer hover:-translate-y-1 transition-transform duration-300' 
      />
    ))}
  </div>
  )
}

export default Socials