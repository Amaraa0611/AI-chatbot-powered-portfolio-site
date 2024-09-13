'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// Removed unused 'ScrollLink' import
// import LanguageSwitcher from './LanguageSwitcher';

type NavItem = {
    href: string;
    label: string;
    special?: boolean; // Make it optional if not all items have it
  };
  
  const navItems: NavItem[] = [
    { href: '/#home', label: 'Home', special: true },
    { href: '/#projects', label: 'Projects', special: true },
    // ... other nav items ...
  ];

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="flex justify-between items-center">
            <Link href="/">
                <p className="text-3xl font-bold">Amra<span className="text-accent">.</span></p>
            </Link>
            <nav className="hidden md:flex items-center gap-8 ml-auto">
                {navItems.map(({ href, label, special }) => (
                    <Link
                        key={href + label}
                        href={href}
                        className={`${special ? 'bg-accent text-black px-6 py-3 rounded-full box-border hover:bg-transparent hover:border-2 hover:border-accent hover:text-accent hover:px-[calc(1.5rem-2px)] hover:py-[calc(0.75rem-2px)]' : 'hover:text-accent hover:border-b-2 hover:border-accent'}`}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
            <div className="md:hidden">
                <button className="text-3xl text-accent" onClick={toggleMobileMenu}>☰</button>
            </div>
            {isMobileMenuOpen && (
                <nav className="absolute top-0 right-0 w-[60%] h-screen p-4 items-end bg-neutral-800 flex flex-col z-10  gap-4 md:hidden">
                    <button className="self-end text-3xl mb-4 text-accent" onClick={toggleMobileMenu}>✕</button>
                    {navItems.map(({ href, label, special }) => (
                        <Link
                            key={href + label}
                            href={href}
                            className={`${special ? 'bg-accent text-black px-6 py-3 rounded-full box-border hover:bg-transparent hover:border-2 hover:border-accent hover:text-accent hover:px-[calc(1.5rem-2px)] hover:py-[calc(0.75rem-2px)]' : 'hover:text-accent hover:border-b-2 hover:border-accent'}`}
                            onClick={toggleMobileMenu}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            )}
            <nav className="sticky top-0 bg-black z-50">
            </nav>
            <div className="flex items-center space-x-6">
                <ul className="flex space-x-6">
                    {/* ... navigation links ... */}
                </ul>
                {/* <LanguageSwitcher /> */}
            </div>
        </header>
    );
};

export default Navigation;