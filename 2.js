console.log("Завдання: 2 ==============================");

function task2() {
  function promise1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Проміс 1 виконано");
      }, 2000);
    });
  }

  function promise2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Проміс 2 виконано");
      }, 5000);
    });
  }

  Promise.race([promise1(), promise2()])
    .then((result) => {
      console.log("Результат:", result);
    })
    .catch((error) => {
      console.error("Помилка:", error);
    })
    .finally(() => {
      console.log("Завдання 2 завершено");
    });
}

task2();

