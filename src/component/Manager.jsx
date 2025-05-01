import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
  const [form, setform] = useState({ site: "", userName: "", pasword: "" })
  const [paswordArray, setpaswordArray] = useState([])
  useEffect(() => {
    let pasword = localStorage.getItem("pasword")

    if (pasword) {
      setpaswordArray(JSON.parse(pasword))
    }

  }, [])



  const ref = useRef()
  const paswordRef = useRef()
  const showPasword = () => {
    paswordRef.current.type = "text"
    if (ref.current.src.includes("public/icon/eyeclose.svg")) {
      ref.current.src = "public/icon/eyeopen.svg"
      paswordRef.current.type = "password"
    } else {
      ref.current.src = "public/icon/eyeclose.svg"
      paswordRef.current.type = "text"

    }

  }
  const savePasword = () => {
    if(form.site.length>3 && form.userName.length>3&&form.pasword.length>3){

      console.log(form)
      setpaswordArray([...paswordArray, {...form,id:uuidv4()}])
      localStorage.setItem("pasword", JSON.stringify([...paswordArray, {...form,id:uuidv4()}]))
      console.log([...paswordArray, form])
      toast('Pasword Saved Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        })
    }else{
      toast('Error: Pasword not saved! ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        })

    }


  }
  const deletPasword = (id) => {
    console.log("deleating pasword with id",id)
    let c=confirm("Do you really want to delet ")
    if(c){

      setpaswordArray(paswordArray.filter(item=>item.id!=id))
      localStorage.setItem("pasword", JSON.stringify(paswordArray.filter(item=>item.id!=id)))
      toast('Deleted Pasword Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        })
      // console.log([...paswordArray, form])
    }


  }
  const editPasword = (id) => {
    console.log("editing pasword with id",id)
    setform(paswordArray.filter(item=>item.id===id)[0])
    setpaswordArray(paswordArray.filter(item=>item.id!==id))
    // console.log([...paswordArray, form])


  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const  copyText=(text) => {
    toast('copy to clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      });
        navigator.clipboard.writeText(text)
    
  }
  


  return (
    <>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
// transition={Bounce}
/>


      
      <div className="px-2  py-24 md:px-0 md:mycontainer min-h-screen ">
        <h1 className='text-4xl font-bold text-center'>
          <div className="logo font-bold">
            <span className='text-green-700'>&lt;</span>
            Pass<span className='text-green-700'>OP&gt;</span>
          </div>
        </h1>
        <p className='text-green-900 text-lg text-center'>your own pasword manager</p>
        <div className="text-white flex flex-col py-4 gap-5 items-center ">
          <input value={form.site} onChange={handleChange} className='rounded-full size-full' placeholder='Enter Website URL' type="text" name='site' id='site' />
          <div className="flex flex-col md:flex-row  w-full justify-between gap-4">
            <input value={form.userName} onChange={handleChange} className='rounded-full size-full' placeholder='Enter Username' type="text" name='userName' id='' />
            <div className="relative md:w-1/3 w-full">
              <input ref={paswordRef} value={form.pasword} onChange={handleChange} className='rounded-full size-full' placeholder=' Pasword' type="password" name='pasword' id='' />
              <span className='absolute text-black right-0'><span className='cursor-pointer' onClick={showPasword}><img ref={ref} src="public/icon/eyeopen.svg" alt="show" /></span> </span>
            </div>
          </div>
          <button onClick={savePasword} className='text-black w-fit flex gap-2 justify-center items-center py-2  border-white px-4 pa-2 border  bg-green-400 rounded-full hover:bg-green-500'><img src="public/icon/add.svg" alt="" />Save</button>

        </div>
        <div className="pasword">
          <h2 className='font-bold text-xl py-2'>Your Pasword</h2>
          {paswordArray.length === 0 && <div>No Pasword To Show</div>}
          {paswordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10 ">
            <thead className='bg-green-800 text-white'>
              <tr>
                <th className='py-2 border border-white'>Site</th>
                <th className='py-2 border border-white'>Username</th>
                <th className='py-2 border border-white'>pasword</th>
                <th className='py-2 border border-white'>Actoin</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {paswordArray.map((item, index) => {
                return (
                  <tr key={index} >
                    <td className=' text-center   py-2 px-2 border border-white '>
                      <div className="flex justify-between items-center">
                        <a href={item.site} target="_blank">{item.site}</a>
                        <div className="cursor-pointer items-center min-w-8 " onClick={()=>{copyText(item.site)}}>

                          <img className="px-3.5" src="public/icon/copy.svg" alt="" />
                        </div>

                      </div>

                    </td>
                    <td className=' text-center  py-2 border border-white'>
                      <div className="flex justify-between items-center ">

                        <span>{item.userName}</span>
                        <div className="cursor-pointer items-center min-w-8 " onClick={()=>{copyText(item.userName)}}>

                          <img className="" src="public/icon/copy.svg" alt="" />
                        </div>
                      </div>

                    </td>
                    <td className=' text-center  py-2 border border-white'>
                      <div className="flex justify-between items-center">

                        {item.pasword}
                        <div className="cursor-pointer  items-center min-w-8  " onClick={()=>{copyText(item.pasword)}}>

                          <img className="" src="public/icon/copy.svg" alt="" />
                        </div>
                      </div>

                    </td>
                    <td className=' text-center  py-2 border border-white'>
                      
                      <div className="flex justify-around">
                      <span className='cursor-pointer '>
                        <img onClick={()=>{editPasword(item.id)}} src="public/icon/edit.svg" alt="edit" />
                      </span>
                      <span className='cursor-pointer '>
                        <img onClick={()=>{deletPasword(item.id)}} src="public/icon/delet.svg" alt="edit" />
                      </span>

                      </div>

                    </td>
                  </tr>)

              })}

            </tbody>
          </table>}
        </div>

      </div>
    </>

  )
}

export default Manager
