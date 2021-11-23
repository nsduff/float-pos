@extends('layout.main')
@section('content')

    <div class="conteiner-login">
        <section class="vh-100 w-100 bg-image background_img" >
            <div class="mask d-flex align-items-center h-100 gradient-background">
                <div class="form-signin">
                    <img class="img-fluid" src="{{ asset('/img/slice.png') }}" alt="logo">
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

                            <button class=" w-100 btn btn-lg gradient-button text-body shadow border-0" type="submit">Login</button>
                            <p class="text-center text-muted mt-5 mb-0">Haven't got account? <a href="/register" class="fw-bold text-body"><u>SignUp here</u></a></p>

                        </form>

                </div>

            </div>
        </section>

    </div>

@endsection
