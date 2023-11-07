console.log("Завдання: 8 ==============================");

function task8() {
  function fetchFakeData() {
    const fakeData = { name: "John", age: 30 };

    return Promise.resolve(fakeData);
  }

  fetchFakeData()
    .then((data) => {
      console.log("Дані отримані з сервера:", data);
    })
    .catch((error) => {
      console.error("Помилка при отриманні даних:", error);
    });
}

task8();

