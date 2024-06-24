import './App.css'
import FloorButtonSection from './components/FloorButtonSection'
import ElevatorSection from './components/ElevatorSection'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <FloorButtonSection />
      <ElevatorSection />
    </Provider>
  )
}

export default App
