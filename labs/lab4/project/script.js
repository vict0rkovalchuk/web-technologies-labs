class ProductLoader {
  container = null;
  products = [];

  constructor() {
    this.container = document.querySelector('.products__content');
  }

  async loadProducts(limit = 12) {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products?limit=' + limit
      );
      this.products = await response.json();
    } catch (e) {
      alert(e);
    }
    console.log(this.products);
  }

  clearProducts() {
    this.products = [];
  }

  async render() {
    this.container.innerHTML = '';
    this.clearProducts();
    await this.loadProducts();
    for (const item of this.products) {
      const el = document.createElement('div');
      el.classList.add('products__item');
      el.innerHTML = this.getTemplate(item);
      this.container.appendChild(el);
    }
  }

  getTemplate(product) {
    return `
    <a class="products__img" href="product.html">
      <img alt="product" src="${product.image}" class="products__img_image" />
    </a>
    <div class="products__text">
      <a href="product.html" class="products__link link"
        >${product.title}</a
      >
      <p>
        $${product.price}<img alt="star" class="products__star" src="img/star.png" />
      </p>
    </div>
    <a class="products__add" href="#">Add to cart</a>
    `;
  }
}

class HandleSubcsribe {
  form = null;
  constructor() {
    this.form = document.querySelector('.subscribe__email__form');
    this.form.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = document.querySelector('.subscribe__email__input');
    if (email.value) {
      alert(`Succesfully subscribed with email: ${email.value}!`);
    } else {
      alert('Error!');
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const loader = new ProductLoader();
  new HandleSubcsribe();
  await loader.render();
});
