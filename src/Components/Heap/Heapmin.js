import * as React from 'react';
import logo from './logo2.png';


export default function BST() {


  console.log(logo)
  return (
<article class="br2 ba dark-gray b--black-10 shadow-5 center">
  <img src={logo} width="60%" className="db center br2 br--top" alt="Photo of a kitten looking menacing." />
  <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
      <div class="dtc">
        {/* <h1 class="f3 mv0">Min Heap</h1> */}
      </div>

    </div>
    {/* <p class="f6 lh-copy tmeasure mt2 mid-gray">
    A min-heap is a binary tree such that the data contained in each node is less than 
    (or equal to) the data in that node's children.
    </p> */}
  </div>
</article>
  );
}
