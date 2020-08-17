<template>
  <div class="navbar">
    <div class="nav-left">
        <slot name="nav-left"></slot>
    </div>
    <div class="nav-middle">
        <slot name="nav-middle"></slot>
    </div>
    <div class="nav-right">
        <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Navbar',
}
</script>
<style scoped>
	.navbar {
		height: 44px;
		line-height: 44px;
		display: flex;
		text-align: center;
  }
  .nav-left {
		width: 70px;
	}
	.nav-middle {
		flex: 1;
	}
	.nav-right {
		width: 70px;
	}
</style>