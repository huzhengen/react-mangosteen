import s from './Welcome.module.scss'
import { Second } from '../components/welcome/Second'
import { SecondActions } from '../components/welcome/SecondActions'
import { Header } from '../components/welcome/Header'

export const Welcome2 = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <Header />
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
