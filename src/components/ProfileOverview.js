import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../services/api.service';
import { updateAvatar, updateUsername } from '../reducers/userSlice';
import { FaPenAlt } from 'react-icons/fa';

function ProfileOverview() {
    const [edit, setEdit] = useState();
    const [style, setStyle] = useState({ display: 'none' });
    const [username, setUsername] = useState('');
    const { userInfo } = useSelector(state => state.user);


    const avatarRef = useRef();
    const dispatch = useDispatch();


    // init username
    useEffect(() => {
        setUsername(userInfo.username);
    }, [userInfo.username]);

    // handle avatar upload
    const handleAvatar = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('wallet', userInfo.wallet);
        dispatch(updateAvatar(formData));
    }

    //enter key
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            // update username
            dispatch(updateUsername(
                {
                    username: username,
                    wallet: userInfo.wallet
                }
            ));
            setEdit();
        }
    }

    return (
        <>
            {/* <!-- Breadcrumb Area Start --> */}
            <section className="breadcrumb-area gamer-profile">
                <div className="container">
                    {/* <!-- <div className="row">
                        <div className="col-lg-12">
                            <ul className="breadcrumb-list">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Players</a>
                                </li>
                                <li>
                                    <a href="#">My profile</a>
                                </li>
                            </ul>
                        </div>
                    </div> --> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bc-content">
                                <div
                                    onMouseEnter={e => {
                                        setStyle({ display: 'inline', cursor: 'pointer' });
                                    }}
                                    onMouseLeave={e => {
                                        setStyle({ display: 'none' })
                                    }}
                                    className="left"
                                >
                                    <h3>
                                        {
                                            !!edit ? (
                                                <><input type="text" onKeyDown={handleKeyDown} value={username} onChange={e => setUsername(e.target.value)}></input></>
                                            ) : (
                                                <>{userInfo.username}</>
                                            )
                                        }
                                        <span><FaPenAlt onClick={() => setEdit(true)} style={style} /></span>
                                    </h3>
                                    <p>Member Since 08 JAN 2022</p>
                                </div>
                                {/* <!-- <div className="right">
                                    <div className="player-wrapper">
                                        <span>Players</span>
                                        <h6>28</h6>
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="assets/images/player/sm1.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="assets/images/player/sm2.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="assets/images/player/sm3.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="assets/images/player/sm4.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <span>
                                                32+
                                            </span>
                                        </li>
                                    </ul>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Area End --> */}

            {/* <!-- Gamer Profile area Start --> */}
            <section className="gamer-profile-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gamer-profile-top-inner">
                                <div className="profile-photo">
                                    <div className="profile-photo-sub" onClick={() => avatarRef.current.click()}>
                                        <img className="profile-avatar" src={`${baseUrl}/${userInfo.avatar}`} alt="" />
                                    </div>
                                    <input type="file" ref={avatarRef} style={{ display: "none" }} onChange={handleAvatar} />
                                    <div className="mybadge">
                                        <img src="assets/images/gamer/badge.png" alt="" />
                                        <span>{userInfo.rank}</span>
                                    </div>
                                </div>
                                <div className="g-p-t-counters">
                                    <div className="g-p-t-single-counter">
                                        <div className="img">
                                            <img src="assets/images/gamer/c1.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4>236,486,687</h4>
                                            <span>Holding MPL Token</span>
                                        </div>
                                    </div>
                                    <div className="g-p-t-single-counter">
                                        <div className="img">
                                            <img src="assets/images/gamer/c2.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4>862</h4>
                                            <span>Win Ratio</span>
                                        </div>
                                    </div>
                                    <div className="g-p-t-single-counter">
                                        <div className="img">
                                            <img src="assets/images/gamer/c3.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4>417</h4>
                                            <span>Achievements</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- <div className="msg-btn-wrapper">
                                    <a href="#" className="msg-btn"  data-toggle="modal" data-target="#gamer-chat">
                                        <img src="assets/images/gamer/envelop.png" alt="" />
                                        <span>Message</span>
                                    </a>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Gamer Profile  area End --> */}

            {/* <!-- User Menu Area Start --> */}
            <div className="usermenu-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="usermenu-inner">
                                <div className="left-area">
                                    <ul>
                                        <li>
                                            <a href="/profile-overview" className="active">Overview</a>
                                        </li>
                                        <li>
                                            <a href="gamer-profile2.html">Friends</a>
                                        </li>
                                        <li>
                                            <a href="gamer-profile3.html">statistics</a>
                                        </li>
                                        <li>
                                            <a href="gamer-profile5.html">achievement</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- <div className="right-area">
                                    <a href="#" className="mybtn2">Follow</a>
                                    <a href="#" className="mybtn2">Invite to Team</a>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- User Menu Area End --> */}

            {/* <!-- User Main Content Area Start --> */}
            <section className="user-main-dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <aside>
                                <div className="about">
                                    <h4>About Me</h4>
                                    <p>
                                        Nothing Interesting hasn't been written here, what a pity it is quite a nice field
                                    </p>
                                    <ul>
                                        <li>
                                            <p><i className="fas fa-ethereum"></i> Bern Switzerland</p>
                                        </li>
                                        <li>
                                            <p> <i className="fas fa-calendar-alt"></i> Member Since 08 Jan 2021</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="rank-area">
                                    <div className="top-area">
                                        <div className="left">
                                            <img src="assets/images/gamer/lavel.png" alt="" />
                                        </div>
                                        <div className="right">
                                            <p>Rank: <span>12</span></p>
                                        </div>
                                    </div>
                                    <div className="bottom-area">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>75%</div>
                                        </div>
                                        <a href="#">View all Ranks <i className="fas fa-chevron-right"></i></a>
                                    </div>
                                </div>
                                <div className="achievment-area">
                                    <div className="header-area">
                                        <h4>Achievements</h4>
                                        <a href="#">All Rewards <i className="fas fa-chevron-right"></i></a>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="s-a">
                                                <img src="assets/images/gamer/a1.png" alt="" />
                                                <span>Tournaments <br />
                                                    Joined</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="s-a">
                                                <img src="assets/images/gamer/a2.png" alt="" />
                                                <span>Sets of <br />
                                                    Missions</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="s-a">
                                                <img src="assets/images/gamer/a3.png" alt="" />
                                                <span>Game <br />
                                                    plays</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="s-a">
                                                <img src="assets/images/gamer/a4.png" alt="" />
                                                <span>Active <br />
                                                    Days</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="s-a">
                                                <img src="assets/images/gamer/a5.png" alt="" />
                                                <span>Tournaments <br />
                                                    Won</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="s-a">
                                                <img src="assets/images/gamer/a6.png" alt="" />
                                                <span>Friends <br />
                                                    Referred</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <main>
                                <div className="main-box">
                                    <div className="header-area">
                                        <h4>Games Playing</h4>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="game-info">
                                                            <img src="assets/images/gamer/f1.png" alt="" />
                                                            <div className="content">
                                                                <h6>Dragon0213</h6>
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
                                                        <a href="#" className="mybtn2">Challenge</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="game-info">
                                                            <img src="assets/images/gamer/f2.png" alt="" />
                                                            <div className="content">
                                                                <h6>JamesMTM</h6>
                                                                <span>Level - Normal</span>
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
                                                                        <img src="assets/images/gamer/a5.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="ratio">
                                                            <span>Win Ratio</span>
                                                            <h4>25%</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="ratio">
                                                            <span>Elo Ratings </span>
                                                            <h4>506</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="mybtn2">Challenge</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="game-info">
                                                            <img src="assets/images/gamer/f3.png" alt="" />
                                                            <div className="content">
                                                                <h6>honous.muk</h6>
                                                                <span>Level - Low</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="players">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">
                                                                        <img src="assets/images/gamer/a6.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="ratio">
                                                            <span>Win Ratio</span>
                                                            <h4>81%</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="ratio">
                                                            <span>Elo Ratings </span>
                                                            <h4>3692</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="mybtn2">Challenge</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="game-info">
                                                            <img src="assets/images/gamer/f4.png" alt="" />
                                                            <div className="content">
                                                                <h6>RaRose33</h6>
                                                                <span>Level - Normal</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="players">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">
                                                                        <img src="assets/images/gamer/a2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <img src="assets/images/gamer/a5.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <img src="assets/images/gamer/a6.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="ratio">
                                                            <span>Win Ratio</span>
                                                            <h4>47%</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="ratio">
                                                            <span>Elo Ratings </span>
                                                            <h4>1368</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="mybtn2">Challenge</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="game-info">
                                                            <img src="assets/images/gamer/f5.png" alt="" />
                                                            <div className="content">
                                                                <h6>ulataroca</h6>
                                                                <span>Level - Low</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="players">
                                                            <ul>
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
                                                                        <img src="assets/images/gamer/a6.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="ratio">
                                                            <span>Win Ratio</span>
                                                            <h4>18%</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="ratio">
                                                            <span>Elo Ratings </span>
                                                            <h4>336</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="mybtn2">Challenge</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="game-info">
                                                            <img src="assets/images/gamer/f6.png" alt="" />
                                                            <div className="content">
                                                                <h6>Mondera.mo</h6>
                                                                <span>Level - Low</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="players">
                                                            <ul>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="ratio">
                                                            <span>Win Ratio</span>
                                                            <h4>8%</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="ratio">
                                                            <span>Elo Ratings </span>
                                                            <h4>97</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="mybtn2">Challenge</a>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- User Main Content Area End --> */}

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

export default ProfileOverview;