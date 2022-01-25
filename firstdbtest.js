'use strict';

const mariadb= require('mariadb');

const testA = async()=>{
    const connection = await mariadb.createConnection({
        host:'localhost', // host of the db
        port:'3306', // the port of the db (3306 is default port)
        user:'zeke',
        password:'secret',
        database:'employeedb',
        allowPublicKeyRetrieval:true // mysql users add this
    });
    console.log('######### Test 1 #######')
    let result = await connection.query('select * from employee');
    
    console.log(result); // without delete result data
    delete result.meta; // we delete our meta result data
    console.log(result);

    for(let person of result){
        console.log(`${person.firstname}: ${person.salary} €`);
    }

    console.log('######### Test 2 #######')
    result = await connection.query('select firstname, lastname from employee where employeeId=? or employeeId=?', [1,2]);

    // ('select firstname, lastname from employee where employeeId in (1,2)';

    // ('select firstname, lastname from employee where employeeId in (?,?)',[1,2]);

    // ('select firstname, lastname from employee')


    delete result.meta; 
    console.log(result);

    // auto insert the data into databases
    console.log('##### test 3 insert #######');
    result = await connection.query ('insert into employee values(?,?,?,?,?)', [6, 'Bil', 'Bon', 'secr', 9999])


    // auto delete the data from databases
    console.log('###### test 4 delete #####');
    result = await connection.query('delete from employee where employeeId=?',[4]);
    console.log(result);


    // auto update the data from databases
    console.log('###### test 5 update #####');
    result = await connection.query('update employee set department=?, salary=? where employeeId=?',['admin', 7500,3]);
    // to db engine; 'update employee set department='admin', salary=7000 where employeeId=3
    delete result.meta; 
    console.log(result);


    connection.end();
}
testA();