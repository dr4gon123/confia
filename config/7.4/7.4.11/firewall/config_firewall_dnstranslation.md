# config firewall dnstranslation

Configure DNS translation.

## Syntax

```
config firewall dnstranslation
    Description: Configure DNS translation.
    edit <id>
        set dst {ipv4-address}
        set netmask {ipv4-netmask}
        set src {ipv4-address}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------+------------+-----------------+
| Parameter | Description                       | Type         | Size       | Default         |
+===========+===================================+==============+============+=================+
| dst       | IPv4 address or subnet on the     | ipv4-address | Not        | 0.0.0.0         |
|           | external network to substitute    |              | Specified  |                 |
|           | for the resolved address in DNS   |              |            |                 |
|           | query replies. Can be single IP   |              |            |                 |
|           | address or subnet on the external |              |            |                 |
|           | network, but number of addresses  |              |            |                 |
|           | must equal number of mapped IP    |              |            |                 |
|           | addresses in src.                 |              |            |                 |
+-----------+-----------------------------------+--------------+------------+-----------------+
| id        | ID.                               | integer      | Minimum    | 0               |
|           |                                   |              | value: 0   |                 |
|           |                                   |              | Maximum    |                 |
|           |                                   |              | value:     |                 |
|           |                                   |              | 4294967295 |                 |
+-----------+-----------------------------------+--------------+------------+-----------------+
| netmask   | If src and dst are subnets rather | ipv4-netmask | Not        | 255.255.255.255 |
|           | than single IP addresses, enter   |              | Specified  |                 |
|           | the netmask for both src and dst. |              |            |                 |
+-----------+-----------------------------------+--------------+------------+-----------------+
| src       | IPv4 address or subnet on the     | ipv4-address | Not        | 0.0.0.0         |
|           | internal network to compare with  |              | Specified  |                 |
|           | the resolved address in DNS query |              |            |                 |
|           | replies. If the resolved address  |              |            |                 |
|           | matches, the resolved address is  |              |            |                 |
|           | substituted with dst.             |              |            |                 |
+-----------+-----------------------------------+--------------+------------+-----------------+

