export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let counter = 0;
      return {
        next() {
          const employees = Object.values(report.allEmployees).flat();
          if (counter < employees.length) {
            const value = employees[counter];
            counter += 1;
            return { value, done: false };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
}
