# config user password-policy

Configure user password policy.

## Syntax

```
config user password-policy
    Description: Configure user password policy.
    edit <name>
        set expire-days {integer}
        set expired-password-renewal [enable|disable]
        set warn-days {integer}
    next
end
```

## Parameters

+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                | Description                       | Type               | Size               | Default            |
+==========================+===================================+====================+====================+====================+
| expire-days              | Time in days before the user\'s   | integer            | Minimum value: 0   | 180                |
|                          | password expires.                 |                    | Maximum value: 999 |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| expired-password-renewal | Enable/disable renewal of a       | option             | \-                 | disable            |
|                          | password that already is expired. |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | Option      | Description                                            |                         |
|                          | +=============+========================================================+                         |
|                          | | *enable*    | Enable renewal of a password that already is expired.  |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *disable*   | Disable renewal of a password that already is expired. |                         |
|                          | +-------------+--------------------------------------------------------+                         |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                     | Password policy name.             | string             | Maximum length: 35 |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| warn-days                | Time in days before a password    | integer            | Minimum value: 0   | 15                 |
|                          | expiration warning message is     |                    | Maximum value: 30  |                    |
|                          | displayed to the user upon login. |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+

