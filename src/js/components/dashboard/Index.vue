<template>
<div>
    <top_side_bar></top_side_bar>
    <main_content></main_content>
    <!--<list_streaming></list_streaming>-->
</div>

</template>

<script>
    import TopSideBar from '../top_side_bar/TopSideBar';
    import MainContent from  '../main_content/MainContent';
    import StreamingList from '../recent_video_streaming/RecentVideo';

    export default {

      components: {
        top_side_bar: TopSideBar,
        main_content: MainContent,
        list_streaming: StreamingList
      },
      mounted() {
        console.log(123);
      }
    }

</script>