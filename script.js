document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

document.getElementById('search-button').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var recommendations = document.querySelectorAll('.recommendation');

    recommendations.forEach(function(recommendation) {
        var category = recommendation.getAttribute('data-category');
        if (category.includes(searchInput)) {
            recommendation.style.display = 'block';
        } else {
            recommendation.style.display = 'none';
        }
    });
});
