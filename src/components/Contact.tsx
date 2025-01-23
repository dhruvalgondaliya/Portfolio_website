import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [status, setStatus] = useState('');
    console.log(status)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID, // Use `VITE_` for vite environment variables
                import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then((response: emailjs.EmailJSResponseStatus) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch((err: any) => {
                console.error('FAILED...', err);
                setStatus('Failed to send message. Please try again.');
            });
    };

    return (
        <div className="space-y-8">
            <section className="bg-[#112240]/50 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-emerald-400/20">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Contact Me</h2>
                <div className="h-1 w-20 bg-emerald-400 mb-8"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Map */}
                    <div className="w-full h-[400px] rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.748423387!2d72.41492502397058!3d23.02047410476304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717402079057!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ filter: 'invert(90%) grayscale(1)', borderRadius: 20 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-emerald-400 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-[#0a192f]/50 border border-emerald-400/20 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors duration-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-emerald-400 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-[#0a192f]/50 border border-emerald-400/20 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors duration-300"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-emerald-400 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-[#0a192f]/50 border border-emerald-400/20 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors duration-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-emerald-400 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-2 bg-[#0a192f]/50 border border-emerald-400/20 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors duration-300 resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-400 text-[#0a192f] rounded-lg hover:bg-emerald-300 transition-colors duration-300"
                        >
                            <Send className="w-5 h-5" />
                            Send Message
                        </button>
                <p className='text-success mt-2 fs-6 text-center' >{status}</p>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
