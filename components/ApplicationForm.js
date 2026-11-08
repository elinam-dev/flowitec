'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ApplicationForm({ job }) {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: job.title,
    coverLetter: '',
    consent: false
  });
  const [cvFile, setCvFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });
    if (cvFile) {
      formDataToSend.append('cv', cvFile);
    }

    try {
      const response = await fetch('/api/forms/career-apply', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Application submitted successfully! We will review your application and contact you soon.' });
        setFormData({ name: '', email: '', phone: '', position: job.title, coverLetter: '', consent: false });
        setCvFile(null);
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="mb-8">
        <button
          onClick={() => setShowApplyForm(true)}
          className="btn primary w-full md:w-auto text-lg px-8 py-4"
        >
          Apply for This Position
        </button>
      </div>

      {showApplyForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowApplyForm(false)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Apply for {job.title}</h2>
                <button onClick={() => setShowApplyForm(false)} className="text-muted-foreground hover:text-foreground">
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="cv">CV/Resume * (PDF, max 10MB)</label>
                  <input
                    id="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => setCvFile(e.target.files[0])}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="coverLetter">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

<label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 flex-shrink-0"
                  />
                  <span>
                    I agree that Flowitec may use the information I have provided to assess my application, including my CV, as described in our{' '}
                    <a href="/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Privacy Policy</a>. *
                  </span>
                </label>

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
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}