import Image from "next/image";

const AdvancedCssPage = () => {
   return (
      <section className="container wrapper">
         <header>
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
                     <a href="#"></a>
                  </li>
                  <li>
                     <a href="#"></a>
                  </li>
                  <li>
                     <a href="#"></a>
                  </li>
                  <li>
                     <a href="#"></a>
                  </li>
                  <li>
                     <a href="#"></a>
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
