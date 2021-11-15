<form action="{{ route('login') }}" method="post">

    @csrf

    <input type="email" name="email" value="{{ old('email') }}">

    <input type="password" name="password" value="">

    <button>Login</button>

    <a href="/register">Register</a>
</form>