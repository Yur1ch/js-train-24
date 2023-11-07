console.log("Завдання: 5 ==============================");

function task5() {
  let counter = 0;

  const intervalPromise = new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      counter++;
      console.log(`Значення лічильника: ${counter}`);

      if (counter === 5) {
        clearInterval(intervalId);

        resolve(counter);
      }
    }, 1000);
  });

  intervalPromise
    .then((value) => {
      console.log(`Лічильник завершено зі значенням: ${value}`);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Завершення лічильника");
    });
}

