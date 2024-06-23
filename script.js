// Sample data (replace with your own)
const educationData = [
    "Ph.D. in Computer Science, University of Example, 2020",
    "M.S. in Computer Science, Another University, 2016",
    "B.S. in Computer Science, Yet Another University, 2014"
];

const publicationsData = [
    "Author, A., et al. (2023). Title of the paper. Journal of Example, 1(1), 1-10.",
    "Author, B., & Author, A. (2022). Another paper title. Conference Proceedings, 100-110."
];

const interestsData = [
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Data Science"
];

const newsData = [
    "June 2024: Presented at the International Conference on Example Topics",
    "May 2024: Published a new paper in the Journal of Example",
    "April 2024: Received a research grant for Project X"
];

// Function to populate lists
function populateList(data, elementId) {
    const list = document.getElementById(elementId);
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

// Populate all lists
document.addEventListener('DOMContentLoaded', () => {
    populateList(educationData, 'education-list');
    populateList(publicationsData, 'publications-list');
    populateList(interestsData, 'interests-list');
    populateList(newsData, 'news-list');
});
