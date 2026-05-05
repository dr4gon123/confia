# config ips decoder

Configure IPS decoder.

## Syntax

```
config ips decoder
    Description: Configure IPS decoder.
    edit <name>
        config parameter
            Description: IPS group parameters.
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

