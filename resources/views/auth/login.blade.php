<form action="{{ route('login') }}" method="post">

    @csrf

    <label>Email</label>
    <input type="email" name="email" value="{{ old('email') }}">

    <label>Password</label>

    <input type="password" name="password" value="">

    <button>Login</button>

    <a href="/register">Register</a>
</form>