<template>
    <div class="fill-contain background-pic">

    </div>
</template>

<script>
export default {
  name: 'entryPage'
}
</script>

<style lang="less" scoped>
  @import "../style/common";

  @media screen and (max-width: 400px) {
    .background-pic {
      .background-img("../assets/img/entryPage/background/min-400.jpg")
    }
  }

  @media screen and (min-width: 400px) and (max-width: 750px) {
    .background-pic {
      .background-img("../assets/img/entryPage/background/400-750.jpg")
    }
  }

  @media screen and (min-width: 750px) and (max-width: 1200px) {
    .background-pic {
      .background-img("../assets/img/entryPage/background/750-1200.jpg")
    }
  }

  @media screen and (min-width: 1200px){
    .background-pic {
      .background-img("../assets/img/entryPage/background/1200-max.jpg")
    }
  }
</style>
