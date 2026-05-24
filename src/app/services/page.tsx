'use strict';
'use client';

import React from 'react';
import { Layout, Compass, Server, Database, GitMerge, FileCode, Check } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      icon: <Layout className="h-5 w-5 text-brand-primary" />,
      title: 'Custom Web Applications',
      desc: 'High-performance web apps built with Next.js, React, and TypeScript. Optimized for SEO, responsive across devices, and designed to convert.',
      features: ['Server-Side Rendering', 'SEO & Core Web Vitals Optimization', 'Stripe & Payment Gateways'],
    },
    {
      icon: <Compass className="h-5 w-5 text-brand-primary" />,
      title: 'UI/UX & Product Design',
      desc: 'Interactive mockups and digital prototypes. We focus on modern user interfaces, elegant typography, animations, and clean navigation flows.',
      features: ['Wireframing & Prototyping', 'Design Systems', 'Micro-Interactions'],
    },
    {
      icon: <Server className="h-5 w-5 text-brand-primary" />,
      title: 'Cloud & DevOps Architecture',
      desc: 'Robust infrastructure setups on AWS, GCP, or Azure. We build automated container pipelines (Docker, Kubernetes) and serverless systems.',
      features: ['CI/CD Pipeline Setup', 'Load Balancing & CDN', 'Zero-Downtime Deployments'],
    },
    {
      icon: <Database className="h-5 w-5 text-brand-primary" />,
      title: 'Database Design & Optimization',
      desc: 'SQL and NoSQL database modeling. We tune queries, implement caching layers (Redis), and design secure storage layers.',
      features: ['PostgreSQL & MongoDB', 'Data Migration & Backups', 'Caching & Replication'],
    },
    {
      icon: <GitMerge className="h-5 w-5 text-brand-primary" />,
      title: 'API Integrations & Backend',
      desc: 'Developing scalable REST and GraphQL APIs. Seamlessly link external tools, CRMs, authentication platforms, and business systems.',
      features: ['OAuth & Auth0 Setup', 'Third-Party Integrations', 'Real-Time WebSockets'],
    },
    {
      icon: <FileCode className="h-5 w-5 text-brand-primary" />,
      title: 'Legacy System Migration',
      desc: 'Upgrading older codebases to contemporary stacks without service interruption. Safe transitions from PHP/Ruby/Python to Node & Next.js.',
      features: ['Incremental Migration', 'API Modernization', 'Data Reliability Checks'],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Header */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-20 text-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none -z-10" />
        
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Our Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Explore our range of engineering capabilities. We deliver tailored software solutions that resolve complex business problems.
        </p>
      </section>

      {/* Services Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceList.map((service) => (
          <div key={service.title} className="glass-glow rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between border-brand-primary/10">
            <div>
              <div className="h-10 w-10 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
            </div>
            
            <div className="border-t border-border pt-5">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Key Features</h4>
              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs text-foreground/80">
                    <Check className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Tech Stack Segment */}
      <section className="w-full bg-card/50 py-20 mt-16 border-t border-border text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Technologies We Master</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed mb-10">
            We operate at the leading edge of modern software tools, ensuring quick rendering speed and longevity.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL', 'Prisma', 'Redis'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-muted border border-border rounded-full text-xs font-medium text-foreground/80">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
