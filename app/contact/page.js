'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle2, X } from 'lucide-react';
import { BRANCHES } from '@/lib/mockData';

// Import the 2D Africa Map component
import AfricaMap2D from '@/components/Africamap2D';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedOffice, setSelectedOffice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! We will contact you soon.' });
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          country: '',
          interest: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container-custom">
          <nav className="text-sm mb-4 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Our Offices Across Africa</h1>
          <p className="text-xl max-w-2xl">Contact our regional offices for sales, service and spare parts</p>
        </div>
      </section>

      {/* 2D Africa Map */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Flowitec Locations</h2>
            <p className="text-lg text-muted-foreground">We serve customers across Ghana, Nigeria, and Kenya</p>
          </div>
          
          {/* 2D Map Component */}
          <div className="bg-card rounded-xl shadow-lg p-6">
            <AfricaMap2D 
              offices={BRANCHES.filter(b => b.show_on_contact)} 
              onSelectOffice={setSelectedOffice}
            />
          </div>
        </div>
      </section>

      {/* Selected Office Modal */}
      {selectedOffice && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedOffice(null)}
        >
          <div 
            className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/flowitec-logo.png" 
                  alt="Flowitec" 
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-xl font-bold text-primary">{selectedOffice.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedOffice(null)} 
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="space-y-4 text-sm">
              {selectedOffice.address_lines && selectedOffice.address_lines.map((line, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{line}</span>
                </div>
              ))}
              {selectedOffice.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href={`tel:${selectedOffice.phone}`} className="text-primary hover:underline font-medium">
                    {selectedOffice.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${selectedOffice.email}`} className="text-primary hover:underline">
                  {selectedOffice.email}
                </a>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t">
              <a 
                href={`mailto:${selectedOffice.email}?subject=Inquiry from Website`}
                className="btn primary w-full text-center"
              >
                Send Email to This Office
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Office Cards */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Regional Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRANCHES.filter(b => b.show_on_contact).map(branch => (
              <div 
                key={branch.id} 
                className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedOffice(branch)}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <img 
                    src="/flowitec-logo.png" 
                    alt="Flowitec" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{branch.title}</h3>
                <div className="space-y-4 text-sm">
                  {branch.address_lines && branch.address_lines.map((line, idx) => (
                    <div key={idx} className="text-muted-foreground text-center">{line}</div>
                  ))}
                  {branch.phone && (
                    <div className="flex items-center justify-center gap-2 pt-4">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-primary font-medium">{branch.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-primary">{branch.email}</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className="text-sm text-primary font-medium group-hover:underline">
                    Click for details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">Fill out the form below and we&apos;ll get back to you within 24 hours</p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="company">Company *</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="country">Country *</label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select country</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Kenya">Kenya</option>
                      <option value="International">International</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="interest">Area of Interest *</label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select area</option>
                      <option value="Products">Products</option>
                      <option value="Services">Services</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Spare Parts">Spare Parts</option>
                      <option value="Quote Request">Quote Request</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg flex items-start gap-3 ${
                    submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-background">
        <div className="container-custom max-w-3xl">
          <div className="bg-primary/5 p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
                  <p><strong>Saturday:</strong> Closed, Remote Availability</p>
                  <p><strong>Sunday:</strong> Closed, Remote Availability</p>
                  <p className="text-primary font-semibold mt-4">24/7 Emergency Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
