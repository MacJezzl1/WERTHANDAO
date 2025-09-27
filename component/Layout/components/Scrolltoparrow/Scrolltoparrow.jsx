import React, { useEffect } from 'react'

const Scrolltoparrow = () => {
	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			let scrolled = window.pageYOffset;
			if (scrolled > 300) document.getElementsByClassName("go-top")[0].classList.add("active");
			if (scrolled < 300) document.getElementsByClassName("go-top")[0].classList.remove("active");
		});
	}, [])

	const goTotop = () => {
		$("html, body").animate({
			scrollTop: "0"
		}, 500);
	}

	return (
		<>
			{/* start fTo Top */}
			<div className="scroll-area">
				<div className="top-wrap">
					<div className="go-top-btn-wraper">
						<div className="go-top go-top-button active" onClick={goTotop}>
							<i className="fas fa-arrow-up"></i>
							<i className="fas fa-arrow-up"></i>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Scrolltoparrow;