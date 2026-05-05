# config user security-exempt-list

Configure security exemption list.

## Syntax

```
config user security-exempt-list
    Description: Configure security exemption list.
    edit <name>
        set description {string}
        config rule
            Description: Configure rules for exempting users from captive portal authentication.
            edit <id>
                set dstaddr <name1>, <name2>, ...
                set service <name1>, <name2>, ...
                set srcaddr <name1>, <name2>, ...
            next
        end
    next
end
```

## Parameters

+-------------+-----------------------------------+--------+---------+---------+
| Parameter   | Description                       | Type   | Size    | Default |
+=============+===================================+========+=========+=========+
| description | Description.                      | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 127     |         |
+-------------+-----------------------------------+--------+---------+---------+
| name        | Name of the exempt list.          | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 35      |         |
+-------------+-----------------------------------+--------+---------+---------+

