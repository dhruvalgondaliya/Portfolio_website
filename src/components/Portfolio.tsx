import { useState } from 'react';
import { Eye, Link as LinkIcon } from 'lucide-react';
import img1 from '../img/Project/devQ&A.png'
import img2 from '../img/Project/EcommerceWebsite.jpg'
import img3 from '../img/Project/solarWebsite.jpg'
import img4 from '../img/Project/artificialWebsite.jpg'
import img5 from '../img/Project/GymWebsite.jpg'
import img6 from '../img/Project/HoneyWebsite.jpg'
import img7 from '../img/Project/HouseWebsite.jpg'
import img8 from '../img/Project/politicsWebsite.jpg'

import img10 from '../img/Project/LMS.png'
import img12 from '../img/Project/BhagwatDham.png'
import img13 from '../img/Project/SMS.png'
import img14 from '../img/Project/Logistik.png'

type Project = {
    id: number;
    title: string;
    category: string;
    type: string;
    image: string;
    link: string;
};

function Portfolio() {
    const [filter, setFilter] = useState<'Personal' | 'Group' | 'all'>('all');

    const projects: Project[] = [
        {
            id: 1,
            title: "StackOverflow clone Web Application",
            category: "Web Development",
            type: "Personal",
            image: img1,
            link: "https://devqa-web.netlify.app/"
        },
        {
            id: 10,
            title: "Laibrary",
            category: "Web Design",
            type: "Group",
            image: img10,
            link: "https://laibrary.netlify.app/"
        },
        {
            id: 12,
            title: "Temple",
            category: "Web Design (WORKING)",
            type: "Group",
            image: img12,
            link: "#"
        },
        {
            id: 13,
            title: "SMS",
            category: "School Management System (WORKING)",
            type: "Group",
            image: img13,
            link: "#"
        },
        {
            id: 14,
            title: "Logistic",
            category: "Web Design (WORKING)",
            type: "Group",
            image: img14,
            link: "https://logistic-uk.netlify.app/"
        },
        {
            id: 2,
            title: "E-commerce",
            category: "Web Design",
            type: "Personal",
            image: img2,
            link: "https://dhruvalgondaliya.github.io/Ecommerce_website/"
        },
        {
            id: 3,
            title: "Solar Website",
            category: "Web Design",
            type: "Personal",
            image: img3,
            link: "https://dhruvalgondaliya.github.io/SolarEnergy_Web"
        },
        {
            id: 4,
            title: "Artificial intelligence WebSite",
            category: "Web Design",
            type: "Personal",
            image: img4,
            link: "https://dhruvalgondaliya.github.io/Jqurey/"
        },
        {
            id: 5,
            title: "Gym Website",
            category: "Web Design",
            type: "Personal",
            image: img5,
            link: "https://dhruvalgondaliya.github.io/Gym_website/"
        },
        {
            id: 6,
            title: "Honey Website",
            category: "Web Design",
            type: "Personal",
            image: img6,
            link: "https://dhruvalgondaliya.github.io/Honey_Project/"
        },
        {
            id: 7,
            title: "House Website",
            category: "Web Design",
            type: "Personal",
            image: img7,
            link: "https://dhruvalgondaliya.github.io/Boostrap_website"
        },
        {
            id: 8,
            title: "Politics Website",
            category: "Web Design",
            type: "Personal",
            image: img8,
            link: "https://dhruvalgondaliya.github.io/Extraproject/"
        }
       
    ];

    const filteredProjects = projects.filter((project) =>
        filter === 'all' ? true : project.type === filter
    );

    const handleImageView = (imageUrl: string) => {
        window.open(imageUrl, '_blank');
    };

    return (
        <div className="space-y-8">
            <section className="bg-[#112240]/50 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-emerald-400/20">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Portfolio</h2>
                <div className="h-1 w-20 bg-emerald-400 mb-8"></div>

                {/* Filter Buttons */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-4 py-2 rounded-lg transition-colors ${filter === 'all'
                            ? 'bg-emerald-400 text-[#0a192f]'
                            : 'text-white hover:text-emerald-400'
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('Personal')}
                        className={`px-4 py-2 rounded-lg transition-colors ${filter === 'Personal' ? 'bg-emerald-400 text-[#0a192f]' : 'text-white hover:text-emerald-400'
                            }`}
                    >
                        Personal
                    </button>
                    <button
                        onClick={() => setFilter('Group')}
                        className={`px-4 py-2 rounded-lg transition-colors ${filter === 'Group'
                            ? 'bg-emerald-400 text-[#0a192f]'
                            : 'text-white hover:text-emerald-400'
                            }`}
                    >
                        Group Project
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-lg">
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[250px]  transition-transform duration-500 group-hover:scale-110 object-fit-contain"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#0a192f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <button
                                    onClick={() => handleImageView(project.image)}
                                    className="w-12 h-12 rounded-full bg-emerald-400 text-[#0a192f] flex items-center justify-center transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300 hover:bg-emerald-300"
                                >
                                    <Eye className="w-6 h-6" />
                                </button>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-emerald-400 text-[#0a192f] flex items-center justify-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 hover:bg-emerald-300"
                                >
                                    <LinkIcon className="w-6 h-6" />
                                </a>
                            </div>

                            {/* Project Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a192f] to-transparent">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="text-emerald-400 text-sm">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Portfolio;