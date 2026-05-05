# config system password-policy

Configure password policy for locally defined administrator passwords and IPsec VPN pre-shared keys.

## Syntax

```
config system password-policy
    Description: Configure password policy for locally defined administrator passwords and IPsec VPN pre-shared keys.
    set apply-to {option1}, {option2}, ...
    set expire-day {integer}
    set expire-status [enable|disable]
    set login-lockout-upon-downgrade [enable|disable]
    set min-change-characters {integer}
    set min-lower-case-letter {integer}
    set min-non-alphanumeric {integer}
    set min-number {integer}
    set min-upper-case-letter {integer}
    set minimum-length {integer}
    set reuse-password [enable|disable]
    set reuse-password-limit {integer}
    set status [enable|disable]
end
```

## Parameters

+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                    | Description                       | Type                   | Size                   | Default                |
+==============================+===================================+========================+========================+========================+
| apply-to                     | Apply password policy to          | option                 | \-                     | admin-password         |
|                              | administrator passwords or IPsec  |                        |                        |                        |
|                              | pre-shared keys or both. Separate |                        |                        |                        |
|                              | entries with a space.             |                        |                        |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                              | +-----------------------+--------------------------------------------------------+                           |
|                              | | Option                | Description                                            |                           |
|                              | +=======================+========================================================+                           |
|                              | | *admin-password*      | Apply to administrator passwords.                      |                           |
|                              | +-----------------------+--------------------------------------------------------+                           |
|                              | | *ipsec-preshared-key* | Apply to IPsec pre-shared keys.                        |                           |
|                              | +-----------------------+--------------------------------------------------------+                           |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| expire-day                   | Number of days after which        | integer                | Minimum value: 1       | 90                     |
|                              | passwords expire.                 |                        | Maximum value: 999     |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| expire-status                | Enable/disable password           | option                 | \-                     | disable                |
|                              | expiration.                       |                        |                        |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                              | +-------------+--------------------------------------------------------+                                     |
|                              | | Option      | Description                                            |                                     |
|                              | +=============+========================================================+                                     |
|                              | | *enable*    | Passwords expire after expire-day days.                |                                     |
|                              | +-------------+--------------------------------------------------------+                                     |
|                              | | *disable*   | Passwords do not expire.                               |                                     |
|                              | +-------------+--------------------------------------------------------+                                     |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| login-lockout-upon-downgrade | Enable/disable administrative     | option                 | \-                     | disable                |
|                              | user login lockout upon downgrade |                        |                        |                        |
|                              | (defaut = disable). If enabled,   |                        |                        |                        |
|                              | downgrading the FortiOS firmware  |                        |                        |                        |
|                              | to a lower version where safer    |                        |                        |                        |
|                              | passwords are unsupported will    |                        |                        |                        |
|                              | lock out administrative users.    |                        |                        |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                              | +-------------+--------------------------------------------------------+                                     |
|                              | | Option      | Description                                            |                                     |
|                              | +=============+========================================================+                                     |
|                              | | *enable*    | Enable administrative user login lockout upon          |                                     |
|                              | |             | downgrade.                                             |                                     |
|                              | +-------------+--------------------------------------------------------+                                     |
|                              | | *disable*   | Disable administrative user login lockout upon         |                                     |
|                              | |             | downgrade.                                             |                                     |
|                              | +-------------+--------------------------------------------------------+                                     |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-change-characters        | Minimum number of unique          | integer                | Minimum value: 0       | 0                      |
|                              | characters in new password which  |                        | Maximum value: 128     |                        |
|                              | do not exist in old password.     |                        |                        |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-lower-case-letter        | Minimum number of lowercase       | integer                | Minimum value: 0       | 0                      |
|                              | characters in password.           |                        | Maximum value: 128     |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-non-alphanumeric         | Minimum number of                 | integer                | Minimum value: 0       | 0                      |
|                              | non-alphanumeric characters in    |                        | Maximum value: 128     |                        |
|                              | password.                         |                        |                        |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-number                   | Minimum number of numeric         | integer                | Minimum value: 0       | 0                      |
|                              | characters in password.           |                        | Maximum value: 128     |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-upper-case-letter        | Minimum number of uppercase       | integer                | Minimum value: 0       | 0                      |
|                              | characters in password.           |                        | Maximum value: 128     |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| minimum-length               | Minimum password length.          | integer                | Minimum value: 8       | 8                      |
|                              |                                   |                        | Maximum value: 128     |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| reuse-password               | Enable/disable reuse of password. | option                 | \-                     | enable                 |
|                              | If both reuse-password and        |                        |                        |                        |
|                              | min-change-characters are         |                        |                        |                        |
|                              | enabled, min-change-characters    |                        |                        |                        |
|                              | overrides.                        |                        |                        |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                              | +-------------+--------------------------------------------------------+                                     |
|                              | | Option      | Description                                            |                                     |
|                              | +=============+========================================================+                                     |
|                              | | *enable*    | Administrators are allowed to reuse the same password  |                                     |
|                              | |             | up to a limit.                                         |                                     |
|                              | +-------------+--------------------------------------------------------+                                     |
|                              | | *disable*   | Administrators must create a new password.             |                                     |
|                              | +-------------+--------------------------------------------------------+                                     |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| reuse-password-limit         | Number of times passwords can be  | integer                | Minimum value: 0       | 0                      |
|                              | reused.                           |                        | Maximum value: 20      |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| status                       | Enable/disable setting a password | option                 | \-                     | disable                |
|                              | policy for locally defined        |                        |                        |                        |
|                              | administrator passwords and IPsec |                        |                        |                        |
|                              | VPN pre-shared keys.              |                        |                        |                        |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                              | +-------------+--------------------------------------------------------+                                     |
|                              | | Option      | Description                                            |                                     |
|                              | +=============+========================================================+                                     |
|                              | | *enable*    | Enable password policy.                                |                                     |
|                              | +-------------+--------------------------------------------------------+                                     |
|                              | | *disable*   | Disable password policy.                               |                                     |
|                              | +-------------+--------------------------------------------------------+                                     |
+------------------------------+--------------------------------------------------------------------------------------------------------------+

