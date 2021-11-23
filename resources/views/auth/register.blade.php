@extends('layout.main')
@section('content')
    <div class="conteiner-login">
        <section class="vh-100 w-100 bg-image background_img" >
            <div class="mask d-flex align-items-center h-100 gradient-background">
                <div class="form-signin">
                    <img  class="img-fluid" src="{{ asset('/img/slice.png') }}" alt="logo">

                    @foreach ($errors->all() as $error)
                        <div class="errors-messagesas">{{ $error }}</div>
                    @endforeach

                    <form class ='needs-validation' action="{{ route('register') }}" method="post">
                        @csrf

                        <div class="form-floating">
                            <input type="text" name="name"  id="floatingInputname" class="form-control form-control-lg" value="{{ old('name') }}" placeholder="Your Name" required />
                            <label class="form-label form-form" for="floatingInputname">Your Name</label>
                        </div>

                        <div class="form-floating">
                            <input type="email" name="email" id="floatingInputEmail" class="form-control form-control-lg shadow" value="{{ old('email') }}" placeholder="Yor Email" required/>
                            <label class="form-label " for="floatingInputEmail">Your Email</label>
                        </div>

                        <div class="form-floating">
                            <input type="password" name="password" id="floatingInputPass" class="form-control form-control-lg" value="" placeholder="Password" required/>
                            <label class="form-label" for="floatingInputPass">Password</label>
                        </div>

                        <div class="form-floating">
                            <input type="password" name="password_confirmation"  id="floatingInputConfPass" class="form-control form-control-lg" value="" placeholder="Repeat your password" required/>
                            <label class="form-label" for="floatingInputConfPass">Repeat your password</label>
                        </div>


                        <div class="d-flex justify-content-center">
                            <button class=" w-100 btn btn-lg gradient-button text-body shadow border-0">Register</button>
                        </div>
                        <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/" class="fw-bold text-body"><u>Login here</u></a></p>

                    </form>

                </div>

            </div>
        </section>

    </div>

@endsection
