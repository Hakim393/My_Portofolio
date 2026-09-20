import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight, Search, ExternalLink } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { projects } from '../data/projects';
import { SectionTitle } from '../components/common/SectionTitle';
import { Badge } from '../components/common/Badge';

export const Projects: React.FC = () => {
  const { t, localize } = usePortfolio();
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Backend', 'Full-Stack', 'Web Portal'];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = filter === 'All' || p.category === filter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      localize(p.shortDescription).toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main id="main-content" className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t((d) => d.projects.sectionTag)}
          title={t((d) => d.projects.allProjects)}
          subtitle={t((d) => d.projects.subtitle)}
        />

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-xs'
                    : 'bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 dark:text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or stack..."
              className="w-full pl-9 pr-3.5 py-1.5 rounded-lg text-xs bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-stone-400 placeholder:text-stone-500 dark:placeholder:text-stone-400"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col justify-between rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200 group"
            >
              <div>
                {/* Visual Cover */}
                <div className="relative aspect-16/10 bg-stone-100 dark:bg-stone-950 overflow-hidden border-b border-stone-200 dark:border-stone-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="accent" size="sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-mono font-medium text-stone-600 dark:text-stone-400">
                    {t((d) => d.projects.role)}: {localize(project.role)}
                  </div>
                  <h3 className="text-lg font-bold text-stone-950 dark:text-white tracking-tight">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed line-clamp-3">
                    {localize(project.shortDescription)}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 self-center">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom action bar */}
              <div className="px-6 py-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 flex items-center justify-between">
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
                  className="p-1.5 rounded-md text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                  title={t((d) => d.projects.viewRepo)}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-stone-500 dark:text-stone-400">
            <p className="text-sm">No projects match your filter or search query.</p>
          </div>
        )}
      </div>
    </main>
  );
};
