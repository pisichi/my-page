import { ReactNode } from 'react'

export {}

declare global {
  interface StackItem {
    component: ReactNode
    color: string
    key: string
  }

  interface Article {
    title: string
    img_url: string
    stack: StackItem[]
    content: ReactNode
    description: string
  }
}
