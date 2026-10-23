// 项目数据：方便后续添加和修改
// 截图通过 import 引入，构建时由 Vite 打包输出资源路径，避免部署后 404
import cashbookShot from '../assets/images/project_cashbook.png'
import portfolioShot from '../assets/images/project_portfolio.png'

export interface Project {
  id: string
  name: string
  screenshot: string
  description: string
  techStack: string[]
  link: string
}

export const projects: Project[] = [
  {
    id: '1',
    name: '记账应用',
    screenshot: cashbookShot,
    description: '一个简单易用的个人记账应用。',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/wuxingxing8912/CashBook',
  },
  {
    id: '2',
    name: '个人作品集',
    screenshot: portfolioShot,
    description: '个人作品集网站。',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/wuxingxing8912/Portfolio',
  },
]
