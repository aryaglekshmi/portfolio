import React from 'react';
import { routes } from './utils/store'; // Adjust the path as needed

function AnimatedHome() {

  return (
    <div>
      {routes.map(section => (
        <section id={section.href} className="h-screen pt-[60px]">
          {section.label}
        </section>
      ))}
    </div>
  );
}

export default AnimatedHome;
