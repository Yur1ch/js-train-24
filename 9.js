console.log("Завдання: 9 ==============================");

function task9() {
  function fetchWithError() {
    const errorMessage = "Помилка при з'єднанні з сервером";

    return Promise.reject(errorMessage);
  }

  fetchWithError()
    .then((data) => {
      console.log("Дані отримані з сервера:", data);
    })
    .catch((error) => {
      console.error("Помилка при отриманні даних:", error);
    });
}

task9();

