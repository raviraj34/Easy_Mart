export const Herosection = () => {
    return (
        <main>
            <div className="mainsection">
           <div className="svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#161616"><path d="M0 1v99c134.3 0 153.7-99 296-99H0Z" opacity=".5"></path><path d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z" opacity=".5"></path><path d="M617 1v86C372 119 384 1 196 1h421Z" opacity=".5"></path><path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path></g></svg>
           </div>
                <div className="container grid grid-2-col ">
                    <div className="leftcontainer">

                    <p class="hero-subheading">Explore the Latest in Tech Industries</p>
            <h1 class="hero-heading">
              Your Destination for Cutting-Edge Gadgets!
            </h1>
            <p class="hero-para">
              Welcome to Thapa eComStore, your ultimate destination for
              cutting-edge gadgets! Explore the latest in tech innovation and
              style with us. Shop now and discover a world of possibilities!
            </p>
            <div class="hero-btn">
              <button className="boton-elegante">Explore Our Products</button>
            </div>

                    </div>
                    <div className="rightcontainer">
                        <img src="/img/heroSection.svg" alt=""  />
                    </div>
                </div>

            </div>
        </main>
    );
};