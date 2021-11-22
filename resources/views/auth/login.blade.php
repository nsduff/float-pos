@extends('layout.main')
@section('content')

    <div class="conteiner-login">
        <section class="vh-100 w-100 bg-image " style="background-image: url('https://mdbootstrap.com/img/Photos/new-templates/search-box/img4.jpg');">
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="form-signin">
                    <img class="img-fluid" src="./img/slice.png">
                    <main class="">
                        <form action="{{ route('login') }}" method="post">

                            @csrf
                            <div class="form-floating">
                                <input type="email" name="email" value="{{ old('email') }}" class="form-control" id="floatingInput" placeholder="name@example.com" required>
                                <label for="floatingInput">Email address</label>
                            </div>

                            <div class="form-floating">
                                <input type="password"  name="password" value="" class="form-control" id="floatingPassword" placeholder="Password" required>
                                <label for="floatingPassword">Password</label>
                            </div>

                            <button class="  w-100 btn btn-success btn-block btn-lg gradient-custom-4 text-body shadow border-0" type="submit">Login</button>
                            <p class="text-center text-muted mt-5 mb-0">Haven't got account? <a href="/register" class="fw-bold text-body"><u>SignUp here</u></a></p>

                        </form>
                    </main>

                </div>

            </div>
        </section>

    </div>

@endsection
