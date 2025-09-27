import React, { useEffect, useRef } from 'react';

const Cryptotable = () => {

    const tableRef = useRef(null);

    useEffect(() => {
        $('ul.tabs li').last().addClass("tab_last");
        if (tableRef.current) {
            $(tableRef.current).DataTable({
                destroy: true,
                paging: false,
                "bInfo": false
            });

            $('#avaiable').on('click', function () {
                $('.single').show();
                $('.double').hide();
                $('.one').hide();
                $('triple').hide();
            });

            $('#gainers').on('click', function () {
                $('triple').show();
                $('.single').hide();
                $('.double').hide();
            });

            $('#losers').on('click', function () {
                $('triple').hide();
                $('.single').hide();
                $('.double').hide();
                $('.one').show();
            });

            $('#date').on('click', function () {
                $('triple').hide();
                $('.single').hide();
                $('.double').hide();
                $('.one').hide();
                $('.two').show();
            });
            $('#all_token').on('click', function () {
                $('triple').show();
                $('.single').show();
                $('.double').show();
                $('.two').show();
                $('.one').show();
            });
        }
    }, []);

    return (
        <>
            <div className="table-section pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="table-reponsive box">
                            <div className="table-responsive-content">
                                <h2>Current Market</h2>
                                <span>+0.36%</span>
                                <p>Market up in the last 24 hours</p>
                            </div>
                            <table ref={tableRef} className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th id="all_token">All Tokens</th>
                                        <th id="avaiable">Available</th>
                                        <th id="gainers">Gainers</th>
                                        <th id='losers'>Losers</th>
                                        <th id='date'>T. Supply</th>
                                        <th>24H Volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="single">
                                        <td> <img src="assets/images/new/01.png" alt="" /> Bitcoin <span>BTC</span></td>
                                        <td>$53,967.089</td>
                                        <td><img src="assets/images/new/0.png" alt="" /> 5.43%</td>
                                        <td>$93,967,200.89</td>
                                        <td>21M</td>
                                        <td>$93,967,200.30</td>
                                    </tr>
                                    <tr className="one">
                                        <td> <img src="assets/images/new/2.png" alt="" /> Ethereum <span>ETH</span></td>
                                        <td>$46967.000</td>
                                        <td><img src="assets/images/new/3.png" alt="" /> 0.23%</td>
                                        <td>$43,9656200.00</td>
                                        <td>0.5M</td>
                                        <td>$67,967,200.00</td>
                                    </tr>
                                    <tr className="double">
                                        <td> <img src="assets/images/new/4.png" alt="" /> Tether <span>THR</span></td>
                                        <td>$53,967.089</td>
                                        <td><img src="assets/images/new/0.png" alt="" /> 6.96%</td>
                                        <td>$56,089.200</td>
                                        <td>36M</td>
                                        <td>$93,967,200.30</td>
                                    </tr>
                                    <tr className="one">
                                        <td> <img src="assets/images/new/5.png" alt="" /> Binance Coin <span>BNC</span></td>
                                        <td>$46967.000</td>
                                        <td><img src="assets/images/new/3.png" alt="" /> 1.90%</td>
                                        <td>$43,9656200.00</td>
                                        <td>1.9M</td>
                                        <td>$56,089.200</td>
                                    </tr>
                                    <tr className="triple">
                                        <td> <img src="assets/images/new/4.png" alt="" /> Solana <span>SOL</span></td>
                                        <td>$29,456.09</td>
                                        <td><img src="assets/images/new/0.png" alt="" /> 5.43%</td>
                                        <td>$93,967,200.89</td>
                                        <td>27M</td>
                                        <td>$46,967.30</td>
                                    </tr>
                                    <tr className="one">
                                        <td> <img src="assets/images/new/5.png" alt="" /> Binance Coin <span>BNC</span></td>
                                        <td>$46967.000</td>
                                        <td><img src="assets/images/new/3.png" alt="" /> 1.90%</td>
                                        <td>$43,9656200.00</td>
                                        <td>1.9M</td>
                                        <td>$56,089.200</td>
                                    </tr>
                                    <tr className="triple">
                                        <td> <img src="assets/images/new/8.png" alt="" /> Dogecoin<span>DOGE</span></td>
                                        <td>$53,967.089</td>
                                        <td><img src="assets/images/new/0.png" alt="" /> 5.43%</td>
                                        <td>$56,089.200</td>
                                        <td>23M</td>
                                        <td>$93,967,200.30</td>
                                    </tr>
                                    <tr className="one">
                                        <td> <img src="assets/images/new/01.png" alt="" /> Bitcoin <span>BTC</span></td>
                                        <td>$53,967.089</td>
                                        <td><img src="assets/images/new/3.png" alt="" /> 5.43%</td>
                                        <td>$93,967,200.89</td>
                                        <td>21M</td>
                                        <td>$93,967,200.30</td>
                                    </tr>
                                    <tr className="two">
                                        <td> <img src="assets/images/new/2.png" alt="" /> Bitcoin <span>BTC</span></td>
                                        <td>$53,967.089</td>
                                        <td><img src="assets/images/new/0.png" alt="" /> 5.43%</td>
                                        <td>$93,967,200.89</td>
                                        <td>21M</td>
                                        <td>$93,967,200.30</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cryptotable;