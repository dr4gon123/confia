# config azure vwan-ingress-public-IPs

Display Azure vWAN SLB ingress public IPs.

## Syntax

```
config azure vwan-ingress-public-IPs
    Description: Display Azure vWAN SLB ingress public IPs.
    edit <name>
        set ip {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| ip        | Public IP address.                | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 15      |         |
+-----------+-----------------------------------+--------+---------+---------+
| name      | Name of public IP.                | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 127     |         |
+-----------+-----------------------------------+--------+---------+---------+

