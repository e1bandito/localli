const burger = () => ({
  open: false,

  toggle() {
      this.open = !this.open;
      this.$dispatch('burger-toggle', this.open);
  },
  close() {
    this.open = false;
  }
})

export default burger;