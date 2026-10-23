// 通过 import 引入头像，构建时由 Vite 处理资源并输出带 hash 的 URL，
// 避免硬编码 /src/... 路径在构建产物（dist）中失效导致部署后无法访问
import avatarImage from '../assets/images/head.png'

// 首页 Hero 区块：大标题 + 简介 + 头像（深色主题 + 渐变色）
interface HeroProps {
  /** 头像地址，默认使用占位图 */
  avatarSrc?: string
  /** 姓名 / 大标题 */
  name?: string
  /** 个人简介 */
  intro?: string
}

export default function Hero({
  avatarSrc = avatarImage,
  name = '你好，我是 老牛',
  intro = '一名开发者，专注于构建简洁、现代且流畅的 Web 体验。',
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* 背景渐变光晕，强化深色主题氛围 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-gradient opacity-20 blur-3xl"
      />

      {/* 头像：外层渐变环包裹圆形图片 */}
      <div className="relative mb-8 rounded-full bg-accent-gradient p-1">
        <img
          src={avatarSrc}
          alt="头像"
          loading="lazy"
          className="h-36 w-36 rounded-full border-4 border-base object-cover sm:h-40 sm:w-40"
        />
      </div>

      {/* 大标题：渐变文字 */}
      <h1 className="bg-accent-gradient bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl">
        {name}
      </h1>

      {/* 简介 */}
      <p className="mt-6 max-w-xl text-lg text-white/70">{intro}</p>

      {/* 行动按钮 */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5"
        >
          查看项目
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5"
        >
          联系我
        </a>
      </div>
    </section>
  )
}
