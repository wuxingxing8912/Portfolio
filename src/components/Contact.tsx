// 联系方式：邮箱、GitHub、社交媒体链接
export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold">联系方式</h2>
      <ul className="space-y-3 text-white/70">
        <li>
          邮箱：
          <a href="mailto:610864358@qq.com" className="text-accent-to hover:underline">
            610864358@qq.com
          </a>
        </li>
        <li>
          GitHub：
          <a href="https://github.com/wuxingxing8912/" target="_blank" rel="noopener noreferrer" className="text-accent-to hover:underline">
            github.com/wuxingxing8912
          </a>
        </li>
      </ul>
    </section>
  )
}
