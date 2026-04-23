import React from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../constants";
import { motion, useScroll, useTransform } from "motion/react";

// Custom graphic elements
const ConnectorLine = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 20" 
    className={`absolute h-px w-32 md:w-64 fill-none stroke-sage-green/40 stroke-[0.5] ${className}`}
    preserveAspectRatio="none"
  >
    <path d="M0,10 C30,10 70,0 100,10" />
  </svg>
);

const AbstractForm = ({ color = "bg-sage-green", className = "" }: { color?: string, className?: string }) => (
  <div className={`absolute rounded-full filter blur-3xl opacity-[0.03] pointer-events-none ${color} ${className}`} />
);

const GridFragment = ({ className = "" }: { className?: string }) => (
  <div className={`absolute opacity-[0.04] pointer-events-none pointer-events-none select-none ${className}`}>
    <div className="grid grid-cols-4 grid-rows-4 w-32 h-32 border-l border-t border-muted-gray">
      {[...Array(16)].map((_, i) => (
        <div key={i} className="border-r border-b border-muted-gray" />
      ))}
    </div>
  </div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 space-y-24 pb-48 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center pt-32 md:pt-40">
        <AbstractForm color="bg-dusty-blue" className="w-[500px] h-[500px] -top-20 -left-20" />
        <AbstractForm color="bg-sage-green" className="w-[400px] h-[400px] -bottom-20 -right-20" />
        <GridFragment className="top-10 right-20" />
        
        <div className="relative z-10 max-w-5xl md:ml-6 lg:ml-12 space-y-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                className="h-px bg-sage-green"
              />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="label-tag"
              >
                Service Designer / Systems Thinker
              </motion.span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[48px] md:text-[72px] lg:text-[88px] font-medium tracking-tight leading-[1.02] text-deep-charcoal"
            >
              I design systems, experiences, and interactions that <span className="italic">connect people</span>, not just interfaces.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[17px] md:text-[20px] text-muted-gray leading-relaxed max-w-2xl"
            >
              I am an interaction designer working across service design, research, and creative direction. I focus on understanding human behavior, mapping systems, and improving everyday experiences.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6"
          >
             <p className="text-[19px] md:text-[24px] text-deep-charcoal font-medium max-w-xl italic">
              I approach design as a system where people, processes, and environments work together.
            </p>
            <div className="hidden md:block">
               <ConnectorLine className="relative" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="relative grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <GridFragment className="bottom-0 -left-10" />
        <div className="md:col-span-4 lg:col-span-3">
          <div className="space-y-4">
            <h2 className="text-[28px] md:text-[36px] font-medium text-deep-charcoal">About</h2>
            <div className="w-12 h-0.5 bg-terracotta/60" />
          </div>
        </div>
        <div className="md:col-span-8 lg:col-span-9">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 text-[18px] md:text-[22px] text-muted-gray leading-relaxed max-w-3xl"
          >
            <p className="text-deep-charcoal font-medium">
              My work is grounded in human centered design and systems thinking.
            </p>
            <p>
              I use research, testing, and analysis to understand how people move through services and where friction exists.
            </p>
            <p>
              I turn insights into user journeys, service flows, and solutions that improve both user and organizational outcomes.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
               {["Research-Led", "System-Minded", "Human-Driven"].map(tag => (
                 <span key={tag} className="px-4 py-2 bg-sage-green/10 text-sage-green text-[13px] font-medium rounded-full border border-sage-green/20">
                   {tag}
                 </span>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. What I do Section */}
      <section className="relative grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <AbstractForm color="bg-terracotta" className="w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="md:col-span-4 lg:col-span-3">
          <div className="space-y-4">
            <h2 className="text-[28px] md:text-[36px] font-medium text-deep-charcoal">What I do</h2>
            <p className="text-muted-gray max-w-[280px] text-[16px] leading-relaxed">Methodology and expertise applied to complex challenges at the intersection of people and systems.</p>
          </div>
        </div>
        <div className="md:col-span-8 lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {[
              {
                title: "Service Design",
                desc: "Designing end to end experiences across digital and physical touchpoints",
                icon: "○"
              },
              {
                title: "Research and Insights",
                desc: "Interviews, usability testing, and synthesis",
                icon: "□"
              },
              {
                title: "Systems Thinking",
                desc: "Mapping journeys and identifying gaps",
                icon: "△"
              },
              {
                title: "Strategy",
                desc: "Turning insights into clear solutions",
                icon: "+"
              },
              {
                title: "Visual Communication",
                desc: "Explaining systems through simple and clear visuals",
                icon: "~"
              }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-3 relative group"
              >
                <div className="flex items-center gap-3">
                   <span className="text-sage-green font-mono opacity-60 text-lg">{item.icon}</span>
                   <div className="h-px bg-sage-green/20 w-8 group-hover:w-12 transition-all duration-700" />
                </div>
                <h3 className="text-[22px] font-medium text-deep-charcoal group-hover:text-dusty-blue transition-colors">{item.title}</h3>
                <p className="text-[17px] text-muted-gray leading-relaxed">{item.desc}</p>
                <div className="absolute -bottom-2 left-0 w-0 h-px bg-sage-green/30 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <span className="label-tag block mb-4">Portfolio</span>
            <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-deep-charcoal tracking-tight">Selected Work</h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-[18px] md:text-[22px] text-muted-gray leading-relaxed">
              Selected work explores service systems, human interaction, and everyday experiences.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 items-start">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* 6. Recent Work Section */}
      <section className="relative grid grid-cols-1 md:grid-cols-12 gap-12 items-start py-8">
        <AbstractForm color="bg-dusty-blue" className="w-[600px] h-[600px] top-0 -right-20" />
        <div className="md:col-span-4 lg:col-span-3">
          <div className="space-y-4">
            <h2 className="text-[28px] md:text-[36px] font-medium text-deep-charcoal">Recent work</h2>
            <div className="w-12 h-0.5 bg-dusty-blue/40" />
          </div>
        </div>
        <div className="md:col-span-8 lg:col-span-9 space-y-12">
          <div className="space-y-10 text-[20px] md:text-[28px] text-muted-gray leading-relaxed max-w-4xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Recently, I led research and concept development for a platform that connects people through shared everyday activities, including 40 plus interviews and real world testing.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              I have also worked on service system design projects focused on sustainability and improving user experiences in institutional spaces.
            </motion.p>
            <div className="pt-8 border-t border-sage-green/20 relative">
               <span className="absolute -top-3 left-0 bg-warm-white px-4 label-tag text-terracotta text-[12px]">Core Inquiry</span>
               <p className="text-deep-charcoal font-medium italic text-[24px] md:text-[36px] leading-tight max-w-2xl">
                My work asks how design can make everyday experiences more human and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Closing Line */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-16 pb-24 text-center relative"
      >
        <GridFragment className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.02]" />
        <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-deep-charcoal max-w-5xl mx-auto leading-tight">
          I am interested in roles where design moves <span className="text-dusty-blue">beyond interfaces</span> into systems, services, and real impact.
        </p>
        <div className="mt-12 flex justify-center">
           <a 
              href="mailto:Rostami.roshana@gmail.com" 
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-deep-charcoal text-warm-white rounded-full overflow-hidden transition-all hover:pr-12 shadow-md hover:shadow-lg"
            >
              <span className="relative z-10 font-medium">Let's collaborate</span>
              <motion.span 
                className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"
              >
                →
              </motion.span>
              <div className="absolute inset-0 bg-dusty-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
           </a>
        </div>
      </motion.section>
    </div>
  );
}
