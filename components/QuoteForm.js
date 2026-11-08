'use client';

import { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '', consent: false });
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Quote Request Sent!</h3>
        <p className="text-green-600">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Tell us about your requirements..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-gray-600">
        <input
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1 h-4 w-4 flex-shrink-0"
        />
        <span>
          I agree that Flowitec may use the information I have provided to prepare my quote, as described in our{' '}
          <a href="/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Privacy Policy</a>. *
        </span>
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn primary py-3 disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Get Quote'}
      </button>
    </form>
  );
};

export default QuoteForm;