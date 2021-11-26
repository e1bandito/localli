const burger = () => ({
  open: false,

  toggle() {
      this.open = ! this.open;
      this.$dispatch('burgerToggle', this.open);
  }
})

export default burger;