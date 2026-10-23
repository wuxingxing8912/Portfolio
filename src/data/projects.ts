// 项目数据：方便后续添加和修改
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
    screenshot: '/src/assets/images/project_cashbook.png',
    description: '一个简单易用的个人记账应用。',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/wuxingxing8912/CashBook',
  },
  {
    id: '2',
    name: '个人作品集',
    screenshot: '/src/assets/images/project_portfolio.png',
    description: '个人作品集网站。',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/wuxingxing8912/Portfolio',
  },
]
