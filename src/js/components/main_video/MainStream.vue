<template>
<div>
    <div class="video-player-wrap">
        <div class="video-player">
            <div id="laracasts-video" class="container" data-vimeo-initialized="true"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/267261283?speed=1&amp;color=00b1b3&amp;autoplay=1&amp;app_id=122963" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" title="1-Piece-By-Piece-Structure-Resets-and-Flexbox" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" data-ready="true"></iframe></div></div>
        </div>
    </div>
    <div class="match-details">
        <div class="container">
            <div class="match">
                <div class="logo">
                    <img src="http://www.bongdatructuyen.us/uploads/team/FC_Basel_1318340839_1329370339.png" alt="" class="img-responsive">
                </div>
                <div class="logo">
                    <img src="http://www.bongdatructuyen.us/uploads/team/Feyenoord_1343100051.png" alt="" class="img-responsive">
                </div>
                <div class="details">
                    <span class="text-bold">Giao huu quoc te</span>
                    <span class="text-bold">Basel - Anh</span>
                    <span class="text-bold">01 : 00</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {

    }
</script>

<style>
    .video-player-wrap {
        background: #000;
    }
    .match-details {
        padding-top: 10px;
        padding-bottom: 10px;
        background: #4d545d;
        color: #fff;
    }
    .match {
        display: flex;
        justify-content: center;
    }
    .match > .logo {
        padding-right: 10px;
    }
    .match > .logo > img {
        width: 40px;
        height: 40px;
    }
    .details {
        display: flex;
        flex-direction: column;
        margin-left: 25px;
    }
</style>