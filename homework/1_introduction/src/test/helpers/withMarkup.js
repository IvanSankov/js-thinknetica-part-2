const withMarkup = (fn) => {
  return (text) => {
    return fn((content, node) => {
      const hasText = (node) => node.textContent === text
      const childrenDontHaveText = Array.from(node.children).every(
        child => !hasText(child)
      )
      return hasText(node) && childrenDontHaveText
    })
  }
};


export default withMarkup;