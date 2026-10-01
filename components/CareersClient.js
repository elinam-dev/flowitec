'use client';

import { useState } from 'react';
import { Briefcase, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const departments = ['all', 'Technical', 'Sales', 'Operations'];

export default function CareersClient({ jobs }) {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const filtered = selectedDepartment === 'all'
    ? jobs
    : jobs.filter(j => j.department === selectedDepartment);

  return (
    <section id="openings" className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Current Openings</h2>
          <p className="text-lg text-muted-foreground">Find your perfect role and start your journey with us</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedDepartment === dept ? 'bg-primary text-white shadow-lg' : 'bg-white hover:bg-gray-50 shadow'
              }`}
            >
              {dept === 'all' ? 'All Departments' : dept}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="space-y-6 max-w-4xl mx-auto">
            {filtered.map(job => (
              <div key={job.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-primary">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold">{job.title}</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">{job.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" />{job.department}</div>
                      <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />{job.location}</div>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href={`/careers/${job.slug}`} className="btn primary inline-flex items-center px-6 py-3">
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No positions available</h3>
            <p className="text-muted-foreground mb-6">There are currently no openings in this department.</p>
            <button onClick={() => setSelectedDepartment('all')} className="btn primary">View All Positions</button>
          </div>
        )}
      </div>
    </section>
  );
}
