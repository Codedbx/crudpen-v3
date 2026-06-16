import React from 'react';
import { cn } from '@/lib/utils';
import './animated-logo-card.css';

export const AnimatedLogoCard = ({
  icon: Icon,
  title,
  subtitle,
  className,
  style,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={cn("alc-card", className)} style={style}>
      <div className="alc-border"></div>
      <div className="alc-content">
        <div className="alc-logo">
          <Icon className="alc-logo1" strokeWidth={1.5} />
          <span className="alc-logo2">{title}</span>
          <span className="alc-trail"></span>
        </div>
        <span className="alc-logo-bottom-text">{subtitle}</span>
      </div>
      <span className="alc-bottom-text">CRUDPEN</span>
    </div>
  );
};
