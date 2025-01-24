import { Link, useLocation, Routes, Route } from "react-router-dom";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Menu,
  X
} from "lucide-react";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Krish from "../img/Dhruval.jpg";
import Background from "./Background";
import Achievements from "./Achievement";
import Contact from "./Contact";
import { useState } from "react";
import Testimonials from "./Testimonials";

//   function Header({ activeTab, onTabChange }: HeaderProps) {
function MainApp() {
  const links = ["About", "Resume", "Portfolio", "Achievement","Testimonials", "Contact"];
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Background />
      <div className="relative min-h-screen text-white overflow-x-hidden">
        <nav className="hidden md:block fixed lg:top-0 right-0 p-6 z-40 bg-[#0a192f]/50 backdrop-blur-xl w-full">
          <ul className="flex justify-center space-x-8 text-base ">
            {links.map((item) => {
              const path = `/${item.toLowerCase()}`;
              const isActive =
                location.pathname === path ||
                (location.pathname === "/" && item === "About");
              return (
                <li key={item}>
                  <Link
                    to={path}
                    className={`text-lg ${
                      isActive ? "text-emerald-400" : "text-white/70"
                    } hover:text-emerald-400 transition-colors`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Header */}
        <div className="lg:hidden md:hidden">
          {/* Mobile Toggle Button */}
          <button
            onClick={toggleMenu}
            className="fixed top-4 right-4 p-2 bg-[#0B1223]/80 backdrop-blur-lg border border-emerald-400/20 rounded-lg text-emerald-400 hover:text-emerald-300 transition-colors z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu - Right Side Box */}
          <div
            className={`fixed top-0 right-0 h-screen w-64 bg-[#0B1223]/95 backdrop-blur-lg border-l border-emerald-400/20 transform transition-transform duration-300 ease-in-out z-40 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="pt-16">
              {links.map((item) => {
                const path = `/${item.toLowerCase()}`;
                const isActive =
                  location.pathname === path ||
                  (location.pathname === "/" && item === "About");

                return (
                  <Link
                    key={item}
                    to={path}
                    onClick={() => {
                      setIsMenuOpen(false); // Close the menu
                    }}
                    className={`w-full px-6 py-3 block text-left capitalize transition-colors ${
                      isActive
                        ? "text-emerald-400 bg-emerald-400/10"
                        : "text-white hover:text-emerald-400"
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 relative z-10 pb-20 md:pb-8">
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 position-absolute">
            {/* Profile Section */}
            <div className=" bg-[#112240] rounded-2xl p-6 h-fit backdrop-blur-lg border border-emerald-400/20 w-full max-w-sm mx-auto lg:mx-0 lg:sticky lg:top-24 mt-5">
              <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-6 mb-6">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40">
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-pulse"></div>
                  <img
                    src={Krish}
                    alt="Profile"
                    className="rounded-full w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-center sm:text-left lg:text-center flex-1">
                  <h1 className="text-xl sm:text-2xl font-bold mb-2">
                    Dhruval Gondaliya
                  </h1>
                  <p className="text-emerald-400 mb-4">FullStack-Developer</p>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Dhruval.pdf?alt=media&token=36021d2b-9b5a-402e-8a95-287ba990ea5a"
                    download
                  >
                    <button className="w-full bg-emerald-400 text-[#0a192f] py-2 rounded-lg hover:bg-emerald-300 transition-colors font-semibold">
                      Download CV
                    </button>
                  </a>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <a
                    href="mailto:f342dhruval@gmail.com"
                    className="text-sm break-all "
                  >
                    f342dhruval@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <a
                    href="tel:+916354296164"
                    className="text-sm "
                  >
                    +91 63542 96164
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">February 08, 2002</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">Ahmedabad, Gujarat</span>
                </div>
              </div>

              <div className="flex justify-center space-x-6 mt-8">
                <a
                  href="https://www.linkedin.com/in/dhruvalgondaliya/"
                  className="text-white hover:text-emerald-400 transition-colors"
                  target="_blank"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/dhruvalgondaliya"
                  className="text-white hover:text-emerald-400 transition-colors"
                  target="_blank"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-emerald-400 transition-colors"
                  target="_blank"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8 mt-5 ">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/achievement" element={<Achievements />} />
                <Route path="/testimonials" element={<Testimonials/>}/>
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainApp;
