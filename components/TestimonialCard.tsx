import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  result?: string;
}

export default function TestimonialCard({ name, role, content, result }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-[#E6EEF3] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
      <Quote className="text-[#2BB3A6] mb-4" size={32} />
      <p className="text-[#2F2F2F] leading-relaxed mb-6 italic">"{content}"</p>
      {result && (
        <div className="bg-[#5FD0C5] bg-opacity-10 rounded-lg p-4 mb-4">
          <p className="text-[#162B4D] font-medium text-sm">Result: {result}</p>
        </div>
      )}
      <div className="border-t border-[#E6EEF3] pt-4">
        <p className="font-semibold text-[#162B4D]">{name}</p>
        <p className="text-sm text-[#2F2F2F]">{role}</p>
      </div>
    </div>
  );
}
