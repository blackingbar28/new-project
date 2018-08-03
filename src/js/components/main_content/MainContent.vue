<template>
<div>
<div class="container">
    <div class="box-movie">
        <div class="movie-wrapper">
            <div class="movie-card">
                <div class="movie-header manOfSteel">
                    <div class="header-icon-container">
                        <a href="#">
                            <i class="material-icons header-icon"></i>
                        </a>
                    </div>
                    <div class="hd-logo">

                    </div>
                </div><!--movie-header-->
                <div class="movie-content">
                    <div class="movie-content-header">
                        <a href="#">
                            <h3 class="movie-title">Man of Steel</h3>
                        </a>
                    </div>
                    <div class="movie-info">
                        <div class="info-section">
                            <label>Date & Time</label>
                            <span>Sun 8 Sept - 10:00PM</span>
                        </div><!--date,time-->
                        <div class="info-section">
                            <label>Screen</label>
                            <span>03</span>
                        </div><!--screen-->
                        <div class="info-section">
                            <label>Row</label>
                            <span>F</span>
                        </div><!--row-->
                        <div class="info-section">
                            <label>Seat</label>
                            <span>21,22</span>
                        </div><!--seat-->
                    </div>
                </div><!--movie-content-->
            </div><!--movie-card-->

            <div class="movie-card">
                <div class="movie-header manOfSteel">
                    <div class="header-icon-container">
                        <a href="#">
                            <i class="material-icons header-icon"></i>
                        </a>
                    </div>
                    <div class="hd-logo">

                    </div>
                </div><!--movie-header-->
                <div class="movie-content">
                    <div class="movie-content-header">
                        <a href="#">
                            <h3 class="movie-title">Man of Steel</h3>
                        </a>
                    </div>
                    <div class="movie-info">
                        <div class="info-section">
                            <label>Date & Time</label>
                            <span>Sun 8 Sept - 10:00PM</span>
                        </div><!--date,time-->
                        <div class="info-section">
                            <label>Screen</label>
                            <span>03</span>
                        </div><!--screen-->
                        <div class="info-section">
                            <label>Row</label>
                            <span>F</span>
                        </div><!--row-->
                        <div class="info-section">
                            <label>Seat</label>
                            <span>21,22</span>
                        </div><!--seat-->
                    </div>
                </div><!--movie-content-->
            </div><!--movie-card-->


            <div class="movie-card">
                <div class="movie-header manOfSteel">
                    <div class="header-icon-container">
                        <a href="#">
                            <i class="material-icons header-icon"></i>
                        </a>
                    </div>
                    <div class="hd-logo">

                    </div>
                </div><!--movie-header-->
                <div class="movie-content">
                    <div class="movie-content-header">
                        <a href="#">
                            <h3 class="movie-title">Man of Steel</h3>
                        </a>
                    </div>
                    <div class="movie-info">
                        <div class="info-section">
                            <label>Date & Time</label>
                            <span>Sun 8 Sept - 10:00PM</span>
                        </div><!--date,time-->
                        <div class="info-section">
                            <label>Screen</label>
                            <span>03</span>
                        </div><!--screen-->
                        <div class="info-section">
                            <label>Row</label>
                            <span>F</span>
                        </div><!--row-->
                        <div class="info-section">
                            <label>Seat</label>
                            <span>21,22</span>
                        </div><!--seat-->
                    </div>
                </div><!--movie-content-->
            </div><!--movie-card-->

            <div class="movie-card">
                <div class="movie-header manOfSteel">
                    <div class="header-icon-container">
                        <a href="#">
                            <i class="material-icons header-icon"></i>
                        </a>
                    </div>
                    <div class="hd-logo">

                    </div>
                </div><!--movie-header-->
                <div class="movie-content">
                    <div class="movie-content-header">
                        <a href="#">
                            <h3 class="movie-title">Man of Steel</h3>
                        </a>
                    </div>
                    <div class="movie-info">
                        <div class="info-section">
                            <label>Date & Time</label>
                            <span>Sun 8 Sept - 10:00PM</span>
                        </div><!--date,time-->
                        <div class="info-section">
                            <label>Screen</label>
                            <span>03</span>
                        </div><!--screen-->
                        <div class="info-section">
                            <label>Row</label>
                            <span>F</span>
                        </div><!--row-->
                        <div class="info-section">
                            <label>Seat</label>
                            <span>21,22</span>
                        </div><!--seat-->
                    </div>
                </div><!--movie-content-->
            </div><!--movie-card-->
        </div>

        <div class="trending">

        </div>
    </div>

</div>
<recent></recent>
</div>
</template>

<script>
  import RecentVideo from '../recent_video_streaming/RecentVideo'

   export default {
    components: {
      recent: RecentVideo
    }
   }

</script>

<style>
    .box-movie {
        display: flex;
    }

    .movie-wrapper {
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
        justify-content: space-between;
    }
    .trending {
        /*flex-basis: 0%;*/
    }

    @media only screen and (max-width: 600px) {
        .box-movie {
            flex-direction: column;
        }
    }

    .movie-card {
        background: #ffffff;
        box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 30%;
        margin: 2em 0;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }

    .movie-header {
        padding: 0;
        margin: 0;
        height: 290px;
        width: 100%;
        display: flex;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        justify-content: center;
    }
    .manOfSteel {
        background: url("http://cdn.collider.com/wp-content/uploads/2017/05/blade-runner-2049-poster-ryan-gosling.jpeg  ");
        background-size: cover;
        background-position: 100% 80%;
    }

    .babyDriver {
        background: url("http://cdn.collider.com/wp-content/uploads/2017/03/the-dark-tower-poster.jpg");
        background-size: cover;
    }

    .theDarkTower {
        background: url("http://cdn.collider.com/wp-content/uploads/2017/03/the-dark-tower-poster.jpg");
        background-size: cover;
        background-position: 100% 100%;
    }

    .bladeRunner2049 {
        background: url("http://cdn.collider.com/wp-content/uploads/2017/05/blade-runner-2049-poster-ryan-gosling.jpeg");
        background-size: cover;
        background-position: 100% 80%;
    }

    .header-icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 100%;
    }

    .hd-logo {
        width: 10%;
        height: 30px;
        background: url("../../../img/video-hd-2-xxl.png");
        background-size: cover;
        align-items: self-end;
    }

    .header-icon {
        /*width: 100%;*/
        /*height: 290px;*/
        /*line-height: 367px;*/
        /*text-align: center;*/
        /*vertical-align: middle;*/
        /*margin: 0 auto;*/
        color: #ffffff;
        font-size: 54px;
        text-shadow: 0px 0px 20px #6abcea, 0px 5px 20px #6ABCEA;
        opacity: .85;
    }

    .header-icon:hover {
        font-size: 74px;
        text-shadow: 0px 0px 20px #6abcea, 0px 5px 30px #6ABCEA;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        opacity: 1;
    }

    .movie-card:hover {
        /*-webkit-transform: scale(1.03);*/
        /*transform: scale(1.03);*/
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
    }

    .movie-content {
        padding: 18px 18px 24px 18px;
        margin: 0;
    }

    .movie-content-header, .movie-info {
        display: table;
        width: 100%;
    }
    .movie-content-header > a {
        text-decoration: none;
    }
    .movie-content-header > a > h3 {
        color: red;
    }

    .movie-title {
        font-size: 24px;
        margin: 0;
        display: table-cell;
    }

    .imax-logo {
        width: 50px;
        height: 15px;
        background: url("https://6a25bbd04bd33b8a843e-9626a8b6c7858057941524bfdad5f5b0.ssl.cf5.rackcdn.com/media_kit/3e27ede823afbf139c57f1c78a03c870.jpg") no-repeat;
        background-size: contain;
        display: table-cell;
        float: right;
        position: relative;
        margin-top: 5px;
    }

    .movie-info {
        margin-top: 1em;
    }

    .info-section {
        display: table-cell;
        text-transform: uppercase;
        text-align: center;
    }

    .info-section:first-of-type {
        text-align: left;
    }

    .info-section:last-of-type {
        text-align: right;
    }

    .info-section label {
        display: block;
        color: rgba(0, 0, 0, 0.5);
        margin-bottom: .5em;
        font-size: 9px;
    }

    .info-section span {
        font-weight: 700;
        font-size: 11px;
    }

    @media screen and (max-width: 500px) {
        .movie-card {
            width: 95%;
            max-width: 95%;
            margin: 1em;
            display: block;
        }

        .container {
            padding: 0;
            margin: 0;
        }
    }
</style>