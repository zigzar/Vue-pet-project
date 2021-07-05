<template>
  <div class="navbar">
      <div @click="$router.push('/')" class="clickable">App via Vue</div>
      <div class="navbar__btns">
          <my-button @click="$router.push('/')" class="btn clickable">Главная</my-button>
          <my-button @click="$router.push('/posts')" class="btn clickable">Посты</my-button>
          <my-button @click="$router.push('/about')" class="btn clickable">О нас</my-button>
          <my-button @click="$router.push('/store')" class="btn clickable">Store</my-button>
          <my-button @click="$router.push('/composition')" class="btn clickable">Composition</my-button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .navbar {
        height: 50px;
        background: lightgray;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }
    .navbar__btns {
        margin-left: auto;
    }
    .btn {
        margin-left: 15px;
    }
    .clickable {
        cursor: pointer;
    }
</style>