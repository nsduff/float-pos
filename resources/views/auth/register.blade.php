@extends('layout.main')
@section('content')



@foreach ($errors->all() as $error)

    <div class="error">{{ $error }}</div>

@endforeach



<form action="{{ route('register') }}" method="post">

    @csrf

    <a href="/">Back</a>

    <label>Name</label>
    <input type="text" name="name" value="{{ old('name') }}">


    <label>Email</label>
    <input type="email" name="email" value="{{ old('email') }}">


    <label>Password</label>
    <input type="password" name="password" value="">


    <label>Confirm Password</label>
    <input type="password" name="password_confirmation" value="">



    <button>Register</button>



</form>

@endsection
