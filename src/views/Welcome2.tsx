import s from './Welcome.module.scss'
import mangosteen from '../assets/icons/mangosteen.svg'
import { Second } from '../components/welcome/Second'
import { SecondActions } from '../components/welcome/SecondActions'

export const Welcome2 = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <img src={mangosteen} alt="" />
        <h1>凤果记账</h1>
      </header>
      <main className={s.main}>
        <Second />
      </main>
      <footer>
        <SecondActions />
      </footer>
    </div>
  )
}
