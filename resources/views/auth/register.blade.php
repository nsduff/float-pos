@extends('layout.main')
@section('content')





    <section class="vh-100 bg-image" style="background-image: url('https://mdbootstrap.com/img/Photos/new-templates/search-box/img4.jpg');">
        <div class="vh-100 mask d-flex align-items-center  gradient-custom-3">
            <div class="container h-100">
{{--                <div class="row d-flex justify-content-center align-items-center h-100">--}}
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-5 ">
                        <div style="border-radius: 15px;">
                            <div class="card-body p-4 h-50">
                                <h2 class="text-uppercase text-center mb-5 ">Create an account</h2>

                                @foreach ($errors->all() as $error)

                                    <div class="errors-messegas">{{ $error }}</div>

                                @endforeach

                                <form class ='needs-validation' action="{{ route('register') }}" method="post">
                                    @csrf
                                    <div class="form-outline mb-3">
                                        <label class="form-label" for="form3Example1cg">Your Name</label>
                                        <input type="text" name="name"  id="form3Example1cg" class="form-control form-control-lg" value="{{ old('name') }}" required />

                                    </div>

                                    <div class="form-outline mb-3">
                                        <label class="form-label" for="form3Example3cg">Your Email</label>
                                        <input type="email" name="email" id="form3Example3cg" class="form-control form-control-lg shadow" value="{{ old('email') }}" required/>

                                    </div>


                                    <div class="form-outline mb-3">
                                        <label class="form-label" for="form3Example4cg">Password</label>
                                        <input type="password" name="password" id="form3Example4cg" class="form-control form-control-lg" value="" required/>

                                    </div>


                                    <div class="form-outline mb-3 ">
                                        <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                                        <input type="password" name="password_confirmation"  id="form3Example4cdg" class="form-control form-control-lg" value="" required/>
                                        <div class="invalid-tooltip">
                                            Please provide a valid zip.
                                        </div>
                                    </div>


                                    <div class="d-flex justify-content-center">
                                        <button class="btn btn-success btn-block btn-lg gradient-custom-4 text-body shadow border-0">Register</button>

                                    </div>


                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>





@endsection

{{--@foreach ($errors->all() as $error)--}}
{{--    <div class="error">{{ $error }}</div>--}}
{{--@endforeach--}}
{{--<form action="{{ route('register') }}" method="post">--}}
{{--    @csrf--}}
{{--    <a href="/">Back</a>--}}
{{--    <label>Name</label>--}}
{{--    <input type="text" name="name" value="{{ old('name') }}">--}}
{{--    <label>Email</label>--}}
{{--    <input type="email" name="email" value="{{ old('email') }}">--}}
{{--    <label>Password</label>--}}
{{--    <input type="password" name="password" value="">--}}
{{--    <label>Confirm Password</label>--}}
{{--    <input type="password" name="password_confirmation" value="">--}}
{{--    <button>Register</button>--}}
{{--</form>--}}
