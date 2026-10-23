import { projects } from '../data/projects'

// 项目展示区块：以卡片列表展示项目（截图、标题、描述、技术栈标签）
export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      {/* 区块标题：渐变文字 */}
      <h2 className="mb-12 bg-accent-gradient bg-clip-text text-3xl font-bold text-transparent">
        项目展示
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          // group：用于子元素在卡片悬停时联动
          <article
            key={project.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.5)]"
          >
            {/* 项目截图：懒加载 + 悬停缩放 */}
            <div className="overflow-hidden">
              <img
                src={project.screenshot}
                alt={project.name}
                loading="lazy"
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              {/* 标题 */}
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>

              {/* 描述 */}
              <p className="mt-2 line-clamp-3 text-sm text-white/70">
                {project.description}
              </p>

              {/* 技术栈标签 */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 项目链接（可点击） */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-to transition-colors hover:text-accent-from"
              >
                查看项目 →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
