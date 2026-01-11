import { Target, Users, Award, TrendingUp } from 'lucide-react';
import Button from '@/components/Button';

export const metadata = {
  title: 'About Youvexa – Personal Branding & LinkedIn Growth Studio',
  description: 'Learn about our mission to help professionals build powerful personal brands on LinkedIn.',
};

export default function About() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#162B4D] mb-6 leading-tight">
              Building Careers Through Personal Branding
            </h1>
            <p className="text-xl text-[#2F2F2F] leading-relaxed">
              Youvexa is a specialized LinkedIn growth studio dedicated to helping professionals, entrepreneurs, and executives build powerful personal brands that open doors.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-6">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-[#2F2F2F] leading-relaxed">
                <p>
                  Youvexa was founded on a simple observation: most professionals underestimate the power of their LinkedIn profile. They treat it as an online resume rather than a strategic asset that can attract opportunities, build authority, and accelerate career growth.
                </p>
                <p>
                  We specialize in transforming LinkedIn profiles from passive placeholders into active opportunity engines. Our approach combines strategic positioning, compelling storytelling, and data-driven optimization to help professionals stand out in their industries.
                </p>
                <p>
                  Whether you are a job seeker looking for your next role, a consultant building your practice, or an executive establishing thought leadership, we provide the expertise and execution to make your LinkedIn presence work for you.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white border border-[#E6EEF3] rounded-xl p-8">
                <Target className="text-[#2BB3A6] mb-4" size={40} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-[#162B4D] mb-4">Our Mission</h3>
                <p className="text-[#2F2F2F] leading-relaxed">
                  To empower professionals with the tools, strategy, and confidence to build personal brands that reflect their expertise and attract meaningful opportunities.
                </p>
              </div>

              <div className="bg-white border border-[#E6EEF3] rounded-xl p-8">
                <Award className="text-[#2BB3A6] mb-4" size={40} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-[#162B4D] mb-4">Our Vision</h3>
                <p className="text-[#2F2F2F] leading-relaxed">
                  A world where every professional leverages LinkedIn as a strategic career asset, creating opportunities rather than waiting for them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-12 text-center">
              Our Values
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-50 border border-[#E6EEF3] rounded-xl p-8">
                <h3 className="text-xl font-semibold text-[#162B4D] mb-3">Clarity Over Complexity</h3>
                <p className="text-[#2F2F2F] leading-relaxed">
                  We believe great personal brands are built on clear, authentic positioning. No jargon, no fluff—just strategic clarity that resonates with your target audience.
                </p>
              </div>

              <div className="bg-gray-50 border border-[#E6EEF3] rounded-xl p-8">
                <h3 className="text-xl font-semibold text-[#162B4D] mb-3">Results-Driven Approach</h3>
                <p className="text-[#2F2F2F] leading-relaxed">
                  Every optimization, every content strategy, and every recommendation is designed to drive measurable outcomes: more visibility, better connections, and real opportunities.
                </p>
              </div>

              <div className="bg-gray-50 border border-[#E6EEF3] rounded-xl p-8">
                <h3 className="text-xl font-semibold text-[#162B4D] mb-3">Strategic Partnership</h3>
                <p className="text-[#2F2F2F] leading-relaxed">
                  We are not just service providers. We partner with our clients to understand their goals, challenges, and aspirations, delivering personalized strategies that align with their professional journey.
                </p>
              </div>

              <div className="bg-gray-50 border border-[#E6EEF3] rounded-xl p-8">
                <h3 className="text-xl font-semibold text-[#162B4D] mb-3">Continuous Excellence</h3>
                <p className="text-[#2F2F2F] leading-relaxed">
                  LinkedIn is constantly evolving, and so are we. We stay ahead of platform changes, algorithm updates, and industry trends to ensure our clients always have a competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-12 text-center">
              Why Choose Youvexa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="text-[#2BB3A6] mx-auto mb-4" size={48} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#162B4D] mb-3">Proven Expertise</h3>
                <p className="text-[#2F2F2F] leading-relaxed">
                  Hundreds of profiles optimized across diverse industries and career stages
                </p>
              </div>

              <div className="text-center">
                <Target className="text-[#2BB3A6] mx-auto mb-4" size={48} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#162B4D] mb-3">Personalized Strategies</h3>
                <p className="text-[#2F2F2F] leading-relaxed">
                  Custom solutions tailored to your unique goals and professional context
                </p>
              </div>

              <div className="text-center">
                <TrendingUp className="text-[#2BB3A6] mx-auto mb-4" size={48} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#162B4D] mb-3">Measurable Results</h3>
                <p className="text-[#2F2F2F] leading-relaxed">
                  Clients consistently see increased visibility, engagement, and opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#162B4D] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your LinkedIn Presence?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join professionals who have built powerful personal brands with Youvexa
          </p>
          <Button href="/contact" variant="primary">
            Get Started Today
          </Button>
        </div>
      </section>
    </>
  );
}
