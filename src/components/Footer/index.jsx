import React from 'react';

const Footer = () => {
  return (
    <footer className="footer items-center p-8 bg-neutral text-neutral-content rounded-lg">
      <div className="items-center grid-flow-row">
        <p>
          Copyright belongs to their respective owners and creators.
        </p>
        <p>
          Built with &hearts; by <a href="https://github.com/utk09" target="_blank" rel="noreferrer" className="hover:underline">UT (Utkarsh Tiwari)</a>
        </p>
        <p>Design Inspiration - TailwindCSS &amp; DaisyUI</p>
      </div>
      <div className="sr-only grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      </div>
    </footer>
  );
};

export default Footer;