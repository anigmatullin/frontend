import { useState } from 'react'
import electron from '/electron.png'
import react from '/react.svg'
import vite from '/vite.svg'
import styles from 'styles/app.module.scss'

const App: React.FC = () => {
  const [count, setCount] = useState(0)


  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>

        <h5>{process.platform}</h5>
        <h5>chrome: {process.versions['chrome']}</h5>
        <h5>node: {process.versions['node']}</h5>
        <h5>electron: {process.versions['electron']}</h5>
        <h5>ares: {process.versions['ares']}</h5>
        <h5>http_parser: {process.versions['http_parser']}</h5>
        <h5>modules: {process.versions['modules']}</h5>
        <h5>openssl: {process.versions['openssl']}</h5>
        <h5>uv: {process.versions['uv']}</h5>
        <h5>zlib: {process.versions['zlib']}</h5>
        <h5>v8: {process.versions['v8']}</h5>

      </header>
    </div>
  )
}

export default App
