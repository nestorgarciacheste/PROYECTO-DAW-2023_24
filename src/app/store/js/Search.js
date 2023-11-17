document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
  
    searchInput.addEventListener('input', function () {
      var searchValue = searchInput.value.trim().toLowerCase();
      var cards = document.querySelectorAll('.card');
  
      cards.forEach(function (card) {
        var title = card.querySelector('.card-title').textContent.toLowerCase();
        var shouldShow = title.includes(searchValue);
        card.style.display = shouldShow ? 'block' : 'none';
      });
    });
  });