import React, { useState, useEffect } from 'react';
import { tokenWeb3, receptionWeb3, gameRoom, reception, gameRoomWeb3 } from '../contracts/contract';
import { address } from '../constants/address';
import { parseEther } from 'ethers/lib/utils';
import { constants } from 'ethers';
import socket from '../services/socket';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';



function OneDetail({ room, start }) {
    // const { status, connect, account, ethereum } = useMetaMask();
    const [mydeposit, setMyDeposit] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [isReadyToStart, setIsReadyToStart] = useState(false);
    const [timeLeft, setTimeLeft] = useState({});
    const [searchParams] = useSearchParams();
    const [winner, setWinner] = useState();

    const { userInfo } = useSelector(state => state.user);

    useEffect(() => {
        const getWinner = async () => {
            const roomId = searchParams.get('room');
            if (!!roomId) {
                const roomAddr = await reception.roomAtIndex(Number(roomId));
                const player = await gameRoom(roomAddr).winner();
                if(player !== constants.AddressZero) {
                    setWinner(player);
                }
            }
        }
        getWinner();
    });

    const calculateTimeLeft = () => {
        if (!start) return {}
        const difference = start - new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                // hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true);
        }, 8000);
    }, []);

    useEffect(() => {
        if (mydeposit) {
            setTimeout(() => {
                setIsReadyToStart(true);
            }, 5000);
        }
    }, [mydeposit]);

    const Deposit = async () => {
        if (!!room) {
            // approve token
            await tokenWeb3.approve(address['reception'], parseEther(String(room.amount)));
            tokenWeb3.once("Approval", async () => {
                const tx = await receptionWeb3.userDeposit(room.id);
                await tx.wait();
                setMyDeposit(true);
            });
        }
    }

    const withdraw = async () => {
        if(!!winner) {
            const roomId = searchParams.get('room');
            const roomAddr = await reception.roomAtIndex(Number(roomId));
            await gameRoomWeb3(roomAddr).withdraw();
        }
    }

    const joinGame = async () => {
        if (!!room && mydeposit) {
            window.location.href = `http://localhost:5000?room=${room.id}&player=${userInfo.username}`;
        }
    }

    return (
        <>
            {/* <!-- Breadcrumb Area Start --> */}
            <section className="breadcrumb-area turnaments2">
                <div className="content">
                    <span className="title">Time left before start:</span>
                    <div className="timecounter">
                        <i className="far fa-clock"></i>
                        {
                            !!start && (
                                <>
                                    {`${timeLeft.minutes}min ${timeLeft.seconds}s`}
                                </>
                            )
                        }

                        {/* <div data-countdown="2022/2/3"></div> */}
                    </div>
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
                                                {
                                                    !!winner && (winner.toLowerCase() === userInfo.wallet.toLowerCase() ? (
                                                        <img src="assets/images/game-play/11.png" alt="" />
                                                    ): (
                                                        <img src="assets/images/game-play/12.png" alt="" />
                                                    ))
                                                }
                                                
                                            </div>
                                            <div className="contant">
                                                <a onClick={joinGame} style={{ cursor: 'pointer' }} className="mybtn2">join room</a>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="right-area">
                                        <div className="r-top-area">
                                            <h4>Online 1:1 playing</h4>
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
                                                        {
                                                            !!room && (
                                                                <h4>
                                                                    {room.id}
                                                                </h4>
                                                            )
                                                        }
                                                    </h4>
                                                </li>
                                                <li>
                                                    <span>
                                                        DEPOSIT
                                                    </span>
                                                    {
                                                        !!room && (
                                                            <h4>
                                                                1000 MPL
                                                            </h4>
                                                        )
                                                    }

                                                </li>
                                                <li>
                                                    <span>
                                                        REQUIRED SKILL LEVEL
                                                    </span>
                                                    <h4>
                                                        Normal
                                                    </h4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="stf">
                                    <div className="left">
                                        {!isReady &&
                                            <h4>Waiting - WALL-E</h4>
                                        }
                                        {isReady &&
                                            <h4>WALL-E accepted</h4>
                                        }
                                    </div>
                                    <div className="center">
                                        <div className="time-area">
                                            {!mydeposit &&
                                                <h6>Please deposit for starting</h6>
                                            }
                                            {mydeposit && !isReadyToStart &&
                                                <h6>Waiting for WALL-E's Deposit</h6>
                                            }
                                            {mydeposit && isReadyToStart &&
                                                <h6>Ready to start!</h6>
                                            }
                                            <img src="assets/images/bg-time.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="right">
                                        {!winner &&
                                            <a type="button" onClick={Deposit} className="mybtn2">Deposit</a>
                                        }
                                        {!!winner &&
                                            <a type="button" onClick={withdraw} disabled className="mybtn2">Withdraw</a>
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

export default OneDetail;