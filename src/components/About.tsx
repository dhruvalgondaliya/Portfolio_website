import { Code2, Layout, Database, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-8">
      <section className="bg-[#112240]/50 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-emerald-400/20 ">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-start">
          About Me
        </h2>
        <div className="h-1 w-20 bg-emerald-400 mb-4"></div>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          I am a motivated and detail-oriented Web Developer from Ahmedabad,
          currently pursuing a Bachelor of Computer Applications (BCA). With a
          strong foundation in full-stack web development, I am proficient in
          modern technologies including HTML, CSS, JavaScript, React, Node.js,
          and MongoDB. I completed a Skill-based Course at Red & White
          Multimedia Education, where I developed and maintained web
          applications, ensuring optimal performance and user experience. I have
          honed my problem-solving skills through academic projects and
          hackathons, and I am eager to contribute my skills and enthusiasm to a
          dynamic development team in a full-stack developer role.
        </p>
      </section>

      <section className="bg-[#112240]/50 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-emerald-400/20">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-start">
          What I'm Doing
        </h2>
        <div className="h-1 w-20 bg-emerald-400 mb-4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-[#1a365d]/70 p-4 sm:p-6 rounded-lg hover:transform hover:scale-105 transition-transform border border-emerald-400/20">
            <Layout className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400 mb-3" />
            <h3 className="text-lg font-bold mb-2">Web Design</h3>
            <p className="text-gray-300 text-sm">
              The most modern and high-quality design made at a professional
              level.
            </p>
          </div>
          <div className="bg-[#1a365d]/70 p-4 sm:p-6 rounded-lg hover:transform hover:scale-105 transition-transform border border-emerald-400/20">
            <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400 mb-3" />
            <h3 className="text-lg font-bold mb-2">Web Development</h3>
            <p className="text-gray-300 text-sm">
              High-quality development of sites at the professional level.
            </p>
          </div>
          <div className="bg-[#1a365d]/70 p-4 sm:p-6 rounded-lg hover:transform hover:scale-105 transition-transform border border-emerald-400/20">
            <Database className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400 mb-3" />
            <h3 className="text-lg font-bold mb-2">Database Design</h3>
            <p className="text-gray-300 text-sm">
              Efficient and scalable database architecture for modern
              applications.
            </p>
          </div>
          <div className="bg-[#1a365d]/70 p-4 sm:p-6 rounded-lg hover:transform hover:scale-105 transition-transform border border-emerald-400/20">
            <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400 mb-3" />
            <h3 className="text-lg font-bold mb-2">API Development</h3>
            <p className="text-gray-300 text-sm">
              Robust and secure API development for seamless integration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
