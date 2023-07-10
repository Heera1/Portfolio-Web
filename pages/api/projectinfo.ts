// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface ProjectInfoDataType {
  name: string
  summary: string
  role: string
  stack: string[]
  img: string
  id: number
}

const projectInfo: ProjectInfoDataType[] = [
  { name: 'Portfolio Website', summary: '나만의 포트폴리오 웹 사이트', role: '', stack: ['Next.js', 'Typescript', 'React', 'Tailwind CSS'], img: "/portfolio.png", id: 1 },
  { name: 'Hobbyt', summary: '취미를 기록하고 판매하는 웹 사이트', role: 'FE 팀장', stack: ['Next.js', 'Typescript', 'React', 'Axios', 'Tailwind CSS', 'Recoil', 'Websocket'], img: "/hobbyt.png", id: 2 },
  { name: 'Codetech', summary: '테크 장비 리뷰 사이트', role: 'FE 팀원', stack: ['Typescript', 'React', 'Axios', 'Tailwind CSS', 'Zustand'], img: "/codetech.png", id: 3 },
  { name: 'Stack Overflow Clone', summary: 'Stack Overflow 클론 프로젝트', role: 'FE 팀원', stack: ['Javascript', 'React', 'Styled-Component', 'AWS(EC2)'], img: "/stackoverflow.png", id: 4 }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!Array.isArray(projectInfo)) {
      throw new Error('Cannot find project data')
    }
    res.status(200).json(projectInfo)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
