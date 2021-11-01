<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
    <link href="./css/style.css" rel="stylesheet">
</head>
<body>
    {{-- Here's the button you push --}}
    <button class="create">Create Button</button>
    
    <script>
    // Here's the test to make sure it's working

    console.log("hi,guys");

    // And here's the code to make the element
    // It's bound to the class and "inner Text"
    // so we can reuse this code with whatever
    // innerText / interpolated variables we want

    const create = document.querySelector('.create');
    create.innerText = "Create Button";
    create.addEventListener('click', function() {
    const butt = document.createElement('button');
    butt.innerText = "Hi I'm new";
    butt.classList.add('new');
    document.body.appendChild(butt);
});

    </script>
</body>
</html>