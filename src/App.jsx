import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import ResumeInstructions from './pages/ResumeInstructions'
import Resumeform from './pages/Resumeform'
import History from './pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PageNotfound from './pages/PageNotfound'


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/instruction' element={<ResumeInstructions/>}/>
        <Route path='/form' element={<Resumeform/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/*' element={<PageNotfound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
