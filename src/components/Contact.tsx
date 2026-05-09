import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // NOTE: To receive real emails, you need a service like Formspree.
    // Replace the logic below with a fetch to your Formspree endpoint if you have one.
    // example: await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: new FormData(e.target) });
    
    // Simulate API call for now
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSending(false);
    setIsSubmitted(true);
    
    // Reset after some time
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-[8rem] font-black tracking-tightest uppercase mb-12"
            >
              Let's build <br /> <span className="text-white/20">The Future</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <p className="text-2xl text-text-muted leading-relaxed text-balance">
                Have a project in mind or just want to say hi? <br />
                I'm always open to discussing new ideas and high-impact collaborations.
              </p>

              <div className="space-y-8">
                <a href="mailto:bensavio2221@gmail.com" className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-all duration-500">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-2">Email Me</p>
                    <p className="text-xl font-bold group-hover:text-primary transition-colors">bensavio2221@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+918547680185" className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-all duration-500">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-2">Call Me</p>
                    <p className="text-xl font-bold group-hover:text-primary transition-colors">+91 8547680185</p>
                  </div>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Kochi,India" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-all duration-500">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-2">Location</p>
                    <p className="text-xl font-bold group-hover:text-primary transition-colors">Kochi, India</p>
                  </div>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="glass p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32" />
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 flex flex-col items-center justify-center py-20 text-center"
                >
                  <CheckCircle2 size={64} className="text-primary mb-6" />
                  <h3 className="text-3xl font-black uppercase mb-4">Message Sent!</h3>
                  <p className="text-text-muted">Thanks for reaching out. I'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form className="relative z-10 flex flex-col gap-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-2">Name</label>
                      <input required type="text" placeholder="John Doe" className="input-field" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-2">Email</label>
                      <input required type="email" placeholder="john@example.com" className="input-field" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-2">Your Message</label>
                    <textarea required rows={6} placeholder="Tell me about your project..." className="input-field resize-none"></textarea>
                  </div>
                  <button disabled={isSending} className="btn-premium w-full justify-center group disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSending ? "Sending..." : "Send Message"}
                    {!isSending && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
