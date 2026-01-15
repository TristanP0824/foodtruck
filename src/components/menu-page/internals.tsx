import React from 'react';
import { PageLayout } from '@/common/layout';
import { Section } from '@/components/ui';
import type { MenuCategory } from '@/types';
import './styled.css';

const menuData: MenuCategory[] = [
  {
    id: 'tacos',
    name: 'Tacos',
    items: [
      {
        id: 'taco-1',
        name: 'Classic Street Taco',
        description: 'Grilled meat, onions, cilantro, lime',
        price: '$3.50',
        category: 'tacos',
      },
      {
        id: 'taco-2',
        name: 'Fish Taco',
        description: 'Beer-battered fish, cabbage slaw, chipotle aioli',
        price: '$4.50',
        category: 'tacos',
      },
      {
        id: 'taco-3',
        name: 'Veggie Taco',
        description: 'Grilled vegetables, black beans, avocado',
        price: '$3.50',
        category: 'tacos',
        isSpecial: true,
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    items: [
      {
        id: 'drink-1',
        name: 'Horchata',
        description: 'Traditional rice drink with cinnamon',
        price: '$3.00',
        category: 'drinks',
      },
      {
        id: 'drink-2',
        name: 'Jamaica',
        description: 'Hibiscus flower tea',
        price: '$3.00',
        category: 'drinks',
      },
      {
        id: 'drink-3',
        name: 'Fresh Lime Agua',
        description: 'House-made limeade',
        price: '$2.50',
        category: 'drinks',
      },
    ],
  },
  {
    id: 'specials',
    name: 'Weekly Specials',
    items: [
      {
        id: 'special-1',
        name: 'Burrito Bowl',
        description: 'Rice, beans, protein, toppings, salsa',
        price: '$9.50',
        category: 'specials',
        isSpecial: true,
      },
      {
        id: 'special-2',
        name: 'Loaded Nachos',
        description: 'House chips, cheese, protein, all the fixings',
        price: '$8.50',
        category: 'specials',
        isSpecial: true,
      },
    ],
  },
];

export function MenuPage() {
  return (
    <PageLayout>
      <Section bgColor="primary" className="menu-header">
        <h1 className="menu-header-title">Our Menu</h1>
        <p className="menu-header-subtitle">
          Fresh ingredients, bold flavors, made to order
        </p>
      </Section>

      <Section bgColor="dark" className="py-16">
        <div className="menu-content">
          {menuData.map(category => (
            <div key={category.id} className="menu-category">
              <h2 className="category-title">{category.name}</h2>
              <div className="menu-items">
                {category.items.map(item => (
                  <div key={item.id} className="menu-item">
                    <div className="menu-item-header">
                      <h3 className="menu-item-name">
                        {item.name}
                        {item.isSpecial && (
                          <span className="special-badge">Special</span>
                        )}
                      </h3>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
