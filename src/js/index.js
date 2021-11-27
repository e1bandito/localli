import Alpine from 'alpinejs'
import burger from '../components/burger/burger';
import mainNav from '../components/main-nav/main-nav';
import accordion from '../components/accordion/accordion';

Alpine.data('burger', burger);
Alpine.data('mainNav', mainNav);
Alpine.data('accordion', accordion);
Alpine.start();
