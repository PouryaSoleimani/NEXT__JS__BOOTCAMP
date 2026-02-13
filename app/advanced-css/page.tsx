"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { boxesData, SingleBoxDataType } from "./mock";
import { ArrowRightIcon, QuotesIcon } from "@phosphor-icons/react";

const AdvancedCssPage = () => {
   return (
      <section className="container border-zinc-400 mx-auto">
         <header id="HEADER__SECTION" className="">
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
            <div id="HERO__SECTION" className="hero">
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
            <div id="SERVICES__SECTION" className="services_wrapper">
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

            <div id="QUOTE__SECTION" className="quote_wrapper">
               <div className="quote_background">
                  <div className="quote_writings">
                     <h3>Your Fleet&apos;s Safety , Our Top Priority</h3>
                     <p>
                        Regular safety checks are maintenance are part of
                        our commitment to keeping your fleet in top
                        condition. Our app schedules and tracks
                        inspections, ensuring that every vehicle meets
                        stringent safety standards
                     </p>
                     <QuotesIcon
                        size={96}
                        weight="fill"
                        className="quote_writings_icon"
                     />
                  </div>
                  <div className="quote_cta">
                     <Image
                        src={"/images/van_vector.png"}
                        width={900}
                        height={300}
                        alt="van_image"
                        className="van_image"
                     />
                     <button className="quote_cta_btn">
                        Get a Free Quote
                        <ArrowRightIcon
                           size={32}
                           weight="fill"
                           className="arrow_right_icon"
                        />
                     </button>
                  </div>
               </div>
            </div>

            <div id="TEST_GRID_SECTION" className="grid-wrapper">
               <div className="box one">one</div>
               <div className="box two">two</div>
               <div className="box three">three</div>
               <div className="box four">four</div>
               <div className="box five">five</div>
               <div className="box six">six</div>
            </div>
         </main>

         <footer></footer>
      </section>
   );
};

export default AdvancedCssPage;
