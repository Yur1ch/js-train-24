console.log("Завдання: 6 ==============================");

function task6() {
  const promise = new Promise((resolve, reject) => {
    setImmediate(() => {
      const randomValue = Math.random();

      if (randomValue < 0.5) {
        resolve("Більше ніж 0.5");
      } else {
        reject("Менше ніж 0.5");
      }
    });
  });

  promise
    .then((value) => {
      console.log(`Проміс зарезолвився з значенням: ${value}`);
    })
    .catch((error) => {
      console.error(`Проміс відхилився з помилкою: ${error}`);
    })
    .finally(() => {
      console.log("Проміс завершено");
    });
}

task6();

