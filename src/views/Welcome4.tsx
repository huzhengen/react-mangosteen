import s from './Welcome.module.scss'
import { Fourth } from '../components/welcome/Fourth'
import { FourthActions } from '../components/welcome/FourthActions'
import { Header } from '../components/welcome/Header'

export const Welcome4 = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <Header />
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
