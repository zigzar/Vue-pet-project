<template>
  <div class="main">
      <div class="bg block">
          <div class="h-container">
            <h1>Welcome</h1>
          </div>
    </div>
    <div class="block block-1">
      <div class="h-container">
        <h1>to my</h1>
      </div>
    </div>
      <!-- <router-link to="/posts">Посты</router-link>
      <router-link to="/about">О нас</router-link> -->
      <div class="block block-2">
          <div class="h-container">
            <h1>site</h1>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
.main {
  width: 100%;
}
h1 {
  width:fit-content;
  padding: 1rem 2rem;
  font-size: 10vw;
  background: azure;
  font-family: 'Montserrat', sans-serif;
  position: sticky;
  top: calc(50% - 5vw);
  text-align: center;
  mix-blend-mode: screen;
  z-index: 1;
  margin: 0 auto;
}
.bg {
  width: 100%;
  height: calc(100vh-60px);
  background-repeat: no-repeat;
  background-size: 300vh;
  background-image: url(https://s1.1zoom.ru/b5050/680/371618-svetik_3840x2400.jpg);
  display: flex;
  justify-content: center;
  position: sticky;
  -webkit-animation: bgAnim 90s linear infinite;
    -moz-animation: bgAnim 90s linear infinite;
    -o-animation: bgAnim 90s linear infinite;
    animation: bgAnim 90s linear infinite;
}

@-webkit-keyframes bgAnim {
    0%{background-position:50% 0%}
    50%{background-position:50% 100%}
    100%{background-position:50% 0%}
}
@-moz-keyframes bgAnim {
    0%{background-position:50% 0%}
    50%{background-position:50% 100%}
    100%{background-position:50% 0%}
}
@-o-keyframes bgAnim {
    0%{background-position:50% 0%}
    50%{background-position:50% 100%}
    100%{background-position:50% 0%}
}
@keyframes bgAnim {
    0%{background-position:50% 0%}
    50%{background-position:50% 100%}
    100%{background-position:50% 0%}
}

.h-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.block {
  position: relative;
  height: 100vh;
}

.block-1 {
  background: linear-gradient(270deg, #c04848, #480048);
    background-size: 400% 400%;

    -webkit-animation: block1 14s ease infinite;
    -moz-animation: block1 14s ease infinite;
    -o-animation: block1 14s ease infinite;
    animation: block1 14s ease infinite;
}

@-webkit-keyframes block1 {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes block1 {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-o-keyframes block1 {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes block1 {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

.block-2 {
  background: linear-gradient(113deg, #69d2e7, #a7dbd8, #e0e4cc, #f38630, #fa6900);
    background-size: 1000% 1000%;

    -webkit-animation: AnimationName 17s ease infinite;
    -moz-animation: AnimationName 17s ease infinite;
    -o-animation: AnimationName 17s ease infinite;
    animation: AnimationName 17s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 35%}
    50%{background-position:100% 66%}
    100%{background-position:0% 35%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 35%}
    50%{background-position:100% 66%}
    100%{background-position:0% 35%}
}
@-o-keyframes AnimationName {
    0%{background-position:0% 35%}
    50%{background-position:100% 66%}
    100%{background-position:0% 35%}
}
@keyframes AnimationName {
    0%{background-position:0% 35%}
    50%{background-position:100% 66%}
    100%{background-position:0% 35%}
}
</style>