const scrollTopButton = document.getElementById('scrollTopButton');
// Show or hide the button based on the user scroll position
window.onscroll = function() {
  if(document.body.scrollTop > 5 || documentElement.scrollTop > 5) {
    scrollTopButton.style.display = 'block';
  } else{
    scrollTopButton.style.display = 'none';
  }
}

// Scroll to the top button when the button is clicked 
scrollTopButton.addEventListener('click', function() {
  // Determine the starting point
  const startingY = window.scrollY;

  // Calculate how much to scroll for each animation frame 
  const scrollStep = (startingY) / (300 / 15)

  // Define the animation function
  const scrollAnimation = () => {
    if (window.scrollY > 0) {
      window.scrollTo(0, window.scrollY - scrollStep);
      requestAnimationFrame(scrollAnimation);
    }
  }
  scrollAnimation();
  // document.body.scrollTop = 0; // For Safari;
  // document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE, and Opera
})

const active = document.querySelector('.active');

// Toggles the current header to gray 
if(active) {
    active.style.color = 'gray'
}

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
const cartBadges = document.querySelector('#raised2');
let no = 0;
JSON.parse(localStorage.getItem('enrobeitems')).map(data => {
    no += data.no;
})
cartBadge.innerHTML = no;
cartBadge.innerHTML = no;

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
        '<tbody><tr><td>'+data.no+'</td><td>'+data.image+'</td><td>'+data.name+'</td><td>'+data.price+'</td><td><input type="number" value="1"></td><td><a href="#" onclick=Delete(this);><i class="circle fa fa-times-circle"></i></a></td></tr></tbody>'
    });
};
cartTable.innerHTML = tableData;


const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

// For mobile phones(Hamburger)
if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('open')
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('open')
    })
}

// Toggle theme
const themebtn = document.querySelector('.theme-btn');
const element = document.body;
const savedTheme = localStorage.getItem('theme');

if(savedTheme) element.classList.add(savedTheme);

themebtn.addEventListener('click', function() {
    // Toggle the 'light-mode' class on the body element
    element.classList.toggle('light-mode');
    window.location.reload();

    // Check if the 'light mode' class is now present and save to theme peference 
    if (element.classList.contains('light-mode')){
        localStorage.setItem('theme', 'light-mode');
    }
    else{
        // Remove the theme preference if 'light-mode' is not present
        localStorage.removeItem('theme');
    }
});

// Toggle the search 
const searchIcon = document.querySelector('.search');
const searchBar = document.querySelector('.search-bar');
const resultsList = document.getElementById('results');

searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('on');
});
