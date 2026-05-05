# config ips decoder

Configure IPS decoder. Read-only.

## Syntax

```
config ips decoder
    Description: Configure IPS decoder. Read-only.
    edit <name>
        config parameter
            Description: IPS group parameters. Read-only.
            edit <name>
                set value {string}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | Decoder name.                     | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 63      |         |
+-----------+-----------------------------------+--------+---------+---------+

