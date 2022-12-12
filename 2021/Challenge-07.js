export default function contains(store, product) {
  return Object.values(store)
    .reduce((found, drawerContent) =>
      found = found || (typeof drawerContent === 'object')?
        contains(drawerContent, product) :
        drawerContent === product
      , false)
}