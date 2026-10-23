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
    name: '示例项目 A',
    screenshot: 'https://via.placeholder.com/400x160',
    description: '这是一个示例项目的简短描述。',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/',
  },
]
