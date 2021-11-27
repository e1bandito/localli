import Alpine from 'alpinejs'
import burger from '../components/burger/burger';
import mainNav from '../components/main-nav/main-nav'

Alpine.data('burger', burger);
Alpine.data('mainNav', mainNav);
Alpine.start();
