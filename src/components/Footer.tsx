// 页脚组件
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
      © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
  )
}
