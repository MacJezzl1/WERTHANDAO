import React, { useEffect, useState } from 'react'
import Searchpopup from '../Searchpopup/Searchpopup'
import Sidebar from '../Sidebar/Sidebar'
import { useRouter } from 'next/router'
import Link from 'next/link'

import WalletConnect from '../../../WalletConnect/WalletConnect'

const Header = () => {
    const router = useRouter();
    const { pathname } = router;
    const [sidebar, setSidebar] = useState(false)

    useEffect(() => {
        $('.mobile-menu nav').meanmenu({
            meanScreenWidth: "991",
            meanMenuContainer: ".mobile-menu",
            onePage: false,
        })
    }, [])
    return (
        <>
            <div className={`header-area ${pathname !== '/' ? 'style-three' : ''}`} id="sticky-header">
                <div className="container">
                    <div className="row align-items-center d-flex">
                        <div className="col-lg-3">
                            <div className="header-logo">
                                <Link className="main-logo" href='/'><img src="assets/images/werthan-logo-4.png" alt="" /></Link>
                                <Link className="stiky-logo" href='/'><img src="assets/images/werthan-logo-4.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <nav className="cryptozen_menu">
                                <div className="header-menu">
                                    <ul className="nav_scroll">
                                        <li><Link href='/'>Home</Link>
                                        </li>
                                        <li><Link href='/vote'>Vote</Link>
                                        </li>
                                        <li><Link href='/reward'>Reward</Link>
                                        </li>
                                        {/*<li><a href="#">pages <i className="fas fa-angle-down"></i></a>
                                            <div className="sub-menu">
                                                <ul>
                                                    <li><Link href='/about'>about us </Link></li>
                                                    <li><Link href='/team'>our team</Link></li>
                                                    <li><Link href='/token'>token</Link></li>
                                                    <li><Link href='/roadmap'>road</Link></li>
                                                    <li><Link href='/contact'>contact</Link></li>
                                                    <li><Link href='/choose'>choose</Link></li>
                                                    <li><Link href='/faq'>faq</Link></li>
                                                    <li><Link href='/blogdetails'>blog details</Link></li>
                                                    <li><Link href='/bloggrid'>blog grid</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><Link href='/roadmap'>road map</Link>
                                        </li>*/}
                                        <li><Link href='/bloggrid'>Blog</Link>
                                        </li>
                                        <li><Link href='/about'>about</Link>
                                        </li>
                                        <li><Link href='/contact'>contact</Link></li>
                                    </ul>
                                    <div className="header-btn">
                                        {/*<a href="#">Get Token</a>*/}
                                        <WalletConnect />
                                    </div>
                                    <div className="sidebar">
                                        <div className="header-src-btn">
                                            <div className="search-box-btn search-box-outer"><i className="fas fa-search"></i></div>
                                        </div>
                                        <div onClick={() => setSidebar(true)} className="nav-btn navSidebar-button"><span className="icon flaticon-menu-2"></span></div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile menu seection  */}
            <div className="mobile-menu-area d-sm-block d-md-block d-lg-none ">
                <div className="mobile-menu">
                    <nav className="itsoft_menu">
                        <ul className="nav_scroll">
                            <li><Link href='/'>Home</Link>
                            </li>
                            <li><Link href='/vote'>Vote</Link>
                            </li>
                            <li><Link href='/reward'>Reward</Link>
                            </li>
                            <li><Link href='/about'>about</Link>
                            </li>
                            {/*<li><Link href='#'>pages</Link>
                                <div className="sub-menu">
                                    <ul>
                                        <li><Link href='/about'>about us </Link></li>
                                        <li><Link href='/team'>our team</Link></li>
                                        <li><Link href='/token'>token</Link></li>
                                        <li><Link href='/roadmap'>road</Link></li>
                                        <li><Link href='/contact'>contact</Link></li>
                                        <li><Link href='/choose'>choose</Link></li>
                                        <li><Link href='/faq'>faq</Link></li>
                                        <li><Link href='/blogdetails'>blog details</Link></li>
                                        <li><Link href='/bloggrid'>blog grid</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link href='/roadmap'>road map</Link>
                            </li>*/}
                            <li><Link href='/team'>team</Link>
                            </li>
                            <li><Link href='/contact'>contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Searchpopup />
            <Sidebar active={sidebar} setActive={setSidebar} />
        </>
    )
}

export default Header