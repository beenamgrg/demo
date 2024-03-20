function toggleCart() {
  var cartSidebar = document.getElementById("cartSidebar");
  cartSidebar.classList.remove("cart-sidebar-close");
  cartSidebar.classList.add("cart-sidebar-open");
}

function closeCartSidebar() {
  var cartSidebar = document.getElementById("cartSidebar");
  cartSidebar.classList.remove("cart-sidebar-open");
  cartSidebar.classList.add("cart-sidebar-close");
}
