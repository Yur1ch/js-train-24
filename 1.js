console.log("Завдання: 1 ==============================");

function task1() {
  function getData(data, timeout = 2000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.keys(data).length > 0) {
          resolve(data);
        } else {
          reject(new Error("Об'єкт пустий"));
        }
      }, timeout);
    });
  }

  const inputData = { name: "John", age: 30, city: "New York" };
  getData(inputData, 2000)
    .then((result) => {
      console.log("Отримані дані:", result);
    })
    .catch((error) => {
      console.error("Помилка:", error.message);
    })
    .finally(() => {
      console.log("Завдання 1 завершено");
    });
}

task1();

