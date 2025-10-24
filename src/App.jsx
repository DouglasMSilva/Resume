import { Header } from './components/Header';
import { Content } from './components/Content';

import styles from './App.module.css';

function App() {
  

  return (
    <div className={styles.app}>
      <Header />
      <Content />
    </div>
  )
}

export default App
