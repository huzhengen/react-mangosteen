import { ReactNode } from 'react'
import s from './Center.module.scss'

interface Props {
  className?: string
  onClick?: (e: MouseEvent) => void
  direction: '-' | '|' | 'horizontal' | 'vertical'
  children: ReactNode
}

const directionMap = {
  '-': 'horizontal',
  '|': 'vertical',
  horizontal: 'horizontal',
  vertical: 'vertical',
}

export const Center = (props: Props) => {
  const extraClass = directionMap[props.direction]
  return (
    <div className={[props.className, s.center, extraClass].join(' ')}>
      {props.children}
    </div>
  )
}
