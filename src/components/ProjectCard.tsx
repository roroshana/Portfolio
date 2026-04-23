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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <Link
        to={`/${project.id}`}
        className="group block space-y-6 relative"
      >
        <div className="relative overflow-hidden rounded-sm bg-warm-white border border-sage-green/10 shadow-sm transition-transform duration-700 ease-out group-hover:shadow-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-contain transition-transform duration-1000 ease-out"
            style={{ maxHeight: '600px' }}
            referrerPolicy="no-referrer"
          />
          {/* Subtle tint shift on hover */}
          <div className="absolute inset-0 bg-dusty-blue/0 group-hover:bg-dusty-blue/5 transition-colors duration-500" />
          
          {/* Subtle accent line visible on hover */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-sage-green group-hover:w-full transition-all duration-700 ease-in-out" />
        </div>

        <div className="space-y-3 relative">
          <span className="label-tag text-[10px] text-sage-green border border-sage-green/20 px-2 py-0.5 rounded-full inline-block">
            Project {index + 1}
          </span>
          <div className="space-y-1">
            <h3 className="text-2xl font-medium tracking-tight text-deep-charcoal group-hover:text-dusty-blue transition-colors duration-500">
              {project.title}
            </h3>
            <p className="text-muted-gray text-base leading-relaxed line-clamp-1">
              {project.subtitle}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
