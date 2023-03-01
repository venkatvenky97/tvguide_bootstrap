import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer id="main-footer">
                <div className="container-fluid d-flex flex-column flex-md-row">
                    <div className="logo d-flex justify-content-center mb-4 mb-md-0">
                        <Link to="#"><img src="assets/images/logo.png" alt="TVGuide" /></Link>
                    </div>
                    <div className="content d-flex align-items-center flex-column align-items-md-start">
                        <nav>
                            <ul className="list-unstyled text-uppercase d-flex flex-wrap justify-content-center justify-content-sm-start">
                                <li>
                                    <Link to="#">About us</Link>
                                </li>
                                <li>
                                    <Link to="#">Contact us</Link>
                                </li>
                                <li>
                                    <Link to="#">Advertise</Link>
                                </li>
                                <li>
                                    <Link to="#">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="#">Privacy</Link>
                                </li>
                                <li>
                                    <Link to="#">Manage consent</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="copyright text-center text-sm-left">
                            © 2018 TVGuide.co.uk Ltd TV Listings. All right reserved & trademarks acknowledged.
                            <Link to="#">Now in 50 Countries!</Link>
                        </div>
                        <div>
                            <div className="tip mb-2 mb-sm-0">Never miss a show sign up to our newsletter:</div>
                            <form action="">
                                <input type="email" placeholder="Enter your email" required />
                                <button type="submit" className="text-uppercase">Go</button>
                            </form>
                        </div>
                        <div className="d-flex flex-column flex-sm-row align-items-center">
                            <div className="social mr-sm-5 mb-3 mb-sm-0">
                                <Link to="#" className="facebook mr-2">
                                    <span className="icon-facebook"></span>
                                </Link>
                                <Link to="#" className="twitter mr-2">
                                    <span className="icon-twitter"></span>
                                </Link>
                                <Link to="#" className="linkedin mr-2">
                                    <span className="icon-linkedin"></span>
                                </Link>
                                <Link to="#" className="snapchat">
                                    <span className="icon-snapchat-ghost"></span>
                                </Link>
                            </div>
                            <div>
                                <Link to="#" className="mr-1">
                                    <img src="assets/images/google-play.svg" alt="Get it on Google Play" />
                                </Link>
                                <Link to="#">
                                    <img src="assets/images/app-store.svg" alt="Download on the App Store" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
