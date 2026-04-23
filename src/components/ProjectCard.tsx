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
  // Sophisticated white container for artistic integrity
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.19, 1, 0.22, 1] }}
      className="w-full group"
    >
      <Link
        to={`/${project.id}`}
        className="block space-y-12"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-white border border-sage-green/10 shadow-sm transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:-translate-y-3 flex items-center justify-center p-6 md:p-10">
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            referrerPolicy="no-referrer"
          />
          {/* Extremely subtle protective tint */}
          <div className="absolute inset-0 bg-deep-charcoal/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="space-y-8 px-4">
          <div className="flex items-center gap-4">
             <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-sage-green">
               Case Study 0{index + 1}
             </span>
             <div className="h-px flex-1 bg-sage-green/10" />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-deep-charcoal group-hover:text-sage-green transition-colors duration-500 leading-tight">
              {project.title}
            </h3>
            <p className="text-muted-gray text-xl md:text-2xl font-light leading-snug max-w-xl">
              {project.subtitle}
            </p>
          </div>
          
          <div className="pt-2 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
             <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-deep-charcoal">
               Explore Project
             </span>
             <span className="text-xl text-sage-green translate-y-[-1px] group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
