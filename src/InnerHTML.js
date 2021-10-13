function getClassName() {
  // getElementsByClassName returns HTMLCollection
  let type =
    document.body.getElementsByClassName('grid') instanceof HTMLCollection
  let type2 =
    document.body.getElementsByClassName('grid').item(0) instanceof Element

  return document.body.getElementsByClassName('grid').item(0).innerHTML
}

function getQuerySelector() {
  // An Element object representing the first element in the document
  // that matches the specified set of CSS selectors, or null is returned
  // if there are no matches
  let a = document.body.querySelector('.grid') instanceof Element
  return document.body.querySelector('.grid').innerHTML
}

export default { getClassName, getQuerySelector }
