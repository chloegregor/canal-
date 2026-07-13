import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './layout/header'
import Home from './routes/Home'
import Details from './routes/Details'
import Dashboard from './routes/admin/Dashboard'
import Layout from './components/Layout'


export default function App(){
  return(
    <>
      <Header/>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          <Route path=':type/:slug' element={<Details/>}/>
        </Route>
      </Routes>
    </>
  )

}
