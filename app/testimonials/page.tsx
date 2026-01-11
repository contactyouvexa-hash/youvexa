import TestimonialCard from '@/components/TestimonialCard';
import Button from '@/components/Button';

export const metadata = {
  title: 'Client Testimonials – LinkedIn Profile Success Stories | Youvexa',
  description: 'Read real success stories from professionals who transformed their LinkedIn presence and career with Youvexa.',
};

export default function Testimonials() {
  // const testimonials = [
  //   {
  //     name: 'Sarah Mitchell',
  //     role: 'Marketing Director',
  //     content: 'Youvexa completely transformed my LinkedIn profile. Within weeks, I started receiving quality inbound opportunities from recruiters. The strategic positioning and optimized profile gave me confidence in my personal brand.',
  //     result: '3x increase in profile views, 5 job offers in 3 months'
  //   },
  //   {
  //     name: 'James Chen',
  //     role: 'Software Engineer',
  //     content: 'I was getting lost in the crowd of engineers on LinkedIn. Youvexa\'s positioning strategy helped me stand out with a clear, compelling value proposition. I now attract the right opportunities from companies I actually want to work with.',
  //     result: 'Doubled network size with targeted connections, multiple offers from top companies'
  //   },
  //   {
  //     name: 'Priya Sharma',
  //     role: 'Business Consultant',
  //     content: 'Professional, strategic, and results-driven. Youvexa helped me establish thought leadership in my industry. My engagement skyrocketed, and I\'ve attracted premium clients who specifically sought me out because of my LinkedIn presence.',
  //     result: 'Increased engagement by 400%, landed 3 high-value clients'
  //   },
  //   {
  //     name: 'Michael Torres',
  //     role: 'Career Transitioning Professional',
  //     content: 'I was making a career transition and had no idea how to position myself. Youvexa guided me through the process, helping me craft a compelling narrative about my transition. My new industry took me seriously from the first conversation.',
  //     result: 'Successful career transition, hired within 2 months in new industry'
  //   },
  //   {
  //     name: 'Emma Richardson',
  //     role: 'Sales Executive',
  //     content: 'My LinkedIn profile wasn\'t generating leads. After optimization and implementing the content strategy, I started building genuine relationships with prospects. My sales pipeline grew significantly through LinkedIn alone.',
  //     result: '2.5x increase in qualified leads, 40% increase in sales pipeline'
  //   },
  //   {
  //     name: 'David Park',
  //     role: 'Startup Founder',
  //     content: 'As a founder, I needed to build credibility fast. Youvexa helped me position myself as a leader in my space and develop a content strategy that attracted investors and early customers. My LinkedIn became a real business asset.',
  //     result: 'Attracted $2M seed funding, established founder authority'
  //   }
  // ];

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#162B4D] mb-6 leading-tight">
              Real Results From Real Professionals
            </h1>
            <p className="text-xl text-[#2F2F2F] leading-relaxed">
              Discover how professionals across industries have transformed their LinkedIn presence and careers with Youvexa
            </p>
          </div>
        </div>
      </section>

      {/*
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                result={testimonial.result}
              />
            ))}
          </div>
        </div>
      </section>
      */}

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border border-[#E6EEF3] rounded-xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-6">
                Common Transformation Metrics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[#2BB3A6] mb-2">3x</div>
                  <p className="text-[#2F2F2F]">Average increase in profile views</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2BB3A6] mb-2">8-12</div>
                  <p className="text-[#2F2F2F]">Weeks to see significant results</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2BB3A6] mb-2">250%</div>
                  <p className="text-[#2F2F2F]">Average engagement increase</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2BB3A6] mb-2">85%</div>
                  <p className="text-[#2F2F2F]">Client satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#162B4D] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You Can Be Next
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join hundreds of professionals who have transformed their LinkedIn presence and accelerated their careers
          </p>
          <Button href="/contact" variant="primary">
            Start Your Transformation
          </Button>
        </div>
      </section>
    </>
  );
}
