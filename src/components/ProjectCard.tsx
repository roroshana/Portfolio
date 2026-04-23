import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Project } from "../constants";

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Balanced palette for nested card feel
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.19, 1, 0.22, 1] }}
      className="p-6 md:p-8 bg-warm-white border border-sage-green/5 rounded-[32px] soft-shadow group"
    >
      <Link
        to={`/${project.id}`}
        className="block space-y-10"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-white rounded-2xl border border-sage-green/10 flex items-center justify-center p-6 md:p-12 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
          <img
            src={project.image}
            alt={project.title}
            className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
            referrerPolicy="no-referrer"
          />
          {/* Micro-label within the image container */}
          <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-60 transition-opacity">
            <div className="micro-dot bg-soft-pink" />
            <span className="text-[9px] font-bold tracking-widest text-deep-charcoal uppercase">{project.id}</span>
          </div>
        </div>

        <div className="space-y-6 px-4">
          <div className="flex items-center gap-3">
             <div className="micro-dot bg-soft-pink opacity-20 group-hover:opacity-100 transition-opacity" />
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sage-green">
               Case Study 0{index + 1}
             </span>
             <div className="h-px flex-1 bg-sage-green/5" />
          </div>
          
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-deep-charcoal group-hover:text-sage-green transition-colors duration-500 leading-tight">
              {project.title}
            </h3>
            <p className="text-muted-gray text-lg md:text-xl font-light leading-snug max-w-xl">
              {project.subtitle}
            </p>
          </div>
          
          <div className="pt-2 flex items-center gap-3 group-hover:gap-5 transition-all duration-300">
             <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-deep-charcoal">
               View Discovery
             </span>
             <span className="text-lg text-sage-green translate-y-[-1px] group-hover:translate-x-1 transition-transform font-mono">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
