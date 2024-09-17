import React from 'react';
import form from './img/Form.jpg';
import Ecommerce from './img/EcommerceWebsite.jpg';
import Solar from './img/solarWebsite.jpg';
import AI from './img/artificialWebsite.jpg';
import Gym from './img/GymWebsite.jpg';
import honey from './img/HoneyWebsite.jpg';
import House from './img/HouseWebsite.jpg';
import politics from './img/politicsWebsite.jpg';
import LMs from './img/Lms Png.png'


function Portfolio() {
    return (
        <>
            <div id="potfolio">
                <div className="container" id="port">
                    <div className="row">
                        <div className="portfolio col-md-12">
                            <h2>Portfolio</h2>
                        </div>
                    </div>


                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All Projects</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Group Projects</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                            <div className="row m-2 pt-4">
                                <div className="website col-md-4 border-none" >
                                    <button id='buto'><a href="https://dhruvalgondaliya.github.io/Ecommerce_website/"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src={Ecommerce} alt="" />
                                    <div className="devlop">
                                        <h3>Ecommerce Website</h3>
                                        <h5>Web Development</h5>

                                    </div>
                                </div>
                                <div className="website col-md-4 border-none">
                                    <button id='buto'><a href="https://dhruvalgondaliya.github.io/SolarEnergy_Web/"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src={Solar} alt="" />
                                    <div className="devlop">
                                        <h3>Solar Website</h3>
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                                <div className="website col-md-4 border-none">
                                    <button id='buto'><a href="https://dhruvalgondaliya.github.io/Jqurey/"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src={AI} alt="" />
                                    <div className="devlop">
                                        <h3>Artificial intelligence WebSite</h3>
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-2 pt-3">
                                <div className="website col-md-4 border-none">
                                    <button id='buto'><a href="https://dhruvalgondaliya.github.io/Gym_website/"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src={Gym} alt="" />
                                    <div className="devlop">
                                        <h3>Gym Website</h3>
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                                <div className="website col-md-4 border-none">
                                    <button id='buto'><a href="https://dhruvalgondaliya.github.io/Honey_Project/"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src={honey} alt="" />
                                    <div className="devlop">
                                        <h3>Honey Website</h3>
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                                <div className="website col-md-4 border-none">
                                    <button id='buto'><a href="https://dhruvalgondaliya.github.io/Boostrap_website/"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src={House} alt="" />
                                    <div className="devlop">
                                        <h3>House Website</h3>
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-2 pt-3">
                                <div className="website col-md-4 border-none">
                                    <button id='buto'><a href="https://dhruvalgondaliya.github.io/Extraproject/"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src={politics} alt="" />
                                    <div className="devlop">
                                        <h3>Politics Website</h3>
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                                
                                <div className="website col-md-4 border-none">
                                    <button id='buto'><a href="https://krishpatel3085.github.io/RAGISTRATION-FORM/"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src={form} alt="" />
                                    <div className="devlop">
                                        <h3>Registration</h3>
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="website col-md-4 border-none" id='portfo'>
                                <img src={LMs} alt="" />
                                <h3>LMS</h3>
                                <p>Laibrary ManegeMent System</p>
                                <button id='buto'>
                                    <a href="https://laibrary.netlify.app/">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                </button>

                            </div>  
                        </div>

                    </div>






                </div>
            </div>
        </>
    )
}
export default Portfolio
