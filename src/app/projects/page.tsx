'use strict';
'use client';

import React, { useState } from 'react';
import { ExternalLink, Layers, Terminal, Database, LineChart } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projectList = [
    {
      id: 1,
      title: 'Aether CRM',
      category: 'SaaS',
      desc: 'A modular CRM build featuring instant notification queues, interactive customer charts, and third-party email campaign linkups.',
      tech: ['Next.js', 'PostgreSQL', 'TailwindCSS'],
      icon: <Layers className="h-6 w-6 text-brand-primary" />,
      gradient: 'from-brand-primary/20 to-transparent',
    },
    {
      id: 2,
      title: 'Decent Docs',
      category: 'Web',
      desc: 'Collaborative engineering wiki built for modern dev teams. Includes lightning-fast markdown indexing and document sharing controls.',
      tech: ['TypeScript', 'Node.js', 'Redis'],
      icon: <Terminal className="h-6 w-6 text-brand-primary" />,
      gradient: 'from-brand-primary/20 to-transparent',
    },
    {
      id: 3,
      title: 'Lumina Analytics',
      category: 'AI',
      desc: 'Machine learning data pipeline extracting metrics from commercial storage blocks to predict customer behavior trends.',
      tech: ['Python', 'Docker', 'AWS'],
      icon: <LineChart className="h-6 w-6 text-brand-primary" />,
      gradient: 'from-brand-primary/20 to-transparent',
    },
    {
      id: 4,
      title: 'Vault DB',
      category: 'Infrastructure',
      desc: 'Highly reliable distributed caching layer serving fast responses with active synchronization systems.',
      tech: ['Rust', 'gRPC', 'Kubernetes'],
      icon: <Database className="h-6 w-6 text-brand-primary" />,
      gradient: 'from-brand-primary/20 to-transparent',
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projectList 
    : projectList.filter(p => p.category === filter);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Header */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-16 text-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none -z-10" />
        
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Our Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A showcase of systems we have engineered. We build high-velocity code platforms designed to deliver long-term value.
        </p>
      </section>

      {/* Filter Options */}
      <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
        {['All', 'SaaS', 'Web', 'AI', 'Infrastructure'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
              filter === cat
                ? 'bg-brand-primary text-black shadow-[0_0_15px_rgba(125, 42, 232,0.2)]'
                : 'bg-muted text-muted-foreground hover:text-foreground border border-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="group glass-glow rounded-2xl overflow-hidden hover:border-brand-primary/35 transition-colors duration-300 flex flex-col border-brand-primary/10"
          >
            {/* Visual Cover Header */}
            <div className={`h-48 bg-gradient-to-br ${proj.gradient} p-8 flex items-center justify-center border-b border-border relative`}>
              <div className="p-4 bg-zinc-950/80 rounded-2xl border border-border shadow-xl group-hover:scale-110 transition-transform duration-300 text-brand-primary">
                {proj.icon}
              </div>
            </div>
            
            {/* Content info */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-md border border-brand-primary/10 inline-block mb-3.5">
                  {proj.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-1.5">
                  {proj.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>
              </div>

              {/* Bottom Tags */}
              <div className="flex items-center justify-between border-t border-border pt-5 mt-auto">
                <div className="flex items-center gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-xs text-muted-foreground font-medium">
                      #{t}
                    </span>
                  ))}
                </div>
                
                <a
                  href="#"
                  className="p-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-colors border border-border"
                  aria-label="View Project Link"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
