'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import { Mail, Phone, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', goal: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#162B4D] mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-[#2F2F2F]">
              Let's discuss your LinkedIn goals and create a personalized strategy for your success
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">

            {/* EMAIL */}
            <a
              href="mailto:contactyouvexa@gmail.com"
              className="group bg-white border border-[#E6EEF3] rounded-xl p-8 text-center
              transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
            >
              <Mail className="text-[#2BB3A6] mx-auto mb-4 group-hover:scale-110 transition" size={40} />
              <h3 className="text-lg font-semibold text-[#162B4D] mb-2">Email Response</h3>
              <p className="text-[#2F2F2F]">We typically respond within 24 hours</p>
            </a>

            {/* QUICK CALL */}
            <a
              href="tel:+919481475515"
              className="group bg-white border border-[#E6EEF3] rounded-xl p-8 text-center
              transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
            >
              <Clock className="text-[#2BB3A6] mx-auto mb-4 group-hover:scale-110 transition" size={40} />
              <h3 className="text-lg font-semibold text-[#162B4D] mb-2">Quick Call</h3>
              <p className="text-[#2F2F2F]">30-minute free consultation to discuss your needs</p>
            </a>

            {/* PHONE */}
            <a
              href="tel:+919481475515"
              className="group bg-white border border-[#E6EEF3] rounded-xl p-8 text-center
              transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
            >
              <Phone className="text-[#2BB3A6] mx-auto mb-4 group-hover:scale-110 transition" size={40} />
              <h3 className="text-lg font-semibold text-[#162B4D] mb-2">Custom Plan</h3>
              <p className="text-[#2F2F2F]">Personalized strategy tailored to your goals</p>
            </a>

          </div>

          {/* FORM */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-[#E6EEF3] rounded-xl p-8">

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Thank you! We'll be in touch within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Select an option</option>
                  <option value="Job Search">Job Search</option>
                  <option value="Business Growth">Business Growth</option>
                  <option value="Thought Leadership">Thought Leadership</option>
                  <option value="Networking">Networking</option>
                </select>

                <Button
                  type="submit"
                  variant="primary"
                  className={`w-full ${isLoading ? 'opacity-70 pointer-events-none' : ''}`}
                >
                  {isLoading ? 'Sending...' : 'Book Your Free Consultation'}
                </Button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
