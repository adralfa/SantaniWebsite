//Component
import './component/navbar.js';
import './component/footer.js';

//Routing page
// import './globals/utils/route.js';
import './globals/utils/route.php';

$(function() {
    $('span.navbar-toggler-icon').click(function() {
      $('#navbarSupportedContent').toggle(500);
    });
});