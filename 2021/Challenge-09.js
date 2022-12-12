export default function groupBy(collection, it) {
  let store = {}
  return collection.reduce((store, elem) => {
    const category = typeof it === 'function'? it(elem) : elem[it]
    store[category] = store[category] ? [...store[category], elem] : [elem]
    return store
  }, store)
}