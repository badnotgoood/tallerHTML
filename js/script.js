
document.addEventListener("DOMContentLoaded", function() {
    var tabButtons = document.querySelectorAll('.list-group-item');
    var albumContainer = document.querySelector('.album-container');
    var arrowBtn = document.querySelector('.img-button');
    
 tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {

            var target = this.getAttribute('data-target');

            document.querySelectorAll('.content').forEach(function(content) {
                content.style.display = 'none';
            });

            document.getElementById(target).style.display = 'block';

         tabButtons.forEach(function(btn) {
                if (btn != button){
                    btn.classList.remove('active');
                }
            });

            this.classList.add('active');

        });
    });


 tabButtons[0].click();
});


