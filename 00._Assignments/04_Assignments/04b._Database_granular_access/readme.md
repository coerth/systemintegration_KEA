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

| Role     | User ID | User Name | Favorite Flavor | Secret Recipes |
| --------| ------------------- | ------------------- | ---------------------- | -------------- |
| icecream | Denied Access        | Read/Write          | Read                   | Denied Access  |

### SQLCMD

sqlcmd -S sysintegration.database.windows.net -U YourUsername@sysintegration -P YourPassword -d YourDatabaseName

you can then execute sql queries

example:
SELECT \* FROM icecream;

# Exposee

**Github Link:** `https://github.com/Stiickish/systemintegration_KEA/blob/main/Assignments/04b.Database-Granular-Access/ReadMe.md`

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/cbe8f9eb-6d3c-4a2b-85ca-33ec2073ce40)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/c881dba1-b39a-4125-871f-d239c6bbe70e)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/1b9e4cd5-60e9-435e-b4e6-9235a06a141d)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/18ebbde6-7c36-45bf-ba50-ccccc198a853)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/4ac5fd97-ab54-49e2-97d5-3514f9b99c08)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/96f09dde-9851-4c2a-8ee6-451678533c42)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/76f43c4d-dc5a-4132-9378-48a2cf64ac21)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/292925b0-ce75-41b0-a1e7-fe70446a55ad)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/57d13d98-1e93-4141-a91a-358677702685)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/16510316-185e-4b01-a76e-ecd49af6a415)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/955a436c-93ff-4965-83d7-c9ea7ab78a78)











