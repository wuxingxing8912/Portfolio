/** @type {import('tailwindcss').Config} */
// Tailwind CSS 配置
export default {
  // 内容扫描路径，确保只用到的样式被打包
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // 深色主题配色：背景 #0a0a0a，文字 #ffffff
      colors: {
        base: '#0a0a0a',
        surface: '#141414',
        accent: {
          from: '#6366f1', // 渐变起始色（靛蓝）
          to: '#ec4899', // 渐变结束色（粉）
        },
      },
      // 全局渐变强调色工具类
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
      },
    },
  },
  plugins: [],
}
