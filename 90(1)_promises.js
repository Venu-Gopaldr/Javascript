// let p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("i'm a promise and i' fullfilled")
//     },5000)
// })

// ==================================================================================

// let p1 = new Promise((resolve,reject)=>{
//     console.log("promise is pending")
//     setTimeout(()=>{
//         console.log("i'm a promise and i'm resolved")
//         resolve(80)
//     },5000)
// })
// let p2 = new Promise((resolve,reject)=>{
//     console.log("promise is pending")
//     setTimeout(()=>{
//         console.log("i'm a promise and i'm rejected")
//         reject(new Error("i am an error"))
//     },3000)
// })
// console.log(p1,p2)

// ========================================================================================

// let p3 = new Promise((resolve,reject)=>{
//     console.log("promise is pending")
//     setTimeout(()=>{
//         console.log("i'm a promise and i'm resolved")
//         resolve(true);
//     },5000);
// });
// let p4 = new Promise((resolve,reject)=>{
//     console.log("promise is pending")
//     setTimeout(()=>{
//         console.log("i'm a promise and i'm rejected")
//         reject(new Error("i am an error"))
//     },3000);
// });

// p3.then((value)=>{
//     console.log(value);
// });

// p4.catch((error)=>{
//     console.log("some error has occured in p4");
// });

// ==========================================================================================


// let a = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resolve after 3 secs")
//         resolve(100);
//     },5000);
// });
// a.then((value)=>{
//     console.log(value)
//     let b = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("promise 2")
//         },3000)
//     })
//     return b
// }).then((value)=>{
//     console.log("we are done")
//     return 2
// }).then(()=>{
//     console.log("done")
// })

// ===========================================================================================

// const loadScript = (src)=>{
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement("script")
//         script.type = "text/javascript"
//         script.src = src
//         document.body.appendChild(script)
//         script.onload = (script)=>{
//             resolve("Script has been loaded")
//         }
//         script.onerror = ()=>{
//             reject(0)
//         }
//     })
// }
// let x = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// x.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log("we are sorry but we are having probems loading this script")
// })

// ============================================================================================

// Promise API - application program interface

// let a1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("value 1");
//     },1000)
// });

// let a2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("value 2");
//     },2000)
// });

// let a3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("value 3");
//     },10000)
// });

// a1.then((value)=>{
//     console.log(value)
// });
// a2.then((value)=>{
//     console.log(value)
// });
// a3.then((value)=>{
//     console.log(value)
// });

// ==========================================================================================

// API Methods

// 1.Promise.all

// let promise_all = Promise.all([a1,a2,a3])
// promise_all.then((value)=>{
//     console.log(value);
// })


// =======================================================================================

// 2.Promise.allSettled

// it gives output with value and status of promises

// let a4 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 1");
//     },1000)
// });
// let a5 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve("value 2");
//         reject(new Error("Error"));
//     },2000)
// });
// let a6 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 3");
//     },3000)
// });

// let all_settle = Promise.allSettled([a4,a5,a6])

// all_settle.then((value)=>{
//     console.log(value);
// })

// ====================================================================================

// 3.Promise.race

// it gives an output which is resolved first including Errors

// let a4 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 1");
//     },10000)
// });
// let a5 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve("value 2");
//         reject(new Error("Error"));
//     },20000)
// });
// let a6 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 3");
//     },3000)
// });

// let promise_race = Promise.race([a4,a5,a6])

// promise_race.then((value)=>{
//     console.log(value);
// })

// ======================================================================================

// 4.Promise.any

// it gives an output which is resolved excluding errors 

// a4 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 1");
//     },10000)
// });
// let a5 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve("value 2");
//         reject(new Error("Error"));
//     },20000)
// });
// let a6 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 3");
//     },3000)
// });

// let promise_any = Promise.any([a4,a5,a6])

// promise_any.then((value)=>{
//     console.log(value);
// })

// ==================================================================================

