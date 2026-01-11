import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white border border-[#E6EEF3] rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="text-[#2BB3A6] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#162B4D] mb-3">{title}</h3>
      <p className="text-[#2F2F2F] leading-relaxed">{description}</p>
    </div>
  );
}
