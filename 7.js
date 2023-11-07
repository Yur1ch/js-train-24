console.log("Завдання: 7 ==============================");

function task7() {
  const promise = new Promise((resolve, reject) => {
    let intervalId;

    intervalId = setInterval(() => {
      const now = new Date();

      const seconds = now.getSeconds();

      console.log(`Поточні секунди: ${seconds}`);

      if (seconds % 10 === 0) {
        clearInterval(intervalId);
        resolve("Поточні секунди кратні 10!");
      }

      if (seconds % 3 === 0) {
        clearInterval(intervalId);
        reject("Поточні секунди кратні 3!");
      }
    }, 1000);
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

task7();

