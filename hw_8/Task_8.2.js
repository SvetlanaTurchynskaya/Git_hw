'use strict'

/*
Task 2. Перед вами структура компани, и ниже представлены задания, относящиеся к ней. 
В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!
*/

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]


// Task 2.1.
/*
Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
**Пример:**
Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)
*/
    enterprises.forEach((enterprise) => {
      console.log(`${enterprise.name}:`);
      enterprise.departments.forEach((department) => {
        console.log(
          ` - ${department.name}: ${department.employees_count} сотрудник(ов)`
        );
      });
    });

    enterprises.forEach((enterprise) => {
      let totalEmployees = enterprise.departments.reduce(
        (total, department) => total + department.employees_count,
        0
      );
      console.log(`${enterprise.name}: Всего сотрудников - ${totalEmployees}`);
    });

// Task 2.2.
/*
Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2
*/

function getEnterpriseName(query) {
  for (const enterprise of enterprises) {
    const department = enterprise.departments.find(
      (department) => department.id === query || department.name === query
    );
    if (department) {
      return enterprise.name;
    }
  }
}

console.log(getEnterpriseName(4));
console.log(getEnterpriseName("Отдел маркетинга"));

// Task 2.3.
/*
Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
Пример:
addEnterprise("Название нового предприятия")
*/

function addEnterprise(name) {
  const maxId =
    enterprises.length > 0 ? Math.max(...enterprises.map((el) => el.id)) : 0; // максимальный id, чтобы от него отталкиваться
  enterprises.push({ id: maxId + 1, name: name, departments: [] });
}

addEnterprise("Новое Предприятие");
console.log(enterprises);

// Task 2.4.
/*
Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
Пример:
addDepartment(1, "Название нового отдела")
*/

function addDepartment(enterpriseId, departmentName) {
  const enterprise = enterprises.find((e) => e.id === enterpriseId);
  if (!enterprise) {
    console.log("Предприятие с таким ID не найдено.");
    return;
  }

  const newDepartmentId =
    enterprise.departments.length > 0
      ? Math.max(...enterprise.departments.map((d) => d.id)) + 1
      : 1;

  enterprise.departments.push({
    id: newDepartmentId,
    name: departmentName,
    employees_count: 0,
  });
}

addDepartment(1, "Название нового отдела");
console.log(enterprises);
    
// Task 2.5. 
/*
Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
Пример:
editEnterprise(1, "Новое название предприятия")
*/

function editEnterprise(enterpriseId, newName) {
  const enterprise = enterprises.find((e) => e.id === enterpriseId);
  if (enterprise) {
    enterprise.name = newName;
  } else {
    console.log("Предприятие с таким ID не найдено.");
  }
}

editEnterprise(1, "Новое название предприятия");
console.log(enterprises);

// Task 2.6. 
/*
Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
Пример:
editDepartment(7, "Новое название отдела")
*/

function editDepartment(departmentId, newName) {
  enterprises.forEach((enterprise) => {
    const department = enterprise.departments.find(
      (d) => d.id === departmentId
    );
    if (department) {
      department.name = newName;
      return;
    }
  });
}

editDepartment(7, "Новое название отдела");
console.log(enterprises);

// Task 2.7. 
/*
Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
Пример:
deleteEnterprise(1)
*/

function deleteEnterprise(enterpriseId) {
  const index = enterprises.findIndex((e) => e.id === enterpriseId);
  if (index !== -1) {
    enterprises.splice(index, 1);
  } else {
    console.log("Предприятие с таким ID не найдено.");
  }
}

deleteEnterprise(1);
console.log(enterprises);

// Task 2.8. 
/*
Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
Пример:
deleteDepartment(3)
*/

function deleteDepartment(departmentId) {
  enterprises.forEach((enterprise) => {
    const departmentIndex = enterprise.departments.findIndex(
      (department) => department.id === departmentId
    );
    if (
      departmentIndex >= 0 &&
      enterprise.departments[departmentIndex].employees_count === 0
    ) {
      enterprise.departments.splice(departmentIndex, 1);
      return;
    } else if (departmentIndex !== -1) {
      console.log("Невозможно удалить отдел, так как в нем есть сотрудники.");
      return;
    }
  });
}

deleteDepartment(3);
console.log(enterprises);

// Task 2.9. 
/*
Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
Пример:
moveEmployees(2, 3)
*/

function moveEmployees(fromDepartmentId, toDepartmentId) {
  let fromDepartment, toDepartment;

  for (let i = 0; i < enterprises.length; i++) {
    fromDepartment = enterprises[i].departments.find(
      (d) => d.id === fromDepartmentId
    );
    toDepartment = enterprises[i].departments.find(
      (d) => d.id === toDepartmentId
    );

    if (fromDepartment && toDepartment) {
      toDepartment.employees_count += fromDepartment.employees_count;
      fromDepartment.employees_count = 0;
      enterprises = true;
      break;
    }
  }
}

moveEmployees(3, 4);
console.log(enterprises);

