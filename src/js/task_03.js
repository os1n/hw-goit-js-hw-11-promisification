// Задание 3

// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

setTimeout(() => {
    console.log(`Task 3`);
}, 0);

const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      //console.log(transaction);
      if (canProcess) {
        resolve(transaction);
      } else reject(transaction);
    }, delay);
  });

  return promise;
};

const logSuccess = ({ id, amount }) => {
  //console.log(id, amount);
  console.log(`%c Transaction ${id} processed in ${amount}ms`, 'color:green');
};

const logError = ({ id, time }) => {
  console.warn(
    `%c Error processing transaction ${id}. Please try again later.`,
    'color:red',
  );
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);

/*
 * Работало так
//  */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
