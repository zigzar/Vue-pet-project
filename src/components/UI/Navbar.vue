<template>
  <div class="navbar">
      <div @click="$router.push('/')" class="clickable">App via Vue</div>
      <div class="navbar__btns">
          <my-button @click="$router.push('/')" class="btn clickable">Главная</my-button>
          <my-button @click="$router.push('/posts')" class="btn clickable">Посты</my-button>
          <!-- <my-button @click="$router.push('/about')" class="btn clickable">О нас</my-button>
          <my-button @click="$router.push('/store')" class="btn clickable">Store</my-button>
          <my-button @click="$router.push('/composition')" class="btn clickable">Composition</my-button> -->
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .navbar {
        height: 60px;
        background: #202122;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
        color: white
    }
    .navbar__btns {
        margin-left: auto;
    }
    .btn {
        margin-left: 15px;
        color: white;
        border-color: #fff;
    }
    .btn:hover {
        margin-left: 15px;
        color: #202122;
        background-color: #fff;
    }
    .clickable {
        cursor: pointer;
    }
</style>