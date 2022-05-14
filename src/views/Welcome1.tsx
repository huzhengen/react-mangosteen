import s from './Welcome.module.scss'
import mangosteen from '../assets/icons/mangosteen.svg'
import { First } from '../components/welcome/First'
import { FirstActions } from '../components/welcome/FirstActions'

export const Welcome1 = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <img src={mangosteen} alt="" />
        <h1>凤果记账</h1>
      </header>
      <main className={s.main}>
        <First />
      </main>
      <footer>
        <FirstActions />
      </footer>
    </div>
  )
}
