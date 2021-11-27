import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const burger = () => ({
  openBurger: false,

  toggle() {
    this.openBurger ? this.close() : this.open();
  },
  close() {
    this.openBurger = false;
    this.$dispatch('burger-toggle', this.openBurger);
    enableBodyScroll('body');
  },
  open() {
    this.openBurger = true;
    this.$dispatch('burger-toggle', this.openBurger);
    disableBodyScroll('body');
  }
})

export default burger;