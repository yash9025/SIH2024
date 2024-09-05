import React from 'react'
import './Home.css'
import Card from '../Card/Card'


export default function Home() {

    function loadWeatherWidget(d, s, id) {
        // Check if the document, script type, and id are valid
        if (!d || !s || !id) {
            console.error("Invalid arguments");
            return;
        }

        var js,
            fjs = d.getElementsByTagName(s)[0];

        // Check if the script already exists
        if (d.getElementById(id)) {
            console.log("Script already loaded");
            return;
        }

        js = d.createElement(s);
        js.id = id;
        js.src = 'https://weatherwidget.io/js/widget.min.js';

        // Check if the first script element exists
        if (!fjs) {
            console.error("No script elements found");
            return;
        }

        // Insert the new script before the first script element
        fjs.parentNode.insertBefore(js, fjs);

        // Add an event listener to handle load errors
        js.addEventListener('error', function () {
            console.error("Failed to load script");
        });
    }

    // Call the function
    loadWeatherWidget(document, 'script', 'weatherwidget-io-js');


    return (
        <main className='flex min-h-screen'>
            <section class="hero">
                <div class="container">
                    <h1 class='animate-header'>Discover Your Solar Space</h1>
                    <p class='animate-paragraph'>Welcome to Tech Miners, where the power of the sun meets innovation. We believe that a brighter future begins with clean energy, and that's why we're dedicated to harnessing the limitless potential of solar power. With our cutting-edge technology and expert solutions, we're empowering homes, businesses, and communities to shine brighter, sustainably. Join us in our mission to illuminate a cleaner, greener tomorrow - one solar panel at a time.</p>
                    <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2003561" role="button" class='button'>Explore Now</a>

                    <div class="map">
                        <div class='containerMap'>
                            <h2 class='animate-header'>Find your UV on Maps</h2>
                            <div classname="flex justify-center align-middle bg-white">
                                <div classname="relative justify-center align-middle">
                                    <img src="https://worldbank-atlas.s3.us-east-1.amazonaws.com/download/India/India_GHI_mid-size-map_156x194mm-300dpi_v20191015.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS2HACIWTKEQQY5ND%2F20240905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240905T144252Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJHMEUCIQCSDzU1KCpPyZVPcyTFEac68Cl3LAJ5bRiOT%2BXPuDSEEwIgZ%2BCJg19v9glPvO33FKfvfesczfT7WHa2WTZXuri3%2FEkq3gMI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgwxOTM3NDM0MzkyNzAiDFe%2FM1ToDJaQtj8rgCqyA%2Bj4jd97%2Bk%2Fpg%2FUjOH4l07%2FD0gk%2FgnXrEe%2BlWxC6ErfczVPAZO3APoxMYVxzRQaoANO4%2F87rafDOy9PECNVpISgC7QlQO%2FwIuOPbY2eWQ0qy8ykWFDRH3UQaeVR6sbJmxBy4justcxCsPvEOk0guDQvIy9dQ5HQAe66%2Bu06LHZ14plu5pGsdXgpcVaJ7tTI6d0WlTjYou%2BTPVpHt7xxOA8wxgtVS4q0%2FqaK%2FE%2BfbRC7W%2FHbu8GfK%2BGaSx5%2FtgKeeSb7dKRYOsYNZTeIq3TijVZMsAOtDAqyV5XJMUxYnGBGPDiukrSCwudayyhPIvo6CEPRJliBJQhADzBtWyOL8ebELZRS53fM0jskUPqzGoYbFQvOKKaZEXyw%2FRp4fX5t2%2BOxha1M2Q9qhMONJsSb229Go%2Fp8g3Xp1B2Nsd%2BZ3rNISSL2svoBkiLu7wmFDQ%2F5zqpDDMCTSJE7DhSdRKOIq3Q4CrJTkwM%2FqFxGHPLQ6HElN0VZ9iz7HI2rqLe7veOWafUqyBeNXV9ZXg4n%2FphjiWLlcsRcmxtZJ7G29atl92XcIc4LuSRngRfuEaK%2FOqGwNAUmNMJLr5rYGOp4BsMMekGUDI8iesOdo9sn74YZQKYHw4mvxU99Al8Z2%2BpEUgFOpc3AnLE9V7XNXyKfyjTHozgC727vjB3y3nD35e4OZFGTR50FNWodUL51nSTj0jL6ErepTCmS6MvH%2FKgFmoQqgmWCIezexvGrpeeuYy6FNgO9zazmunSChmLOSL9GAfLdGZ6qmk9LffTAfNnjKV%2BNJjlNI9EltGBgIiEI%3D&X-Amz-Signature=fb64ee15dfea1cc383e2a146b983adf9c4c95588ed5211561557a504432e6afc&X-Amz-SignedHeaders=host&x-id=GetObject" alt="World map with various colored dots indicating different locations" class="mx-auto my-auto w-full h-auto shadow-lg" />
                                    <a href="https://globalsolaratlas.info/map?r=IND&c=22.589668,73.524903,6&s=23.229232,72.687744&m=site" role='button' classname="absolute bottom- left-0  text-xl font-bold flex items-center bg-black bg-opacity-40 px-4 py-2 rounded">
                                        Open Interactive Map <i class="fas fa-arrow-up-right-from-square ml-2"></i>
                                    </a>
                                </div>
                            </div>
                            <div class='description'>
                                <p class='para'>
                                There has been a visible impact of solar energy in the Indian energy scenario during the last few years. Solar energy based decentralized and distributed applications have benefited millions of people in Indian villages by meeting their cooking, lighting and other energy needs in an environment friendly manner. The social and economic benefits include reduction in drudgery among rural women and girls engaged in the collection of fuel wood from long distances and cooking in smoky kitchens, minimization of the risks of contracting lung and eye ailments, employment generation at village level, and ultimately, the improvement in the standard of living and creation of opportunity for economic activities at village level. Further, solar energy sector in India has emerged as a significant player in the grid connected power generation capacity over the years. It supports the government agenda of sustainable growth, while, emerging as an integral part of the solution to meet the nation’s energy needs and an essential player for energy security.
                                </p>
                                <p class='para'>
                                In order to achieve the above target, Government of India have launched various schemes to encourage generation of solar power in the country like Solar Park Scheme, VGF Schemes, CPSU Scheme, Defence Scheme, Canal bank & Canal top Scheme, Bundling Scheme, Grid Connected Solar Rooftop Scheme etc.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </section >

            <section class="companies">
                {/* <div>
                    <a className=' rounded-lg' class="weatherwidget-io" href="https://forecast7.com/en/23d1772d66/raysan/" data-label_1="RAYSAN" data-label_2="WEATHER" data-days="3" data-theme="original" >RAYSAN WEATHER</a>
                </div> */}
                <div class="containerCompanies">
                    <h2 class=' font-bold text-2xl'>Featured Top Solar Plants</h2>
                    <div class="company-cards">
                        <div class="company-card">
                            <Card
                                image="https://th.bing.com/th/id/OIP.LqCV_FLA0u-vLQ1_UvhwcwHaFj?rs=1&pid=ImgDetMain"
                                title="Bhadla Solar Park"
                                description=<div>
                                    Total area : 14,000 acres <br />
                                    Average temperatures: 46 ℃<br />
                                    Total Capacity : 2,245 MW<br />
                                    Investment : 10,000 crore (When its full capacity is operational )
                                </div>
                            />
                            <Card
                                image="https://www.pv-magazine.com/wp-content/uploads/2017/10/Building_Energy_Solar_Plant-1200x900.jpg"
                                title="Pavagada Solar Park"
                                description=<div>
                                    Total area : 13,000 acres<br />
                                    Average temperatures: 40 ℃<br />
                                    Total Capacity : 2,050 MW<br />
                                    Investment: 8,500 crore (When its full capacity is operational )
                                </div>
                            />
                            <Card
                                image="https://th.bing.com/th/id/OIP.NtGYludeF_ALsUrVrd-e2AHaEg?rs=1&pid=ImgDetMain"
                                title="Kurnool Solar Park"
                                description=<div>
                                    Total area : 5,932.32 acres<br />
                                    Average temperatures: 39 ℃<br />
                                    Total Capacity : 1,000 MW<br />
                                    Investment : 7,000 crore (When its full capacity is operational )
                                </div>
                            />

                        </div>
                    </div>
                </div>
            </section>
        </main >
        /* <section class="map">
        <div class="container">
            <h2>Find Out On Maps</h2>
            <div class="map-container">
                <div id="map" style="height: 400px;"></div>
            </div>
        </div>
    </section> */


    )
}

