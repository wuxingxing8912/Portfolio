// 顶部导航栏组件
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base/80 backdrop-blur border-b border-white/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-bold bg-accent-gradient bg-clip-text text-transparent">
          My Portfolio
        </a>
        <ul className="flex gap-6 text-sm text-white/70">
          <li><a href="#about" className="hover:text-white transition-colors">关于</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">项目</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">联系</a></li>
        </ul>
      </nav>
    </header>
  )
}
