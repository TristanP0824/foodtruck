import React from 'react';
import { PageLayout } from '@/common/layout';
import { Section } from '@/components/ui';
import { ShoppingCart, Clock, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import './styled.css';

export function OrderPage() {
  return (
    <PageLayout>
      <Section bgColor="primary" className="order-header">
        <h1 className="order-header-title">Order Online</h1>
        <p className="order-header-subtitle">Delicious food, coming soon</p>
      </Section>

      <Section bgColor="dark" className="py-16 md:py-24">
        <div className="order-content">
          {/* Coming Soon Card */}
          <div className="coming-soon-card">
            <div className="coming-soon-icon">
              <ShoppingCart size={64} className="text-primary" />
            </div>
            <h2 className="coming-soon-title">Online Ordering Coming Soon!</h2>
            <p className="coming-soon-description">
              We&apos;re working hard to bring you a seamless online ordering
              experience. In the meantime, you can still enjoy our delicious
              food by visiting us in person or giving us a call.
            </p>

            {/* Quick Actions */}
            <div className="quick-actions">
              <div className="action-card">
                <div className="action-icon">
                  <Clock size={32} className="text-primary" />
                </div>
                <h3 className="action-title">Check Our Hours</h3>
                <p className="action-description">
                  See when we&apos;re serving up fresh food
                </p>
                <Link href="/contact" className="action-link">
                  View Schedule
                </Link>
              </div>

              <div className="action-card">
                <div className="action-icon">
                  <MapPin size={32} className="text-primary" />
                </div>
                <h3 className="action-title">Find Our Location</h3>
                <p className="action-description">
                  Track where we&apos;ll be next
                </p>
                <Link href="/contact" className="action-link">
                  See Locations
                </Link>
              </div>

              <div className="action-card">
                <div className="action-icon">
                  <Phone size={32} className="text-primary" />
                </div>
                <h3 className="action-title">Call to Order</h3>
                <p className="action-description">
                  Speak with us directly for orders
                </p>
                <Link href="/contact" className="action-link">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="order-cta">
              <p className="order-cta-text">
                Want to be notified when online ordering is available?
              </p>
              <Link href="/contact" className="order-cta-button">
                Stay Updated
              </Link>
            </div>
          </div>

          {/* Feature Preview */}
          <div className="feature-preview">
            <h3 className="feature-preview-title">
              What to Expect with Online Ordering
            </h3>
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-number">1</div>
                <h4 className="feature-name">Browse Our Menu</h4>
                <p className="feature-desc">
                  View all available items with photos and descriptions
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-number">2</div>
                <h4 className="feature-name">Customize Your Order</h4>
                <p className="feature-desc">
                  Add special instructions and modify items to your liking
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-number">3</div>
                <h4 className="feature-name">Easy Pickup</h4>
                <p className="feature-desc">
                  Skip the line with ready-to-go pickup times
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-number">4</div>
                <h4 className="feature-name">Track Your Order</h4>
                <p className="feature-desc">
                  Get real-time updates on your order status
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
