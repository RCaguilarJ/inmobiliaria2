import greenLogo from '../assets/images/CCC_LOGOTIPOS-04.png';
import whiteLogo from '../assets/images/CCC_LOGOTIPOS-05.png';

interface CountryClubLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function CountryClubLogo({
  className = 'w-[200px]',
  variant = 'light',
}: CountryClubLogoProps) {
  const source = variant === 'dark' ? whiteLogo : greenLogo;

  return (
    <img
      src={source}
      alt="Condominios Country Club"
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}
