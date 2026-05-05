# config system password-policy

Configure password policy for locally defined administrator passwords and IPsec VPN pre-shared keys.

## Syntax

```
config system password-policy
    Description: Configure password policy for locally defined administrator passwords and IPsec VPN pre-shared keys.
    set apply-to {option1}, {option2}, ...
    set expire-day {integer}
    set expire-status [enable|disable]
    set login-lockout-upon-weaker-encryption [enable|disable]
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

+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                            | Description                       | Type                   | Size                   | Default                |
+======================================+===================================+========================+========================+========================+
| apply-to                             | Apply password policy to          | option                 | \-                     | admin-password         |
|                                      | administrator passwords or IPsec  |                        |                        |                        |
|                                      | pre-shared keys or both. Separate |                        |                        |                        |
|                                      | entries with a space.             |                        |                        |                        |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                      | +-----------------------+--------------------------------------------------------+                           |
|                                      | | Option                | Description                                            |                           |
|                                      | +=======================+========================================================+                           |
|                                      | | *admin-password*      | Apply to administrator passwords.                      |                           |
|                                      | +-----------------------+--------------------------------------------------------+                           |
|                                      | | *ipsec-preshared-key* | Apply to IPsec pre-shared keys.                        |                           |
|                                      | +-----------------------+--------------------------------------------------------+                           |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| expire-day                           | Number of days after which        | integer                | Minimum value: 1       | 90                     |
|                                      | passwords expire (1 - 999 days,   |                        | Maximum value: 999     |                        |
|                                      | default = 90).                    |                        |                        |                        |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| expire-status                        | Enable/disable password           | option                 | \-                     | disable                |
|                                      | expiration.                       |                        |                        |                        |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                      | +-------------+--------------------------------------------------------+                                     |
|                                      | | Option      | Description                                            |                                     |
|                                      | +=============+========================================================+                                     |
|                                      | | *enable*    | Passwords expire after expire-day days.                |                                     |
|                                      | +-------------+--------------------------------------------------------+                                     |
|                                      | | *disable*   | Passwords do not expire.                               |                                     |
|                                      | +-------------+--------------------------------------------------------+                                     |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| login-lockout-upon-weaker-encryption | Enable/disable administrative     | option                 | \-                     | disable                |
|                                      | user login lockout upon downgrade |                        |                        |                        |
|                                      | (defaut = disable). If enabled,   |                        |                        |                        |
|                                      | changing the FortiOS firmware to  |                        |                        |                        |
|                                      | a version where safer passwords   |                        |                        |                        |
|                                      | are unsupported will lock out     |                        |                        |                        |
|                                      | administrative users.             |                        |                        |                        |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                      | +-------------+--------------------------------------------------------+                                     |
|                                      | | Option      | Description                                            |                                     |
|                                      | +=============+========================================================+                                     |
|                                      | | *enable*    | Enable administrative user login lockout upon          |                                     |
|                                      | |             | downgrade.                                             |                                     |
|                                      | +-------------+--------------------------------------------------------+                                     |
|                                      | | *disable*   | Disable administrative user login lockout upon         |                                     |
|                                      | |             | downgrade.                                             |                                     |
|                                      | +-------------+--------------------------------------------------------+                                     |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-lower-case-letter                | Minimum number of lowercase       | integer                | Minimum value: 0       | 1                      |
|                                      | characters in password (0 - 128,  |                        | Maximum value: 128     |                        |
|                                      | default = 1).                     |                        |                        |                        |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-non-alphanumeric                 | Minimum number of                 | integer                | Minimum value: 0       | 1                      |
|                                      | non-alphanumeric characters in    |                        | Maximum value: 128     |                        |
|                                      | password (0 - 128, default = 1).  |                        |                        |                        |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-number                           | Minimum number of numeric         | integer                | Minimum value: 0       | 1                      |
|                                      | characters in password (0 - 128,  |                        | Maximum value: 128     |                        |
|                                      | default = 1).                     |                        |                        |                        |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-upper-case-letter                | Minimum number of uppercase       | integer                | Minimum value: 0       | 1                      |
|                                      | characters in password (0 - 128,  |                        | Maximum value: 128     |                        |
|                                      | default = 1).                     |                        |                        |                        |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| minimum-length                       | Minimum password length (12 -     | integer                | Minimum value: 12      | 12                     |
|                                      | 128, default = 12).               |                        | Maximum value: 128     |                        |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| reuse-password                       | Enable/disable reuse of password. | option                 | \-                     | enable                 |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                      | +-------------+--------------------------------------------------------+                                     |
|                                      | | Option      | Description                                            |                                     |
|                                      | +=============+========================================================+                                     |
|                                      | | *enable*    | Administrators are allowed to reuse the same password  |                                     |
|                                      | |             | up to a limit.                                         |                                     |
|                                      | +-------------+--------------------------------------------------------+                                     |
|                                      | | *disable*   | Administrators must create a new password.             |                                     |
|                                      | +-------------+--------------------------------------------------------+                                     |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| reuse-password-limit                 | Number of times passwords can be  | integer                | Minimum value: 0       | 0                      |
|                                      | reused (0 - 20, default = 0. If   |                        | Maximum value: 20      |                        |
|                                      | set to 0, can reuse password an   |                        |                        |                        |
|                                      | unlimited number of times.).      |                        |                        |                        |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| status                               | Enable/disable setting a password | option                 | \-                     | enable                 |
|                                      | policy for locally defined        |                        |                        |                        |
|                                      | administrator passwords and IPsec |                        |                        |                        |
|                                      | VPN pre-shared keys.              |                        |                        |                        |
+--------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                      | +-------------+--------------------------------------------------------+                                     |
|                                      | | Option      | Description                                            |                                     |
|                                      | +=============+========================================================+                                     |
|                                      | | *enable*    | Enable password policy.                                |                                     |
|                                      | +-------------+--------------------------------------------------------+                                     |
|                                      | | *disable*   | Disable password policy.                               |                                     |
|                                      | +-------------+--------------------------------------------------------+                                     |
+--------------------------------------+--------------------------------------------------------------------------------------------------------------+

