//Navbar
function topNav(){
    var display = document.getElementById("Dropdown");
    if(display.className === "ul-lista"){
        display.className += " responsive";
    }
    else{
        display.className = "ul-lista";
    }
}

//Circle library
function shuffle(o) { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

var colors = [
        ['#D3B6C6', '#4B253A'],
        ['#FCE6A4', '#EFB917'],
        ['#BEE3F7', '#45AEEA'],
        ['#F8F9B6', '#D2D558']
    ],
    circles = [];

// For each insight made one
var child = document.getElementById('circles-' + 1),
            percentage = 80;
        document.getElementById("percent").innerHTML = "Estudiantes ingresados " + percentage + "%";
        circles.push(Circles.create({
            id: child.id,
            value: percentage,
            radius: 80,
            width: 10,
            colors: colors[1 - 1]
        }));
        //2
        var child = document.getElementById('circles-' + 2),
            percentage = 75;
        document.getElementById("percent1").innerHTML = "Directores ingresados " + percentage + "%";
        circles.push(Circles.create({
            id: child.id,
            value: percentage,
            radius: 80,
            width: 10,
            colors: colors[2 - 1]
        }));
        //3
        var child = document.getElementById('circles-' + 3),
            percentage = 70;
        document.getElementById("percent2").innerHTML = "Jurados ingresados " + percentage + "%";
        circles.push(Circles.create({
            id: child.id,
            value: percentage,
            radius: 80,
            width: 10,
            colors: colors[3 - 1]
        }));
        //4
        var child = document.getElementById('circles-' + 4),
            percentage = 50;
        document.getElementById("percent3").innerHTML = "Total de visitas " + percentage + "%";
        circles.push(Circles.create({
            id: child.id,
            value: percentage,
            radius: 80,
            width: 10,
            colors: colors[4 - 1]
        }));

$(window).resize(function () {
    if ($(window).width() <= 404) {
        //1
        var child = document.getElementById('circles-' + 1),
            percentage = 80;
        document.getElementById("percent").innerHTML = "Estudiantes ingresados " + percentage + "%";
        circles.push(Circles.create({
            id: child.id,
            value: percentage,
            radius: 40,
            width: 10,
            colors: colors[1 - 1]
        }));
        //2
        var child = document.getElementById('circles-' + 2),
            percentage = 75;
        document.getElementById("percent1").innerHTML = "Directores ingresados " + percentage + "%";
        circles.push(Circles.create({
            id: child.id,
            value: percentage,
            radius: 40,
            width: 10,
            colors: colors[2 - 1]
        }));
        //3
        var child = document.getElementById('circles-' + 3),
            percentage = 70;
        document.getElementById("percent2").innerHTML = "Jurados ingresados " + percentage + "%";
        circles.push(Circles.create({
            id: child.id,
            value: percentage,
            radius: 40,
            width: 10,
            colors: colors[3 - 1]
        }));
        //4
        var child = document.getElementById('circles-' + 4),
            percentage = 50;
        document.getElementById("percent3").innerHTML = "Total de visitas " + percentage + "%";
        circles.push(Circles.create({
            id: child.id,
            value: percentage,
            radius: 40,
            width: 10,
            colors: colors[4 - 1]
        }));

    } else {
        //1
        var child = document.getElementById('circles-' + 1),
            percentage = 80;
        document.getElementById("percent").innerHTML = "Estudiantes ingresados " + percentage + "%";
        circles.push(Circles.create({
            id: child.id,
            value: percentage,
            radius: 80,
            width: 10,
            colors: colors[1 - 1]
        }));
        //2
        var child = document.getElementById('circles-' + 2),
            percentage = 75;
        document.getElementById("percent1").innerHTML = "Directores ingresados " + percentage + "%";
        circles.push(Circles.create({
            id: child.id,
            value: percentage,
            radius: 80,
            width: 10,
            colors: colors[2 - 1]
        }));
        //3
        var child = document.getElementById('circles-' + 3),
            percentage = 70;
        document.getElementById("percent2").innerHTML = "Jurados ingresados " + percentage + "%";
        circles.push(Circles.create({
            id: child.id,
            value: percentage,
            radius: 80,
            width: 10,
            colors: colors[3 - 1]
        }));
        //4
        var child = document.getElementById('circles-' + 4),
            percentage = 50;
        document.getElementById("percent3").innerHTML = "Total de visitas " + percentage + "%";
        circles.push(Circles.create({
            id: child.id,
            value: percentage,
            radius: 80,
            width: 10,
            colors: colors[4 - 1]
        }));
    }
});

/*for (var i = 1; i <= 4; i++) {
    var child = document.getElementById('circles-' + i),
        percentage = 3.42 + (i * 9.84);

    circles.push(Circles.create({
        id:         child.id,
        value:		percentage,
        radius:     60,
        width:      10,
        colors:     colors[i - 1]
    }));
}*/


//Contact
console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

