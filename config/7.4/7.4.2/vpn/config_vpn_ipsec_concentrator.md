# config vpn ipsec concentrator

Concentrator configuration.

## Syntax

```
config vpn ipsec concentrator
    Description: Concentrator configuration.
    edit <id>
        set member <name1>, <name2>, ...
        set name {string}
        set src-check [disable|enable]
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| id        | Concentrator ID.                  | integer            | Minimum value: 1   | 0                  |
|           |                                   |                    | Maximum value:     |                    |
|           |                                   |                    | 65535              |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| member    | Names of up to 3 VPN tunnels to   | string             | Maximum length: 79 |                    |
| `<name>`  | add to the concentrator.          |                    |                    |                    |
|           |                                   |                    |                    |                    |
|           | Member name.                      |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| name      | Concentrator name.                | string             | Maximum length: 35 |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| src-check | Enable to check source address of | option             | \-                 | disable            |
|           | phase 2 selector. Disable to      |                    |                    |                    |
|           | check only the destination        |                    |                    |                    |
|           | selector.                         |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *disable*   | Ignore source selector when choosing tunnel.           |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *enable*    | Use source selector to choose tunnel.                  |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+--------------------------------------------------------------------------------------------------+

