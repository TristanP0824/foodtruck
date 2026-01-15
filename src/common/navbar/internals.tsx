'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Truck } from 'lucide-react';
import type { NavLink } from '@/types';
import './styled.css';

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Order', href: '/order' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // On non-home pages, navbar should always appear scrolled (white background)
  const [isScrolled, setIsScrolled] = useState(!isHomePage);

  // Close drawer function
  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeDrawer();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeDrawer]);

  // Prevent body scroll when drawer is open (robust mobile fix)
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    // Only use transparent navbar on home page
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      // Check if user has scrolled past the hero section (approximately 100vh)
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;

      setIsScrolled(scrollPosition > heroHeight * 0.1);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Split nav links - first 3 on left, remaining on right
  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="navbar-container">
        {/* Left Navigation Links - Desktop Only */}
        <ul
          className={`navbar-menu navbar-menu-left ${isScrolled ? 'scrolled' : ''}`}
        >
          {leftLinks.map(link => (
            <li key={link.href} className="navbar-item">
              <Link
                href={link.href}
                className={`navbar-link ${isScrolled ? 'scrolled' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo and Brand - Center */}
        <div className="navbar-brand">
          <Link href="/" className="navbar-logo-wrapper">
            <Truck
              size={40}
              className={`navbar-icon ${isScrolled ? 'text-primary' : 'text-primary'}`}
            />
            <span
              className={`navbar-logo-text ${isScrolled ? 'text-secondary' : 'text-white'}`}
            >
              Street Eats
            </span>
          </Link>
        </div>

        {/* Right Navigation Links - Desktop Only */}
        <ul
          className={`navbar-menu navbar-menu-right ${isScrolled ? 'scrolled' : ''}`}
        >
          {rightLinks.map(link => (
            <li key={link.href} className="navbar-item">
              <Link
                href={link.href}
                className={`navbar-link ${isScrolled ? 'scrolled' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`hamburger ${isOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}
          ></span>
        </button>

        {/* Mobile Side Drawer Backdrop */}
        <div
          className={`drawer-backdrop ${isOpen ? 'active' : ''}`}
          onClick={closeDrawer}
          aria-hidden="true"
        />

        {/* Mobile Side Drawer */}
        <aside
          className={`drawer ${isOpen ? 'active' : ''}`}
          aria-label="Mobile navigation"
        >
          {/* Drawer Header with Brand */}
          <div className="drawer-header">
            <Truck size={32} className="drawer-icon" />
            <span className="drawer-brand">Street Eats</span>
          </div>

          {/* Navigation Links */}
          <nav className="drawer-nav">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`drawer-link ${pathname === link.href ? 'active' : ''}`}
                onClick={closeDrawer}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </nav>
  );
}
