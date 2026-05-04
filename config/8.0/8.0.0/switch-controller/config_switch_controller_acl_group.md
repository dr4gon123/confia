# config switch-controller acl group

Configure ACL groups to be applied on managed FortiSwitch ports.

## Syntax

```
config switch-controller acl group
    Description: Configure ACL groups to be applied on managed FortiSwitch ports.
    edit <name>
        set ingress <id1>, <id2>, ...
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+------------+---------+
| Parameter | Description                       | Type    | Size       | Default |
+===========+===================================+=========+============+=========+
| ingress   | Configure ingress ACL policies in | integer | Minimum    |         |
| `<id>`    | group.                            |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           | ACL ID.                           |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+
| name      | Group name.                       | string  | Maximum    |         |
|           |                                   |         | length: 63 |         |
+-----------+-----------------------------------+---------+------------+---------+

