<!doctype html>
<html lang="{{ app()->getLocale() }}" class="js-no-scroll">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Test ne</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <!-- Google Font -->
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

    <link rel="stylesheet" href="/libs/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
</head>
<body class="hold-transition skin-blue sidebar-mini sidebar-fixed">

    <div id="app">
        <router-view></router-view>
    </div>
<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
