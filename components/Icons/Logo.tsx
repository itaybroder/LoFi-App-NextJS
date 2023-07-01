import React from 'react';

type LogoProps = {
  theme: 'dark' | 'light';
};

function Logo({ theme }: LogoProps) {
  return (
    <img
      src={theme === 'dark' ? 'http://localhost:3000/logo-dark.png' : 'logo-light.png'}
      alt="Logo"
      width={170}
      height={190}
    />
  );
}

export default Logo;
