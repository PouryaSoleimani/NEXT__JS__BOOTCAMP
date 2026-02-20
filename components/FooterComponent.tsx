import MingcuteFacebookFill from "@/public/icons/MingcuteFacebookFill";
import MingcuteInstagramLine from "@/public/icons/MingcuteInstagramLine";
import MingcuteLinkedinFill from "@/public/icons/MingcuteLinkedinFill";
import MingcuteYoutubeFill from "@/public/icons/MingcuteYoutubeFill";
import React from "react";

const FooterComponent = () => {
   return (
      <footer className="footer-wrapper">
         <div className="upper-footer">
            <div className="logo_moto">
               <h2>LOGISTICS</h2>
               <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  In, voluptas?
               </p>
            </div>
            <div className="footer_nav">
               <div className="footer_nav_group">
                  <h4>TITLE</h4>
                  <ul>
                     <li>LOREM</li>
                     <li>LOREM</li>
                     <li>LOREM</li>
                     <li>LOREM</li>
                     <li>LOREM</li>
                  </ul>
               </div>
               <div className="footer_nav_group">
                  <h4>TITLE</h4>
                  <ul>
                     <li>LOREM</li>
                     <li>LOREM</li>
                     <li>LOREM</li>
                     <li>LOREM</li>
                     <li>LOREM</li>
                  </ul>
               </div>
               <div className="footer_nav_group">
                  <h4>TITLE</h4>
                  <ul>
                     <li>LOREM</li>
                     <li>LOREM</li>
                     <li>LOREM</li>
                     <li>LOREM</li>
                     <li>LOREM</li>
                  </ul>
               </div>
               <div className="footer_nav_group">
                  <h4>TITLE</h4>
                  <ul>
                     <li>LOREM</li>
                     <li>LOREM</li>
                     <li>LOREM</li>
                     <li>LOREM</li>
                     <li>LOREM</li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="bottom-footer">
            <div className="socials">
               <MingcuteFacebookFill />
               <MingcuteLinkedinFill />
               <MingcuteYoutubeFill />
               <MingcuteInstagramLine />
            </div>
            <div className="copyright">&copy; All Rights Reserved</div>
         </div>
      </footer>
   );
};

export default FooterComponent;
