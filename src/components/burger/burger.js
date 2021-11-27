import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const burger = () => ({
  openBurger: false,

  toggle() {
    if(this.openBurger) {
      this.close();
    } else {
      this.open();
    }
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