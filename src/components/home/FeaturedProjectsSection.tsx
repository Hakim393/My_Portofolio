import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { projects } from '../../data/projects';
import { SectionTitle } from '../common/SectionTitle';
import { Badge } from '../common/Badge';

export const FeaturedProjectsSection: React.FC = () => {
  const { t, localize } = usePortfolio();

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionTitle
            eyebrow={t((d) => d.projects.sectionTag)}
            title={t((d) => d.projects.title)}
            subtitle={t((d) => d.projects.subtitle)}
            className="mb-0"
          />
          <Link
            to="/projects"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 transition-colors self-start md:self-end"
          >
            <span>{t((d) => d.projects.allProjects)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Project Showcase List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Visual Mockup Preview */}
                <div className="lg:col-span-6 bg-stone-100 dark:bg-stone-950 p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-stone-200 dark:border-stone-800">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group relative block w-full aspect-16/10 rounded-lg overflow-hidden bg-stone-900 border border-stone-800 shadow-sm"
                    aria-label={`View ${project.title} details`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} interface preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-md bg-stone-900/90 text-white text-xs font-semibold backdrop-blur-xs flex items-center gap-1.5">
                        <ExternalLink className="w-3.5 h-3.5" />
                        {t((d) => d.projects.viewDetails)}
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Content & Metadata */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Tag & Role */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge variant="accent" size="sm">
                        {project.category}
                      </Badge>
                      <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
                        {t((d) => d.projects.role)}: {localize(project.role)}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-950 dark:text-white tracking-tight">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-semibold text-stone-600 dark:text-stone-300 font-mono">
                        {localize(project.tagline)}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {localize(project.shortDescription)}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="default" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-4">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-950 dark:text-white hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                    >
                      <span>{t((d) => d.projects.viewDetails)}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-white hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{t((d) => d.projects.viewRepo)}</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
