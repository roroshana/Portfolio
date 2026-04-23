import React from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="bg-warm-white selection:bg-sage-green selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* 1. Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center pt-32 md:pt-48 pb-24 relative">
          <div className="max-w-6xl space-y-20 relative">
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[12px] uppercase tracking-[0.3em] font-bold text-sage-green"
                >
                  Interaction & Service Design
                </motion.span>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="text-[56px] md:text-[98px] lg:text-[120px] font-bold tracking-tighter leading-[0.9] text-deep-charcoal"
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
              className="text-[20px] md:text-[32px] text-muted-gray leading-[1.2] max-w-2xl font-light"
            >
              Building human-centered solutions at the intersection of service design, research, and technical systems.
            </motion.p>
          </div>
        </section>

        {/* 2. Structured Subheading */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start py-32 border-t border-sage-green/10">
          <div className="md:col-start-5 md:col-span-8 relative">
             <p className="text-[24px] md:text-[42px] text-deep-charcoal font-medium leading-tight max-w-4xl">
              I approach design as a system where people, processes, and environments work together seamlessly.
            </p>
          </div>
        </section>

        {/* 3. About Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start py-32 border-t border-sage-green/10">
          <div className="md:col-span-4 lg:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-sage-green block mb-4">01 / Identity</span>
            <h2 className="text-[24px] md:text-[32px] font-bold text-deep-charcoal tracking-tight">About</h2>
          </div>
          <div className="md:col-span-8 lg:col-span-9 font-light">
            <div className="space-y-10 text-[18px] md:text-[28px] text-muted-gray leading-relaxed max-w-4xl">
              <p className="text-deep-charcoal font-medium">
                Grounded in human-centered design and systems thinking.
              </p>
              <p>
                I use research, testing, and analysis to identify where services fail and where meaningful interaction begins. I transform behavioral insights into user journeys and service flows that improve outcomes for both people and organizations.
              </p>
              <div className="pt-6 flex flex-wrap gap-4">
                 {["Research", "Systems", "Service Design"].map(tag => (
                   <span key={tag} className="px-5 py-2 border border-sage-green/20 text-sage-green text-[12px] font-bold uppercase tracking-widest rounded-full">
                     {tag}
                   </span>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Approach Section */}
        <section className="py-32 border-t border-sage-green/10">
          <div className="flex items-end justify-between mb-20">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-sage-green">02 / Methodology</span>
              <h2 className="text-[32px] md:text-[56px] font-bold text-deep-charcoal tracking-tight">Approach</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Research Led",
                desc: "Understanding behavior before designing solutions. I prioritize empathy and data to guide the creative process.",
                color: "bg-sage-green"
              },
              {
                title: "Systems Driven",
                desc: "Seeing connections across people, services, and environments. I map the ecosystem to find key friction points.",
                color: "bg-sage-green/20"
              },
              {
                title: "Human Focused",
                desc: "Designing for real experiences, not ideal scenarios. I focus on inclusivity, transparency, and accessibility.",
                color: "bg-sage-green"
              }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                whileHover={{ y: -10 }}
                className="p-12 bg-white border border-sage-green/10 shadow-sm relative group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${item.color}`} />
                <div className="space-y-8">
                  <h3 className="text-[28px] font-bold text-deep-charcoal">{item.title}</h3>
                  <p className="text-[18px] text-muted-gray font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. What I do Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start py-32 border-t border-sage-green/10">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="space-y-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-sage-green">03 / Capability</span>
              <h2 className="text-[24px] md:text-[32px] font-bold text-deep-charcoal tracking-tight">What I do</h2>
              <p className="text-muted-gray max-w-[280px] text-[17px] font-light leading-relaxed">
                Expertise applied to complex challenges at the intersection of brand and behavior.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-8 lg:col-span-9 relative">
            <div className="space-y-0">
              {[
                { title: "Service Design", desc: "Mapping digital and physical touchpoints for seamless delivery." },
                { title: "User Research", desc: "Interviews, usability testing, and synthesis of complex behavioral data." },
                { title: "Systems Thinking", desc: "Identifying gaps in service ecosystems and hidden opportunities." },
                { title: "Design Strategy", desc: "Translating research artifacts into long-term product vision." },
                { title: "Visual Synthesis", desc: "Explaining dense information through clear typographic and visual systems." }
              ].map((item, i) => (
                <div 
                  key={item.title} 
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-sage-green/10 items-center group transition-all"
                >
                  <div className="md:col-span-1 hidden md:flex justify-center">
                     <div className="w-2 h-2 rounded-full bg-soft-pink opacity-4 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-[24px] font-bold text-deep-charcoal group-hover:text-sage-green transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-[18px] text-muted-gray font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Projects Section */}
        <section className="space-y-16 py-32 border-t border-sage-green/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pb-16">
            <div className="space-y-4">
               <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-sage-green">04 / Selected Work</span>
               <h2 className="text-[48px] md:text-[82px] lg:text-[102px] font-bold text-deep-charcoal tracking-tighter leading-[0.85]">
                 Case Studies
               </h2>
            </div>
            <div className="space-y-6">
              <p className="text-[20px] md:text-[32px] text-muted-gray leading-tight max-w-md font-light italic">
                A selection of inquiries into service systems and systemic interaction.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12">
            {PROJECTS.map((project, index) => (
              <div key={project.id} className={`${index === 2 ? 'md:col-start-4 md:col-span-6 lg:col-span-4 lg:col-start-9' : 'md:col-span-6 lg:col-span-4'}`}>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </section>

        {/* 7. Status / Contact */}
        <section className="py-40 border-t border-sage-green/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 lg:col-span-3">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-sage-green block mb-8">05 / Status</span>
              <div className="w-2 h-2 rounded-full bg-soft-pink opacity-60" />
            </div>
            <div className="md:col-span-8 lg:col-span-9 space-y-24">
              <div className="space-y-8">
                <p className="text-[32px] md:text-[64px] font-bold text-deep-charcoal leading-[1.1] tracking-tight max-w-2xl">
                  Currently exploring roles where systems thinking meets real impact. 
                </p>
                <div className="w-1.5 h-1.5 rounded-full bg-sage-green" />
              </div>
              <div className="flex flex-col md:flex-row gap-20">
                 <div className="space-y-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-gray/60">Email</span>
                    <a href="mailto:Rostami.roshana@gmail.com" className="text-2xl md:text-3xl font-bold hover:text-sage-green transition-colors relative group block underline underline-offset-[12px] decoration-sage-green/20">
                      Rostami.roshana@gmail.com
                    </a>
                 </div>
                 <div className="space-y-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-gray/60">Connection</span>
                    <a href="https://www.linkedin.com/in/roshana-r-238187196" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-bold hover:text-sage-green transition-colors relative group block underline underline-offset-[12px] decoration-sage-green/20">
                      LinkedIn
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <footer className="py-12 border-t border-sage-green/10 text-center">
         <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-muted-gray/40">RR Portfolio © 2026</p>
      </footer>
    </div>
  );
}


