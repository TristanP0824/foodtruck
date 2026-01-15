import React from 'react';
import { PageLayout } from '@/common/layout';
import { Section } from '@/components/ui';
import './styled.css';

const teamMembers = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    role: 'Head Chef',
    bio: 'Bringing 15 years of culinary experience to every dish.',
  },
  {
    id: 2,
    name: 'Carlos Martinez',
    role: 'Owner & Operator',
    bio: 'Passionate about sharing authentic street food culture.',
  },
  {
    id: 3,
    name: 'Ana Garcia',
    role: 'Operations Manager',
    bio: 'Ensuring every customer gets the best experience.',
  },
];

export function AboutPage() {
  return (
    <PageLayout>
      <Section bgColor="primary" className="about-header">
        <h1 className="about-header-title">About Us</h1>
        <p className="about-header-subtitle">
          Our story, our passion, our food
        </p>
      </Section>

      <Section bgColor="dark" className="py-16">
        <div className="about-content">
          <div className="story-section">
            <h2 className="section-title">Our Story</h2>
            <div className="story-text">
              <p>
                Street Eats was born from a simple dream: to bring the vibrant
                flavors and authentic experience of street food to our
                community. What started as a passion project in 2020 has grown
                into a beloved local food truck.
              </p>
              <p>
                We believe food is more than sustenance—it&apos;s a connection
                to culture, tradition, and community. Every dish we serve is
                crafted with care, using traditional recipes passed down through
                generations and the freshest local ingredients.
              </p>
              <p>
                Our mission is simple: serve delicious, authentic food that
                makes people smile. Whether you&apos;re a long-time fan or
                trying us for the first time, we&apos;re honored to share our
                passion with you.
              </p>
            </div>
          </div>

          <div className="team-section">
            <h2 className="section-title">Meet Our Team</h2>
            <div className="team-grid">
              {teamMembers.map(member => (
                <div key={member.id} className="team-member">
                  <div className="team-member-avatar">
                    <span className="text-4xl">👤</span>
                  </div>
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                  <p className="team-member-bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
