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
                           size={40}
                           weight="fill"
                           className="arrow_right_icon"
                        />
                     </button>
                  </div>
               </div>
            </div>

            <div id="STATS__SECTION" className="grid-wrapper">
               <div className="box one">
                  <Image
                     src={"/images/stats/stats_1.png"}
                     width={250}
                     height={250}
                     alt=""
                     className="box_image"
                  />
                  <h4 className="value">10,000+</h4>
                  <p className="label">Deliveries Managed</p>
               </div>
               <div className="box two">
                  <Image
                     src={"/images/stats/stats_2.png"}
                     width={250}
                     height={250}
                     alt=""
                     className="box_image"
                  />
                  <h4 className="value">2,500+</h4>
                  <p className="label">Active Clients</p>
               </div>
               <div className="box three">
                  <Image
                     src={"/images/stats/stats_3.png"}
                     width={250}
                     height={250}
                     alt=""
                     className="box_image"
                  />
                  <h4 className="value">98%</h4>
                  <p className="label">On-Time Delivery Rate</p>
               </div>
               <div className="box four">
                  <Image
                     src={"/images/stats/stats_4.png"}
                     width={250}
                     height={250}
                     alt=""
                     className="box_image"
                  />
                  <h4 className="value">200+</h4>
                  <p className="label">Industry Awards</p>
               </div>
               <div className="box five">
                  <Image
                     src={"/images/stats/stats_5.png"}
                     width={250}
                     height={250}
                     alt=""
                     className="box_image"
                  />
                  <h4 className="value">32+</h4>
                  <p className="label">Active Branches</p>
               </div>
               <div className="box six">
                  <div className="flags_wrapper">
                     {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                           key={index as number}
                           src={`/images/stats/stats_6_${Number(index) + 1}.png`}
                           width={250}
                           height={250}
                           alt=""
                           className="box_image"
                        />
                     ))}
                  </div>
                  <h4 className="value">14+</h4>
                  <p className="label">Coutries In Europe</p>
               </div>
            </div>
         </main>

         <footer></footer>
      </section>
   );
};

export default AdvancedCssPage;
