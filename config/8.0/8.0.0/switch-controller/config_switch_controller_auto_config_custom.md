# config switch-controller auto-config custom

Policies which can override the 'default' for specific ISL/ICL/FortiLink interface.

## Syntax

```
config switch-controller auto-config custom
    Description: Policies which can override the 'default' for specific ISL/ICL/FortiLink interface.
    edit <name>
        config switch-binding
            Description: Switch binding list.
            edit <switch-id>
                set policy {string}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | Auto-Config FortiLink or ISL/ICL  | string | Maximum |         |
|           | interface name.                   |        | length: |         |
|           |                                   |        | 15      |         |
+-----------+-----------------------------------+--------+---------+---------+

