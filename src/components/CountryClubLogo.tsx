import blueLogo from '../assets/images/luxent-logo-blue-clean.png';
import whiteLogo from '../assets/images/luxent-logo-white-clean.png';

interface CountryClubLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function CountryClubLogo({
  className = 'w-[140px]',
  variant = 'light',
}: CountryClubLogoProps) {
  return (
    <img
      src={variant === 'dark' ? whiteLogo : blueLogo}
      alt="Luxent Properties"
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}
