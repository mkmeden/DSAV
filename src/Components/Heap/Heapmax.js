import * as React from 'react';
import logo from './logo1.png';


export default function BST() {


  console.log(logo)
  return (
<article class="br2 ba dark-gray b--black-10 shadow-5 center">
  <img src={logo} width="60%" className="db center br2 br--top" alt="Photo of a kitten looking menacing." />
  <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
      <div class="dtc">
        <h1 class="f3 mv0">Max Heap</h1>
      </div>

    </div>
    <p class="f6 lh-copy tmeasure mt2 mid-gray">
    In a Max Binary Heap, the key at root must be maximum among all keys present in Binary Heap
    </p>
  </div>
</article>
  );
}
