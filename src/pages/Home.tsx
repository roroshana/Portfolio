import React from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 space-y-32">
      {/* Hero Section */}
      <section className="max-w-3xl pt-12 md:pt-20">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-6"
        >
          UX Designer
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-10"
        >
          I design research-led digital products grounded in usability, systems thinking, and real-world constraints.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-500 leading-relaxed"
        >
          I turn complex user problems into scalable, practical solutions with measurable impact.
        </motion.p>
      </section>

      {/* Works Section */}
      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Works</h2>
          <span className="text-sm text-zinc-300 font-medium">01 — 03</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 pt-20 border-t border-zinc-100">
        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">About</h2>
        </div>
        <div className="md:col-span-8 space-y-12">
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl text-zinc-900 leading-tight font-medium">
              I’m a UX Designer with a background in interaction design and visual arts. My practice combines research, systems thinking, and structured problem-solving to design thoughtful digital experiences.
            </p>
            <p className="text-xl text-zinc-500 leading-relaxed">
              I’m particularly interested in products that improve everyday interactions and human connection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-zinc-100">
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Based In</h4>
              <p className="text-lg font-medium">Vancouver, Canada</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Education</h4>
              <p className="text-lg font-medium leading-snug">
                Bachelor of Design (Interaction Design),<br />
                Emily Carr University of Arts and Design
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
