const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const opportunities = document.getElementById('opportunities');

const Opportunities = [
	{
		title: 'Community Cleanup',
		location: 'Bangalore', date: 'Oct 19, 2023', phone: '9876543210'
	},
	{
		title: 'Food Drive',
		location: 'India', date: 'Nov 8, 2023', phone: '8756498578'
	},
	{
		title: 'Youth Mentorship',
		location: 'Community Center Bangalore', date: 'Dec 22, 2023', phone: '8495687546'
	},
	{
		title: 'Animal Shelter Support',
		location: 'India', date: 'Dec 9, 2023', phone: '7485695685'
	},
];
searchButton.addEventListener('click', () => {
	const searchTerm = searchInput.value.toLowerCase();
	displayOpportunities(searchTerm);
});
function displayOpportunities(searchTerm) {
	opportunities.innerHTML = '';
	for (const opportunity of Opportunities) {
		if (opportunity.title.toLowerCase()
			.includes(searchTerm)) {
			const opportunityCard = document
				.createElement('div');
			opportunityCard.classList
				.add('opportunity-card');
			opportunityCard.innerHTML = `
		<h3>${opportunity.title}</h3>
		<p><strong>Location:</strong>
		${opportunity.location}</p>
		<p><strong>Date:</strong>
		${opportunity.date}</p>
		<p><strong>Phone Number:</strong>
		${opportunity.phone}</p>
	`;
			opportunities.appendChild(opportunityCard);
		}
	}
}

