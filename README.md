[![FIRSTDBTEST](https://github.com/React21S/firstdb/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/React21S/firstdb/actions)


[Steps for connecting to database through node.js](/Connection.md)
# Lecture on database using mysql and mariadb

-   built with 
    -   Nodejs
    -   mariadb
    -   javascript
    -   MySQL

installation on localhost
```shell
> npm init -y
```

### For checking the version of mysql fro terminal
```shell
> mysql --version
```

---
## Installation through mac



```shell
> brew install mysql
```
or 

```shell
> brew install mariadb
```

---

## Connection through VS code
-   Insert these steps to connect to mysql through terminal
```shell
> ls createStatement.sql
```

```shell
> mysql -u controller -p <createStatement.sql
```
-   Follow by password 
```shell
> Enter password:
```
-   Insert the name of js file in the terminal press enter
```shell
> node firstdbtest
```
-   Output from terminal
```js
######### Test 1 #######
[
  {
    employeeId: 1,
    firstname: 'Matt',
    lastname: 'River',
    department: 'ICT',
    salary: 5000
  },
  {
    employeeId: 2,
    firstname: 'Mary',
    lastname: 'Smith',
    department: 'admin',
    salary: 6000
  }
]
Matt: 5000 €
Mary: 6000 €
######### Test 2 #######
[ { firstname: 'Matt', lastname: 'River' } ]
```


---
## For getting the number of database folder in database
-   input
```shell
MySQL [(none)]> show databases;
```

-   output
```shell
+--------------------+
| Database           |
+--------------------+
| employeedb         |
| femidb             |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
```
---

## For creating database folder e.g femidb
-   input
```shell
create database femidb
```
 or

-   input
```shell
MySQL [(none)]> drop create database if not exists femidb
```


---
## For delete database folder e.g femidb
-   input
```shellMySQL [(none)]> drop 
drop database if exists femidb
```

---
## For using database folder e.g employeedb
-   input
```shell
MySQL [(none)]>use employeedb
```

---

## For creating table e.g employee
-   input
```shell
MySQL [employeedb]>create table employee(
    -> employeeId integer not null primary key,
    -> firstname varchar(20) not null,
    -> lastname varchar(30) not null,
    -> department varchar(15),
    -> salary decimal(6,2)
    -> );
```
---
## For describing table e.g employee
-   input
```shell
MySQL [employeedb]>describe employee;
```

-   output
```shell
+------------+--------------+------+-----+---------+-------+
| Field      | Type         | Null | Key | Default | Extra |
+------------+--------------+------+-----+---------+-------+
| employeeId | int          | NO   | PRI | NULL    |       |
| firstname  | varchar(20)  | NO   |     | NULL    |       |
| lastname   | varchar(30)  | NO   |     | NULL    |       |
| department | varchar(15)  | YES  |     | NULL    |       |
| salary     | decimal(6,2) | YES  |     | NULL    |       |
+------------+--------------+------+-----+---------+-------+
```

---
## For inserting the data of employee into table
-   input
```shell
MySQL [employeedb]>insert into employee values(1,'Matt','River','ICT',5000);
insert into employee values(2,'Mary','Smith','admin',6000);
insert into employee values(3,'Femi','Adesola','ICT',5000);
```

---
## For getting the data in employee table
-   input
```shell
MySQL [employeedb]>select * from employee
```

-   output
```shell
+------------+-----------+----------+------------+---------+
| employeeId | firstname | lastname | department | salary  |
+------------+-----------+----------+------------+---------+
|          1 | Matt      | River    | ICT        | 5000.00 |
|          2 | Mary      | Smith    | admin      | 6000.00 |
|          3 | Femi      | Adesola  | ICT        | 5000.00 |
+------------+-----------+----------+------------+---------+
```

---
## For creating new user and password
-   input
```shell
MySQL [employeedb]>create user if not exists 'zeke'@'localhost' identified by 'secret';
```

---
## For granting user a  privilege to 

-   all databases and all table
    -   use this ``` *.* ``` as
    ```shell
    MySQL [employeedb]>grant all privileges on *.* to 'controller'@'localhost' with grant option;
    ```

-   only all table
    -   use .*
    ```shell
    MySQL [employeedb]>MySQL [employeedb]>MySQL [employeedb]>grant all privileges on employeedb.* to 'controller'@'localhost';
    ```
---

## For getting the number of users
-   input
```shell
MySQL [employeedb]> select user from mysql.user;
```

-   output
```shell
+------------------+
| user             |
+------------------+
| boss             |
| controller       |
| mysql.infoschema |
| mysql.session    |
| mysql.sys        |
| root             |
| xyz              |
| zeke             |
+------------------+
```

## For dropping the user e.g zeke
-   input
```shell
MySQL [employeedb]> drop user 'zeke'@'localhost';
```
---

## For getting user's host and password
-   input
```shell
MySQL [employeedb]> select user, host, password from mysql.user;
```

-   output
```shell
+------------------+-----------+
| user             | host      |
+------------------+-----------+
| boss             | localhost |
| controller       | localhost |
| mysql.infoschema | localhost |
| mysql.session    | localhost |
| mysql.sys        | localhost |
| root             | localhost |
| xyz              | localhost |
| zeke             | localhost |
+------------------+-----------+
```
---

## For showing user's grant e.g zeke
-   input
```shell
MySQL [employeedb]> show grants for 'zeke'@'localhost';
```

-   output
```shell
+--------------------------------------------------------------+
| Grants for zeke@localhost                                    |
+--------------------------------------------------------------+
| GRANT USAGE ON *.* TO `zeke`@`localhost`                     |
| GRANT ALL PRIVILEGES ON `employeedb`.* TO `zeke`@`localhost` |
+--------------------------------------------------------------+
```
---
## To exist from mysql server
```shell
MySQL [employeedb]> exit
```

## To delete employee data
```shell
MySQL [employeedb]> delete from employee where employeeId=5;
```


