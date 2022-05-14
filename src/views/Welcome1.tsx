import s from './Welcome.module.scss'
import { Header } from '../components/welcome/Header'
import { First } from '../components/welcome/First'
import { FirstActions } from '../components/welcome/FirstActions'

export const Welcome1 = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <Header />
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
