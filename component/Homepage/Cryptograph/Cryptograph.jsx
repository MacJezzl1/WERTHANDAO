import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';


const Cryptograph = () => {
    
    const myChartRef = useRef(null);
    const yourChartRef = useRef(null);
    let myChartInstance = null;
    let yourChartInstance = null;

    useEffect(() => {

        (async function () {
            var xValues = ["Contingency", "France", "Spain", "USA", "Argentina"];
            var yValues = [40, 49, 44, 24, 15];
            var barColors = [
                "#AA3BC5",
                "#09B1F2",
                "#1FD5A4",
                "#FEB81A",
                "#F97431"
            ];

            if (myChartInstance) {
                myChartInstance.destroy();
            }
            myChartInstance = new Chart(myChartRef.current, {
                type: "polarArea",
                data: {
                    labels: xValues,
                    datasets: [{
                        label: 'Dataset 1',
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "World Wide Wine Production 2018"
                    },
                }
            });

            // Style Two
            var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
            var yValues = [55, 49, 44, 24, 15];
            var barColors = [
                "#4DB866",
                "#EDB019",
                "#E36D23",
                "#F08A1E",
                "#39A2D1"
            ];

            if (yourChartInstance) {
                yourChartInstance.destroy();
            }
            yourChartInstance = new Chart(yourChartRef.current, {
                type: "doughnut",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "World Wide Wine Production 2018"
                    },
                }
            });

        })();
    }, [])


    return (
        <>
            <div className="graph-section style-three pb-100">
                <div className="container">
                    <div className="row upper14">
                        <div className="col-lg-9">
                            <div className="dreamit-section-title  pb-20">
                                <div className="dreamit-section-main-title">
                                    <h1>1 CNL = 0.0013 BTC</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="right-side-graph-btn">
                                <a href="#;">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="row upper15  pt-20">
                        <div className="col-lg-6 col-md-12">
                            <div className="single-chart">
                                <canvas ref={myChartRef} id="myChart" width="500" height="500"></canvas>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="chart-menu">
                                            <ul>
                                                <li className="another1"> <span>12%</span>Reserved Funding</li>
                                                <li className="another2"> <span>8%</span>Product Development</li>
                                                <li className="another3"> <span>40%</span>Bounty Campaign</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="chart-menu">
                                            <ul>
                                                <li className="another4"> <span>40%</span>Bounty Campaign</li>
                                                <li className="another5"> <span>20%</span>Reserved Funding</li>
                                                <li className="another6"> <span>15%</span>Bounty Campaign</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="shape12">
                                    <img src="assets/images/shape1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="single-chart-two">
                                <canvas ref={yourChartRef} id="yourChart" width="350" height="350"></canvas>
                                <div className="row upper13">
                                    <div className="col-lg-6">
                                        <div className="chart-menu">
                                            <ul>
                                                <li className="another1"> <span>12%</span>Reserved Funding</li>
                                                <li className="another2"> <span>8%</span>Product Development</li>
                                                <li className="another3"> <span>40%</span>Bounty Campaign</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="chart-menu">
                                            <ul>
                                                <li className="another4"> <span>40%</span>Bounty Campaign</li>
                                                <li className="another5"> <span>20%</span>Reserved Funding</li>
                                                <li className="another6"> <span>15%</span>Bounty Campaign</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="shape13">
                                    <img src="assets/images/shape2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cryptograph