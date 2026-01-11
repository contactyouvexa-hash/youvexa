interface TrustSignalProps {
  number: string;
  label: string;
}

export default function TrustSignal({ number, label }: TrustSignalProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#2BB3A6] mb-2">{number}</div>
      <p className="text-[#2F2F2F] font-medium">{label}</p>
    </div>
  );
}
