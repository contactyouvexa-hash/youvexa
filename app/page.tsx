import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ProcessStep from '@/components/ProcessStep';
import TrustSignal from '@/components/TrustSignal';
import { User, Target, TrendingUp, BarChart } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#162B4D] mb-6 leading-tight">
              Build a LinkedIn Profile That Attracts Opportunities
            </h1>
            <p className="text-xl text-[#2F2F2F] mb-8 leading-relaxed">
              We help professionals turn their LinkedIn presence into a powerful personal brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Get Started
              </Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <p className="text-center text-[#2F2F2F] mb-12 text-lg font-medium">
            Trusted by students, professionals & founders
          </p>
          
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-4">
              What We Do
            </h2>
            <p className="text-lg text-[#2F2F2F] max-w-2xl mx-auto">
              Comprehensive LinkedIn services designed to elevate your professional presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<User size={40} strokeWidth={1.5} />}
              title="Profile Optimization"
              description="Transform your profile into a compelling story that attracts recruiters and opportunities."
            />
            <ServiceCard
              icon={<Target size={40} strokeWidth={1.5} />}
              title="Content Strategy"
              description="Build authority with strategic content that positions you as an industry leader."
            />
            <ServiceCard
              icon={<TrendingUp size={40} strokeWidth={1.5} />}
              title="Personal Brand Positioning"
              description="Define and communicate your unique value proposition with clarity and confidence."
            />
            <ServiceCard
              icon={<BarChart size={40} strokeWidth={1.5} />}
              title="LinkedIn Growth Systems"
              description="Implement proven strategies to expand your network and increase visibility."
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-4">
              How Youvexa Works
            </h2>
            <p className="text-lg text-[#2F2F2F] max-w-2xl mx-auto">
              A systematic approach to building your LinkedIn presence
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            <ProcessStep
              number="1"
              title="Profile Audit"
              description="We analyze your current LinkedIn profile, identifying gaps and opportunities for improvement."
            />
            <ProcessStep
              number="2"
              title="Positioning Strategy"
              description="Define your unique value proposition and target audience to create a focused personal brand."
            />
            <ProcessStep
              number="3"
              title="Profile Optimization"
              description="Complete profile overhaul including headline, summary, experience, and visual elements."
            />
            <ProcessStep
              number="4"
              title="Content & Visibility Plan"
              description="Develop a content strategy and engagement plan to increase your reach and authority."
            />
            <ProcessStep
              number="5"
              title="Growth & Feedback"
              description="Ongoing support to track progress, refine strategy, and achieve your professional goals."
            />
          </div>
        </div>
      </section>

      {/*<section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-[#2F2F2F] max-w-2xl mx-auto">
              Real results from professionals who transformed their LinkedIn presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <TestimonialCard
              name="Sarah Mitchell"
              role="Marketing Director"
              content="Youvexa completely transformed my LinkedIn profile. Within weeks, I started receiving quality inbound opportunities from recruiters."
              result="3x increase in profile views, 5 job offers"
            />
            <TestimonialCard
              name="James Chen"
              role="Software Engineer"
              content="The personal brand positioning was a game-changer. I now clearly communicate my expertise and attract the right connections."
              result="Doubled network size with targeted connections"
            />
            <TestimonialCard
              name="Priya Sharma"
              role="Business Consultant"
              content="Professional, strategic, and results-driven. Youvexa helped me establish thought leadership in my industry."
              result="Increased engagement by 400%"
            />
          </div>
          <div className="text-center">
            <Button href="/testimonials" variant="secondary">
              View All Testimonials
            </Button>
          </div>
        </div>
      </section>*/}

      <section className="section-padding bg-[#162B4D] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build a profile that speaks for you?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join hundreds of professionals who have transformed their LinkedIn presence with Youvexa
          </p>
          <Button href="/contact" variant="primary">
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
