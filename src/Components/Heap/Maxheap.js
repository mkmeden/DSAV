import React from "react";
import { MaxHeap, useHeap } from 'react-tree-vis'
import { useState } from 'react'

function Maxheap() {

  const { ref, insert, remove } = useHeap()

  const [insertValue, setInsertValue] = useState(0)
  const [removeValue, setRemoveValue] = useState(0)


  return (
    <>
      <div className="fl ">
        <div className="fl1">
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="number"
            onChange={(elem) =>
              setInsertValue(parseInt(elem.currentTarget.value))
            }
          />
          <button
            className="b pa3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            onClick={() => insert(insertValue)}>Insert</button>

        </div>


        <div className="fl1" >
          <input
            type="number"
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"

            onChange={(elem) =>
              setRemoveValue(parseInt(elem.currentTarget.value))}
          />

          <button
            className="b pa3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"

            onClick={() => remove(removeValue)}>Remove</button>

        </div>
      </div >
      <MaxHeap ref={ref} treeStyles={{ nodeFontSize: "40px" }} data={[2, 1, 3]} />
    </>
  );
}

export default Maxheap;
