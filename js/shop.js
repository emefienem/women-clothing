const cartCloseBtn = document.querySelector('.close');
const cartBox = document.querySelector('.cartBox');
const iconShopping = document.getElementById('cartShowButton')

iconShopping.addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'block'
});
cartCloseBtn.addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});

const cartButton = document.querySelectorAll('.addCartButton');
let enrobeitems = [];
for(let i = 0; i < cartButton.length; i++) {
    cartButton[i].addEventListener('click', function (e) {
        const productContainer = e.target.parentElement;
        const productImage = productContainer.querySelector('img');
        const productName = productContainer.querySelector('.bottom p').textContent;
        const productPrice = parseFloat(productContainer.querySelector('.bottom h2').textContent.replace('$', ''));
        console.log(productName, productPrice, productImage)
        if(typeof(Storage) !== 'undefined') {
            let item = {
                id: i + 1, 
                name: productName,
                price: productPrice,
                no: 1,
                image: productImage,
            };
            if(localStorage.getItem('enrobeitems') === null) {
                enrobeitems.push(item);
                localStorage.setItem('enrobeitems', JSON.stringify(enrobeitems));
                window.location.reload();
            }else{
                const localItems = JSON.parse(localStorage.getItem('enrobeitems'));   
                localItems.map(data => {
                    if(item.id == data.id) {
                        item.no = data.no + 1;
                    } else{
                        enrobeitems.push(data)
                    }
                });
                enrobeitems.push(item);
                localStorage.setItem('enrobeitems', JSON.stringify(enrobeitems));
                window.location.reload();
            }
        } else{
            alert('local storage is not working on your browser')
        }
    
    })
}
const cartSection = document.getElementById('cart');
const cartBadge = document.querySelector('#raised');
const cartBadges = document.querySelector('.numberBadges');
let no = 0;
JSON.parse(localStorage.getItem('enrobeitems')).map(data => {
    no += data.no;
})
cartBadge.innerHTML = no;
cartBadges.innerHTML = no;

const cartTable = cartSection.querySelector('table');
let tableData = ''
tableData += `  
    <thead>
        <tr>
            <td>S no.</td>
            <td>Image</td>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Remove</td>
        </tr>
    </thead>`;
if(JSON.parse(localStorage.getItem('enrobeitems')) === null) {
    tableData += '<tbody><tr><td>No items found</td></tr></tbody>';
} else {
    JSON.parse(localStorage.getItem('enrobeitems')).map(data => {
        tableData +=
        '<tbody><tr><td>'+data.id+'</td><td>'+data.image+'</td><td>'+data.name+'</td><td>'+data.price+'</td><td><input type="number" value="1"></td><td><a href="#" onclick=Delete(this);><i class="circle fa fa-times-circle"></i></a></td></tr></tbody>'
    });
}
cartTable.innerHTML = tableData;


const active = document.querySelector('.active');

if(active) {
    active.style.color = 'gray'
}

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('.mobile-menu');
  const navBar = document.querySelector('.nav-bar');

  mobileMenu.addEventListener('click', function () {
      navBar.classList.toggle('active');
  });
});
 
