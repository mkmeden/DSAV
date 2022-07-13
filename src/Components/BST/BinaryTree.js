import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis";
import { useState } from "react";

export default function BinaryTree() {
  const { ref, insert, remove } = useBinarySearchTree();
  const [insertValue, setInsertValue] = useState(0);
  const [removeValue, setRemoveValue] = useState(0);

  return (
    <div >
      <div className="fl">

        <div className="fl1">
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="number"
            onChange={(elem) => {
              setInsertValue(parseInt(elem.currentTarget.value, 10))
            }
            }
          />
          <button
            className="b pa3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"

            onClick={() => insert(insertValue)}>Insert</button>

        </div>
        <br />

        <div className="fl1">
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="number"
            onChange={(elem) =>
              setRemoveValue(parseInt(elem.currentTarget.value, 10))
            }
          />
          <button

            className="b ph3 pa3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            onClick={() => remove(removeValue)}>Remove</button>
        </div>

      </div >
      <div className="pa5" >
        <BinarySearchTree treeStyles={{ nodeFontSize: "40px" }} data={[2, 1, 3]} ref={ref} />
      </div>
    </div>
  );
}
