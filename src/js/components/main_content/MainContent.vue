<template>
<div class="container">
    <div class="film-wrapper">
        <div class="list-films">
            <div class="item">
                <div class="bg">
                </div>
                <div class="details">
                    <span class="name">Nhung ke song sot</span>
                    <span class="length">21:00</span>
                </div>
            </div>
            <div class="item">
                <img src="http://2sao.vietnamnetjsc.vn/images/2017/09/03/06/48/hot-girl-7.jpg" class="film-img"/>
            </div>
            <div class="item">
                <img src="http://2sao.vietnamnetjsc.vn/images/2017/09/03/06/48/hot-girl-7.jpg" class="film-img"/>
            </div>
            <div class="item">
                <img src="http://2sao.vietnamnetjsc.vn/images/2017/09/03/06/48/hot-girl-7.jpg" class="film-img"/>
            </div>
            <div class="item">
                <img src="http://2sao.vietnamnetjsc.vn/images/2017/09/03/06/48/hot-girl-7.jpg" class="film-img"/>
            </div>
            <div class="item">
                <img src="http://2sao.vietnamnetjsc.vn/images/2017/09/03/06/48/hot-girl-7.jpg" class="film-img"/>
            </div>
            <div class="item">
                <img src="http://2sao.vietnamnetjsc.vn/images/2017/09/03/06/48/hot-girl-7.jpg" class="film-img"/>
            </div>
            <div class="item">
                <img src="http://2sao.vietnamnetjsc.vn/images/2017/09/03/06/48/hot-girl-7.jpg" class="film-img"/>
            </div>
            <div class="item">
                <img src="http://2sao.vietnamnetjsc.vn/images/2017/09/03/06/48/hot-girl-7.jpg" class="film-img"/>
            </div>
        </div>
        <div class="trending">
asd
        </div>
    </div>
</div>
</template>

<script>
   export default {

   }

</script>

<style>
    .film-wrapper {
        display: flex;
    }
    .list-films {
        flex-basis: 80%;
        display: flex;
        flex-wrap: wrap;
    }
    .list-films > .item {
        height: 275px;
        width: 50%;
        margin-bottom: 10px;
        margin-top: 10px;
        padding: 10px;
    }
    .list-films > .item > .bg {
        width: 100%;
        height: 90%;
        background: url(http://image.phimmoi.net/film/6872/poster.thumb.jpg);
        background-size: cover;
    }
    .item > .film-img {
        width: 100%;
        height: 90%;
    }
    .list-films > .item > .details {
        height: 10%;
        display: flex;
        align-items: center;
    }
    .list-films > .item > .details > .name {
        font-weight: 600;
        font-size: 25px;
    }
    .list-films > .item > .details > .length {
        margin-left: 10px;
    }
    .trending {
        flex-basis: 20%;
    }

</style>