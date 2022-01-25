# Steps for connecting to database through node.js

```js
'use strict';
const mariadb= require('mariadb');
```
---
### For checking employee first name and salary
```js
const testA = async()=>{
    const connection = await mariadb.createConnection({
        host:'localhost', // host of the db
        port:'3306', // the port of the db (3306 is default port)
        user:'zeke',
        password:'secret',
        database:'employeedb',
        allowPublicKeyRetrieval:true // mysql users add this
    });
    let result = await connection.query('select * from employee');
    
    console.log(result); // without delete result data
    delete result.meta; // we delete our meta result data
    console.log(result);

    for(let person of result){
        console.log(`${person.firstname}: ${person.salary} €`);
    }
    connection.end();
}
testA();
```
---

### For checking employee firstname and lastname
```js
const testA = async()=>{
    const connection = await mariadb.createConnection({
        host:'localhost', // host of the db
        port:'3306', // the port of the db (3306 is default port)
        user:'zeke',
        password:'secret',
        database:'employeedb',
        allowPublicKeyRetrieval:true // mysql users add this
    });
    let result = await connection.query('select * from employee');
    
    result = await connection.query('select firstname, lastname from employee where employeeId=? or employeeId=?', [1,2]); //[1, last]

    // ('select firstname, lastname from employee where employeeId in (1,2)';

    // ('select firstname, lastname from employee where employeeId in (?,?)',[1,2]);

    // ('select firstname, lastname from employee')


    delete result.meta; 
    console.log(result);
    connection.end();
}
testA();
```
---
### For inserting new employee into database
```js
const testA = async()=>{
    const connection = await mariadb.createConnection({
        host:'localhost', // host of the db
        port:'3306', // the port of the db (3306 is default port)
        user:'zeke',
        password:'secret',
        database:'employeedb',
        allowPublicKeyRetrieval:true // mysql users add this
    });
    let result = await connection.query('select * from employee');
    result = await connection.query ('insert into employee values(?,?,?,?,?)', [6, 'Bil', 'Bon', 'secr', 9999])


    delete result.meta; 
    console.log(result);
    connection.end();
}
testA();
```

---
### For deleting employee data from database
```js
const testA = async()=>{
    const connection = await mariadb.createConnection({
        host:'localhost', // host of the db
        port:'3306', // the port of the db (3306 is default port)
        user:'zeke',
        password:'secret',
        database:'employeedb',
        allowPublicKeyRetrieval:true // mysql users add this
    });
    let result = await connection.query('select * from employee');

    result = await connection.query('delete from employee where employeeId=?',[4]);
    console.log(result);


    delete result.meta; 
    console.log(result);
    connection.end();
}
testA();
```

---

### For updating employee data in database
```js
const testA = async()=>{
    const connection = await mariadb.createConnection({
        host:'localhost', // host of the db
        port:'3306', // the port of the db (3306 is default port)
        user:'zeke',
        password:'secret',
        database:'employeedb',
        allowPublicKeyRetrieval:true // mysql users add this
    });
    let result = await connection.query('select * from employee');
    
    result = await connection.query('update employee set department=?, salary=? where employeeId=?',['admin', 7500,3]);

    delete result.meta; 
    console.log(result);
    connection.end();
}
testA();
´´´