<template>
<div>
    <top_side_bar></top_side_bar>
    <main_video></main_video>
</div>

</template>

<script>
    import TopSideBar from '../top_side_bar/TopSideBar';
    import MainVideo from  '../main_video/MainStream';

    export default {

      components: {
        top_side_bar: TopSideBar,
        main_video: MainVideo
      },
      mounted() {
        console.log(123);
      }
    }

</script>