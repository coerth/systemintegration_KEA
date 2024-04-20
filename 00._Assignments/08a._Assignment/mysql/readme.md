docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql:latest

docker cp mysqlsampledatabase.sql <container_id>:/mysqlsampledatabase.sql

source /mysqlsampledatabase.sql

npx mro

