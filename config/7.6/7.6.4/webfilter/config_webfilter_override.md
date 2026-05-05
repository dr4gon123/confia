# config webfilter override

Configure FortiGuard Web Filter administrative overrides.

## Syntax

```
config webfilter override
    Description: Configure FortiGuard Web Filter administrative overrides.
    edit <id>
        set expires {user}
        set initiator {string}
        set ip {ipv4-address}
        set ip6 {ipv6-address}
        set new-profile {string}
        set old-profile {string}
        set scope [user|user-group|...]
        set status [enable|disable]
        set user {string}
        set user-group {string}
    next
end
```

## Parameters

+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter   | Description                       | Type                | Size                | Default             |
+=============+===================================+=====================+=====================+=====================+
| expires     | Override expiration date and      | user                | Not Specified       | 1969/12/31 16:00:00 |
|             | time, from 5 minutes to 365 from  |                     |                     |                     |
|             | now (format: yyyy/mm/dd           |                     |                     |                     |
|             | hh:mm:ss).                        |                     |                     |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| id          | Override rule ID.                 | integer             | Minimum value: 0    | 0                   |
|             |                                   |                     | Maximum value:      |                     |
|             |                                   |                     | 4294967295          |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| initiator   | Initiating user of override       | string              | Maximum length: 64  |                     |
|             | (read-only setting).              |                     |                     |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| ip          | IPv4 address which the override   | ipv4-address        | Not Specified       | 0.0.0.0             |
|             | applies.                          |                     |                     |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| ip6         | IPv6 address which the override   | ipv6-address        | Not Specified       | ::                  |
|             | applies.                          |                     |                     |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| new-profile | Name of the new web filter        | string              | Maximum length: 47  |                     |
|             | profile used by the override.     |                     |                     |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| old-profile | Name of the web filter profile    | string              | Maximum length: 47  |                     |
|             | which the override applies.       |                     |                     |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| scope       | Override either the specific      | option              | \-                  | user                |
|             | user, user group, IPv4 address,   |                     |                     |                     |
|             | or IPv6 address.                  |                     |                     |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
|             | +--------------+--------------------------------------------------------+                           |
|             | | Option       | Description                                            |                           |
|             | +==============+========================================================+                           |
|             | | *user*       | Override the specified user.                           |                           |
|             | +--------------+--------------------------------------------------------+                           |
|             | | *user-group* | Override the specified user group.                     |                           |
|             | +--------------+--------------------------------------------------------+                           |
|             | | *ip*         | Override the specified IP address.                     |                           |
|             | +--------------+--------------------------------------------------------+                           |
|             | | *ip6*        | Override the specified IPv6 address.                   |                           |
|             | +--------------+--------------------------------------------------------+                           |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| status      | Enable/disable override rule.     | option              | \-                  | disable             |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
|             | +-------------+--------------------------------------------------------+                            |
|             | | Option      | Description                                            |                            |
|             | +=============+========================================================+                            |
|             | | *enable*    | Enable override rule.                                  |                            |
|             | +-------------+--------------------------------------------------------+                            |
|             | | *disable*   | Disable override rule.                                 |                            |
|             | +-------------+--------------------------------------------------------+                            |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| user        | Name of the user which the        | string              | Maximum length: 64  |                     |
|             | override applies.                 |                     |                     |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| user-group  | Specify the user group for which  | string              | Maximum length: 63  |                     |
|             | the override applies.             |                     |                     |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+

