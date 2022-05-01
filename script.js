const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
option = ['all' ];
const target = document.querySelector('.icon-container');
const select = document.querySelector('select')

document.addEventListener("DOMContentLoaded", function() {
	optionGenerator(icons);
	console.log(option);
	for (let i = 0; i < option.length; i++) {
		const element = option[i];
		tLiteralOption = `<option value="${element}">${capitalizeFirstLetter(element)}</option>`;
		select.innerHTML += tLiteralOption;
		
	}
	iconPrinter(icons, select.value);
});
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
  }

select.addEventListener('change',function(){
  console.log(select.value);
  target.innerHTML = '';
  iconPrinter(icons, select.value);
})

function iconPrinter(array, option){
  array.forEach(element => {
	
    const tLiteral = `
    <div class="col">
      <div class="card my-3 pt-4 justify-content-center align-content-center" >
		<i id="iconID" style="color: ${colorGenerator()};" class="${element.prefix}solid ${element.prefix}${element.name} text-center c-${element.color}"></i>        
        <div class="card-body">
          <h3 class="card-title text-center">${element.name.toUpperCase()}</h3>          
        </div>
      </div>
    </div>`;

    if(option == 'all'){
      target.innerHTML += tLiteral;

    }else if(option == element.type){
      target.innerHTML += tLiteral;
    }
  })
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function colorGenerator(){
	let generatedColor ='#';
	while(generatedColor.length < 7){
		switch (getRndInteger(1,16)) {
			case 1:
				generatedColor += '0';
				
				break;
			case 2:
				generatedColor += '1';
				break;
			case 3:
				generatedColor += '2';
				break;
			case 4:
				generatedColor += '3';
				break;
			case 5:
				generatedColor += '4';
				break;
			
			case 6:
				generatedColor += '5';
				break;
			
			case 7:
				generatedColor += '6';
				break;
			
			case 8:
				generatedColor += '7';
				break;
			
			case 9:
				generatedColor += '8';
				break;
			
			case 10:
				generatedColor += '9';
				break;
			
			case 11:
				generatedColor += 'A';
				break;
			
			case 12:
				generatedColor += 'B';
				break;
			
			case 13:
				generatedColor += 'C';
				break;
			
			case 14:
				generatedColor += 'D';
				break;
			
			case 15:
				generatedColor += 'E';
				break;
			
			case 16:
				generatedColor += 'F';
				break;
			
		

		}
	}
	return generatedColor
}


function optionGenerator(array){
	array.forEach(element => {
		if(!(option.includes(element.type))){
			option.push(element.type)
		}
	});
}

