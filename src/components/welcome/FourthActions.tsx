import s from './Welcome.module.scss'
import { Link } from 'react-router-dom'

export const FourthActions = () => {
  return (
    <div className={s.actions}>
      <Link className={s.fake} to="/start">
        跳过
      </Link>
      <Link to="/start">下一页</Link>
      <Link to="/start">跳过</Link>
    </div>
  )
}
