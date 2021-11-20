<div>
    <h1>Logout?</h1>
<form action="{{ route('logout') }}" method="post">

    @csrf

    <button>Logout</button>

</form>
</div>