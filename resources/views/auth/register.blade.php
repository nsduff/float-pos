@foreach ($errors->all() as $error)

    <div class="error">{{ $error }}</div>

@endforeach

 

<form action="{{ route('register') }}" method="post">

    @csrf

    <a href="/">Back</a>


    <input type="text" name="name" value="{{ old('name') }}">

 

    <input type="email" name="email" value="{{ old('email') }}">

 

    <input type="password" name="password" value="">

 

    <input type="password" name="password_confirmation" value="">

 

    <button>Register</button>

 

</form>