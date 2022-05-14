import s from './Welcome.module.scss'
import cloud from '../../assets/icons/cloud.svg'

export const Fourth = () => {
  return (
    <div className={s.card}>
      <img src={cloud} alt="" />
      <h2>
        云备份
        <br />
        再也不怕数据丢失
      </h2>
    </div>
  )
}