import React from 'react';

function Footer() {

    return (
        // <!-- Footer Area Start -->
        <footer className="footer" id="footer">

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="flogo">
                            <a href="/"><img src="assets/images/footer-ogo.png" alt="" /></a>
                        </div>
                        <div className="footer-menu">
                            <ul>
                                <li>
                                    <a href="/">
                                        MoonPool
                                    </a>
                                </li>
                                <li>
                                    <a href="/onetoone">
                                        1:1
                                    </a>
                                </li>
                                <li>
                                    <a href="/tournaments">
                                        Championship
                                    </a>
                                </li>
                                <li>
                                    <a href="/nft">
                                        NFT
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/moonpool_official" target="_blank">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                                <p>Copyright © 2022. All Rights Reserved By MoonPool</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
	    // <!-- Footer Area End -->
    );
}

export default Footer;