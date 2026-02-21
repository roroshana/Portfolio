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
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/${project.id}`}
        className="group block space-y-6"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-medium tracking-tight group-hover:text-zinc-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed line-clamp-1">
            {project.subtitle}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
