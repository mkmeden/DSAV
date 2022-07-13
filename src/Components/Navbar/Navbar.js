
import * as React from 'react';
import './Navbar.css'
export default function Navbar({router , RouterChange}) {

  if(router=="home")
  {
    return (

      <div>
  
  
        <nav className="dt w-100 border-box pa4 ph5-ns nav" >
        <h1 className='tc f4' style={{margin : 0}} >Welcome to Data Structure Visualiser</h1>
  </nav>
  
      </div>
    );
  }

  else
  {
    return (

      <div>
  
  
        <nav className="dt w-100 border-box pa4 ph5-ns nav" >

      <p class="link dim dark-gray f3 dib mr3 mr4-ns pointer " style={{margin:0}}
       onClick={()=>RouterChange("home")}

       >Back</p>


  </nav>
  
      </div>
    );
  }
}