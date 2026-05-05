# config firewall ip-translation

Configure firewall IP-translation.

## Syntax

```
config firewall ip-translation
    Description: Configure firewall IP-translation.
    edit <transid>
        set endip {ipv4-address-any}
        set map-startip {ipv4-address-any}
        set startip {ipv4-address-any}
        set type {option}
    next
end
```

## Parameters

+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter   | Description                       | Type               | Size               | Default            |
+=============+===================================+====================+====================+====================+
| endip       | Final IPv4 address.               | ipv4-address-any   | Not Specified      | 0.0.0.0            |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| map-startip | Address to be used as the         | ipv4-address-any   | Not Specified      | 0.0.0.0            |
|             | starting point for translation in |                    |                    |                    |
|             | the range.                        |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| startip     | First IPv4 address.               | ipv4-address-any   | Not Specified      | 0.0.0.0            |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| transid     | IP translation ID.                | integer            | Minimum value: 0   | 0                  |
|             |                                   |                    | Maximum value:     |                    |
|             |                                   |                    | 4294967295         |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| type        | IP translation type (option:      | option             | \-                 | SCTP               |
|             | SCTP).                            |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *SCTP*      | SCTP                                                   |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+--------------------------------------------------------------------------------------------------+

