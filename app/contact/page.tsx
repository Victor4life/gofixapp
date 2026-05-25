"use client";
import Navbar from "@/components/Navbar";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Hammer,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ fullName: "", email: "", service: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-40 pb-24 overflow-hidden relative">
        {/* Background Artistic Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#000b76]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#000b76]/3 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Geometric Pattern Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "url('/waves/your-geometric-pattern.png')",
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-20 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#000b76]/5 px-4 py-2 mx-auto lg:mx-0">
              <Sparkles size={14} className="text-[#000b76]" />
              <span className="text-[#000b76] font-bold tracking-[0.2em] text-[10px] uppercase">
                Premium Support
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              Let's Talk About
              <span className="block text-[#000b76] mt-2">
                Your Next Project
              </span>
            </h1>
            <p className="text-gray-600 font-medium max-w-lg leading-relaxed mx-auto lg:mx-0">
              Whether you need emergency repairs or planned maintenance, our team is ready to assist you 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Contact Form Section */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-[#000b76]/10 text-[#000b76] rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-black mb-2">
                      Message Sent Successfully!
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">
                      Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#000b76] font-semibold text-sm hover:underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                          Full Name <span className="text-[#000b76]">*</span>
                        </label>
                        <input
                          required
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#000b76] focus:ring-2 focus:ring-[#000b76]/10 transition-all text-gray-900 placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                          Email Address <span className="text-[#000b76]">*</span>
                        </label>
                        <input
                          required
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="hello@example.com"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#000b76] focus:ring-2 focus:ring-[#000b76]/10 transition-all text-gray-900 placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Service Required <span className="text-[#000b76]">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#000b76] focus:ring-2 focus:ring-[#000b76]/10 transition-all text-gray-900 cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option>Emergency Repair</option>
                        <option>Plumbing Services</option>
                        <option>Electrical Work</option>
                        <option>HVAC Maintenance</option>
                        <option>General Handyman</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Message <span className="text-[#000b76]">*</span>
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#000b76] focus:ring-2 focus:ring-[#000b76]/10 transition-all text-gray-900 resize-none placeholder:text-gray-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex items-center justify-center gap-3 w-full md:w-auto bg-[#000b76] text-white px-8 py-4 rounded-xl hover:bg-[#0012a0] transition-all hover:shadow-lg hover:shadow-[#000b76]/20 active:scale-95 font-semibold"
                    >
                      <Send size={18} />
                      <span>Send Message</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info Section */}
            <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#000b76]/10 text-[#000b76]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      24/7 Priority Line
                    </p>
                    <p className="text-xl font-bold text-black">
                      +234 800 GO FIX IT
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#000b76]/10 text-[#000b76]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Email Support
                    </p>
                    <p className="text-lg font-semibold text-black">
                      hello@gofix.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#000b76]/10 text-[#000b76]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Our Location
                    </p>
                    <p className="text-base font-medium text-black">
                      Lekki Phase 1, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-[#000b76]" />
                  <h3 className="font-bold text-black">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Monday - Friday</span>
                    <span className="font-semibold text-black">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Saturday</span>
                    <span className="font-semibold text-black">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Sunday</span>
                    <span className="font-semibold text-black">Emergency Only</span>
                  </div>
                </div>
              </div>

              {/* Trust Card */}
              <div className="relative overflow-hidden rounded-2xl bg-[#000b76] p-8 text-white">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck size={24} className="text-white/80" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Trusted Service
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">
                    Elite Artisans Ready
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Average response time for emergencies is under 30 minutes within Lagos.
                  </p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="fill-white text-white" />
                    ))}
                    <span className="text-xs text-white/70 ml-2">4.9/5 from 500+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}