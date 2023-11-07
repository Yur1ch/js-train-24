console.log("Завдання: 10 ==============================");

function task10() {
  // Створюємо проміс promise1, який вирішується через 500 мс і повертає рядок "Promise 1".
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1");
    }, 500);
  });

  // Створюємо проміс promise2, який вирішується через 200 мс і повертає рядок "Promise 2".
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 200);
  });

  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 3");
    }, 300);
  });

  Promise.any([promise1, promise2, promise3])
    .then((result) => {
      console.log("Перший виконаний проміс:", result);
    })
    .catch((error) => {
      console.error("Всі проміси відхилені:", error);
    });
}

task10();
// /?

