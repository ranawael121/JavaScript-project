/* scrol navbar */
var nav = document.querySelector('.secon-navbar');
window.addEventListener('scroll', () => {
  if (scrollY >= 20) {
    nav.classList.add('nav-scroll');
  } else if (screenY < 56) {
    nav.classList.remove('nav-scroll');
  }
});

/* product */

import product from './dataTYpe.json' assert{type: 'json'}
let alldata = []
alldata = product
let table = document.querySelector(".R-table")
console.log(table)
var divs = ''
var url
var x

/* cart */

document.getElementById("table").onload = function () {
  url = window.location.href
  url = url.split("?")
  x = url[1]
  divs = `<thead>
  <tr>
    <th scope="col">product</th>
    <th scope="col">price</th>
    <th scope="col">subtotal</th>
  </tr>
</thead>
<tbody >
<tr >
<th scope="row"><img src="${alldata[x].image}" class="w-25 h-25"></th>
<td>EGP${alldata[x].price}</td>
<td>EGP${alldata[x].price}</td>
</tr>
</tbody>`
  table.innerHTML = divs
}

