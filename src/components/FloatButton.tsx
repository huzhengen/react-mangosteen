import s from './FloatButton.module.scss'
import SvgIcon from './SvgIcon'

interface Props {
  className?: string
  onClick?: (e: MouseEvent) => void
  iconName: string
}

export const FloatButton = (props: Props) => {
  return (
    <div className={s.floatButton}>
      <SvgIcon name={props.iconName} color={'#fff'} className={s.icon} />
    </div>
  )
}
