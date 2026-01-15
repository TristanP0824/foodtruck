import React from 'react';
import { PageLayout } from '@/common/layout';
import { Section, Button } from '@/components/ui';
import {
  Phone,
  Mail,
  Share2,
  Instagram,
  Facebook,
} from 'lucide-react';
import type { ContactInfo, ScheduleItem } from '@/types';
import { formatPhone } from '@/utils/format';
import './styled.css';

const contactInfo: ContactInfo = {
  phone: '5551234567',
  email: 'hello@streeteats.com',
  socialLinks: [
    { platform: 'Instagram', url: '#', icon: 'instagram' },
    { platform: 'Facebook', url: '#', icon: 'facebook' },
  ],
};

const schedule: ScheduleItem[] = [
  { day: 'Monday', hours: '11:00 AM - 8:00 PM', location: 'Downtown Plaza' },
  { day: 'Tuesday', hours: '11:00 AM - 8:00 PM', location: 'Downtown Plaza' },
  { day: 'Wednesday', hours: '11:00 AM - 8:00 PM', location: 'City Park' },
  { day: 'Thursday', hours: '11:00 AM - 8:00 PM', location: 'City Park' },
  { day: 'Friday', hours: '11:00 AM - 10:00 PM', location: 'Main Street' },
  { day: 'Saturday', hours: '12:00 PM - 10:00 PM', location: 'Main Street' },
  { day: 'Sunday', hours: 'Closed' },
];

export function ContactPage() {
  return (
    <PageLayout>
      <Section bgColor="primary" className="contact-header">
        <h1 className="contact-header-title">Get In Touch</h1>
        <p className="contact-header-subtitle">
          We&apos;d love to hear from you
        </p>
      </Section>

      <Section bgColor="dark" className="py-16">
        <div className="contact-content">
          <div className="contact-info-section">
            <div className="info-card">
              <h2 className="info-card-title">Contact Information</h2>
              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon">
                    <Phone size={24} className="text-primary" />
                  </span>
                  <div>
                    <p className="info-label">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="info-value">
                      {formatPhone(contactInfo.phone)}
                    </a>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">
                    <Mail size={24} className="text-primary" />
                  </span>
                  <div>
                    <p className="info-label">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="info-value"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">
                    <Share2 size={24} className="text-primary" />
                  </span>
                  <div>
                    <p className="info-label">Follow Us</p>
                    <div className="social-links">
                      {contactInfo.socialLinks.map(link => (
                        <a
                          key={link.platform}
                          href={link.url}
                          className="social-link"
                          aria-label={link.platform}
                        >
                          {link.icon === 'instagram' && (
                            <Instagram size={20} className="inline mr-2" />
                          )}
                          {link.icon === 'facebook' && (
                            <Facebook size={20} className="inline mr-2" />
                          )}
                          {link.platform}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2 className="form-title">Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="form-input"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>
              <Button type="button" variant="primary" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          <div className="schedule-section">
            <h2 className="info-card-title">Weekly Schedule</h2>
            <div className="schedule-list">
              {schedule.map(item => (
                <div key={item.day} className="schedule-item">
                  <span className="schedule-day">{item.day}</span>
                  <span className="schedule-hours">{item.hours}</span>
                  {item.location && (
                    <span className="schedule-location">{item.location}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
