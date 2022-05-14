import s from './Welcome.module.scss'
import mangosteen from '../assets/icons/mangosteen.svg'
import { Fourth } from '../components/welcome/Fourth'
import { FourthActions } from '../components/welcome/FourthActions'

export const Welcome4 = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <img src={mangosteen} alt="" />
        <h1>凤果记账</h1>
      </header>
      <main className={s.main}>
        <Fourth />
      </main>
      <footer>
        <FourthActions />
      </footer>
    </div>
  )
}
