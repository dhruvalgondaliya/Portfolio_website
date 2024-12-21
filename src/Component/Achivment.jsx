import React from "react";


function Achivment() {

    return (
        <>
        {/* This is a Achevment Page  */}
            <div id="potfolio">
                <div className="container" id="Achive">
                    <div className="row">
                        <div className="portfolio col-md-12">
                            <h2>Achivement</h2>
                        </div>
                    </div>

                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row m-2 pt-4">
                                <div className="website col-md-4 border-none">
                                    <button id='buto'><a href="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/BlueCore%20It%20Certificate.jpg?alt=media&token=80f3f8f5-4a9d-45b1-87da-77490f87a40e"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/BlueCore%20It%20Certificate.jpg?alt=media&token=80f3f8f5-4a9d-45b1-87da-77490f87a40e" alt="" />
                                    <div className="devlop">
                                        <h3>BlueCore It</h3>
                                    </div>
                                </div>
                                <div className="website col-md-4 border-none">
                                    <button id='buto'><a href="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/odoo%20certificate.jpeg?alt=media&token=a85b4829-fbd4-473a-b62d-e40119c44809"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/odoo%20certificate.jpeg?alt=media&token=a85b4829-fbd4-473a-b62d-e40119c44809" alt="" />
                                    <div className="devlop">
                                        <h3>Odoo</h3>
                                    </div>
                                </div>
                                <div className="website col-md-4 border-none" >
                                    <button id='buto'><a href="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/certificate.jpg?alt=media&token=51e81bc2-6954-4cdf-a233-f45182cbd4d9"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/certificate.jpg?alt=media&token=51e81bc2-6954-4cdf-a233-f45182cbd4d9" alt="" />
                                    <div className="devlop">
                                        <h3>Red & white</h3>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Achivment;