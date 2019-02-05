class DumbMap {
  get(x) {
    console.log(`get ${x}`)
  }

  set(x, y) {
    console.log(`set ${x} to ${y}`)
  }
}

let m = new DumbMap()

m.set('a', 1) // "set a to 1"
m.get('a') // "get a"


// class DumbMap {
//   constructor() {
//     this.list = []
//   }
//
//   get(x) {
//     let result
//
//     this.list.forEach(pairs => {
//       if (pairs[0] === x) {
//         result = pairs[1]
//       }
//     })
//
//     return result
//   }
//
//   set(x, y) {
//     this.list.push([x, y])
//   }
// }
//
// let m = new DumbMap()
//
// m.set('a', 1)
// console.log(m.get('a')) // 1
// console.log(m.get('I_DONT_EXIST')) // undefined

// get(x) {
//   let result
//
//   this.list.forEach(pairs => {
//     if (pairs[0] === x) {
//       result = pairs[1]
//     }
//   })
//
//   return result
// }
