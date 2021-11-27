const accordion = () => ({
  selected: null,

  toggle(i) {
    this.selected === i ? this.selected = null : this.selected = i;
  }
})

export default accordion;