let person = {name: 'Haril Ankleshwariya',
  age: 19,
  gender: 'Male'};

function show(person) {
  console.log('name: ', person.name);
  console.log('age: ', person.age);
  console.log('gender: ', person.gender);
}
show(person);

let Array1 = [1,'Haril',true];
console.log('length Of the array is',Array1.length);
console.log('The Element of the array is ')
for (let i = 0; i < Array1.length; i++) {
  console.log(Array1[i]);
}
console.log('Here is some of the Basic operations')
Array1.push(4);
console.log('push        :',Array1)
Array1.pop();
console.log('pop         :', Array1);
Array1.shift();
console.log('left shift  :', Array1);
Array1.unshift(1);
console.log('unshift     :', Array1);
Array1.join();
console.log('join        :', Array1);
delete Array1[3];
console.log('delete      :', Array1);
Array1 = Array1.concat([1, false, 'ABC']);
console.log('concat      :', Array1);
Array1 = Array1.flat();
console.log('flat        :', Array1);
Array1.splice(0, 2);
console.log('splice      :', Array1);
Array1 = Array1.slice(1,2 );
console.log('slice       :', Array1);