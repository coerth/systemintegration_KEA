# Icecream DB With Granular Access

## Introduction

this assignment involves setting up a database with granular access, document how to use it and use another persons documentation to access theirs.

## Server

MS SQL Server hosted in Azure

## Database Schema

### Favorite Ice Creams

**Table Name:** `icecream`

| Column Name     | Data Type    | Description                                      |
| --------------- | ------------ | ------------------------------------------------ |
| user_id         | INT       | Unique identifier for the user                   |
| user_name       | VARCHAR(100) | The username of the user                         |
| favorite_flavor | VARCHAR(100) | The user's favorite ice cream flavor             |
| secret_recipe   | VARCHAR(200) | A secret recipe associated with the user (hidden)|

## Usage

**Azure Server:** `sysintegration.database.windows.net`

**Database:** `icecream_db`

**User:** `limited_user`

**Password:** `!cecre@m123`

### Access Rights

#### Ice Cream Table

| Role     | User Name | User Name | Favorite Flavor | Secret Recipes |
| -------- | ------------------- | ---------------------- | -------------- |
| icecream | Denied Access        | Read/Write          | Read                   | Denied Access  |

### SQLCMD

sqlcmd -S sysintegration.database.windows.net -U YourUsername@sysintegration -P YourPassword -d YourDatabaseName

you can then execute sql queries

example:
SELECT \* FROM icecream;

# Exposee

**Github Link:** `https://github.com/Stiickish/systemintegration_KEA/blob/main/Assignments/04b.Database-Granular-Access/ReadMe.md`

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/1fbab2c9-2f8e-4625-81f4-afa6e7b5ac23)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/f0e15e6f-7ff2-41bd-b225-a5306d1d49e3)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/f0d8a484-fedb-40d5-be0d-a079eaafeb6b)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/7f357f3e-d9df-4776-ac55-f658a8653f6c)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/40d14926-18cb-4abf-a14e-dacf3c820bb0)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/9aa33e15-c002-4463-84e4-9c1335d2416d)




