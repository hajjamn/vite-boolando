<script>

export default {
  data() {
    return {
      "products": [
        {
          "id": 1,
          "frontImage": "1.webp",
          "backImage": "1b.webp",
          "brand": "Levi's",
          "name": "Relaxed Fit",
          "price": 29.99,
          "isInFavorites": true,
          "badges": [
            {
              "type": "tag",
              "value": "Sostenibilità"
            },
            {
              "type": "discount",
              "value": "-50%"
            }
          ]
        },
        {
          "id": 2,
          "frontImage": "2.webp",
          "backImage": "2b.webp",
          "brand": "Guess",
          "name": "Roses Tee",
          "price": 20.99,
          "isInFavorites": true,
          "badges": [
            {
              "type": "discount",
              "value": "-30%"
            }
          ]
        },
        {
          "id": 3,
          "frontImage": "3.webp",
          "backImage": "3b.webp",
          "brand": "Come Zucchero Filato",
          "name": "Voglia di colori pastello",
          "price": 129.99,
          "isInFavorites": false,
          "badges": [
            {
              "type": "discount",
              "value": "-30%"
            }
          ]
        },
        {
          "id": 4,
          "frontImage": "4.webp",
          "backImage": "4b.webp",
          "brand": "Levi's",
          "name": "Tee Unisex",
          "price": 14.99,
          "isInFavorites": false,
          "badges": [
            {
              "type": "tag",
              "value": "Sostenibilità"
            },
            {
              "type": "discount",
              "value": "-50%"
            }
          ]
        },
        {
          "id": 5,
          "frontImage": "5.webp",
          "backImage": "5b.webp",
          "brand": "Maya Deluxe",
          "name": "Stripe Bodice",
          "price": 99.99,
          "isInFavorites": true,
          "badges": [
            {
              "type": "tag",
              "value": "Sostenibilità"
            },
            {
              "type": "discount",
              "value": "-50%"
            }
          ]
        },
        {
          "id": 6,
          "frontImage": "6.webp",
          "backImage": "6b.webp",
          "brand": "Esprit",
          "name": "Maglione - Black",
          "price": 29.99,
          "isInFavorites": true,
          "badges": [
            {
              "type": "tag",
              "value": "Sostenibilità"
            }
          ]
        }
      ]
    }
  }
}

</script>


<template>

  <main class="page-content">
    <section class="content-section">
      <!-- PRODUCTS LIST -->
      <div class="container">
        <ul class="row">
          <!-- PRODUCT 1 -->
          <li class="card col-flex">
            <div class="product">
              <img src="/img/1.webp" alt="" class="product-img">
              <div class="overlay">
                <img src="/img/1b.webp" alt="" class="product-alt-img">
              </div>
              <div class="favorite">&hearts;</div>
              <ul class="badge-container col-flex">
                <li class="badge discount">
                  <p>-50%</p>
                </li>
                <li class="badge sustainable">
                  <p>Sostenibilità</p>
                </li>
              </ul>
            </div>
            <ul class="product-info">
              <li class="product-brand"><a href="#">
                  <p>Levi's</p>
                </a></li>
              <li class="product-name"><a href="#">RELAXED FIT TEE UNISEX</a></li>
              <li class="price"><span class="after-disc">14,99 &euro; </span><span class="before-disc">29,99
                  &euro;</span></li>
            </ul>
          </li>
          <!-- PRODUCT 2 -->
          <li class="card col-flex">
            <div class="product">
              <img src="/img/2.webp" alt="" class="product-img">
              <div class="overlay">
                <img src="/img/2b.webp" alt="" class="product-alt-img">
              </div>
              <div class="favorite">&hearts;</div>
              <ul class="badge-container col-flex">
                <li class="badge discount">
                  <p>-30%</p>
                </li>
              </ul>
            </div>
            <ul class="product-info">
              <li class="product-brand"><a href="#">
                  <p>Guess</p>
                </a></li>
              <li class="product-name"><a href="#">ROSES TEE</a></li>
              <li class="price"><span class="after-disc">20,99 &euro; </span><span class="before-disc">29,99
                  &euro;</span></li>
            </ul>
          </li>
          <!-- PRODUCT 3 -->
          <li class="card col-flex">
            <div class="product">
              <img src="/img/3.webp" alt="" class="product-img">
              <div class="overlay">
                <img src="/img/3b.webp" alt="" class="product-alt-img">
              </div>
              <div class="favorite">&hearts;</div>
              <ul class="badge-container col-flex">
                <li class="badge discount">
                  <p>-30%</p>
                </li>
              </ul>
            </div>
            <ul class="product-info">
              <li class="product-brand"><a href="#">
                  <p>Come Zucchero Filato</p>
                </a></li>
              <li class="product-name"><a href="#">VOGLIA DI COLORI PASTELLO</a></li>
              <li class="price"><span class="after-disc">129,99 &euro; </span><span class="before-disc">184,99
                  &euro;</span></li>
            </ul>
          </li>
          <!-- PRODUCT 4 -->
          <li class="card col-flex">
            <div class="product">
              <img src="/img/4.webp" alt="" class="product-img">
              <div class="overlay">
                <img src="/img/4b.webp" alt="" class="product-alt-img">
              </div>
              <div class="favorite">&hearts;</div>
              <ul class="badge-container col-flex">
                <li class="badge discount">
                  <p>-50%</p>
                </li>
                <li class="badge sustainable">
                  <p>Sostenibilità</p>
                </li>
              </ul>
            </div>
            <ul class="product-info">
              <li class="product-brand"><a href="#">
                  <p>Levi's</p>
                </a></li>
              <li class="product-name"><a href="#">TEE UNISEX</a></li>
              <li class="price"><span class="after-disc">14,99 &euro; </span><span class="before-disc">29,99
                  &euro;</span></li>
            </ul>
          </li>
          <!-- PRODUCT 5 -->
          <li class="card col-flex">
            <div class="product">
              <img src="/img/5.webp" alt="" class="product-img">
              <div class="overlay">
                <img src="/img/5b.webp" alt="" class="product-alt-img">
              </div>
              <div class="favorite">&hearts;</div>
              <ul class="badge-container col-flex">
              </ul>
            </div>
            <ul class="product-info">
              <li class="product-brand"><a href="#">
                  <p>Maya Deluxe</p>
                </a></li>
              <li class="product-name"><a href="#">STRIP BODICE</a></li>
              <li class="price"><span class="after-disc">99,99 &euro;</span><span class="before-disc"></span></li>
            </ul>
          </li>
          <!-- PRODUCT 6 -->
          <li class="card col-flex">
            <div class="product">
              <img src="/img/6.webp" alt="" class="product-img">
              <div class="overlay">
                <img src="/img/6b.webp" alt="" class="product-alt-img">
              </div>
              <div class="favorite">&hearts;</div>
              <ul class="badge-container col-flex">
                <li class="badge sustainable">
                  <p>Sostenibilità</p>
                </li>
              </ul>
            </div>
            <ul class="product-info">
              <li class="product-brand"><a href="#">
                  <p>Esprit</p>
                </a></li>
              <li class="product-name"><a href="#">MAGLIONE - BLACK</a></li>
              <li class="price"><span class="after-disc">29,99 &euro;</span><span class="before-disc"></span></li>
            </ul>
          </li>
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
  position: absolute;
  top: 10px;
  right: 0;
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 30px;
  text-align: center;
  background-color: white;
}

.product:hover .favorite {
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