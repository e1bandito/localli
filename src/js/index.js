import Alpine from 'alpinejs'
import burger from '../components/burger/burger';

Alpine.data('burger', burger);
Alpine.start()

window.addEventListener('burgerToggle', function(e) {
  console.log(e.detail);
})