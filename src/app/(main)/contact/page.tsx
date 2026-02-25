"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { sendContactEmail } from '@/services/contactApi';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';

// Note: Installing lucide-react covers standard icons. 
// Using a simpler approach for WhatsApp icon or standard SVG if needed, but for now using Lucide equivalent or text.

export default function ContactPage() {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData(prev => ({ ...prev, email: user.email }));
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const contactData = {
                name: formData.name,
                email: formData.email,
                message: formData.message
            };

            await sendContactEmail(contactData);
            toast.success("Message sent successfully!");
            setFormData({ name: '', email: user ? user.email : '', message: '' });
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        { icon: <Phone className="w-6 h-6" />, title: "Call Us", details: "+91 98779 17738", link: "tel:+9877917738" },
        { icon: <Mail className="w-6 h-6" />, title: "Email Us", details: "indiagsons@gmail.com", link: "mailto:indiagsons@gmail.com" },
        { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", details: "Batala, Punjab, India", link: "https://maps.google.com" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-20 pb-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
                    {/* Info Section */}
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-orange-100 text-primary border border-orange-200 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
                            Get In Touch
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight my-6 text-gray-900">
                            Let's Illuminate <br /><span className="text-primary">Your Space</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-lg">
                            Have questions about our products or need a custom lighting solution?
                            Our team is here to help you find the perfect illumination.
                        </p>

                        <div className="grid gap-6 mb-12">
                            {contactInfo.map((info, i) => (
                                <a href={info.link} key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 transition-all hover:translate-x-2 hover:border-orange-200 hover:shadow-md group">
                                    <div className="w-14 h-14 bg-orange-50 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h4>
                                        <p className="text-gray-500">{info.details}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="bg-gray-900 text-white p-8 rounded-3xl mt-10">
                            <h3 className="text-2xl font-bold mb-3">Quick Inquiry?</h3>
                            <p className="text-gray-500 mb-6">Chat with our experts on WhatsApp for instant assistance.</p>
                            <a href="https://wa.me/9877917738" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#25d366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#128c7e] transition-all">
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl sticky top-24">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block font-bold mb-2 text-gray-900 text-sm">Full Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required
                                    className="w-full p-3.5 rounded-xl border border-gray-200 text-gray-500 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-orange-500/10 transition-all font-sans" />
                            </div>
                            <div className="mb-6">
                                <label className="block font-bold mb-2 text-gray-900 text-sm">Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required
                                    className="w-full p-3.5 rounded-xl border border-gray-200 text-gray-500 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-orange-500/10 transition-all font-sans" />
                            </div>
                            <div className="mb-6">
                                <label className="block font-bold mb-2 text-gray-900 text-sm">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={5} required
                                    className="w-full p-3.5 rounded-xl border border-gray-200 text-gray-500 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-orange-500/10 transition-all font-sans"></textarea>
                            </div>
                            <button type="submit" className="w-full flex justify-center items-center gap-2 bg-primary text-white p-4 rounded-xl font-bold hover:bg-orange-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed" disabled={loading}>
                                {loading ? 'Sending...' : <><Send className="w-5 h-5" /> Send Message</>}
                            </button>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
