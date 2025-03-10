import { Herosection } from "../components/Herosection";

export const Home = () => {
    return (
        <div>

            <Herosection />
            <div className="card grid grid-3-col">
                <div className="cardcontainer grid-2-col">
                    <div className="left">
                        <p>new year sale</p>
                        <h3>get and extra 50% off</h3>
                        <a href="#">Show now</a></div>
                    <div className="right ">
                        <img className="card-width" src="./img/laptop.png" alt="" />
                    </div>
                </div>
                <div className="cardcontainer  grid-2-col">
                    <div className="left">
                        <p>new year sale</p>
                        <h3>40% discount on speakers</h3>
                        <a href="#">Show now</a>
                    </div>
                    <div className="right">
                        <img className="card-width2" src="./img/headphoneEcom.png" alt="" />
                    </div>
                </div>
                <div className="cardcontainer  grid-2-col">
                    <div className="left">
                        <p>new year sale</p>
                        <h3>get and extra 50% off</h3>
                        <a href="#">Show now</a>
                    </div>
                    <div className="right">
                        <img className="card-width2" src="./img/mobiles.png" alt="" />
                    </div>
                </div>

             
            </div>
            <div className="extracard grid-4-col">
                    <div class="div-policy grid-2-col">
                        <div class="icons">
                          
                           <img className="dili" src="./img/delivery.png" alt="" srcset="" />
                        </div>
                        <div class="div-policy-text">
                            <p>worldwide shipping</p>
                            <p>order above $100</p>
                        </div>
                    </div>

                    <div class="div-policy grid-2-col">
                        <div class="icons">
                        <img src="./img/exchange.png" alt="" srcset="" />
                        </div>
                        <div class="div-policy-text">
                            <p>Easy 30 Day Returns</p>
                            <p>Back Returns in 7 Days</p>
                        </div>
                    </div>

                    <div class="div-policy grid-2-col">
                        <div class="icons">
                        <img src="./img/money.png" alt="" srcset="" />
                        </div>
                        <div class="div-policy-text">
                            <p>money back guarantee</p>
                            <p>guarantee with in 30-Days</p>
                        </div>
                    </div>

                    <div class="div-policy  grid-2-col">
                        <div class="icons">
                        <img src="./img/support.png" alt="" srcset="" />
                        </div>
                        <div class="div-policy-text">
                            <p>Easy Online Support</p>
                            <p>24/7 Any time support</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};