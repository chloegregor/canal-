import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './layout/header'
import Footer from './layout/footer'
import Home from './routes/Home'
import Details from './routes/Details'
import Dashboard from './routes/admin/Dashboard'
import ContentFilter from './routes/ContentFilter'
import Filter from './routes/Filter'
import Films from './routes/Films'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'


export default function App(){
  return(
    <>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          <Route path='/details/:type/:slug' element={<Details/>}/>
          <Route path='/cinema' element={<Films/>}/>
          <Route path='/:type/:filter/:slug' element={<ContentFilter/>}/>
          <Route path='/:filter/:slug' element={<Filter/>}/>
        </Route>
      </Routes>
      <Footer/>
    </>
  )

}
