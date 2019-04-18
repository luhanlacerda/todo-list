export default {
  inserted (el, biding) {
    if (biding.value === true) el.focus();
  }
};
