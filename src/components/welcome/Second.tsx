import s from './Welcome.module.scss'
import SvgIcon from '../SvgIcon'

export const Second = () => {
  return (
    <div className={s.card}>
      <SvgIcon name="clock" />
      <h2>
        每日提醒
        <br />
        不遗漏每一笔账单
      </h2>
    </div>
  )
}
