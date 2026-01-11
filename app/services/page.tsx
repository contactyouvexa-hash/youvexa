import { User, Target, FileText, TrendingUp, CheckCircle } from 'lucide-react';
import Button from '@/components/Button';

export const metadata = {
  title: 'LinkedIn Services – Profile Optimization & Personal Branding | Youvexa',
  description: 'Expert LinkedIn profile optimization, personal brand positioning, content strategy, and growth systems to elevate your professional presence.',
};

export default function Services() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#162B4D] mb-6 leading-tight">
              LinkedIn Services That Drive Results
            </h1>
            <p className="text-xl text-[#2F2F2F] leading-relaxed">
              Comprehensive solutions to build, optimize, and grow your LinkedIn presence
            </p>
          </div>
        </div>
      </section>

      <section id="profile-optimization" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block p-3 bg-[#2BB3A6] bg-opacity-10 rounded-lg mb-4">
                  <User className="text-[#2BB3A6]" size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-6">
                  LinkedIn Profile Optimization
                </h2>
                <p className="text-lg text-[#2F2F2F] mb-6 leading-relaxed">
                  Transform your LinkedIn profile from a static resume into a dynamic personal brand that attracts opportunities.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Compelling headline that captures attention in search results</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Strategic about section that tells your professional story</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Optimized experience descriptions with achievement-focused language</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Skills and endorsements aligned with your career goals</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#E6EEF3] rounded-xl p-8">
                <h3 className="text-xl font-semibold text-[#162B4D] mb-4">Who This Is For</h3>
                <ul className="space-y-3 mb-6 text-[#2F2F2F]">
                  <li>• Job seekers looking to attract recruiters</li>
                  <li>• Professionals transitioning to new industries</li>
                  <li>• Executives building their leadership brand</li>
                  <li>• Anyone with an outdated or incomplete profile</li>
                </ul>
                <h3 className="text-xl font-semibold text-[#162B4D] mb-4">What Problem It Solves</h3>
                <p className="text-[#2F2F2F] mb-6">
                  Eliminates the confusion of what to say and how to say it, ensuring your profile communicates value clearly and attracts the right opportunities.
                </p>
                <Button href="/contact" variant="primary" className="w-full">
                  Get This Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="brand-positioning" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-50 border border-[#E6EEF3] rounded-xl p-8">
                <h3 className="text-xl font-semibold text-[#162B4D] mb-4">Who This Is For</h3>
                <ul className="space-y-3 mb-6 text-[#2F2F2F]">
                  <li>• Consultants and freelancers establishing expertise</li>
                  <li>• Professionals unclear about their unique value</li>
                  <li>• Career changers repositioning themselves</li>
                  <li>• Leaders building thought leadership platforms</li>
                </ul>
                <h3 className="text-xl font-semibold text-[#162B4D] mb-4">What Problem It Solves</h3>
                <p className="text-[#2F2F2F] mb-6">
                  Cuts through the noise by defining a clear, differentiated personal brand that makes you memorable and positions you as the go-to expert in your field.
                </p>
                <Button href="/contact" variant="primary" className="w-full">
                  Get This Service
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block p-3 bg-[#2BB3A6] bg-opacity-10 rounded-lg mb-4">
                  <Target className="text-[#2BB3A6]" size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-6">
                  Personal Brand Positioning
                </h2>
                <p className="text-lg text-[#2F2F2F] mb-6 leading-relaxed">
                  Define and communicate your unique value proposition with a strategic personal brand that differentiates you in your industry.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Deep-dive brand discovery sessions</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Competitive positioning analysis</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Unique value proposition development</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Brand messaging framework and guidelines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="content-strategy" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block p-3 bg-[#2BB3A6] bg-opacity-10 rounded-lg mb-4">
                  <FileText className="text-[#2BB3A6]" size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-6">
                  Content Strategy
                </h2>
                <p className="text-lg text-[#2F2F2F] mb-6 leading-relaxed">
                  Build authority and visibility with a strategic content plan designed to position you as a thought leader in your industry.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Content pillars and themes aligned with your brand</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">30-day content calendar with post ideas</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Engagement strategies to maximize reach</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Best practices for LinkedIn algorithm optimization</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#E6EEF3] rounded-xl p-8">
                <h3 className="text-xl font-semibold text-[#162B4D] mb-4">Who This Is For</h3>
                <ul className="space-y-3 mb-6 text-[#2F2F2F]">
                  <li>• Professionals looking to increase visibility</li>
                  <li>• Thought leaders building an audience</li>
                  <li>• Business owners attracting clients organically</li>
                  <li>• Anyone struggling with what to post</li>
                </ul>
                <h3 className="text-xl font-semibold text-[#162B4D] mb-4">What Problem It Solves</h3>
                <p className="text-[#2F2F2F] mb-6">
                  Removes the guesswork from content creation, providing a clear roadmap for consistent, strategic posting that builds authority and attracts your target audience.
                </p>
                <Button href="/contact" variant="primary" className="w-full">
                  Get This Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="growth-systems" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-50 border border-[#E6EEF3] rounded-xl p-8">
                <h3 className="text-xl font-semibold text-[#162B4D] mb-4">Who This Is For</h3>
                <ul className="space-y-3 mb-6 text-[#2F2F2F]">
                  <li>• Professionals expanding their network strategically</li>
                  <li>• Sales and business development professionals</li>
                  <li>• Job seekers connecting with decision-makers</li>
                  <li>• Anyone looking to grow influence and reach</li>
                </ul>
                <h3 className="text-xl font-semibold text-[#162B4D] mb-4">What Problem It Solves</h3>
                <p className="text-[#2F2F2F] mb-6">
                  Transforms passive profile presence into active growth, systematically expanding your network, visibility, and opportunities through proven LinkedIn strategies.
                </p>
                <Button href="/contact" variant="primary" className="w-full">
                  Get This Service
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block p-3 bg-[#2BB3A6] bg-opacity-10 rounded-lg mb-4">
                  <TrendingUp className="text-[#2BB3A6]" size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-6">
                  LinkedIn Growth Systems
                </h2>
                <p className="text-lg text-[#2F2F2F] mb-6 leading-relaxed">
                  Implement proven systems and strategies to expand your network, increase profile visibility, and generate consistent opportunities.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Strategic connection-building frameworks</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Engagement optimization techniques</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Profile visibility enhancement strategies</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2BB3A6] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#2F2F2F]">Monthly performance tracking and optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#162B4D] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Book a free consultation and we will help you choose the right solution for your goals
          </p>
          <Button href="/contact" variant="primary">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
