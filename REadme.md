```shell
mysql -u root -p
continue with password
create database cbsocialmediadb;
create user cbsocialuser identified with mysql_native_password by 'cbsocialpass'
grant all privileges on cbsocialmediadb.* to cbsocialuser;
flush privileges;
```
```shell
folder structure
C:\USERS\MRIDU\ONEDRIVE\DESKTOP\SOCIALMEDIA\SRC
├───controllers
├───db
├───public
└───routes
to make folder on terminal just use mkdir folder_name
```