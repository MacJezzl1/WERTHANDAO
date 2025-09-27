import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Faqs = () => {
	const router = useRouter();
	const { pathname } = router;


	const [tab, setTab] = useState('General')

	return (
		<>
			<div className={`faq-section style-${pathname === '/' ? 'four' : 'three'} pt-100 pb-100`}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="dreamit-section-title two text-center pb-20">
								<div className="dreamit-section-sub-title">
									<h5> <img src="assets/images/new/title-img.png" alt="" />  FAQS</h5>
								</div>
								<div className="dreamit-section-main-title">
									<h1>Frequently asked Question</h1>
								</div>
								<div className="dreamit-section-content-text">
									<p>Monotonectally productivate virtual benefits vis-a-vis clicks
										ship. Seamlessly generate user friendly</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row pt-25">
						<div className="col-lg-12">
							<div className="tab-content text-center">
								<ul className="tabs">
									<li className={`${tab === "General" ? "active" : ''}`} rel="tab1" onClick={() => setTab("General")} >General </li>
									<li className={`${tab === "Token" ? "active" : ''}`} rel="tab2" onClick={() => setTab("Token")}> Token  </li>
									<li className={`${tab === "Client" ? "active" : ''}`} rel="tab3" onClick={() => setTab("Client")}>  Client </li>
									<li className={`${tab === "Pre ICO" ? "active" : ''}`} rel="tab4" onClick={() => setTab("Pre ICO")}> Pre ICO</li>
									<li className={`${tab === "Legal" ? "active" : ''}`} rel="tab5" onClick={() => setTab("Legal")}> Legal</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row align-items-center pt-20">
						<div className="col-lg-6 col-md-12">
							<div className="tab_container">
								<h3 className="d_active tab_drawer_heading" rel="tab1">Tab 1</h3>
								{/* #tab1  */}
								<div id="tab1" style={{ display: tab === `General` ? `block` : 'none' }} className="tab_content">
									<ul className="accordion">
										<li>
											<a>What is ICO</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
										<li>
											<a>How can I participate in the ICO Token sale?</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
										<li>
											<a>What cryptocurrencies can I use to purchase?</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled obcaecati magni ullam nobis voluptas fugiat tenetur voluptatum quas tempora maxime</p>
										</li>
										<li>
											<a>What cryptocurrencies can I use to purchase?</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled </p>
										</li>
									</ul>
								</div>
								{/* #tab2  */}
								<h3 className="tab_drawer_heading" rel="tab2"> Token  </h3>
								<div id="tab2" style={{ display: tab === `Token` ? `block` : 'none' }} className="tab_content">
									<ul className="accordion">
										<li>
											<a>What cryptocurrencies can I use to purchase?</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
										<li>
											<a>How can I participate in the ICO Token sale?</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
										<li>
											<a>Dolor sit Amet</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled </p>
										</li>
										<li>
											<a>Dolor sit Amet</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
									</ul>
								</div>
								{/* #tab3  */}
								<h3 className="tab_drawer_heading" rel="tab3">  Client </h3>
								<div id="tab3" style={{ display: tab === `Client` ? `block` : 'none' }} className="tab_content">

									<ul className="accordion">
										<li>
											<a>What is ICO</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
										<li>
											<a>Repellat Odit Aliquid</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled </p>
										</li>
										<li>
											<a>Dolor sit Amet</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled </p>
										</li>
										<li>
											<a>Dolor sit Amet</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
									</ul>
								</div>
								{/* #tab4  */}
								<h3 className="tab_drawer_heading" rel="tab4"> Pre ICO</h3>
								<div id="tab4" style={{ display: tab === `Pre ICO` ? `block` : 'none' }} className="tab_content">

									<ul className="accordion">
										<li>

											<a>What is ICO</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
										<li>
											<a>Repellat Odit Aliquid</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
										<li>
											<a>Dolor sit Amet</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
										<li>
											<a>Dolor sit Amet</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
									</ul>
								</div>
								{/* #tab5  */}
								<h3 className="tab_drawer_heading" rel="tab5"> Legal</h3>
								<div id="tab5" style={{ display: tab === `Legal` ? `block` : 'none' }} className="tab_content">
									<ul className="accordion">
										<li>
											<a>What is ICO</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
										<li>
											<a>Repellat Odit Aliquid</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
										<li>
											<a>Dolor sit Amet</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
										<li>
											<a>Dolor sit Amet</a>
											<p>Holisticly coordinate highes standards in communities rather than cute
												ures. Distinctivelys supply highly efficients networks for integrated fors
												vize adaptive value through enabled</p>
										</li>
									</ul>
								</div>
							</div>
							{/* .tab_container  */}
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="faq-thumb">
								<img src="assets/images/faq.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Faqs