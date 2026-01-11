interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-[#2BB3A6] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-2xl">{number}</span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-[#162B4D] mb-2">{title}</h3>
        <p className="text-[#2F2F2F] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
