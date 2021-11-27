const accordion = () => ({
  selected: null,

  toggle(i) {
    if(this.selected === i) {
      this.selected = null;
    } else {
      this.selected = i;
    }
  }
})

export default accordion;