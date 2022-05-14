import s from './Welcome.module.scss'
import pig from '../../assets/icons/pig.svg'

export const First = () => {
  return (
    <div className={s.card}>
      <img src={pig} alt="" />
      <h2>
        会赚钱
        <br />
        还要会省钱
      </h2>
    </div>
  )
}
