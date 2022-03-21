import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../services/socket';
import { baseUrl } from '../services/api.service';
import { useNavigate } from 'react-router-dom';



function One({onlinePlayers, requestChallenge}) {
    const { userInfo } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const requestGame = (player) => {
        navigate('/onedetail');
        requestChallenge(player);
    }
    return (
        <>
            {/* <!-- Breadcrumb Area Start --> */}
            <section className="breadcrumb-area games">
                <div className="content">
                    <img src="assets/images/contest/balls.png" alt="" />
                    <h4>Play with the world!</h4>
                    <a href="#" className="mybtn1">Join Now!</a>
                </div>
            </section>
            {/* <!-- Breadcrumb Area End --> */}

            {/* <!-- Games Filter Area Start --> */}
            <section className="games-filter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="filter-wrapp">
                                <div className="left-area">
                                    <a href="#" className="mybtn2">Available</a>
                                    <a href="#" className="mybtn2">New Players</a>
                                    <a href="#" className="mybtn2">Top Players</a>
                                </div>
                                <div className="right-area">
                                    <form action="#">
                                        <input type="text" placeholder="Search Players" />
                                        <button type="submit"><i className="fas fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Games Filter Area End --> */}

            {/* <!-- Daily Contest area start --> */}
            <section className="daily-contest">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="left-content">
                                <div className="images">
                                    <img src="assets/images/contest/trophy.png" alt="" />
                                </div>
                                <div className="content">
                                    <img src="assets/images/contest/icon.png" alt="" />
                                    <h4>CONTEST PRIZE POOL</h4>
                                    <p className="coin">1,000 <span>MPL</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="right-content">
                                <img className="winner" src="assets/images/contest/winner.png" alt="" />
                                <p className="title"><i className="fas fa-crown"></i>LAST CHAMPION</p>
                                <div className="rc-bottom">
                                    <div className="img">
                                        <img className="crown" src="assets/images/contest/crown.png" alt="" />
                                        <img src="assets/images/contest/p1.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h6>John Ray</h6>
                                        <p>9,648 <span>MPL</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="middle-content">
                                <p>Playing now. Let's see this match.</p>
                                <a href="#" className="mybtn2">LIVE WATCH</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- Daily Contest area End --> */}

            {/* <!-- User Main Content Area Start --> */}
            <section className="user-main-dashboard">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <main>
                                <div className="main-box">
                                    <div className="header-area">
                                        <h4>Members / Available</h4>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-borderless">
                                            <tbody>
                                                {
                                                    onlinePlayers.map((player, i) => (
                                                        <tr key={i}>
                                                            <td>
                                                                <div className="game-info">
                                                                    <img style={{borderRadius: '50%'}} src={`${baseUrl}/${player.avatar}`} alt="" />
                                                                    <div className="content">
                                                                        <h6>{ player.username }</h6>
                                                                        <span>Level - High</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="players">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">
                                                                                <img src="assets/images/gamer/a1.png" alt="" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                <img src="assets/images/gamer/a2.png" alt="" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                <img src="assets/images/gamer/a3.png" alt="" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                <img src="assets/images/gamer/a4.png" alt="" />
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="ratio">
                                                                    <span>Win Ratio</span>
                                                                    <h4>63%</h4>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="ratio">
                                                                    <span>Elo Ratings </span>
                                                                    <h4>2368</h4>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a onClick={() => requestGame(player)} style={{cursor: 'pointer'}} className="mybtn2">Challenge</a>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="page-pagination mt-5">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <a className="page-link prev" href="#" tabIndex="-1">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link num" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link num" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link num active" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link num" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link num" href="#">5</a></li>
                                    <li className="page-item">
                                        <a className="page-link next" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- User Main Content Area End --> */}

            {/* <!-- Latest arcive area start --> */}
            <section className="latest-arcive2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h5 className="subtitle">
                                    True Wins closer than they seem
                                </h5>
                                <h2 className="title ">
                                    Latest Activities
                                </h2>
                                <h6 className="text">
                                    Where skill is rewarded. Join millions of players worldwide!
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- <ul className="nav  mb-3"  role="tablist">
                                <li className="nav-item">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Leaderboard</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">changellenge</a>
                                </li>
                            </ul> --> */}
                            <div className="tab-content l-a-nav" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="left-content">
                                                <div className="heading-area">
                                                    <img src="assets/images/arcive/i2.png" alt="" />
                                                    <h6>Latest Changellenge</h6>
                                                    <h3>Top Players</h3>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="info-box">
                                                            <img src="assets/images/arcive/i3.png" alt="" />
                                                            <div className="content">
                                                                <h4>Levels & Rewards</h4>
                                                                <p>Play with higher level's member and level up.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="info-box">
                                                            <img src="assets/images/arcive/i4.png" alt="" />
                                                            <div className="content">
                                                                <h4>Bonus</h4>
                                                                <p>Higher level to much rewards.

                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="info-box">
                                                            <img src="assets/images/arcive/i5.png" alt="" />
                                                            <div className="content">
                                                                <h4>NFT discount</h4>
                                                                <p>High level to NFT discount

                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="l-arcive-box2-wrapper">
                                                <div className="l-arcive-box2">
                                                    <div className="s-a-b">
                                                        <div className="left">
                                                            <img src="assets/images/arcive/sa4.png" alt="" />
                                                            <div className="content">
                                                                <div className="left2">
                                                                    <img src="assets/images/arcive/m1.png" alt="" />
                                                                </div>
                                                                <div className="right2">
                                                                    <h4>Lee Miller</h4>
                                                                    <div className="stars">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star-half-alt"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <img src="assets/images/arcive/mony.png" alt="" />
                                                            <h6>_ 25.8772200 MPL</h6>
                                                        </div>
                                                    </div>
                                                    <div className="s-a-b">
                                                        <div className="left">
                                                            <img src="assets/images/arcive/sa5.png" alt="" />
                                                            <div className="content">
                                                                <div className="left2">
                                                                    <img src="assets/images/arcive/m2.png" alt="" />
                                                                </div>
                                                                <div className="right2">
                                                                    <h4>John Ray</h4>
                                                                    <div className="stars">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star-half-alt"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <img src="assets/images/arcive/mony.png" alt="" />
                                                            <h6>+ 25.8772200 MPL</h6>
                                                        </div>
                                                    </div>
                                                    <div className="s-a-b">
                                                        <div className="left">
                                                            <img src="assets/images/arcive/sa6.png" alt="" />
                                                            <div className="content">
                                                                <div className="left2">
                                                                    <img src="assets/images/arcive/m3.png" alt="" />
                                                                </div>
                                                                <div className="right2">
                                                                    <h4>Gilbert Ruiz</h4>
                                                                    <div className="stars">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star-half-alt"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <img src="assets/images/arcive/mony.png" alt="" />
                                                            <h6>25.8772200 MPL</h6>
                                                        </div>
                                                    </div>
                                                    <div className="s-a-b">
                                                        <div className="left">
                                                            <img src="assets/images/arcive/sa7.png" alt="" />
                                                            <div className="content">
                                                                <div className="left2">
                                                                    <img src="assets/images/arcive/m4.png" alt="" />
                                                                </div>
                                                                <div className="right2">
                                                                    <h4>Lee Miller</h4>
                                                                    <div className="stars">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star-half-alt"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <img src="assets/images/arcive/mony.png" alt="" />
                                                            <h6>_ 25.8772200 MPL</h6>
                                                        </div>
                                                    </div>
                                                    <div className="s-a-b">
                                                        <div className="left">
                                                            <img src="assets/images/arcive/sa8.png" alt="" />
                                                            <div className="content">
                                                                <div className="left2">
                                                                    <img src="assets/images/arcive/m5.png" alt="" />
                                                                </div>
                                                                <div className="right2">
                                                                    <h4>Erik Adams</h4>
                                                                    <div className="stars">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star-half-alt"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <img src="assets/images/arcive/mony.png" alt="" />
                                                            <h6>25.8772200 MPL</h6>
                                                        </div>
                                                    </div>
                                                    <div className="s-a-b">
                                                        <div className="left">
                                                            <img src="assets/images/arcive/sa9.png" alt="" />
                                                            <div className="content">
                                                                <div className="left2">
                                                                    <img src="assets/images/arcive/m6.png" alt="" />
                                                                </div>
                                                                <div className="right2">
                                                                    <h4>Gina Mills</h4>
                                                                    <div className="stars">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star-half-alt"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <img src="assets/images/arcive/mony.png" alt="" />
                                                            <h6>+ 25.8772200 MPL</h6>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="left-content">
                                                <div className="heading-area">
                                                    <img src="assets/images/arcive/i2.png" alt="" />
                                                    <h6>Latest Changellenge</h6>
                                                    <h3>Top Players</h3>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="info-box">
                                                            <img src="assets/images/arcive/i3.png" alt="" />
                                                            <div className="content">
                                                                <h4>Levels & Rewards</h4>
                                                                <p>Play with higher level player and level up.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="info-box">
                                                            <img src="assets/images/arcive/i4.png" alt="" />
                                                            <div className="content">
                                                                <h4>Bonus</h4>
                                                                <p>Join a grand adventure of 7 levels and unlimited milestone rewards

                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="info-box">
                                                            <img src="assets/images/arcive/i5.png" alt="" />
                                                            <div className="content">
                                                                <h4>Fair</h4>
                                                                <p>Join a grand adventure of 7 levels and unlimited milestone rewards

                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="l-arcive-box2-wrapper">
                                                <div className="l-arcive-box2">
                                                    <div className="s-a-b">
                                                        <div className="left">
                                                            <img src="assets/images/arcive/sa4.png" alt="" />
                                                            <div className="content">
                                                                <div className="left2">
                                                                    <img src="assets/images/arcive/m1.png" alt="" />
                                                                </div>
                                                                <div className="right2">
                                                                    <h4>Lee Miller</h4>
                                                                    <div className="stars">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star-half-alt"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <img src="assets/images/arcive/mony.png" alt="" />
                                                            <h6>_ 25.8772200 BTC</h6>
                                                        </div>
                                                    </div>
                                                    <div className="s-a-b">
                                                        <div className="left">
                                                            <img src="assets/images/arcive/sa5.png" alt="" />
                                                            <div className="content">
                                                                <div className="left2">
                                                                    <img src="assets/images/arcive/m2.png" alt="" />
                                                                </div>
                                                                <div className="right2">
                                                                    <h4>John Ray</h4>
                                                                    <div className="stars">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star-half-alt"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <img src="assets/images/arcive/mony.png" alt="" />
                                                            <h6>+ 25.8772200 BTC</h6>
                                                        </div>
                                                    </div>
                                                    <div className="s-a-b">
                                                        <div className="left">
                                                            <img src="assets/images/arcive/sa6.png" alt="" />
                                                            <div className="content">
                                                                <div className="left2">
                                                                    <img src="assets/images/arcive/m3.png" alt="" />
                                                                </div>
                                                                <div className="right2">
                                                                    <h4>Gilbert Ruiz</h4>
                                                                    <div className="stars">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star-half-alt"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <img src="assets/images/arcive/mony.png" alt="" />
                                                            <h6>25.8772200 BTC</h6>
                                                        </div>
                                                    </div>
                                                    <div className="s-a-b">
                                                        <div className="left">
                                                            <img src="assets/images/arcive/sa7.png" alt="" />
                                                            <div className="content">
                                                                <div className="left2">
                                                                    <img src="assets/images/arcive/m4.png" alt="" />
                                                                </div>
                                                                <div className="right2">
                                                                    <h4>Lee Miller</h4>
                                                                    <div className="stars">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star-half-alt"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <img src="assets/images/arcive/mony.png" alt="" />
                                                            <h6>_ 25.8772200 BTC</h6>
                                                        </div>
                                                    </div>
                                                    <div className="s-a-b">
                                                        <div className="left">
                                                            <img src="assets/images/arcive/sa8.png" alt="" />
                                                            <div className="content">
                                                                <div className="left2">
                                                                    <img src="assets/images/arcive/m5.png" alt="" />
                                                                </div>
                                                                <div className="right2">
                                                                    <h4>Erik Adams</h4>
                                                                    <div className="stars">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star-half-alt"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <img src="assets/images/arcive/mony.png" alt="" />
                                                            <h6>25.8772200 BTC</h6>
                                                        </div>
                                                    </div>
                                                    <div className="s-a-b">
                                                        <div className="left">
                                                            <img src="assets/images/arcive/sa9.png" alt="" />
                                                            <div className="content">
                                                                <div className="left2">
                                                                    <img src="assets/images/arcive/m6.png" alt="" />
                                                                </div>
                                                                <div className="right2">
                                                                    <h4>Gina Mills</h4>
                                                                    <div className="stars">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star-half-alt"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <img src="assets/images/arcive/mony.png" alt="" />
                                                            <h6>+ 25.8772200 BTC</h6>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Latest arcive area End --> */}



            {/* <!-- Contact Section start --> */}
            <section className="contact_section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="left-image">
                                <img src="assets/images/cs-image.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-heading content-left">
                                <h2 className="title ">
                                    If You have any
                                    Questions
                                </h2>
                                <h6 className="text">
                                    Our top priorities are to protect your privacy, provide secure transactions, and safeguard your data. When you're ready to play, registering an account is required so we know you're of legal age and so no one else can use your account.We answer the most commonly asked lotto questions..
                                </h6>
                                <a href="#" className="mybtn1">Contact US</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Section end --> */}

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

export default One;