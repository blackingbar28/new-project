<template>
<div>
    <top_side_bar></top_side_bar>
    <main_content category="all"></main_content>
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

      head: {
        // To use "this" in the component, it is necessary to return the object through a function
        title: function () {
          return {
            inner: 'ONE-XX.DE - Deutsche Porno, Gratis Porno, deutschsex',
            separator: ' ', // Leave empty separator
            complement: ' ' // Leave empty complement
          }
        },
        meta: [
          { name: 'description', content: 'ONE-XX.DE – Schaue deutsche porno online auf deinem Desktop oder Mobilgeräten!' }
        ],
        link: [
          { rel: 'canonical', href: 'http://one-xx.de'}
        ]
      }
    }

</script>