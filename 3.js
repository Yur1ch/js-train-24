console.log("Завдання: 3 ==============================");

function task3() {
  function promise1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Проміс 1 виконано");
      }, 1000);
    });
  }

  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Проміс 2 відхилено");
      }, 2000);
    });
  }

  Promise.allSettled([promise1(), promise2()])
    .then((results) => {
      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          console.log(
            `Проміс ${index + 1}: Успішно вирішено - ${result.value}`
          );
        } else if (result.status === "rejected") {
          console.log(`Проміс ${index + 1}: Відхилено - ${result.reason}`);
        }
      });
    })
    .finally(() => {
      console.log("Завдання 3 завершено");
    });
}

task3();

