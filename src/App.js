
import * as React from 'react';
import Navbar from './Components/Navbar/Navbar';
import BST from './Components/BST/BST';
import Heapmax from './Components/Heap/Heapmax';
import Heapmin from './Components/Heap/Heapmin';

import BinaryTree from './Components/BST/BinaryTree'
import './App.css';
import Maxheap from './Components/Heap/Maxheap';
import Minheap from './Components/Heap/MinHeap'

export default function App() {

  const [router, setRouter] = React.useState("home")

  function RouterChange(val) {
    setRouter(val)
  }

  if (router == "home") {
    return (


      <div>
        <Navbar router={router} />
        <h1 className='f1 tc'>DATA STRUCTURES</h1>

        <div className='fl'>
          <div
            className='size grow pointer'
            width="0%"
            onClick={() => RouterChange("bst")}
          >
            <BST />
          </div>
          <div

            onClick={() => RouterChange("maxheap")}
            className='size grow  pointer'
            width="0%">
            <Heapmax />
          </div>

          <div
          
          onClick={()=>RouterChange("minheap")}
          className='size grow pointer' width="0%">
            <Heapmin />
          </div>


        </div>


      </div>
    );

  }

  else if (router == "bst") {
    return (


      <div>
        <Navbar router={router} RouterChange={RouterChange} />
        <h1 className='f1 tc'>BINARY SEARCH TREE VISUALISER</h1>

        <BinaryTree />



      </div>
    );
  }

  else if (router == "maxheap") {
    return (


      <div>
        <Navbar router={router} RouterChange={RouterChange} />
        <h1 className='f1 tc'>MAX HEAP VISUALISER</h1>

        <Maxheap />



      </div>
    );
  }

  else if(router=="minheap")
  {

    return (


      <div>
        <Navbar router={router} RouterChange={RouterChange} />
        <h1 className='f1 tc'>MIN HEAP VISUALISER</h1>

        <Minheap />



      </div>
    );

  }





}