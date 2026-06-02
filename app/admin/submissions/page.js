'use client';

import { useState, useEffect } from 'react';
import { Mail, Calendar, MapPin, Phone, MessageSquare, Loader } from 'lucide-react';

export default function AdminSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/admin/submissions?type=contact');
      
      if (!response.ok) {
        throw new Error('Failed to fetch submissions');
      }
      
      const data = await response.json();
      setSubmissions(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p>Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Contact Form Submissions</h1>
          <p className="text-gray-600">
            {submissions.length} {submissions.length === 1 ? 'message' : 'messages'} received
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">Error: {error}</p>
          </div>
        )}

        {submissions.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center border border-gray-200">
            <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No submissions yet</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedId(selectedId === submission.id ? null : submission.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-2">{submission.payload.name}</h3>
                      <p className="text-gray-600 line-clamp-2">{submission.payload.message}</p>
                    </div>
                    <div className="text-sm text-gray-500 whitespace-nowrap">
                      {formatDate(submission.created_at)}
                    </div>
                  </div>
                </div>

                {selectedId === submission.id && (
                  <div className="border-t border-gray-200 bg-gray-50 p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                          <Mail className="w-4 h-4" />
                          <label className="font-medium">Email</label>
                        </div>
                        <a
                          href={`mailto:${submission.payload.email}`}
                          className="text-primary hover:underline break-all"
                        >
                          {submission.payload.email}
                        </a>
                      </div>

                      {submission.payload.phone && (
                        <div>
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <Phone className="w-4 h-4" />
                            <label className="font-medium">Phone</label>
                          </div>
                          <a
                            href={`tel:${submission.payload.phone}`}
                            className="text-primary hover:underline"
                          >
                            {submission.payload.phone}
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-medium text-gray-600 block mb-1">Company</label>
                        <p>{submission.payload.company || 'N/A'}</p>
                      </div>
                      {submission.payload.country && (
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <MapPin className="w-4 h-4 text-gray-600" />
                            <label className="font-medium text-gray-600">Country</label>
                          </div>
                          <p>{submission.payload.country}</p>
                        </div>
                      )}
                    </div>

                    {submission.payload.interest && (
                      <div>
                        <label className="font-medium text-gray-600 block mb-1">Interest</label>
                        <p>{submission.payload.interest}</p>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-gray-600" />
                        <label className="font-medium text-gray-600">Message</label>
                      </div>
                      <div className="bg-white p-4 rounded border border-gray-200 whitespace-pre-wrap text-gray-700">
                        {submission.payload.message}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-4 border-t border-gray-200 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Submitted: {formatDate(submission.created_at)}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
