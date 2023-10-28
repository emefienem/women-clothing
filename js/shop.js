const product = [
    {
        id: 0,
        image: 'images/Clothes3.jpg',
        title: 'Gown Black Dress',
        price: 10,
    }, 
    {
        id: 1,
        image: 'images/Clothes1.jpg',
        title: 'Gown Brown Dress',
        price: 3, 
    },
    {
        id: 2,
        image: 'images/Clothes2.jpg',
        title: 'Gown White Dress',
        price: 13,
    }, 
    {
        id: 3,
        image: 'images/Clothes1.jpg',
        title: 'Dress',
        price: 8,
    }, 
    {
        id: 4,
        image: 'images/Clothes3.jpg',
        title: 'Gown Black Dress',
        price: 8,
    },
    {
        id: 5,
        image: 'images/Clothes1.jpg',
        title: 'Gown Brown Dress',
        price: 11,
    },
    {
        id: 6,
        image: 'images/Clothes2.jpg',
        title: 'Gown white Dress',
        price: 6,
    },
    {
        id: 7,
        image: 'images/Clothes1.jpg',
        title: 'Dress',
        price: 8,
    },
    {
        id: 8,
        image: 'images/Clothes3.jpg',
        title: 'Gown Black Dress',
        price: 4,
    },
    {
        id: 9,
        image: 'images/Clothes1.jpg',
        title: 'Gown Brown Dress',
        price: 6,
    },
    {
        id: 10,
        image: 'images/Clothes2.jpg',
        title: 'Gown White Dress',
        price: 7,
    },
    {
        id: 11,
        image: 'images/Clothes1.jpg',
        title: 'Dress',
        price: 12, 
    }
];


const categories = [...new Set(product.map((item) => 
    {return item}))]
    let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    const { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$${price}.00</h2>` +
        "<button onclick='addToCart("+(i++)+")' class='addCartButton'>Add to cart</button>" +
        `</div>
        </div>`
        
    )
}).join('');

const shoppingCart = [];

// Function to save the shopping cart to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }
  
  // Function to load the shopping cart from local storage
  function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      shoppingCart.push(...JSON.parse(savedCart));
      displayCart();
    }
  }
  
  // Call loadCartFromLocalStorage when the page loads
  window.addEventListener('load', loadCartFromLocalStorage);

  const buttons = document.querySelectorAll('.addCartButton')
//   buttons.forEach(button => {
//     button.addEventListener('click', function () {
//         if(button.textContent === 'Add to cart') {
//             button.textContent = 'Added'
//         } else{
//             button.textContent = 'Add to cart'
//         }
//     })
//   })

// Function to add an item to cart
    function addToCart(a) {
      shoppingCart.push({ ...categories[a] });
      saveCartToLocalStorage(); // Save the updated cart to local storage
      displayCart();
    }

  // Function to delete an item from the cart
  function delElement(a) {
    shoppingCart.splice(a, 1);
    saveCartToLocalStorage(); // Save the updated cart to local storage
    displayCart();
  }
  
  // Function to clear the cart and local storage
  function clearCart() {
    shoppingCart.length = 0;
    localStorage.removeItem('shoppingCart');
    displayCart();
  }

// Function to update the cart item quantity and recalculate the total
function updateQuantity(a, newQuantity) {
    shoppingCart[a].quantity = newQuantity;
    saveCartToLocalStorage(); // Save the updated cart to local storage
    displayCart();
  }
  

function displayCart() {
    let j = 0;
    let total = 0;
    document.getElementById('raised').innerHTML = shoppingCart.length;
    if(shoppingCart.length === 0) {
        document.getElementById('cartItem').innerHTML = 'Your cart is empty';
        document.getElementById('total').innerHTML = '$ '+0+'.00';
    } 
    else{
        document.getElementById('cartItem').innerHTML = shoppingCart.map((items, index) => {
            const { image, title, price, quantity } = items;
            // const itemTotal = price * quantity;
            // total += itemTotal;
            total += price;
            document.getElementById('total').innerHTML = '$ '+total+'.00';
            return(

                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <input type="number" id="quantity" name="quantity" min="1" max="5" value="${quantity}" class="quantity-input">
                <h2 style='font-size: 15px;'> $${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );      
        }).join('');
    }
}

const images = document.querySelectorAll('.slide');
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
 