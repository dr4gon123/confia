# config firewall on-demand-sniffer

Configure on-demand packet sniffer.

## Syntax

```
config firewall on-demand-sniffer
    Description: Configure on-demand packet sniffer.
    edit <name>
        set advanced-filter {var-string}
        set hosts <host1>, <host2>, ...
        set interface {string}
        set max-packet-count {integer}
        set non-ip-packet [enable|disable]
        set ports <port1>, <port2>, ...
        set protocols <protocol1>, <protocol2>, ...
    next
end
```

## Parameters

+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter        | Description                       | Type               | Size               | Default            |
+==================+===================================+====================+====================+====================+
| advanced-filter  | Advanced freeform filter that     | var-string         | Maximum length:    |                    |
|                  | will be used over existing filter |                    | 255                |                    |
|                  | settings if set. Can only be used |                    |                    |                    |
|                  | by super admin.                   |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| hosts `<host>`   | IPv4 or IPv6 hosts to filter in   | string             | Maximum length:    |                    |
|                  | this traffic sniffer.             |                    | 255                |                    |
|                  |                                   |                    |                    |                    |
|                  | IPv4 or IPv6 host.                |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface        | Interface name that on-demand     | string             | Maximum length: 35 |                    |
|                  | packet sniffer will take place.   |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-packet-count | Maximum number of packets to      | integer            | Minimum value: 1   | 0                  |
|                  | capture per on-demand packet      |                    | Maximum value:     |                    |
|                  | sniffer.                          |                    | 20000 \*\*         |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name             | On-demand packet sniffer name.    | string             | Maximum length: 35 |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| non-ip-packet    | Include non-IP packets.           | option             | \-                 | disable            |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | Option      | Description                                            |                         |
|                  | +=============+========================================================+                         |
|                  | | *enable*    | Enable non-IP packets to be included capture.          |                         |
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | *disable*   | Disable non-IP packets to be included in capture.      |                         |
|                  | +-------------+--------------------------------------------------------+                         |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ports `<port>`   | Ports to filter for in this       | integer            | Minimum value: 1   |                    |
|                  | traffic sniffer.                  |                    | Maximum value:     |                    |
|                  |                                   |                    | 65536              |                    |
|                  | Port to filter in this traffic    |                    |                    |                    |
|                  | sniffer.                          |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| protocols        | Protocols to filter in this       | integer            | Minimum value: 0   |                    |
| `<protocol>`     | traffic sniffer.                  |                    | Maximum value: 255 |                    |
|                  |                                   |                    |                    |                    |
|                  | Integer value for the protocol    |                    |                    |                    |
|                  | type as defined by IANA (0 -      |                    |                    |                    |
|                  | 255).                             |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+

