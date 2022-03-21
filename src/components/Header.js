import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import { login } from '../reducers/userSlice';

// import AboutUs from './AboutUs'
// import Coffee from './Coffee'
// import ContactUs from './ContactUs'
import Home from './Home'
import One from './One'
import Nft from './Nft'
import Tournaments from './Tournaments'
import TournamentsDetail from './TournamentsDetail'
import ProfileOverview from './ProfileOverview'
import Play from './Play';
import OneDetail from './OneDetail';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../services/socket';
import { getMyRooms } from '../reducers/roomSlice';
import { logout } from '../reducers/userSlice';
import { getOnlineUsers } from '../reducers/userSlice';
import RequestModal from './common/RequestModal';

function Header() {
    const [room, setRoom] = useState([]);
    const [onlinePlayers, setOnlinePlayers] = useState([]);
    const [openRequestModal, setOpenRequestModal] = useState();
    const [challenger, setChallenger] = useState();
    const [startTime, setStartTime] = useState();
    const dispatch = useDispatch();
    const { userInfo, onlineUsers } = useSelector(state => state.user);
   

    const requestChallenge =(player) => {
        socket.emit('game-request', player.wallet);
    }
    useEffect(() => {
        socket.on('room-created', roomData => {
            setRoom(roomData);
            socket.emit('accept-room');
            const now = new Date();
            let millisecond = Date.parse(now);
            millisecond = millisecond + 5 * 60 * 1000;
            setStartTime(new Date(millisecond));
        });
        socket.on('game-challenge', user => {
            setChallenger(user);
            setOpenRequestModal(true);
        });
        socket.on("user-online", user => {
            setOnlinePlayers([...onlinePlayers, user]);
        });
        socket.on('logout', user => {
            setOnlinePlayers(onlinePlayers.filter(player => player.wallet !== user));
        });
        dispatch(getOnlineUsers());
    }, []);
    useEffect(() => {
        setOnlinePlayers(onlineUsers);
    }, [onlineUsers]);

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", accounts => {
                if (accounts.length > 0) {
                    console.log(`Account connected: ${accounts[0]}`);
                } else {
                    dispatch(logout());
                }
            });
        }
    });
    useEffect(() => {
        if (!!userInfo)
            socket.emit("user-connect", userInfo.wallet);
    }, [userInfo]);
    // connect wallet
    async function requestAccount() {
        if (typeof window.ethereum !== 'undefined') {
            const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });  // connect wallet
            // setAccount(account);
            dispatch(login({ wallet: account }));
        }
    }
    return (
        <Router>
            {/* <!-- Header Area Start  --> */}
            <header className="header">
                <div className="overlay"></div>
                {/* <!-- Top Header Area Start --> */}
                <section className="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="content">
                                    <div className="left-content">
                                        <ul className="left-list">
                                            <li>
                                                <p>
                                                    <i className="fas fa-headset"></i>	Support
                                                </p>
                                            </li>
                                        </ul>
                                        <ul className="top-social-links">
                                            <li>
                                                <a href="https://t.me/moonpool_official" target="_blank">
                                                    <i className="fab fa-telegram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/MoonPoolTeam" target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-discord"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="right-content">
                                        <ul className="right-list">
                                            <li>
                                                <div onClick={requestAccount} className="button-wallet">
                                                    {
                                                        !!userInfo ? (
                                                            <div className="mr-5 text-white self-center text-lg font-bold">{`${userInfo.wallet.substring(0, 5)}..${userInfo.wallet.substring(userInfo.wallet.length - 3)}`}</div>
                                                        ) : (
                                                            <div className="animate-pulse">Connect Wallet</div>
                                                        )
                                                    }
                                                </div>
                                            </li>
                                            <li>
                                                <div className="language-selector">
                                                    <select name="language" className="language">
                                                        <option value="1">EN</option>
                                                        <option value="2">JP</option>
                                                        <option value="3">BN</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="notofication" data-toggle="modal" data-target="#usernotification">
                                                    <i className="far fa-bell"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="message" data-toggle="modal" data-target="#usermessage">
                                                    <i className="far fa-envelope"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Top Header Area End --> */}
                {/* <!--Main-Menu Area Start--> */}
                <div className="mainmenu-area mainmenu-area2">
                <RequestModal open={openRequestModal} player={challenger} handleClose={() => setOpenRequestModal()}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand d-lg-none" href="index.html">
                                        <img className="l2" src="assets/images/logo2.png" alt="" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse fixed-height" id="main_menu">
                                        <div className="main-menu-inner">
                                            <ul className="navbar-nav mr-auto">
                                                {/* <!-- <li className="nav-item dropdown">
                                                <a className="nav-link active dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    MoonPool
                                                </a>
                                                <ul className="dropdown-menu" >
                                                    <li><a className="dropdown-item" href="index.html"> <i className="fa fa-angle-double-right"></i>Home 1</a></li>
                                                    <li><a className="dropdown-item" href="index2.html"> <i className="fa fa-angle-double-right"></i> Home 2</a></li>
                                                    <li><a className="dropdown-item" href="index3.html"> <i className="fa fa-angle-double-right"></i> Home 3</a></li>
                                                    <li><a className="dropdown-item" href="index4.html"> <i className="fa fa-angle-double-right"></i> Home 4</a></li>
                                                    <li><a className="dropdown-item" href="index5.html"> <i className="fa fa-angle-double-right"></i> Home 5</a></li>
                                                </ul>
                                            </li> --> */}
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/">MoonPool</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/onetoone">1:1</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/tournaments">Championship</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/nft">NFT</a>
                                                </li>
                                            </ul>
                                            <a className="navbar-brand  d-none d-lg-block" href="index5.html">
                                                <img className="l2" src="assets/images/logo2.png" alt="" />
                                            </a>
                                            <ul className="navbar-nav ml-auto">

                                                {/* <!-- <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Pages
                                                </a>
                                                <ul className="dropdown-menu" >
                                                    <li><a className="dropdown-item" href="about.html"> <i className="fa fa-angle-double-right"></i>About</a></li>
                                                    <li><a className="dropdown-item" href="bonuse-page.html"> <i className="fa fa-angle-double-right"></i>Bonuse</a></li>
                                                    <li><a className="dropdown-item" href="ticket-page.html"> <i className="fa fa-angle-double-right"></i>Ticket Page</a></li>
                                                    <li><a className="dropdown-item" href="raffles-details.html"> <i className="fa fa-angle-double-right"></i>Raffles Details</a></li>
                                                    <li><a className="dropdown-item" href="games_details.html"> <i className="fa fa-angle-double-right"></i>Games Details</a></li>
                                                    <li><a className="dropdown-item" href="tournaments2.html"> <i className="fa fa-angle-double-right"></i>Tournaments Details</a></li>
                                                    <li><a className="dropdown-item" href="gamer-profile1.html"> <i className="fa fa-angle-double-right"></i>Gamer Profile Public</a></li>
                                                    <li><a className="dropdown-item" href="gamer-profile6.html"> <i className="fa fa-angle-double-right"></i>Gamer Problie Private </a></li>
                                                    <li><a className="dropdown-item" href="help1.html"> <i className="fa fa-angle-double-right"></i>Help</a></li>
                                                    <li><a className="dropdown-item" href="404.html"> <i className="fa fa-angle-double-right"></i>404</a></li>
                                                </ul>
                                            </li> --> */}
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/profile-overview">My account</a>
                                                </li>
                                                <li>
                                                    <a href="https://t.me/moonpool_official" target="_blank" className="mybtn1" /* data-toggle="modal" data-target="#signin"*/> Join us</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--Main-Menu Area Start--> */}
            </header>
            {/* <!-- Header Area End  --> */}
            <Routes>
                {/* <Route path="/about"> <AboutUs /></Route>
            <Route path="/coffee"><Coffee /></Route>
            <Route path="/contactUs"> <ContactUs /> </Route> */}
                <Route path="/" element={<Home />} />
                <Route path="/onetoone" element={<One onlinePlayers={onlinePlayers} requestChallenge={requestChallenge} />} />
                <Route path="/tournaments" element={<Tournaments />} />
                <Route path="/tournaments-detail" element={<TournamentsDetail />} />
                <Route path="/nft" element={<Nft />} />
                <Route path="/profile-overview" element={<ProfileOverview />} />
                <Route path="/play" element={<Play />} />
                <Route path="/onedetail" element={<OneDetail room={room} start={startTime} />} />
            </Routes>
        </Router>
    );
}

export default Header;