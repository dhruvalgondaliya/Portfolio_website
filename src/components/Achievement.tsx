import { useState } from 'react';
import { Eye } from 'lucide-react';

function Achievements() {
    const achievements = [
        {
            id: 2,
            title: "BlueCore IT",
            organization: "Udemy",
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/BlueCore%20It%20Certificate.jpg?alt=media&token=80f3f8f5-4a9d-45b1-87da-77490f87a40e',
            link: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/BlueCore%20It%20Certificate.jpg?alt=media&token=80f3f8f5-4a9d-45b1-87da-77490f87a40e"
        },
        {
            id: 3,
            title: "Odoo Hackathon",
            organization: "Tech Fest 2024",
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/odoo%20certificate.jpeg?alt=media&token=a85b4829-fbd4-473a-b62d-e40119c44809',
            link: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/odoo%20certificate.jpeg?alt=media&token=a85b4829-fbd4-473a-b62d-e40119c44809"
        },
        {
            id: 1,
            title: "Web Development Certificate",
            organization: "Red & White Multimedia Education",
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/certificate.jpg?alt=media&token=51e81bc2-6954-4cdf-a233-f45182cbd4d9',
            link: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/certificate.jpg?alt=media&token=51e81bc2-6954-4cdf-a233-f45182cbd4d9"
        },
    ];

    const [loadedImages, setLoadedImages] = useState<number[]>([]);

    const handleImageLoad = (id: number) => {
        setLoadedImages((prev) => [...prev, id]);
    };

    const handleView = (link: string) => {
        window.open(link, '_blank');
    };

    return (
        <div className="space-y-8">
            <section className="bg-[#112240]/50 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-emerald-400/20">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-start">Achievements</h2>
                <div className="h-1 w-20 bg-emerald-400 mb-8"></div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {achievements.map((achievement) => (
                        <div key={achievement.id} className="group relative overflow-hidden rounded-lg">
                            {/* Skeleton Effect */}
                            <div className="w-full h-[250px] relative">
                                {!loadedImages.includes(achievement.id) && (
                                    <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg"></div>
                                )}
                                <img
                                    src={achievement.image}
                                    alt={achievement.title}
                                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                                        loadedImages.includes(achievement.id) ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    onLoad={() => handleImageLoad(achievement.id)}
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#0a192f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button
                                    onClick={() => handleView(achievement.link)}
                                    className="w-12 h-12 rounded-full bg-emerald-400 text-[#0a192f] flex items-center justify-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 hover:bg-emerald-300"
                                >
                                    <Eye className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Achievement Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a192f] to-transparent">
                                <h3 className="text-lg font-semibold">{achievement.title}</h3>
                                <p className="text-emerald-400 text-sm">{achievement.organization}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Achievements;
