import { skills } from '../data/skills'

// 关于我：详细介绍 + 技能列表
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold">关于我</h2>
      <p className="mb-12 max-w-2xl text-white/70">
        这里填写你的个人介绍。保持简洁、突出你的核心能力与经历。
      </p>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-xl border border-white/10 bg-surface px-4 py-3 text-center text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
