<template>

    <div class="container error404">

        <div  class="error">
            <p class="p">4</p>
            <span class="dracula">
			<div class="con">
				<div class="hair"></div>
				<div class="hair-r"></div>
				<div class="head"></div>
    		<div class="eye"></div>
    		<div class="eye eye-r"></div>
  			<div class="mouth"></div>
  			<div class="blod"></div>
  			<div class="blod blod2"></div>
			</div>
		</span>
            <p class="p">4</p>

            <div class="page-ms">
                <p class="page-msg"> Oops, the page you're looking for Disappeared </p>
                <router-link  to="/">
                    <button class="go-back">Go Back</button>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
    import './404.scss'
    export default {

      methods: {
      }
    }
</script>
