import s from './Welcome.module.scss'
import SvgIcon from '../SvgIcon'

export const First = () => {
  return (
    <div className={s.card}>
      <SvgIcon name='pig' />
      <h2>
        会赚钱
        <br />
        还要会省钱
      </h2>
    </div>
  )
}
