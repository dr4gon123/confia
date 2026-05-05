# config system affinity-interrupt

Configure interrupt affinity.

## Syntax

```
config system affinity-interrupt
    Description: Configure interrupt affinity.
    edit <id>
        set affinity-cpumask {string}
        set default-affinity-cpumask {string}
        set interrupt {string}
    next
end
```

## Parameters

+--------------------------+-----------------------------------+---------+------------+---------+
| Parameter                | Description                       | Type    | Size       | Default |
+==========================+===================================+=========+============+=========+
| affinity-cpumask         | Affinity setting (64-bit          | string  | Maximum    |         |
|                          | hexadecimal value in the format   |         | length:    |         |
|                          | of 0xxxxxxxxxxxxxxxxx).           |         | 127        |         |
+--------------------------+-----------------------------------+---------+------------+---------+
| default-affinity-cpumask | Default affinity setting (64-bit  | string  | Maximum    |         |
|                          | hexadecimal value in the format   |         | length:    |         |
|                          | of 0xxxxxxxxxxxxxxxxx).           |         | 127        |         |
|                          | Read-only.                        |         |            |         |
+--------------------------+-----------------------------------+---------+------------+---------+
| id                       | ID of the interrupt affinity      | integer | Minimum    | 0       |
|                          | setting.                          |         | value: 0   |         |
|                          |                                   |         | Maximum    |         |
|                          |                                   |         | value:     |         |
|                          |                                   |         | 4294967295 |         |
+--------------------------+-----------------------------------+---------+------------+---------+
| interrupt                | Interrupt name.                   | string  | Maximum    |         |
|                          |                                   |         | length:    |         |
|                          |                                   |         | 127        |         |
+--------------------------+-----------------------------------+---------+------------+---------+

