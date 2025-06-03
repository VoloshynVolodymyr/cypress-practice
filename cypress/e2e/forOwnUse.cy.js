// describe('Автоматичне заповнення Google Форми для списку студентів', () => {
// 	const correctAnswersRaw = [
// 	  'а','б','а','б','б','б','а','б','а','б',
// 	  'б','в','а','в','б','б','б','б','а','а',
// 	  'в','а','б','б','б','а','б','б','а','б'
// 	];
// 	const letterToIndex = { 'а': 0, 'б': 1, 'в': 2 };
  
// 	const scoreToCountMap = {
// 	  1: 2,
// 	  2: 5,
// 	  3: 8,
// 	  4: 11,
// 	  5: 14,
// 	  6: 17,
// 	  7: 19,
// 	  8: 22,
// 	  9: 25,
// 	  10: 27,
// 	  11: 30
// 	};
  
// 	const students = [
// 		{ name: 'Бригунець Ярослав', grade: 6 },
// 		{ name: 'Гришило Олександр', grade: 3 },
// 		{ name: 'Дригола Ілля', grade: 8 },
// 		{ name: 'Євдокимов Володимир', grade: 7 },
// 		{ name: 'Завгородній Михайло', grade: 3 },
// 		{ name: 'Заворотюк Єгор', grade: 5 },
// 		{ name: 'Зек Ярослав', grade: 6 },
// 		{ name: 'Їжак Арсеній', grade: 4 },
// 		{ name: 'Козоріз Вячеслав', grade: 3 },
// 		{ name: 'Кондратов Артем', grade: 9 },
// 		{ name: 'Корбань Євген', grade: 5 },
// 		{ name: 'Кучма Кирило', grade: 3 },
// 		{ name: 'Ляхов Богдан', grade: 10 },
// 		{ name: 'Муха Владислав', grade: 4 },
// 		{ name: 'Пінчуков Владислав', grade: 2 },
// 		{ name: 'Прудкосвист Володимир', grade: 4 },
// 		{ name: 'Пурик Богдан', grade: 5 },
// 		{ name: 'Разбойніков Олександр', grade: 6 },
// 		{ name: 'Савченко Руслан', grade: 3 },
// 		{ name: 'Слободенюк Ярослав', grade: 4 },
// 		{ name: 'Тріфонов Богдан', grade: 7 },
// 		{ name: 'Усенко Кіріл', grade: 5 },
// 		{ name: 'Чуприна Арсеній', grade: 4 }
// 	];
// 	function getCorrectAnswersForGrade(grade) {
// 		const countCorrect = scoreToCountMap[grade];
// 		return correctAnswersRaw.slice(0, countCorrect);
// 	  }
  
// 	  students.forEach(student => {
// 		it(`Заповнює форму для ${student.name} (оцінка ${student.grade})`, () => {
// 		  cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSeI32_6tmIrMK9SxHwosd0rdB4GetYQcE3i7TgSYabC58YJ_Q/viewform?usp=header');
	
// 		  cy.get('textarea.KHxj8b').type(`${student.name} Група 18`);
	
// 		  const correctAnswers = getCorrectAnswersForGrade(student.grade);
	
// 		  cy.get('.geS5n').each(($question, index) => {
// 			if (index >= correctAnswersRaw.length) return;
	
// 			if (index < correctAnswers.length) {
// 			  const correctIdx = letterToIndex[correctAnswers[index]];
// 			  cy.wrap($question).find('.AB7Lab.Id5V1').eq(correctIdx).click();
// 			} else {

// 			  const correctAnswer = correctAnswersRaw[index];
// 			  let randomIdx;
// 			  do {
// 				randomIdx = Math.floor(Math.random() * Object.keys(letterToIndex).length);
// 			  } while (randomIdx === letterToIndex[correctAnswer]);
			  
// 			  cy.wrap($question).find('.AB7Lab.Id5V1').eq(randomIdx).click();
// 			}
// 		  });
	
// 		  cy.contains('Надіслати').click();
// 		});
// 	  });
// 	});