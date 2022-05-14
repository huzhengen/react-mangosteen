import s from './Welcome.module.scss'
import mangosteen from '../assets/icons/mangosteen.svg'
import { Third } from '../components/welcome/Third'
import { ThirdActions } from '../components/welcome/ThirdActions'

export const Welcome3 = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <img src={mangosteen} alt="" />
        <h1>凤果记账</h1>
      </header>
      <main className={s.main}>
        <Third />
      </main>
      <footer>
        <ThirdActions />
      </footer>
    </div>
  )
}
