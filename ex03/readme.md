# Testing with database

## Setup

```bat
cd ex03
..\node_modules\.bin\knex migrate:make --env development create_carts
REM update the created migration file, as needed - tables creation
..\node_modules\.bin\knex migrate:latest
```