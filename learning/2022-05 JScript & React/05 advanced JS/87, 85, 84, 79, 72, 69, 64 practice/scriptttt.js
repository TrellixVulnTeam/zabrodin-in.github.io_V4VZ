const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
  });
  const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
  });
  const p5 = new Promise((resolve, reject) => {
    reject("reject");
  });
   
  Promise.all([p1, p2, p3, p4, p5]).then(value => {
    console.log(value);
  }, reason => {
    console.log(reason);
  });

  const p13 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('1');
    }, 1000);
  }).then(data => {
      console.log(data);
  });