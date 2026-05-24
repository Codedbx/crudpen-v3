'use strict';
'use client';

import React from 'react';
import { Shield, Sparkles, Award, Heart, CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield className="h-6 w-6 text-brand-primary" />,
      title: 'Reliability & Trust',
      description: 'We design software that stands the test of time, prioritizing security, scalability, and clean system performance.',
    },
    {
      icon: <Sparkles className="h-6 w-6 text-brand-primary" />,
      title: 'Innovation-First',
      description: 'We continually refine our processes, leveraging the latest advancements in Next.js, Cloud, and AI integration.',
    },
    {
      icon: <Heart className="h-6 w-6 text-brand-primary" />,
      title: 'Customer Empathy',
      description: 'We listen closely to our clients business needs to formulate optimized tech strategies that yield concrete ROI.',
    },
  ];

  const steps = [
    { number: '01', title: 'Consultation & Discovery', desc: 'We deep dive into your operations, gathering detailed requirements.' },
    { number: '02', title: 'System Design & Spec', desc: 'We blueprint the software architecture, user flows, and wireframes.' },
    { number: '03', title: 'Bespoke Development', desc: 'Our developers engineer the solution using clean, documented code.' },
    { number: '04', title: 'Quality Assurance & Launch', desc: 'Rigorous tests are executed before deploying to staging and production.' },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Header */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-20 text-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none -z-10" />
        
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Who We Are
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Crudpen is a dedicated group of engineers, designers, and consultants. We build next-generation tech platforms that empower businesses.
        </p>
      </section>

      {/* Corporate Story */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Engineering robust systems since day one.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            At Crudpen, we believe software should be elegant on the inside and spectacular on the outside. We started with a simple belief: businesses deserve modern, robust custom web infrastructure that doesn&apos;t compromise on speed, quality, or SEO performance.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Today, we consult with SMEs and large corporations globally, designing custom integrations, cloud deployments, and premium interfaces tailored to their workflows.
          </p>
        </div>
        <div className="glass-glow rounded-2xl p-8 border-border relative bg-muted/30">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-10 w-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-base">Our Engineering Standards</h3>
              <p className="text-xs text-muted-foreground">100% compliance on quality checks</p>
            </div>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-2.5 text-sm text-foreground/80">
              <CheckCircle2 className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
              <span>Modular and extensible TypeScript codebases.</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-foreground/80">
              <CheckCircle2 className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
              <span>Strict continuous integration & test coverage.</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-foreground/80">
              <CheckCircle2 className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
              <span>Optimized Core Web Vitals and SEO rankings.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full bg-card/50 py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12 tracking-tight">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="glass rounded-xl p-6 flex flex-col gap-4">
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Flow */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-16 tracking-tight">
          How We Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((s) => (
            <div key={s.number} className="relative flex flex-col gap-3">
              <div className="text-5xl font-black text-foreground/10 font-mono mb-2">{s.number}</div>
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
