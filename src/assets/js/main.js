const MONTHS = [
	'january',
	'february',
	'march',
	'april',
	'may',
	'june',
	'july',
	'august',
	'september',
	'october',
	'november',
	'december',
];

const init = () => {
	highlightToday();
};

const highlightToday = () => {
	const now = new Date();
	// now.setDate(24);
	// now.setMonth(6);
	const thisMonth = now.getMonth();
	const todaysDate = now.getDate();
	const todaysDay = now.getDay();
	const mondaysDate = todaysDate - (todaysDay - 1);
	const weeks = document.querySelectorAll('section.week');

	for (const week of weeks) {
		const datesElement = week.querySelector('header h3');
		const datesText = datesElement.textContent;
		const datesArray = datesText.split('.');

		for (const dateString of datesArray) {
			const thisDate = dateString.trim();
			const thisDateDay = Number(thisDate.split(' ')[0]);
			const thisDateMonth = thisDate.split(' ')[1].toLowerCase();

			if (MONTHS.indexOf(thisDateMonth) === thisMonth && thisDateDay === mondaysDate) {
				highlightTodaysOptions(week, todaysDay);
			}
		}
	}
};

const highlightTodaysOptions = (week, todaysDay) => {
	week.classList.add('thisWeek');
	const rows = week.querySelectorAll('article');
	for (const row of rows) {
		const items = row.querySelectorAll('p');
		for (const item in items) {
			if (Object.hasOwn(items, item) && Number(item) === (todaysDay - 1)) {
				items[item].classList.add('today');
			}
		}
	}
};

window.addEventListener('load', () => {
	console.log('loaded');
	init();
});
