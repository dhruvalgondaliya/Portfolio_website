function Resume() {
    const educationHistory = [
        {
            school: "Manipal University Jaipur",
            period: "2023 - On Going",
            description: "To secure a challenging position as IT professional to use my software and analytical skills for the progress of organisation and attain career targets."
        },
        {
            school: "Red & White Multimedia Education",
            period: "2023 - 2024",
            description: "Web development experience, content management knowledge, multimedia programming, time management, and creativity. Successful candidates usually hold at least and Associate's Degree in a relevant field, such as Bachelor of Computer Applications."
        },
        {
            school: "Civil Engineering",
            period: "2019 - 2021",
            description: "Duis qute irure dolor in reprehenderit in voluptate, quila voluptas mag adit aut fugit, sed consequuntur magni dolores eos."
        }
    ];

    const skills = [
        { name: "Web Design", percentage: 95 },
        { name: "Web Development", percentage: 90 },
        { name: "Git", percentage: 94 }
    ];

    return (
        <div className="space-y-8">
            {/* Education Section */}
            <section className="bg-[#112240]/50 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-emerald-400/20">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Education</h2>
                <div className="h-1 w-20 bg-emerald-400 mb-8"></div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-3 top-5 bottom-0 w-0.5 bg-emerald-400/30"></div>

                    {/* Education items */}
                    <div className="space-y-12">
                        {educationHistory.map((edu, index) => (
                            <div key={index} className="relative pl-12">
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-emerald-400 bg-[#0a192f]"></div>

                                <h3 className="text-xl font-semibold mb-2">{edu.school}</h3>
                                <p className="text-emerald-400 mb-3">{edu.period}</p>
                                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="bg-[#112240]/50 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-emerald-400/20">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">My Skills</h2>
                <div className="h-1 w-20 bg-emerald-400 mb-8"></div>

                <div className="space-y-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-lg">{skill.name}</span>
                                <span className="text-emerald-400">{skill.percentage}%</span>
                            </div>
                            <div className="h-2 bg-[#1a365d] rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-emerald-400 rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Resume;