"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { boxesData, SingleBoxDataType } from "./mock";

const AdvancedCssPage = () => {
   return (
      <section className="container border-4 border-zinc-400 mx-auto">
         <header className="">
            <div className="logo">
               <Image
                  src={"/next.svg"}
                  width={200}
                  height={200}
                  alt="image"
               />
            </div>
            <nav>
               <ul>
                  <li>
                     <a href="#">Home</a>
                  </li>
                  <li>
                     <a href="#">Services</a>
                  </li>
                  <li>
                     <a href="#">Pricing</a>
                  </li>
                  <li>
                     <a href="#">Track Shipment</a>
                  </li>
                  <li>
                     <a href="#">About us</a>
                  </li>
               </ul>
            </nav>
            <div className="mobile-hamburger">
               <MenuIcon />
            </div>
            <div className="actions">
               <button>Login</button>
               <button className="outline">Sign Up</button>
            </div>
         </header>

         <main>
            <div className="hero">
               <div className="background-image">
                  <Image
                     className="bg-image"
                     src={"/hero-background.avif"}
                     width={900}
                     height={600}
                     alt=""
                  />
                  <div className="overlay"></div>
               </div>
               <div className="hero-content">
                  <h1>Effortless Logistics, Every Step of the Way</h1>
                  <p>
                     Manage Your shipments, track in real-time, and get the
                     best rates --all from one platform
                  </p>
                  <div className="actions">
                     <button>Get a Free Quote</button>
                     <button className="outline">Learn More</button>
                  </div>
               </div>
            </div>
            <div id="SERVICES" className="services_wrapper">
               {boxesData.map((box: SingleBoxDataType) => (
                  <div className="box" key={box.id}>
                     <div className="box_content">
                        {box.icon}
                        <h3 className="box_content_title">{box.title}</h3>
                        <p className="box_content_description">
                           {box.description}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </main>

         <footer></footer>
      </section>
   );
};

export default AdvancedCssPage;
