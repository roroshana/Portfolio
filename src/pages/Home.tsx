import React from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="bg-warm-white selection:bg-sage-green selection:text-white pb-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-8 md:space-y-12 pt-8 md:pt-12">
        {/* 1. Hero Section - Wrapped in Soft Container */}
        <section className="soft-container min-h-[70vh] flex flex-col justify-center relative overflow-hidden bg-white">
          <div className="max-w-6xl space-y-16 relative">
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="micro-dot bg-soft-pink" />
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[11px] uppercase tracking-[0.4em] font-bold text-sage-green"
                >
                  Interaction & Service Design
                </motion.span>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="text-[48px] md:text-[86px] lg:text-[104px] font-bold tracking-tighter leading-[1.1] text-deep-charcoal"
              >
                Designing systems that <br className="hidden lg:block" />
                <span className="text-muted-gray/40 italic font-medium">connect people</span>, <br className="hidden lg:block" />
                not just interfaces.
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="text-[18px] md:text-[28px] text-muted-gray leading-snug max-w-xl font-light"
            >
              Building human-centered solutions at the intersection of service design, research, and technical systems.
            </motion.p>
          </div>
        </section>

        {/* 2. Structured Subheading & About - Combined in a Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <section className="soft-container bg-blue-tint/5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="micro-dot bg-sage-green" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sage-green/60">Philosophy</span>
            </div>
            <p className="text-[24px] md:text-[34px] text-deep-charcoal font-medium leading-tight max-w-xl">
              I approach design as a system where people, processes, and environments work together seamlessly.
            </p>
          </section>

          <section className="soft-container bg-white">
            <div className="space-y-10 font-light">
              <div className="flex items-center gap-3">
                <div className="micro-dot bg-soft-pink" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sage-green/60">01 / Identity</span>
              </div>
              <div className="space-y-6 text-[17px] md:text-[22px] text-muted-gray leading-relaxed">
                <p className="text-deep-charcoal font-medium text-[20px] md:text-[24px]">
                  Grounded in human-centered design and systems thinking.
                </p>
                <p>
                  I use research, testing, and analysis to identify where services fail and where meaningful interaction begins.
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                   {["Research", "Systems", "Service Design"].map(tag => (
                     <span key={tag} className="px-4 py-1.5 border border-sage-green/10 text-sage-green text-[10px] font-bold uppercase tracking-widest rounded-full bg-white">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 3. Approach & Capabilities - Unified Container */}
        <section className="soft-container bg-sage-tint/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="micro-dot bg-soft-pink" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sage-green">02 / Methodology</span>
                </div>
                <h2 className="text-[32px] md:text-[48px] font-bold text-deep-charcoal tracking-tight">Approach</h2>
              </div>
              <div className="space-y-8">
                {["Research Led", "Systems Driven", "Human Focused"].map((title, i) => (
                  <div key={title} className="flex items-start gap-4 group cursor-default">
                    <span className="text-[10px] font-bold text-sage-green/40 mt-1.5 tabular-nums">0{i+1}</span>
                    <h3 className="text-[18px] md:text-[22px] font-bold text-muted-gray group-hover:text-deep-charcoal transition-colors">{title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { title: "Service Design", desc: "Mapping digital and physical touchpoints for seamless delivery." },
                  { title: "User Research", desc: "Interviews, usability testing, and synthesis of behavioral data." },
                  { title: "Systems Thinking", desc: "Identifying gaps in service ecosystems and hidden opportunities." },
                  { title: "Design Strategy", desc: "Translating research artifacts into long-term product vision." }
                ].map((item, i) => (
                  <div key={item.title} className="space-y-4 p-8 bg-white/50 rounded-3xl border border-sage-green/5 soft-shadow hover:bg-white transition-colors duration-500">
                    <h3 className="text-[20px] font-bold text-deep-charcoal">{item.title}</h3>
                    <p className="text-[16px] text-muted-gray font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Projects Section - Immersive Grid within Container */}
        <section className="soft-container bg-white">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 border-b border-sage-green/5 pb-16">
            <div className="space-y-6">
               <div className="flex items-center gap-3">
                 <div className="micro-dot bg-soft-pink" />
                 <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-sage-green">03 / Projects</span>
               </div>
               <h2 className="text-[42px] md:text-[72px] lg:text-[88px] font-bold text-deep-charcoal tracking-tighter leading-[0.85]">
                 Featured Work
               </h2>
            </div>
            <p className="text-[18px] md:text-[24px] text-muted-gray leading-tight max-w-sm font-light italic">
              A selection of inquiries into service systems and interaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* 5. Status / Contact */}
        <section className="soft-container bg-pink-tint/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-12 lg:col-span-12 space-y-20">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="micro-dot bg-soft-pink" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-sage-green">04 / Availability</span>
                </div>
                <p className="text-[32px] md:text-[64px] font-bold text-deep-charcoal leading-[1.05] tracking-tight max-w-3xl">
                  Currently exploring roles where systems thinking meets real impact. 
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12 border-t border-sage-green/5">
                 <div className="space-y-4">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted-gray/40">Inquiry</span>
                    <a href="mailto:Rostami.roshana@gmail.com" className="text-xl md:text-2xl font-bold hover:text-sage-green transition-colors block">
                      Rostami.roshana@gmail.com
                    </a>
                 </div>
                 <div className="space-y-4">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted-gray/40">Network</span>
                    <a href="https://www.linkedin.com/in/roshana-r-238187196" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold hover:text-sage-green transition-colors block underline decoration-sage-green/20 underline-offset-8">
                      LinkedIn
                    </a>
                 </div>
                 <div className="space-y-4 hidden lg:block">
                    <div className="flex gap-1">
                       <div className="w-1.5 h-6 bg-sage-green/10" />
                       <div className="w-1.5 h-6 bg-soft-pink/10" />
                       <div className="w-1.5 h-6 bg-sage-green/10" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center py-12">
           <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-gray/30">RR Portfolio Systems © 2026</p>
        </footer>
      </div>
    </div>
  );
}


