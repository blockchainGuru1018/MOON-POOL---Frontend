import React, { useState, useEffect } from 'react';

import Web3Modal from "web3modal";


function Play() {
    const providerOptions = {};
    const web3Modal = new Web3Modal({
        cacheProvider: true, // optional
        providerOptions, // required
    });

    // const { status, connect, account, ethereum } = useMetaMask();
    const [mydeposit, setMyDeposit] = useState(false);
    const [isWithdraw, setIsWithdraw] = useState(false);

    const Withdraw = async () => {

    }

    return (
        <>
            {/* <!-- Breadcrumb Area Start --> */}
            <section className="breadcrumb-area turnaments2">
                <div className="content">
                    <h1 className="tite">Game Over</h1>
                </div>
            </section>
            {/* <!-- Breadcrumb Area End --> */}


            {/* <!-- Turnaments Area Start --> */}
            <section className="turnaments-section">
                <div className="turnaments-top-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single-turnaments">
                                    <div className="left-area">
                                        <div className="single-play">
                                            <div className="image">
                                                <img src="assets/images/game-play/win.png" alt="" />
                                            </div>
                                            <div className="contant">
                                                <a href="https://cdn-factory.marketjs.com/en/8-ball-pool-with-buddies/index.html?code=x2na0903hdp" className="mybtn2">rejoin room</a>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="right-area">
                                        <div className="r-top-area">
                                            <h4>Congratulations! You are winner.</h4>
                                            <div className="list">
                                                <p>
                                                    Rewards: MoonPool Token (MPL)
                                                </p>
                                                <span></span>
                                                <p>
                                                    Winner 80% : 20% Loser
                                                </p>
                                            </div>
                                        </div>
                                        <div className="r-bottom-area2">
                                            <ul>
                                                <li>
                                                    <span>
                                                        ROOM ID
                                                    </span>
                                                    <h4>
                                                        x2na0903hdp
                                                    </h4>
                                                </li>
                                                <li>
                                                    <span>
                                                        DEPOSIT
                                                    </span>
                                                    <h4>
                                                        1000 MPL
                                                    </h4>
                                                </li>
                                                <li>
                                                    <span>
                                                        REWARDS
                                                    </span>
                                                    <h4>
                                                        1600 MPL
                                                    </h4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="stf">
                                    <div className="left">
                                        <h4>Game Over</h4>
                                    </div>
                                    <div className="center">
                                        <div className="time-area">
                                            {!isWithdraw &&
                                                <h6>Please withdraw your rewards</h6>
                                            }
                                            {isWithdraw &&
                                                <h6>Withdraw completed</h6>
                                            }
                                            <img src="assets/images/bg-time.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="right">
                                        {!isWithdraw &&
                                            <a type="button" onClick={()=> {Withdraw()}} className="mybtn2">Withdraw</a>
                                        }
                                        {isWithdraw &&
                                            <a type="button" disabled className="mybtn2">Exit</a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* <!-- Turnaments Area End --> */}

            <div className="subscribe-area subscribe-area2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subscribe-box">
                                <img className="left" src="assets/images/vr.png" alt="" />
                                <img className="right" src="assets/images/game%20controler_.png" alt="" />
                                <div className="row justify-content-center">
                                    <div className="col-lg-12">
                                        <div className="heading-area">
                                            <h5 className="sub-title">
                                                Subscribe to MoonPool
                                            </h5>
                                            <h4 className="title">
                                                To Get Exclusive Benefits
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12">
                                        <form action="#" className="form-area">
                                                <input type="text" placeholder="Your Email Address" />
                                                <button className="mybtn1" type="submit">Subscribe
                                                </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Play;