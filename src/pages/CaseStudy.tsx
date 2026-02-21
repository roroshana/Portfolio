import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

export default function CaseStudy() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-8 md:px-12 space-y-32 pb-32">
      {/* 1. Hero Section */}
      <section className="space-y-16 pt-12">
        <div className="space-y-8 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.95]">
            {project.title}
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-500 leading-tight">
            {project.summary}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-zinc-100">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">Role</h4>
              <p className="text-sm font-medium">{project.role}</p>
            </div>
            {project.team && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">Team</h4>
                <p className="text-sm font-medium">{project.team}</p>
              </div>
            )}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">Type</h4>
              <p className="text-sm font-medium">{project.type}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">Timeline</h4>
              <p className="text-sm font-medium">{project.timeline}</p>
            </div>
            {!project.team && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">Tools</h4>
                <p className="text-sm font-medium">{project.tools.join(", ")}</p>
              </div>
            )}
          </div>
          {project.team && (
            <div className="pt-8 border-t border-zinc-100">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">Tools</h4>
              <p className="text-sm font-medium">{project.tools.join(", ")}</p>
            </div>
          )}
        </div>

        <div className="rounded-3xl overflow-hidden bg-white border border-zinc-100">
          <img
            src={project.heroImage || project.image}
            alt={`${project.title} Hero`}
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* 2. Overview */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <h2 className="text-xl font-medium tracking-tight text-zinc-900">Overview</h2>
        </div>
        <div className="md:col-span-8 space-y-16">
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">The Problem</h3>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">{project.problem}</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">The Goal</h3>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">{project.goal}</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Constraints</h3>
            <ul className="space-y-3 text-xl text-zinc-600 max-w-2xl">
              {project.constraints.map((c, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-zinc-300">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Research */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-16 pt-32 border-t border-zinc-100">
        <div className="md:col-span-4">
          <h2 className="text-xl font-medium tracking-tight text-zinc-900">Research</h2>
        </div>
        <div className="md:col-span-8 space-y-16">
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Methods</h3>
            <div className="flex flex-wrap gap-3">
              {project.methods.map((m, i) => (
                <span key={i} className="px-5 py-2.5 bg-zinc-50 rounded-full text-sm font-medium border border-zinc-100">
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Key Insights</h3>
            <ul className="space-y-10">
              {project.insights.map((insight, i) => (
                <li key={i} className="space-y-2 max-w-2xl">
                  <p className="text-xl text-zinc-900 font-medium leading-tight">
                    {insight.split(":")[0]}
                  </p>
                  <p className="text-lg text-zinc-500 leading-relaxed">
                    {insight.split(":")[1]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Behavioral Findings */}
      {project.behavioralFindings && (
        <section className="grid grid-cols-1 md:grid-cols-12 gap-16 pt-32 border-t border-zinc-100">
          <div className="md:col-span-4">
            <h2 className="text-xl font-medium tracking-tight text-zinc-900">{project.behavioralFindings.title}</h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-10">
              {project.behavioralFindings.findings.map((finding, i) => (
                <li key={i} className="space-y-2 max-w-2xl">
                  <p className="text-xl text-zinc-900 font-medium leading-tight">
                    {finding.split(":")[0]}
                  </p>
                  <p className="text-lg text-zinc-500 leading-relaxed">
                    {finding.split(":")[1]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 5. Structural Decisions */}
      {project.structuralDecisions && (
        <section className="grid grid-cols-1 md:grid-cols-12 gap-16 pt-32 border-t border-zinc-100">
          <div className="md:col-span-4">
            <h2 className="text-xl font-medium tracking-tight text-zinc-900">{project.structuralDecisions.title}</h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="space-y-12">
              {project.structuralDecisions.decisions.map((decision, i) => (
                <div key={i} className="space-y-4 max-w-2xl">
                  <h3 className="text-2xl font-medium text-zinc-900">{decision.label}</h3>
                  <p className="text-xl text-zinc-600 leading-relaxed">{decision.description}</p>
                  <div className="inline-block px-4 py-2 bg-zinc-50 rounded-lg border border-zinc-100">
                    <p className="text-sm font-medium text-zinc-500">
                      <span className="text-zinc-400 mr-2">Trade-off:</span>
                      {decision.tradeoff}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {project.structuralDecisions.images && project.structuralDecisions.images.length > 0 && (
              <div className="space-y-6 pt-8">
                {project.structuralDecisions.images.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
                    <img 
                      src={img} 
                      alt="Iteration artifact" 
                      className="w-full h-auto block" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. Process */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-16 pt-32 border-t border-zinc-100">
        <div className="md:col-span-4">
          <h2 className="text-xl font-medium tracking-tight text-zinc-900">Process</h2>
        </div>
        <div className="md:col-span-8 space-y-16">
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Approach</h3>
            <ol className="space-y-6 text-xl text-zinc-600 max-w-2xl">
              {project.process.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-zinc-300 font-mono text-sm mt-1">0{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-8">
            {project.id === "joinme" ? (
              <div className="space-y-12">
                {/* 1. Hand drawn sketch (images[1]) - Bigger and taller */}
                <div className="rounded-xl overflow-hidden border border-zinc-100 shadow-sm">
                  <img 
                    src={project.process.images[1]} 
                    alt="Hand drawn sketch" 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                
                {/* 2. Rough Figma / Phones (images[0]) - Smaller (half width) */}
                <div className="max-w-md mx-auto w-full rounded-xl overflow-hidden border border-zinc-100 shadow-sm">
                  <img 
                    src={project.process.images[0]} 
                    alt="Digital sketch (Phones)" 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                
                {/* 3. User testing photo (images[2]) - Full width */}
                <div className="rounded-xl overflow-hidden border border-zinc-100 shadow-sm">
                  <img 
                    src={project.process.images[2]} 
                    alt="User testing" 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {project.process.images.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-zinc-100 shadow-sm">
                    <img 
                      src={img} 
                      alt={`Process artifact ${i + 1}`} 
                      className="w-full h-auto block" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. Solution */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-16 pt-32 border-t border-zinc-100">
        <div className="md:col-span-4">
          <h2 className="text-xl font-medium tracking-tight text-zinc-900">Solution</h2>
        </div>
        <div className="md:col-span-8 space-y-16">
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Final Design</h3>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">{project.solution.description}</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {project.solution.features.map((f, i) => (
                <div key={i} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <p className="font-medium text-zinc-900">{f}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            {project.solution.images.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-zinc-100 shadow-sm inline-block">
                <img 
                  src={img} 
                  alt="UI Solution" 
                  className="max-h-[600px] w-auto block" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Impact */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-16 pt-32 border-t border-zinc-100">
        <div className="md:col-span-4">
          <h2 className="text-xl font-medium tracking-tight text-zinc-900">Impact</h2>
        </div>
        <div className="md:col-span-8">
          <div className="space-y-8 max-w-2xl">
            {project.impact.map((imp, i) => (
              <div key={i} className="pb-8 border-b border-zinc-50 last:border-0">
                <p className="text-xl text-zinc-600 leading-relaxed">{imp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Reflection */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-16 pt-32 border-t border-zinc-100">
        <div className="md:col-span-4">
          <h2 className="text-xl font-medium tracking-tight text-zinc-900">Reflection</h2>
        </div>
        <div className="md:col-span-8">
          <ul className="space-y-6 max-w-2xl">
            {project.reflection.map((ref, i) => (
              <li key={i} className="text-xl text-zinc-600 leading-relaxed">
                {ref}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
