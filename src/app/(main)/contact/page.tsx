"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from "lucide-react";

// Note: Installing lucide-react covers standard icons. 
// Using a simpler approach for WhatsApp icon or standard SVG if needed, but for now using Lucide equivalent or text.

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            // Using standard fetch instead of axios to reduce dependencies if axios isn't installed
            const response = await fetch('https://formsubmit.co/indiagsons@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
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
                            <p className="text-gray-400 mb-6">Chat with our experts on WhatsApp for instant assistance.</p>
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
                                    className="w-full p-3.5 rounded-xl border border-gray-200 text-gray-400 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-orange-500/10 transition-all font-sans" />
                            </div>
                            <div className="mb-6">
                                <label className="block font-bold mb-2 text-gray-900 text-sm">Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required
                                    className="w-full p-3.5 rounded-xl border border-gray-200 text-gray-400 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-orange-500/10 transition-all font-sans" />
                            </div>
                            <div className="mb-6">
                                <label className="block font-bold mb-2 text-gray-900 text-sm">Subject</label>
                                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Inquiry about LED Strip" required
                                    className="w-full p-3.5 rounded-xl border border-gray-200 text-gray-400 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-orange-500/10 transition-all font-sans" />
                            </div>
                            <div className="mb-6">
                                <label className="block font-bold mb-2 text-gray-900 text-sm">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={5} required
                                    className="w-full p-3.5 rounded-xl border border-gray-200 text-gray-400 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-orange-500/10 transition-all font-sans"></textarea>
                            </div>
                            <button type="submit" className="w-full flex justify-center items-center gap-2 bg-primary text-white p-4 rounded-xl font-bold hover:bg-orange-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : <><Send className="w-5 h-5" /> Send Message</>}
                            </button>

                            {status === 'success' && <p className="mt-5 p-3 rounded-lg text-center font-bold bg-green-50 text-green-600">Message sent successfully!</p>}
                            {status === 'error' && <p className="mt-5 p-3 rounded-lg text-center font-bold bg-red-50 text-red-500">Something went wrong. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
