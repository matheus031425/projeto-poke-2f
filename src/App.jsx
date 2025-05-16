import { Routes, Route } from 'react-router-dom'
import home from'./Home'

const App = () => {

    return(
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    )
}

export default App
