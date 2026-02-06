import Image from "next/image";

const AdvancedCssPage = () => {
   return (
      <section className="wrapper">
         <header className="container">
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
            <div className="actions">
               <button>Login</button>
               <button>Sign Up</button>
            </div>
         </header>

         <main></main>
         <footer></footer>
      </section>
   );
};

export default AdvancedCssPage;
