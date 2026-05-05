# config firewall internet-service

Show Internet Service application. Read-only.

## Syntax

```
config firewall internet-service
    Description: Show Internet Service application. Read-only.
    edit <id>
        set database [isdb|irdb]
        set direction [src|dst|...]
        set extra-ip-range-number {integer}
        set extra-ip6-range-number {integer}
        set icon-id {integer}
        set ip-number {integer}
        set ip-range-number {integer}
        set ip6-range-number {integer}
        set name {string}
        set obsolete {integer}
        set singularity {integer}
    next
end
```

## Parameters

+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter              | Description                       | Type               | Size               | Default            |
+========================+===================================+====================+====================+====================+
| database               | Database name this Internet       | option             | \-                 | isdb               |
|                        | Service belongs to. Read-only.    |                    |                    |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                        | +-------------+--------------------------------------------------------+                         |
|                        | | Option      | Description                                            |                         |
|                        | +=============+========================================================+                         |
|                        | | *isdb*      | Internet Service Database.                             |                         |
|                        | +-------------+--------------------------------------------------------+                         |
|                        | | *irdb*      | Internet RRR Database.                                 |                         |
|                        | +-------------+--------------------------------------------------------+                         |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| direction              | How this service may be used in a | option             | \-                 | both               |
|                        | firewall policy (source,          |                    |                    |                    |
|                        | destination or both). Read-only.  |                    |                    |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                        | +-------------+--------------------------------------------------------+                         |
|                        | | Option      | Description                                            |                         |
|                        | +=============+========================================================+                         |
|                        | | *src*       | As source in the firewall policy.                      |                         |
|                        | +-------------+--------------------------------------------------------+                         |
|                        | | *dst*       | As destination in the firewall policy.                 |                         |
|                        | +-------------+--------------------------------------------------------+                         |
|                        | | *both*      | Both directions in the firewall policy.                |                         |
|                        | +-------------+--------------------------------------------------------+                         |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| extra-ip-range-number  | Extra number of IPv4 ranges.      | integer            | Minimum value: 0   | 0                  |
|                        | Read-only.                        |                    | Maximum value:     |                    |
|                        |                                   |                    | 4294967295         |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| extra-ip6-range-number | Extra number of IPv6 ranges.      | integer            | Minimum value: 0   | 0                  |
|                        | Read-only.                        |                    | Maximum value:     |                    |
|                        |                                   |                    | 4294967295         |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| icon-id                | Icon ID of Internet Service.      | integer            | Minimum value: 0   | 0                  |
|                        | Read-only.                        |                    | Maximum value:     |                    |
|                        |                                   |                    | 4294967295         |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| id                     | Internet Service ID. Read-only.   | integer            | Minimum value: 0   | 0                  |
|                        |                                   |                    | Maximum value:     |                    |
|                        |                                   |                    | 4294967295         |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip-number              | Total number of IPv4 addresses.   | integer            | Minimum value: 0   | 0                  |
|                        | Read-only.                        |                    | Maximum value:     |                    |
|                        |                                   |                    | 4294967295         |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip-range-number        | Number of IPv4 ranges. Read-only. | integer            | Minimum value: 0   | 0                  |
|                        |                                   |                    | Maximum value:     |                    |
|                        |                                   |                    | 4294967295         |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-range-number       | Number of IPv6 ranges. Read-only. | integer            | Minimum value: 0   | 0                  |
|                        |                                   |                    | Maximum value:     |                    |
|                        |                                   |                    | 4294967295         |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                   | Internet Service name. Read-only. | string             | Maximum length: 63 |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| obsolete               | Indicates whether the Internet    | integer            | Minimum value: 0   | 0                  |
|                        | Service can be used. Read-only.   |                    | Maximum value: 255 |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| singularity            | Singular level of the Internet    | integer            | Minimum value: 0   | 0                  |
|                        | Service. Read-only.               |                    | Maximum value:     |                    |
|                        |                                   |                    | 65535              |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+

