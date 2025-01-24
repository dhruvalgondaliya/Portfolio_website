import { Quote, Globe } from 'lucide-react';
import client1 from '../img/Client/Client-1.png.jpg';
import clientPerson from '../img/Client/Client1.jpg';

type Testimonial = {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    content: string;
};

type Client = {
    id: number;
    name: string;
    logo: string;
    website: string;
};

function Testimonials() {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Urvish Chodavadiya",
            role: "CEO",
            company: "Northpole Gateway",
            image: clientPerson,
            content: "Working with this team was an absolute pleasure. Their attention to detail and creative approach to problem-solving exceeded our expectations. The final product was exactly what we needed."
        },
        // {
        //     id: 2,
        //     name: "Michael Chen",
        //     role: "Product Manager",
        //     company: "InnovateLab",
        //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        //     content: "The level of professionalism and technical expertise demonstrated throughout our project was outstanding. They delivered a robust solution that perfectly aligned with our business needs."
        // },
        // {
        //     id: 3,
        //     name: "Emily Rodriguez",
        //     role: "Marketing Director",
        //     company: "GrowthHub",
        //     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        //     content: "Their innovative approach and dedication to quality made all the difference. The website they created has significantly improved our online presence and user engagement."
        // },
        // {
        //     id: 4,
        //     name: "David Park",
        //     role: "Founder",
        //     company: "StartupForge",
        //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        //     content: "Exceptional service from start to finish. They not only met our technical requirements but also provided valuable insights that enhanced the overall project outcome."
        // }
    ];

    const clients: Client[] = [
        {
            id: 1,
            name: "TechVision",
            logo: client1,
            website: "https://northpolegateway.com"
        },
        // {
        //     id: 2,
        //     name: "InnovateLab",
        //     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
        //     website: "https://example.com/innovatelab"
        // },
        // {
        //     id: 3,
        //     name: "GrowthHub",
        //     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
        //     website: "https://example.com/growthhub"
        // },
        // {
        //     id: 4,
        //     name: "StartupForge",
        //     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
        //     website: "https://example.com/startupforge"
        // },
        // {
        //     id: 5,
        //     name: "DigitalPrime",
        //     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
        //     website: "https://example.com/digitalprime"
        // },
        // {
        //     id: 6,
        //     name: "WebMatrix",
        //     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
        //     website: "https://example.com/webmatrix"
        // }
    ];

    return (
        <div className="space-y-8">
            {/* Testimonials Section */}
            <section className="bg-[#112240]/50 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-emerald-400/20">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-start">Testimonials</h2>
                <div className="h-1 w-20 bg-emerald-400 mb-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="relative bg-[#1a365d]/40 p-6 rounded-xl border border-emerald-400/20 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-400/10"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-[#0a192f]">
                                <Quote className="w-4 h-4" />
                            </div>

                            {/* Content */}
                            <div className="mb-6 pt-2">
                                <p className="text-gray-300 italic">"{testimonial.content}"</p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover object-top border-2 border-emerald-400"
                                />
                                <div>
                                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                    <p className="text-emerald-400 text-sm">{testimonial.role}</p>
                                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Clients Section */}
            <section className="bg-[#112240]/50 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-emerald-400/20">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-start">Our Clients</h2>
                <div className="h-1 w-20 bg-emerald-400 mb-8"></div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {clients.map((client) => (
                        <a
                            key={client.id}
                            href={client.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative  p-4 rounded-xl border border-emerald-400/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-400/10"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Globe className="w-5 h-5 text-emerald-400" />
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Testimonials;