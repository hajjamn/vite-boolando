<script>

export default {
  props: {
    item: Object
  },
  computed: {
    discountedPrice() {
      const foundDiscount = this.item.badges.find(({ type }) => type === 'discount')
      const discountValue = foundDiscount.value
      const discountPercentage = discountValue.replace('%' , '').replace('-','');
      const discountedPercentage = 100 - discountPercentage;
      return (this.item.price * (discountedPercentage / 100)).toFixed(2);
    }
  },
  mounted() {
    console.log(this.discountedPrice)
  }
}

</script>


<template>

  <li class="card col-flex">
    <div class="product">
      <img :src="`/img/${item.frontImage}`" alt="" class="product-img">
      <div class="overlay">
        <img :src="`/img/${item.backImage}`" alt="" class="product-alt-img">
      </div>
      <div class="favorite">&hearts;</div>
      <ul class="badge-container col-flex">
        <li v-for="badge in item.badges" class="badge" :class="badge.type">
          <p>{{ badge.value }}</p>
        </li>
      </ul>
    </div>
    <ul class="product-info">
      <li class="product-brand"><a href="#">
          <p>{{ item.brand }}</p>
        </a></li>
      <li class="product-name"><a href="#">{{ item.name }}</a></li>
      <li class="price"><span class="after-disc">{{ this.discountedPrice }} &euro; </span><span
          class="before-disc">{{
            item.price
          }}&euro;</span></li>
    </ul>
  </li>

</template>

<style></style>