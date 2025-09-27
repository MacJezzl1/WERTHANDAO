import React from 'react'
import Link from 'next/link'

const Breatcome = ({ pageName }) => {
    return (
        <>
            <div className="breatcome-area d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breatcome-content text-center">
                                <div className="breatcome-content-title">
                                    <h1>{pageName}</h1>
                                </div>
                                <div className="breatcome-content-text">
                                    <ul>
                                        <li><Link href='/'>Home </Link> <i className="fas fa-chevron-right"></i> <span>{pageName}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breatcome