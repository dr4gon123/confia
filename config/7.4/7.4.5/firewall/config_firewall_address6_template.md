# config firewall address6-template

Configure IPv6 address templates.

## Syntax

```
config firewall address6-template
    Description: Configure IPv6 address templates.
    edit <name>
        set fabric-object [enable|disable]
        set ip6 {ipv6-network}
        config subnet-segment
            Description: IPv6 subnet segments.
            edit <id>
                set bits {integer}
                set exclusive [enable|disable]
                set name {string}
                config values
                    Description: Subnet segment values.
                    edit <name>
                        set value {string}
                    next
                end
            next
        end
        set subnet-segment-count {integer}
    next
end
```

## Parameters

+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter            | Description                       | Type               | Size               | Default            |
+======================+===================================+====================+====================+====================+
| fabric-object        | Security Fabric global object     | option             | \-                 | disable            |
|                      | setting.                          |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | Option      | Description                                            |                         |
|                      | +=============+========================================================+                         |
|                      | | *enable*    | Object is set as a security fabric-wide global object. |                         |
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | *disable*   | Object is local to this security fabric member.        |                         |
|                      | +-------------+--------------------------------------------------------+                         |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6                  | IPv6 address prefix.              | ipv6-network       | Not Specified      | ::/0               |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                 | IPv6 address template name.       | string             | Maximum length: 63 |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| subnet-segment-count | Number of IPv6 subnet segments.   | integer            | Minimum value: 1   | 0                  |
|                      |                                   |                    | Maximum value: 6   |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+

