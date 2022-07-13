import * as React from 'react';
import logo from './logo.jpg';


export default function BST() {


  console.log(logo)
  return (
<article class="br2 ba dark-gray b--black-10 shadow-5 center">
  <img src={logo} width="60%" className="db center br2 br--top" alt="Photo of a kitten looking menacing." />
  <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
      <div class="dtc">
        <h1 class="f3 mv0">Binary Search Tree</h1>
      </div>

    </div>
    <p class="f6 lh-copy tmeasure mt2 mid-gray">

    A BST is considered a data structure made up of nodes, like Linked Lists.
     These nodes are either null or have references to other nodes.
    </p>
  </div>
</article>
  );
}
