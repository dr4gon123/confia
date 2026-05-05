# config firewall ttl-policy

Configure TTL policies.

## Syntax

```
config firewall ttl-policy
    Description: Configure TTL policies.
    edit <id>
        set action [accept|deny]
        set schedule {string}
        set service <name1>, <name2>, ...
        set srcaddr <name1>, <name2>, ...
        set srcintf {string}
        set status [enable|disable]
        set ttl {user}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| action    | Action to be performed on traffic | option             | \-                 | deny               |
|           | matching this policy (default =   |                    |                    |                    |
|           | deny).                            |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *accept*    | Allow traffic matching this policy.                    |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *deny*      | Deny or block traffic matching this policy.            |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| id        | ID.                               | integer            | Minimum value: 0   | 0                  |
|           |                                   |                    | Maximum value:     |                    |
|           |                                   |                    | 4294967295         |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| schedule  | Schedule object from available    | string             | Maximum length: 35 |                    |
|           | options.                          |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| service   | Service object(s) from available  | string             | Maximum length: 79 |                    |
| `<name>`  | options. Separate multiple names  |                    |                    |                    |
|           | with a space.                     |                    |                    |                    |
|           |                                   |                    |                    |                    |
|           | Service name.                     |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| srcaddr   | Source address object(s) from     | string             | Maximum length: 79 |                    |
| `<name>`  | available options. Separate       |                    |                    |                    |
|           | multiple names with a space.      |                    |                    |                    |
|           |                                   |                    |                    |                    |
|           | Address name.                     |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| srcintf   | Source interface name from        | string             | Maximum length: 35 |                    |
|           | available interfaces.             |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| status    | Enable/disable this TTL policy.   | option             | \-                 | enable             |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable this TTL policy.                                |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable this TTL policy.                               |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| ttl       | Value/range to match against the  | user               | Not Specified      |                    |
|           | packet\'s Time to Live value      |                    |                    |                    |
|           | (format: ttl\[ - ttl_high\], 1 -  |                    |                    |                    |
|           | 255).                             |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+

