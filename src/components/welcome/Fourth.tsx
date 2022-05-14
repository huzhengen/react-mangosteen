import s from './Welcome.module.scss'
import SvgIcon from '../SvgIcon'

export const Fourth = () => {
  return (
    <div className={s.card}>
      <SvgIcon name="cloud" />
      <h2>
        云备份
        <br />
        再也不怕数据丢失
      </h2>
    </div>
  )
}
