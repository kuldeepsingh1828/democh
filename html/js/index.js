// //READ AN ELEMENTS
// //queryselector
// var elements = document.querySelectorAll('font');
// // console.log(elements);
// elements.forEach((element, i) => {
//     console.log('FONT ELEMENT : ' + (i + 1))
//     console.log(element.innerText)
//     console.log(element.innerHTML)
//     console.log(element.id)
//     console.log(element.classList)
//     console.log(element.className)
//     console.log(element.value)
//     console.log(element.style.color)
//     console.log(element.style.backgroundColor)
// });

// //cREATE AN ELEMENT -- FONT

// var font = document.createElement('font');
// // console.log(font);
// font.innerText = 'Garima and Chachal in JS CreateElement';
// // console.log(font);
// //<font>Garima and Chachal in JS CreateElement</font>
// font.id = "font3";
// // font.className="font3"
// font.style.color = 'chocolate';
// font.style.backgroundColor = 'darkblue';
// document.body.appendChild(font);

// //CRUD -- CREATE READ UPDATE DELETE
// var btn = document.querySelector('button');
// btn.addEventListener('event', function () {
//     var img = document.querySelector('img');
//     var src = img.src;
//     if (src == 'https://pixsector.com/cache/0688783e/avbf566659ab2bdf82f87.png') {
//         src = 'https://cdn1.vectorstock.com/i/1000x1000/72/85/up-arrow-icon-vector-10877285.jpg';
//     } else {
//         src = 'https://pixsector.com/cache/0688783e/avbf566659ab2bdf82f87.png'
//     }
//     img.src = src;
// });

// var checkbox = document.querySelector('input[type="checkbox"]');
// var password = document.querySelector('input[type="password"]');
// var span = document.querySelector('span');
// var btn = document.querySelector('button');
// // console.log(checkbox.type)
// checkbox.addEventListener('click', function () {
//     var type = 'text';
//     var spantext = 'hide password';
//     if (!checkbox.checked) {
//         type = 'password';
//         var spantext = 'show password';
//     }
//     password.type = type;
//     span.innerText = spantext;
// });

// btn.addEventListener('click', function () {
//     password.value = '';
//     password.type = 'password';
//     span.innerText = 'show password';
//     checkbox.checked = false;
// })
// var btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//     var para = document.querySelector('p');
//     if (para != null) para.remove();
//     // alert('here we are')
// })

//event bubbling and event capturing
// const divs = document.querySelectorAll('div');
// var eventc = true;
// divs.forEach(div => {
//     eventc = !eventc;
//     div.addEventListener('click', function (e) {
//         console.log(this.classList[0])
//     }, eventc)
// });

//gp -- true -- bubbling


// parent false -- capturing

// child -true -- bubbling



/* JQUERY START*/
// $(selector).method(callback);
$(document).ready(function () {
    // $('button').click(function () {
    //     var html = $(this).text();
    //     alert('button clicked ' + html);
    // });

    // $('input').keyup(function () {
    //     // var data = ; //INPUT 
    //     $('#copy').val($('#org').val());
    // });

    // $('table').hide();
    // $('table').show(3000);

    // $('table').fadeOut(1000);
    // $('table').fadeIn(1000);
    
    $('p').slideUp(1000);
    $('p').slideDown(1000);
    
    $('td').click(function () {
        // alert($(this).text())
        var siblings = $(this).siblings("");
        alert($(siblings[1]).text())
    });
});
/*JQUERY END*/
