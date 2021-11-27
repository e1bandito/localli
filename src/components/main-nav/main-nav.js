const mainNav = () => ({
  open: false,

  toggle(eventDetail) {
    this.open = eventDetail;
  },
  close() {
    this.open = false;
    this.$dispatch('close-nav');
  }
})

export default mainNav;