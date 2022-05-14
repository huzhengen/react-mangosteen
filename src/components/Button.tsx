import s from './Button.module.scss'

interface Props {
  className?: string
  onClick?: (e: MouseEvent) => void
  text: string
}

export const Button = (props: Props) => {
  return (
    <>
      <button className={[props.className, s.button].join(' ')}>
        {props.text}
      </button>
    </>
  )
}
