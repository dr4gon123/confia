# config system snmp mib-view

SNMP Access Control MIB View configuration.

## Syntax

```
config system snmp mib-view
    Description: SNMP Access Control MIB View configuration.
    edit <name>
        set exclude {string}
        set include {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| exclude   | OID subtrees to be excluded in    | string | Maximum |         |
|           | the view. Maximum 64 allowed.     |        | length: |         |
|           |                                   |        | 79      |         |
+-----------+-----------------------------------+--------+---------+---------+
| include   | OID subtrees to be included in    | string | Maximum |         |
|           | the view. Maximum 16 allowed.     |        | length: |         |
|           |                                   |        | 79      |         |
+-----------+-----------------------------------+--------+---------+---------+
| name      | MIB view name.                    | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 32      |         |
+-----------+-----------------------------------+--------+---------+---------+

