import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="" />
        {/* Favicon  */}
        <link rel="icon" type="image/png" sizes="56x56" href="assets/images/fav-icon/icon.png" />
        {/* bootstrap CSS  */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" type="text/css" media="all" />
        <link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css" type="text/css" media="all" />
        {/* Jquery UI Tab css  */}
        <link rel="stylesheet" href="assets/css/jquery-ui.min.css" type="text/css" media="all" />
        {/* carousel CSS  */}
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" type="text/css" media="all" />
        {/* nivo-slider CSS  */}
        <link rel="stylesheet" href="assets/css/nivo-slider.css" type="text/css" media="all" />
        {/* animate CSS  */}
        <link rel="stylesheet" href="assets/css/animate.css" type="text/css" media="all" />
        {/* animated-text CSS  */}
        <link rel="stylesheet" href="assets/css/animated-text.css" type="text/css" media="all" />
        {/* font-awesome CSS  */}
        <link rel="stylesheet" href="assets/css/all.min.css" type="text/css" media="all" />
        {/* font-flaticon CSS  */}
        <link rel="stylesheet" href="assets/css/flaticon.css" type="text/css" media="all" />
        {/* theme-default CSS  */}
        <link rel="stylesheet" href="assets/css/theme-default.css" type="text/css" media="all" />
        {/* meanmenu CSS  */}
        <link rel="stylesheet" href="assets/css/meanmenu.min.css" type="text/css" media="all" />
        {/* Main Style CSS  */}
        <link rel="stylesheet" href="style.css" type="text/css" media="all" />
        {/* transitions CSS  */}
        <link rel="stylesheet" href="assets/css/owl.transitions.css" type="text/css" media="all" />
        {/* venobox CSS  */}
        <link rel="stylesheet" href="venobox/venobox.css" type="text/css" media="all" />
        {/* widget CSS  */}
        <link rel="stylesheet" href="assets/css/widget.css" type="text/css" media="all" />
        {/* Swiper Slider  */}
        <link rel="stylesheet" href="assets/css/animate.min.css" type="text/css" media="all" />
        <link rel="stylesheet" href="assets/css/custom-animation.css" type="text/css" media="all" />
        <link rel="stylesheet" href="assets/css/responsive.css" type="text/css" media="all" />
      </Head>
      <body>
        <Main />
        <NextScript />
         {/* jquery js  */}
        <script src="assets/js/vendor/jquery-3.2.1.min.js"></script>
         {/* bootstrap js  */}
        <script src="assets/js/bootstrap.min.js"></script>
         {/* carousel js  */}
        <script src="assets/js/owl.carousel.min.js"></script>
         {/* counterup js  */}
        <script src="assets/js/jquery.counterup.min.js"></script>
         {/* waypoints js  */}
        <script src="assets/js/waypoints.min.js"></script>
         {/* appear js  */}
        <script src="assets/js/jquery.appear.js"></script>
         {/* wow js  */}
        <script src="assets/js/wow.min.js"></script>
         {/* imagesloaded js  */}
        <script src="assets/js/imagesloaded.pkgd.min.js"></script>
         {/* venobox js  */}
        <script src="venobox/venobox.js"></script>
         {/* ajax mail js  */}
        {/* <script src="assets/js/ajax-mail.js"></script> */}
          {/* animated-text js  */}
        <script src="assets/js/animated-text.js"></script>
         {/* venobox min js  */}
        <script src="venobox/venobox.min.js"></script>
         {/* isotope js  */}
        <script src="assets/js/isotope.pkgd.min.js"></script>
         {/* jquery nivo slider pack js  */}
        <script src="assets/js/jquery.nivo.slider.pack.js"></script>
         {/* jquery meanmenu js  */}
        <script src="assets/js/jquery.meanmenu.js"></script>
         {/* jquery scrollup js  */}
        <script src="assets/js/jquery.scrollUp.js"></script>
         {/* Jquery UI Tab JS  */}
        <script src="assets/js/jquery-ui.min.js"></script>
        {/* Swiper Slider */}
        <script src="assets/js/swiper.min.js"></script>
        {/* theme js */}
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/theme.js"></script>
        <script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
      </body>
    </Html>
  )
}
