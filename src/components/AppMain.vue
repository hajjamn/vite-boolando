<script>

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: db.products
    }
  }
};

import db from '../data/db.json'
import ProductCard from './ProductCard.vue';

</script>


<template>

  <main class="page-content">
    <section class="content-section">
      <!-- PRODUCTS LIST -->
      <div class="container">
        <ul v-if="products.length !== 0" class="row">
          <!-- PRODUCTS -->
          <ProductCard v-for="product in products" :item="product" :key="product.id"></ProductCard>
        </ul>
      </div>
    </section>
  </main>

</template>

<style>
.page-content .content-section {
  padding: 50px 0;
}

.page-content .row>* {
  padding: 0 5px;
}

.page-content .row {
  gap: 5px;
  justify-content: space-between;
  row-gap: 50px;
}

.page-content .card {
  max-width: calc(4 * 100% / 12 - 5px)
}

.page-content .product>img {
  display: block;
}

.page-content .card {
  position: relative;
}

.page-content .card .product {
  position: relative;
}

.product .favorite {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 0;
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 30px;
  text-align: center;
  background-color: white;
  user-select: none;
}

.product .favorite.isInFavorites {
  color: red;
}

.product .badge-container {
  justify-content: flex-start;
  position: absolute;
  left: 0;
  bottom: 35px;
  gap: 4px;
}

.product .badge-container>* {
  padding: 0 10px;
}

.product .product-alt-img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 200ms;
}

.product:hover .product-alt-img {
  opacity: 1;
}

.page-content .product-brand {
  font-weight: 300;
}

.page-content .product-name {
  font-weight: 700;
}

.page-content .product-info .price {
  font-weight: 700;
}
</style>