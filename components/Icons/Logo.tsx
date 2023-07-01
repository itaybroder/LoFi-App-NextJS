import React from 'react';

type LogoProps = {
  theme: 'dark' | 'light';
};

function Logo({ theme }: LogoProps) {
  return (
    <img
      src={theme === 'dark' ? 'https://res.cloudinary.com/dfimrgkuh/image/upload/v1688235718/logo-dark_o1kewy.png' : 'logo-light.png'}
      alt="Logo"
      width={170}
      height={190}
    />
  );
}

export default Logo;
