<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <! — csrf token →
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Your Website Title</title>
    <! — styles →
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDz0DiCpoEtBSOCzpqmv_LNACn2GsW7EhY">
    </script>
</head>
<body>
<div id="root"></div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
