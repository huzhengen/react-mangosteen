import s from './Welcome.module.scss'
import SvgIcon from '../SvgIcon'

export const Third = () => {
  return (
    <div className={s.card}>
      <SvgIcon name="chart" />
      <h2>
        数据可视化
        <br />
        收支一目了然
      </h2>
    </div>
  )
}
