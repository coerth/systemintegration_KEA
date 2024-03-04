# Icecream DB With Granular Access

## Introduction

this assignment involves setting up a database with granular access, document how to use it and use another persons documentation to access theirs.

## Database Schema

### Favorite Ice Creams

| Column Name   | Data Type    | Description              |
|---------------|--------------|--------------------------|
| PersonID      | INT          | Unique identifier        |
| FullName      | VARCHAR(100) | Full name of the person |
| FavoriteFlavor| VARCHAR(100) | Favorite ice cream flavor|

### Ice Cream Distributors

| Column Name         | Data Type    | Description                       |
|---------------------|--------------|-----------------------------------|
| DistributorID       | INT          | Unique identifier                 |
| DistributorName     | VARCHAR(100) | Name of the distributor company   |
| Country             | VARCHAR(100) | Country where distributor operates|
| HeadquartersLocation| VARCHAR(100) | Location of headquarters          |
| ContactEmail        | VARCHAR(100) | Email address for contacting      |
| ContactPhone        | VARCHAR(20)  | Phone number for contacting       |

### Secret Recipes

| Column Name    | Data Type | Description                               |
|----------------|-----------|-------------------------------------------|
| RecipeID       | INT       | Unique identifier                         |
| Flavor         | VARCHAR(100) | Flavor of the ice cream for the recipe |
| Ingredients    | TEXT      | List of ingredients required for the recipe |
| Instructions   | TEXT      | Step-by-step instructions for making the ice cream |
| SecretIngredient | VARCHAR(100) | The secret ingredient for the recipe |

## Usage

Azure: sysintegration.database.windows.net
Database: icecream_db
User: icecream
Password: !cecre@m123

### Access Rights
| Role      | Favorite Ice Creams | Ice Cream Distributors | Secret Recipes |
|-----------|----------------------|------------------------|----------------|
| icecream  | Read/Write           | Read                   | Read/Write     |


### SQLCMD

sqlcmd -S sysintegration.database.windows.net -U YourUsername@sysintegration -P YourPassword -d YourDatabaseName

you can then execute sql queries

example:
    SELECT * FROM favorite_ice_creams;

