@foreach($users as $user)
    <div>Hi, {{$user->name}}</div>
@endforeach

<h3>menu</h3>
<ul>
@foreach($items as $item)
<li>{{$item->name}}</li>
@endforeach
</ul>