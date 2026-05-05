# config router auth-path

Configure authentication based routing.

## Syntax

```
config router auth-path
    Description: Configure authentication based routing.
    edit <name>
        set device {string}
        set gateway {ipv4-address}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------+-----------+---------+
| Parameter | Description                       | Type         | Size      | Default |
+===========+===================================+==============+===========+=========+
| device    | Outgoing interface.               | string       | Maximum   |         |
|           |                                   |              | length:   |         |
|           |                                   |              | 35        |         |
+-----------+-----------------------------------+--------------+-----------+---------+
| gateway   | Gateway IP address.               | ipv4-address | Not       | 0.0.0.0 |
|           |                                   |              | Specified |         |
+-----------+-----------------------------------+--------------+-----------+---------+
| name      | Name of the entry.                | string       | Maximum   |         |
|           |                                   |              | length:   |         |
|           |                                   |              | 15        |         |
+-----------+-----------------------------------+--------------+-----------+---------+

