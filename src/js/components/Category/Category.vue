<template>
    <div>
        <top_side_bar></top_side_bar>
        <main_content :category="category"></main_content>
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

    data() {
      return {
        category: this.$route.params.category
      }
    },

    head: {
      title: function () {
        return {
          inner: 'BELIEBTESTE PORNO KATEGORIEN',
          separator: ' ', // Leave empty separator
          complement: ' ' // Leave empty complement
        }
      },
      meta: [
        { name: 'description', content: 'gratis pornos on ONE-XX.DE - Amateure, Asia, teen, College, Lesben kategorien' }
      ],
      link: [
        { rel: 'canonical', href: 'http://one-xx.de/category' }
      ]
    }
  }

</script>