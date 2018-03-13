
	var name, age, sex, education, mathematic, asu, cutting, programming; // обьявляем переменные которые понадобятся в ходе работы
		document.getElementById("startTest").addEventListener("click",test) // добавляем слушателя события click к элементу с id startTest
		function test(){ // Функция которая опрашивает пользователя
			name = prompt("Введите имя");
			age = prompt("Введите возраст");
			sex = prompt("Введите пол");
			education = confirm("У вас есть высше образование?");
			mathematic = confirm("Вы знаете математику?");
			asu = confirm("Вы знаете АСУ ТП?");
			cutting = confirm("Вы знаете теорию резания?");
			programming = confirm("Умеете программировать?");
			writeToPage();
		}
		function writeToPage(){ // функция которая записывает значение из наших переменных в элементы на странице
			/*
			document.getElementById("name") - возвращает элемент с id name
			document.getElementById("name").innerText - текст этого элемента
			У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
			document.getElementById("education").checked = education;
			*/
			document.getElementById("name").innerText = name; 
			document.getElementById("age").innerText = age;
			document.getElementById("sex").innerText = sex;
			document.getElementById("education").checked = education;
			document.getElementById("mathematic").checked = mathematic;
			document.getElementById("asu").checked = asu;
			document.getElementById("cutting").checked = cutting;
			document.getElementById("programming").checked = programming;
		}
		
		document.getElementById("check").addEventListener("click",check) 
		function check(){ // эта функция првоеряет подходит лт наш кандидат, в данном случае подходят кандидаты с возрастом старше 18 и высшим образованием
			if ( parseInt(document.getElementById("age").innerText) > 18 && document.getElementById("education").checked ==true ){
				alert("Вы приняты")
			}else{
				alert("Вы нам не подходите");
			}
		}


	