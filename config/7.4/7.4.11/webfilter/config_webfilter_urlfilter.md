# config webfilter urlfilter

Configure URL filter lists.

## Syntax

```
config webfilter urlfilter
    Description: Configure URL filter lists.
    edit <id>
        set comment {var-string}
        config entries
            Description: URL filter entries.
            edit <id>
                set action [exempt|block|...]
                set antiphish-action [block|log]
                set dns-address-family [ipv4|ipv6|...]
                set exempt {option1}, {option2}, ...
                set referrer-host {string}
                set status [enable|disable]
                set type [simple|regex|...]
                set url {string}
                set web-proxy-profile {string}
            next
        end
        set ip-addr-block [enable|disable]
        set ip4-mapped-ip6 [enable|disable]
        set name {string}
        set one-arm-ips-urlfilter [enable|disable]
    next
end
```

## Parameters

+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter             | Description                       | Type               | Size               | Default            |
+=======================+===================================+====================+====================+====================+
| comment               | Optional comments.                | var-string         | Maximum length:    |                    |
|                       |                                   |                    | 255                |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| id                    | ID.                               | integer            | Minimum value: 0   | 0                  |
|                       |                                   |                    | Maximum value:     |                    |
|                       |                                   |                    | 4294967295         |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip-addr-block         | Enable/disable blocking URLs when | option             | \-                 | disable            |
|                       | the hostname appears as an IP     |                    |                    |                    |
|                       | address.                          |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | Option      | Description                                            |                         |
|                       | +=============+========================================================+                         |
|                       | | *enable*    | Enable blocking URLs when the hostname appears as an   |                         |
|                       | |             | IP address.                                            |                         |
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | *disable*   | Disable blocking URLs when the hostname appears as an  |                         |
|                       | |             | IP address.                                            |                         |
|                       | +-------------+--------------------------------------------------------+                         |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip4-mapped-ip6        | Enable/disable matching of IPv4   | option             | \-                 | disable            |
|                       | mapped IPv6 URLs.                 |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | Option      | Description                                            |                         |
|                       | +=============+========================================================+                         |
|                       | | *enable*    | Enable matching IPv4 mapped IPv6 URLs.                 |                         |
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | *disable*   | Disable matching IPv4 mapped IPv6 URLs.                |                         |
|                       | +-------------+--------------------------------------------------------+                         |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                  | Name of URL filter list.          | string             | Maximum length: 63 |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| one-arm-ips-urlfilter | Enable/disable DNS resolver for   | option             | \-                 | disable            |
|                       | one-arm IPS URL filter operation. |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | Option      | Description                                            |                         |
|                       | +=============+========================================================+                         |
|                       | | *enable*    | Enable DNS resolver for one-arm IPS URL filter         |                         |
|                       | |             | operation.                                             |                         |
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | *disable*   | Disable DNS resolver for one-arm IPS URL filter        |                         |
|                       | |             | operation.                                             |                         |
|                       | +-------------+--------------------------------------------------------+                         |
+-----------------------+--------------------------------------------------------------------------------------------------+

