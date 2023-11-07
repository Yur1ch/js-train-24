console.log("Завдання: 4 ==============================");

function task4() {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Проміс 1 виконано");
    }, 1000);
  });

  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Проміс 2 виконано");
    }, 1000);
  });

  Promise.all([promise1, promise2])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Всі операції завершено");
    });
}

task4();

