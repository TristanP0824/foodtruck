import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import type { SocialLink } from '@/types';
import './styled.css';

const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: '#', icon: 'instagram' },
  { platform: 'Facebook', url: '#', icon: 'facebook' },
  { platform: 'Twitter', url: '#', icon: 'twitter' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">Street Eats</h3>
            <p className="footer-text">
              Bringing authentic street food to your neighborhood.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="footer-link">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="footer-link">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/order" className="footer-link">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Follow Us</h4>
            <div className="footer-social">
              {socialLinks.map(link => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="footer-social-link"
                  aria-label={link.platform}
                >
                  {link.icon === 'instagram' && <Instagram size={24} />}
                  {link.icon === 'facebook' && <Facebook size={24} />}
                  {link.icon === 'twitter' && <Twitter size={24} />}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Street Eats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
