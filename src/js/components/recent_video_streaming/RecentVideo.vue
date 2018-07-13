<template>
<div class="box-streaming">
    <div class="recent-bar">
        <div class="container">
            <h4 class="recent-title">Recent matches</h4>
        </div>
    </div>
    <div class="container">
        <ul class="list-stream">
            <li class="stream-item">
                <div class="stream-index">
                    <div class="logo">
                        <img src="http://www.bongdatructuyen.us/uploads/team/FC_Basel_1318340839_1329370339.png" alt="" class="img-responsive">
                    </div>
                    <div class="logo">
                        <img src="http://www.bongdatructuyen.us/uploads/team/Feyenoord_1343100051.png" alt="" class="img-responsive">
                    </div>
                </div>
                <div class="stream-details">
                    <div class="meta">01:00 18-12</div>
                    <div class="title text-bold">Basic Financial Literacy — Currently Playing</div>
                    <div class="description">In the United States (and surely many other countries), financial literacy is not taught in schools. </div>
                </div>
            </li>
            <li class="stream-item">
                <div class="stream-index">
                    <div class="logo">
                        <img src="http://www.bongdatructuyen.us/uploads/team/olympique_de_marseille_1320031221_1329371510.png" alt="" class="img-responsive">
                    </div>
                    <div class="logo">
                        <img src="http://www.bongdatructuyen.us/uploads/team/AS_Saint_Etienne_1357105842.png" alt="" class="img-responsive">
                    </div>
                </div>
                <div class="stream-details">
                    <div class="meta">01:00 18-12</div>
                    <div class="title text-bold">Basic Financial Literacy — Currently Playing</div>
                    <div class="description">In the United States (and surely many other countries), financial literacy is not taught in schools. </div>
                </div>
            </li>
            <li class="stream-item">
                <div class="stream-index">
                    <div class="logo">
                        <img src="http://www.bongdatructuyen.us/uploads/team/ajax_large_1317140087_1329240165.png" alt="" class="img-responsive">
                    </div>
                    <div class="logo">
                        <img src="http://www.bongdatructuyen.us/uploads/team/RSC_Anderlecht_1329372239.png" alt="" class="img-responsive">
                    </div>
                </div>
                <div class="stream-details">
                    <div class="meta">01:00 18-12</div>
                    <div class="title text-bold">Basic Financial Literacy — Currently Playing</div>
                    <div class="description">In the United States (and surely many other countries), financial literacy is not taught in schools. </div>
                </div>
            </li>
            <li class="stream-item">
                <div class="stream-index">
                    <div class="logo">
                        <img src="http://www.bongdatructuyen.us/uploads/team/FC_Basel_1318340839_1329370339.png" alt="" class="img-responsive">
                    </div>
                    <div class="logo">
                        <img src="http://www.bongdatructuyen.us/uploads/team/Inter_Milan_1317398559_1329240325.png" alt="" class="img-responsive">
                    </div>
                </div>
                <div class="stream-details">
                    <div class="meta">01:00 18-12</div>
                    <div class="title text-bold">Basic Financial Literacy — Currently Playing</div>
                    <div class="description">In the United States (and surely many other countries), financial literacy is not taught in schools. </div>
                </div>
            </li>
            <li class="stream-item">
                <div class="stream-index">
                    <div class="logo">
                        <img src="http://www.bongdatructuyen.us/images/nologo.png" alt="" class="img-responsive">
                    </div>
                    <div class="logo">
                        <img src="http://www.bongdatructuyen.us/uploads/team/Inter_Milan_1317398559_1329240325.png" alt="" class="img-responsive">
                    </div>
                </div>
                <div class="stream-details">
                    <div class="meta">01:00 18-12</div>
                    <div class="title text-bold">Basic Financial Literacy — Currently Playing</div>
                    <div class="description">In the United States (and surely many other countries), financial literacy is not taught in schools. </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    export default {

    }
</script>

<style>
    .box-streaming {
    }
    .recent-bar {
        border-bottom: 1px solid #efefef;
        padding-top: 25px;
        padding-bottom: 25px;
        position: relative;
        z-index: 30;
        background: #fff;
    }
    .recent-title {
        font-weight: 600;
    }
    .list-stream {
        border: 1px solid #eee;
        background: #fff;
        list-style: none;
        padding: 0;
    }
    .list-stream > .stream-item {
        display: flex;
        padding: 25px;
        border-bottom: 1px solid #eee;
    }
    .list-stream > .stream-item > .logo {
        height: 90px;
        width: 90px;
    }
    .list-stream > .stream-item > .logo > img {
        height: 90px;
        width: 90px;
    }
    .list-stream > .stream-item > .stream-index {
        display: flex;
        align-items: center;
        flex-basis: 200px;
        justify-content: center;
    }
    .list-stream > .stream-item > .stream-details {
        padding-left: 20px;
    }
    .list-stream > .stream-item > .stream-details > .meta {
        color: #00b1b3;
    }
    .list-stream > .stream-item > .stream-details > .title {
        font-size: 24px;
    }
    .list-stream > .stream-item > .stream-details > .description {

    }
</style>