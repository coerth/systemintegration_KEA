Redis Commands Reference

This README provides a quick reference for common Redis commands.
Key Commands

    SET: Sets a value
    GET: Gets a value
    DEL: Deletes a value
    EXISTS: Checks if a value exists
    FLUSHDB: Flushes the database
    SELECT: Selects a database
    SETEX: Sets a value with an expiration time
    TTL: Gets the time to live of a value
    TYPE: Gets the type of a value
    PERSIST: Removes the expiration time

List Commands

    LLEN: Returns the length of a list
    RPUSH / LPUSH: Pushes a value to the right or left of a list
    LRANGE: Gets a range of values from a list
    RPOP / LPOP: Deletes a value from the right or left of a list
    LINDEX: Gets a value from a list by its index

Set Commands

    SADD: Creates a set and adds a value to a set
    SMEMBERS: Gets all the values from a set
    SREM: Removes a value from a set

Hash Commands

    HSET: Creates a hash and sets a value
    HGET: Gets a value from a hash
    HGETALL: Gets all the values from a hash
    HDEL: Deletes a value from a hash
