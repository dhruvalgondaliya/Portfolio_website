import React from 'react'
import img from './img/Dhruval.jpg'


function Asidebar() {
    return (
        <>
            <div id="container-on">
                <div className="container" >
                    <div className="row">
                        <div className='sidebar col-md-12'>
                            <div className="profile">
                                <div className='radius mb-2'>
                                    <img src={img} alt="Dhruval Gondaliya" className='potfolio-img' />
                                </div>
                                <span id='dhruv'>
                                    <h3>Dhruval Gondaliya</h3>
                                    <p style={{ color: '#605f5f' }} id='full'>Full Stack Developer</p>
                                </span>
                                <a href="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Dhruval.pdf?alt=media&token=36021d2b-9b5a-402e-8a95-287ba990ea5a" className='button text-center text-decoration-none text-light' download id='download'>Download CV</a>
                            </div>
                            <label for="check">
                                <span id='text-s' className='close'>Show Contacts</span>
                                <span id='text-i'><i className='bi bi-chevron-down'></i></span>
                            </label>
                            <input type="checkbox" id="check" />
                            <ol className='hide-show p-0 m-0' >
                                <div className="sidecontact">
                                    <div id='Adress-1'>
                                        <li className='phone mt-1' id='new-li'>
                                            <div className="email">
                                                <i class="fa-regular fa-envelope" style={{ color: "#ffdb70" }}></i>
                                            </div>
                                            <div className="contact">
                                                <p className='mt-2 mb-3' style={{ color: "hsl(0deg 0.45% 56.27%)", textAlign: "start" }}>Email</p>
                                                <a href="email" >f342dhruval@gmail.com</a>
                                            </div>
                                        </li>
                                        <li className='phone mt-2'>
                                            <div className="email">
                                                <i class="fa-solid fa-mobile-screen " style={{ color: "#ffdb70" }}></i>
                                            </div>
                                            <div className="contact">
                                                <p className='mt-2 mb-3' style={{ color: "hsl(0deg 0.45% 56.27%)", textAlign: "start" }}>PHONE</p>
                                                <a href="number" >+91 6354296164</a>
                                            </div>
                                        </li>
                                    </div>
                                    <div id="Adress-2">
                                        <li className='phone mt-2'>
                                            <div className="email">
                                                <i class="fa-solid fa-calendar-days" style={{ color: "#ffdb70" }}></i>
                                            </div>
                                            <div className="contact">
                                                <p className='mt-2 mb-3' style={{ color: "hsl(0deg 0.45% 56.27%)", textAlign: "start" }}>BIRTHDAY</p>
                                                <a href="birth" >FEBRUARY 08, 2002</a>
                                            </div>
                                        </li>
                                        <li className='phone mt-2'>
                                            <div className="email">
                                                <i class="fa-solid fa-location-dot" style={{ color: "#ffdb70" }}></i>
                                            </div>
                                            <div className="contact">
                                                <p className='mt-2 mb-3' style={{ color: "hsl(0deg 0.45% 56.27%)", textAlign: "start" }}>LOCATTION</p>
                                                <a href="adress" >Ahemdabad ,Gujrat</a>
                                            </div>
                                        </li>

                                    </div>
                                    <div className="Icon-box">
                                        <ul className="social_list p-0">
                                            <li><a href="https://www.linkedin.com/in/dhruvalgondaliya/"><i class="fa-brands fa-linkedin" style={{ color: "#d6d6d6" }}></i></a></li>
                                            <li><a href="https://github.com/dhruvalgondaliya"><i class="fa-brands fa-github" style={{ color: "#d6d6d6" }}></i></a></li>
                                            <li><a href="icon"><i class="fa-brands fa-instagram" style={{ color: "#d6d6d6" }}></i></a></li>
                                            <li><a href="https://wa.me/qr/GKQT6THOPJ6PK1"><i class="fa-brands fa-whatsapp" style={{ color: "#d6d6d6" }}></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Asidebar
