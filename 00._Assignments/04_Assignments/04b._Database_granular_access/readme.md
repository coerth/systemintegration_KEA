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












