@extends('layout.main')
@section('content')
    <div class="conteiner-login">
        <section class="vh-100 w-100 bg-image background_img" >
                <div class="form-signin">
                    <img  class="img-fluid mt-5" src="{{ asset('/img/sliceLogOut.png') }}" alt="logo">

                    <form action="{{ route('logout') }}" method="post">

                        @csrf

                        <button class=" w-100 btn btn-lg gradient-button text-body shadow border-0">Logout</button>
                        <p class="text-center  mt-4 mb-0">Come back to enjoy our Float POS.</p>
                    </form>
                </div>

        </section>

    </div>



@endsection

