import Navbar from './component/Navbar'
import Manager from './component/Manager'
import './App.css'
import Footer from './component/footer'

function App() {


  return (
    <>
    
      <Navbar/>
      
        <div className=" absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] min-h-80">
        <Manager/>

       

      </div>
      <Footer/>

      



    </>
  )
}


export default App
