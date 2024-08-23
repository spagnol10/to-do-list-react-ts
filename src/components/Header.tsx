import styles from './Header.module.css'

import toDoListLogo from '../assets/Logo.svg'

export function Header(){
  return(
    <header className={styles.container}>
      <img src={toDoListLogo} alt="Logo To do List" />
    </header>
  )
}