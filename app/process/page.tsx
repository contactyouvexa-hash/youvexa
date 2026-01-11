import { AlertCircle, TrendingUp, Target, CheckCircle2 } from 'lucide-react';
import Button from '@/components/Button';

export const metadata = {
  title: 'How We Improve Your LinkedIn Profile | Youvexa',
  description: 'Learn our proven methodology for transforming LinkedIn profiles and building powerful personal brands.',
};

export default function Process() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#162B4D] mb-6 leading-tight">
              How We Improve Your LinkedIn Profile
            </h1>
            <p className="text-xl text-[#2F2F2F] leading-relaxed">
              Our proven methodology combines strategy, storytelling, and optimization to transform your profile into an opportunity magnet.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-12 text-center">
              Common LinkedIn Mistakes We Fix
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-[#2BB3A6] flex-shrink-0 mt-1" size={28} strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-semibold text-[#162B4D] mb-2">Generic Headlines</h3>
                  <p className="text-[#2F2F2F]">Many profiles use job titles instead of compelling value propositions. Your headline is your first impression—it should immediately communicate your value.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AlertCircle className="text-[#2BB3A6] flex-shrink-0 mt-1" size={28} strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-semibold text-[#162B4D] mb-2">Vague About Sections</h3>
                  <p className="text-[#2F2F2F]">Empty or overly corporate about sections don't connect with viewers. Your story should be clear, authentic, and focused on the results you deliver.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AlertCircle className="text-[#2BB3A6] flex-shrink-0 mt-1" size={28} strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-semibold text-[#162B4D] mb-2">Passive Experience Descriptions</h3>
                  <p className="text-[#2F2F2F]">Listing duties without highlighting achievements makes your profile unremarkable. We transform experience into compelling achievement narratives.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AlertCircle className="text-[#2BB3A6] flex-shrink-0 mt-1" size={28} strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-semibold text-[#162B4D] mb-2">Unclear Differentiation</h3>
                  <p className="text-[#2F2F2F]">Without a clear personal brand, you blend in with thousands of competitors. We define what makes you unique and communicate it consistently.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AlertCircle className="text-[#2BB3A6] flex-shrink-0 mt-1" size={28} strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-semibold text-[#162B4D] mb-2">No Content Strategy</h3>
                  <p className="text-[#2F2F2F]">A great profile is only half the battle. Without consistent, strategic content, your profile never achieves its potential reach or impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-12 text-center">
              The Youvexa Approach
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-50 border border-[#E6EEF3] rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2BB3A6] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#162B4D] mb-2">Discovery & Analysis</h3>
                    <p className="text-[#2F2F2F] mb-4">We start by understanding your goals, background, and unique strengths. We analyze your current profile, competitive landscape, and target audience to identify opportunities.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-[#E6EEF3] rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2BB3A6] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#162B4D] mb-2">Strategic Positioning</h3>
                    <p className="text-[#2F2F2F] mb-4">We develop your unique positioning statement—the clear, differentiated value you offer. This becomes the foundation for your entire profile and content strategy.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-[#E6EEF3] rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2BB3A6] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#162B4D] mb-2">Profile Optimization</h3>
                    <p className="text-[#2F2F2F] mb-4">We craft compelling headline, about section, and experience descriptions. Every element is optimized for search visibility and designed to engage your target audience.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-[#E6EEF3] rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2BB3A6] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#162B4D] mb-2">Content & Engagement Strategy</h3>
                    <p className="text-[#2F2F2F] mb-4">A profile is only valuable if people see it. We develop a content strategy and engagement plan to increase your visibility and position you as a thought leader.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-[#E6EEF3] rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2BB3A6] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#162B4D] mb-2">Measurement & Refinement</h3>
                    <p className="text-[#2F2F2F] mb-4">We track key metrics and continuously refine your strategy. Your LinkedIn presence is a living asset that grows with your career.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162B4D] mb-12 text-center">
              Why This Method Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-[#E6EEF3] rounded-xl p-8">
                <Target className="text-[#2BB3A6] mb-4" size={40} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#162B4D] mb-3">Strategy First</h3>
                <p className="text-[#2F2F2F]">
                  We don't just make profiles look nice—we align every element with your goals and target audience. Strategic clarity drives results.
                </p>
              </div>

              <div className="bg-white border border-[#E6EEF3] rounded-xl p-8">
                <TrendingUp className="text-[#2BB3A6] mb-4" size={40} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#162B4D] mb-3">Data-Informed</h3>
                <p className="text-[#2F2F2F]">
                  We use LinkedIn analytics, search trends, and proven optimization techniques to ensure maximum visibility and engagement.
                </p>
              </div>

              <div className="bg-white border border-[#E6EEF3] rounded-xl p-8">
                <CheckCircle2 className="text-[#2BB3A6] mb-4" size={40} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#162B4D] mb-3">Authentic Storytelling</h3>
                <p className="text-[#2F2F2F]">
                  Your profile tells your professional story. We help you communicate your authentic value in a way that resonates with your audience.
                </p>
              </div>

              <div className="bg-white border border-[#E6EEF3] rounded-xl p-8">
                <TrendingUp className="text-[#2BB3A6] mb-4" size={40} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#162B4D] mb-3">Ongoing Optimization</h3>
                <p className="text-[#2F2F2F]">
                  LinkedIn evolves, and so should your strategy. We monitor performance and refine continuously to maintain your competitive edge.
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
              Expected Results
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-[#2BB3A6] flex-shrink-0 mt-1" size={28} strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-semibold text-[#162B4D] mb-2">Increased Profile Views</h3>
                  <p className="text-[#2F2F2F]">An optimized, searchable profile attracts significantly more views from your target audience and recruiters.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-[#2BB3A6] flex-shrink-0 mt-1" size={28} strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-semibold text-[#162B4D] mb-2">Higher Quality Inbound Opportunities</h3>
                  <p className="text-[#2F2F2F]">Recruiters, clients, and collaborators reach out because your profile clearly communicates your value and attracts the right people.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-[#2BB3A6] flex-shrink-0 mt-1" size={28} strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-semibold text-[#162B4D] mb-2">Expanded Network</h3>
                  <p className="text-[#2F2F2F]">Strategic engagement and visibility help you build a network of relevant, valuable connections in your industry.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-[#2BB3A6] flex-shrink-0 mt-1" size={28} strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-semibold text-[#162B4D] mb-2">Thought Leadership Position</h3>
                  <p className="text-[#2F2F2F]">Consistent strategic content positions you as a trusted expert and thought leader in your industry.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-[#2BB3A6] flex-shrink-0 mt-1" size={28} strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-semibold text-[#162B4D] mb-2">Career Acceleration</h3>
                  <p className="text-[#2F2F2F]">Whether you're job seeking, building a business, or advancing your career, a powerful LinkedIn presence accelerates opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#162B4D] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your LinkedIn Profile?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Start your journey to a powerful personal brand today
          </p>
          <Button href="/contact" variant="primary">
            Get Started Now
          </Button>
        </div>
      </section>
    </>
  );
}
