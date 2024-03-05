# Icecream DB With Granular Access

## Introduction

this assignment involves setting up a database with granular access, document how to use it and use another persons documentation to access theirs.

## Database Schema

### Favorite Ice Creams

**Table Name:** `favorite_ice_cream`

| Column Name     | Data Type    | Description               |
| --------------- | ------------ | ------------------------- |
| person_id       | INT          | Unique identifier         |
| full_name       | VARCHAR(100) | Full name of the person   |
| favorite_flavor | VARCHAR(100) | Favorite ice cream flavor |

### Ice Cream Distributors

**Table Name:** `ice_cream_distributors`

| Column Name           | Data Type    | Description                        |
| --------------------- | ------------ | ---------------------------------- |
| distributor_id        | INT          | Unique identifier                  |
| distributor_name      | VARCHAR(100) | Name of the distributor company    |
| country               | VARCHAR(100) | Country where distributor operates |
| headquarters_location | VARCHAR(100) | Location of headquarters           |
| contact_email         | VARCHAR(100) | Email address for contacting       |
| contact_phone         | VARCHAR(20)  | Phone number for contacting        |

### Secret Recipes

**Table Name:** `secret_recipes`

| Column Name      | Data Type    | Description                                        |
| ---------------- | ------------ | -------------------------------------------------- |
| recipe_id        | INT          | Unique identifier                                  |
| flavor           | VARCHAR(100) | Flavor of the ice cream for the recipe             |
| ingredients      | TEXT         | List of ingredients required for the recipe        |
| instructions     | TEXT         | Step-by-step instructions for making the ice cream |
| secret_ingredient | VARCHAR(100) | The secret ingredient for the recipe               |

## Usage

**Azure Server:** `sysintegration.database.windows.net`

**Database:** `icecream_db`

**User:** `icecream`

**Password:** `!cecre@m123`

### Access Rights

| Role     | Favorite Ice Creams | Ice Cream Distributors | Secret Recipes |
| -------- | ------------------- | ---------------------- | -------------- |
| icecream | Read/Write          | Read                   | Denied Access  |

### SQLCMD

sqlcmd -S sysintegration.database.windows.net -U YourUsername@sysintegration -P YourPassword -d YourDatabaseName

you can then execute sql queries

example:
SELECT \* FROM favorite_ice_creams;

# Exposee

**Github Link:** `https://github.com/Stiickish/systemintegration_KEA/blob/main/Assignments/04b.Database-Granular-Access/ReadMe.md`

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/1fbab2c9-2f8e-4625-81f4-afa6e7b5ac23)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/f0e15e6f-7ff2-41bd-b225-a5306d1d49e3)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/f0d8a484-fedb-40d5-be0d-a079eaafeb6b)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/7f357f3e-d9df-4776-ac55-f658a8653f6c)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/40d14926-18cb-4abf-a14e-dacf3c820bb0)

![image](https://github.com/coerth/systemintegration_KEA/assets/59032722/9aa33e15-c002-4463-84e4-9c1335d2416d)




