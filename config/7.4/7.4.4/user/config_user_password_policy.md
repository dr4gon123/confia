# config user password-policy

Configure user password policy.

## Syntax

```
config user password-policy
    Description: Configure user password policy.
    edit <name>
        set expire-days {integer}
        set expire-status [enable|disable]
        set expired-password-renewal [enable|disable]
        set min-change-characters {integer}
        set min-lower-case-letter {integer}
        set min-non-alphanumeric {integer}
        set min-number {integer}
        set min-upper-case-letter {integer}
        set minimum-length {integer}
        set reuse-password [enable|disable]
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
| expire-status            | Enable/disable password           | option             | \-                 | disable            |
|                          | expiration.                       |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | Option      | Description                                            |                         |
|                          | +=============+========================================================+                         |
|                          | | *enable*    | Passwords expire after expire-day days.                |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *disable*   | Passwords do not expire.                               |                         |
|                          | +-------------+--------------------------------------------------------+                         |
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
| min-change-characters    | Minimum number of unique          | integer            | Minimum value: 0   | 0                  |
|                          | characters in new password which  |                    | Maximum value: 128 |                    |
|                          | do not exist in old password.     |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| min-lower-case-letter    | Minimum number of lowercase       | integer            | Minimum value: 0   | 0                  |
|                          | characters in password.           |                    | Maximum value: 128 |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| min-non-alphanumeric     | Minimum number of                 | integer            | Minimum value: 0   | 0                  |
|                          | non-alphanumeric characters in    |                    | Maximum value: 128 |                    |
|                          | password.                         |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| min-number               | Minimum number of numeric         | integer            | Minimum value: 0   | 0                  |
|                          | characters in password.           |                    | Maximum value: 128 |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| min-upper-case-letter    | Minimum number of uppercase       | integer            | Minimum value: 0   | 0                  |
|                          | characters in password.           |                    | Maximum value: 128 |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| minimum-length           | Minimum password length.          | integer            | Minimum value: 8   | 8                  |
|                          |                                   |                    | Maximum value: 128 |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                     | Password policy name.             | string             | Maximum length: 35 |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| reuse-password           | Enable/disable reuse of password. | option             | \-                 | enable             |
|                          | If both reuse-password and        |                    |                    |                    |
|                          | min-change-characters are         |                    |                    |                    |
|                          | enabled, min-change-characters    |                    |                    |                    |
|                          | overrides.                        |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | Option      | Description                                            |                         |
|                          | +=============+========================================================+                         |
|                          | | *enable*    | Users are allowed to reuse the same password.          |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *disable*   | Users must create a new password.                      |                         |
|                          | +-------------+--------------------------------------------------------+                         |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| warn-days                | Time in days before a password    | integer            | Minimum value: 0   | 15                 |
|                          | expiration warning message is     |                    | Maximum value: 30  |                    |
|                          | displayed to the user upon login. |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+

