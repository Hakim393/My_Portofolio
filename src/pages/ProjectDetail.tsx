import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, CheckCircle2, Server, Cpu, Layers } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { projects } from '../data/projects';
import { Badge } from '../components/common/Badge';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, localize, localizeArray } = usePortfolio();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="pt-36 pb-24 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">Project Not Found</h1>
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-6">
          The requested project does not exist or may have been relocated.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t((d) => d.projects.backToProjects)}</span>
        </Link>
      </main>
    );
  }

  return (
    <main id="main-content" className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t((d) => d.projects.backToProjects)}</span>
          </button>
        </div>

        {/* Header Block */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent" size="sm">
              {project.category}
            </Badge>
            <span className="text-xs font-mono font-medium text-stone-600 dark:text-stone-400">
              {t((d) => d.projects.role)}: {localize(project.role)}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 dark:text-white">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
            {localize(project.tagline)}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 text-xs font-semibold shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>{t((d) => d.projects.viewRepo)}</span>
            </a>
          </div>
        </header>

        {/* Visual Mockup Display */}
        <div className="rounded-2xl overflow-hidden bg-stone-950 border border-stone-200 dark:border-stone-800 shadow-md">
          <img
            src={project.image}
            alt={`${project.title} detailed architectural showcase`}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Overview Narrative */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-stone-950 dark:text-white tracking-tight flex items-center gap-2">
            <Server className="w-5 h-5 text-stone-500 dark:text-stone-400" />
            <span>System Overview &amp; Motivation</span>
          </h2>
          <p className="text-base text-stone-800 dark:text-stone-200 leading-relaxed">
            {localize(project.fullDescription)}
          </p>
        </section>

        {/* Architecture & Engineering Highlights */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-stone-950 dark:text-white tracking-tight flex items-center gap-2">
            <Cpu className="w-5 h-5 text-stone-500 dark:text-stone-400" />
            <span>{t((d) => d.projects.architecture)}</span>
          </h2>
          <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
            <ul className="space-y-3">
              {localizeArray(project.architectureHighlights).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-stone-800 dark:text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-stone-950 dark:text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-stone-500 dark:text-stone-400" />
            <span>{t((d) => d.projects.keyFeatures)}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {localizeArray(project.keyFeatures).map((feat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm text-stone-900 dark:text-stone-100 flex items-start gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-stone-500 dark:bg-stone-400 mt-2 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Breakdown */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-stone-950 dark:text-white tracking-tight">
            {t((d) => d.projects.technologies)}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Next Project Footer */}
        <div className="pt-8 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t((d) => d.projects.backToProjects)}</span>
          </Link>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300"
          >
            <span>{t((d) => d.projects.viewRepo)}</span>
            <Github className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </main>
  );
};
