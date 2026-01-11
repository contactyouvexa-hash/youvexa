import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-3 rounded-lg font-medium transition-all duration-200 text-center';

  const variantStyles = {
    primary: 'bg-[#2BB3A6] text-white hover:bg-[#5FD0C5]',
    secondary: 'bg-white text-[#162B4D] border-2 border-[#162B4D] hover:bg-[#162B4D] hover:text-white',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
