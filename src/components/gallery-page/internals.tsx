import React from 'react';
import { PageLayout } from '@/common/layout';
import { Section } from '@/components/ui';
import { Instagram } from 'lucide-react';
import './styled.css';

// Placeholder data for Instagram posts
// Heights varied to create masonry effect
const placeholderPosts = [
  { id: 1, height: 'tall', caption: 'Delicious tacos ready to serve!' },
  { id: 2, height: 'short', caption: 'Fresh ingredients daily' },
  { id: 3, height: 'medium', caption: 'Street food perfection' },
  { id: 4, height: 'short', caption: 'Come visit us today!' },
  { id: 5, height: 'tall', caption: 'Made with love and passion' },
  { id: 6, height: 'medium', caption: 'Your favorite food truck' },
  { id: 7, height: 'short', caption: 'Authentic street flavors' },
  { id: 8, height: 'tall', caption: 'Follow us for daily specials' },
  { id: 9, height: 'medium', caption: 'Quality you can taste' },
];

export function GalleryPage() {
  return (
    <PageLayout>
      <Section bgColor="primary" className="gallery-header">
        <h1 className="gallery-header-title">Gallery</h1>
        <p className="gallery-header-subtitle">
          Follow our journey on Instagram
        </p>
      </Section>

      <Section bgColor="dark" className="py-16">
        <div className="gallery-content">
          {/* Instagram CTA */}
          <div className="instagram-cta">
            <h2 className="instagram-cta-title">
              Follow us @streeteats for daily updates!
            </h2>
            <p className="instagram-cta-subtitle">
              Instagram integration coming soon. In the meantime, check out our
              social media for the latest photos and specials.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-button"
            >
              <Instagram size={20} />
              <span>Follow on Instagram</span>
            </a>
          </div>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            {placeholderPosts.map(post => (
              <div key={post.id} className={`masonry-item ${post.height}`}>
                <div className="masonry-item-image">
                  <div className="placeholder-content">
                    <Instagram size={40} className="text-white opacity-50" />
                    <span className="placeholder-text">Instagram Post</span>
                  </div>
                </div>
                <div className="masonry-item-caption">
                  <p>{post.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
