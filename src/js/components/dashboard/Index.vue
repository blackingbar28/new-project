<template>
<div>
    <top_side_bar></top_side_bar>
    <main_video></main_video>
    <list_streaming></list_streaming>
</div>

</template>

<script>
    import TopSideBar from '../top_side_bar/TopSideBar';
    import MainVideo from  '../main_video/MainStream';
    import StreamingList from '../recent_video_streaming/RecentVideo';

    export default {

      components: {
        top_side_bar: TopSideBar,
        main_video: MainVideo,
        list_streaming: StreamingList
      },
      mounted() {
        console.log(123);
      }
    }

</script>