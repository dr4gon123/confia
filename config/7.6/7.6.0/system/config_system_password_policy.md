# config system password-policy

Configure password policy for locally defined administrator passwords and IPsec VPN pre-shared keys.

## Syntax

```
config system password-policy
    Description: Configure password policy for locally defined administrator passwords and IPsec VPN pre-shared keys.
    set apply-to {option1}, {option2}, ...
    set expire-day {integer}
    set expire-status [enable|disable]
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

+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter             | Description                       | Type                   | Size                   | Default                |
+=======================+===================================+========================+========================+========================+
| apply-to              | Apply password policy to          | option                 | \-                     | admin-password         |
|                       | administrator passwords or IPsec  |                        |                        |                        |
|                       | pre-shared keys or both. Separate |                        |                        |                        |
|                       | entries with a space.             |                        |                        |                        |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                       | +-----------------------+--------------------------------------------------------+                           |
|                       | | Option                | Description                                            |                           |
|                       | +=======================+========================================================+                           |
|                       | | *admin-password*      | Apply to administrator passwords.                      |                           |
|                       | +-----------------------+--------------------------------------------------------+                           |
|                       | | *ipsec-preshared-key* | Apply to IPsec pre-shared keys.                        |                           |
|                       | +-----------------------+--------------------------------------------------------+                           |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| expire-day            | Number of days after which        | integer                | Minimum value: 1       | 90                     |
|                       | passwords expire (1 - 999 days,   |                        | Maximum value: 999     |                        |
|                       | default = 90).                    |                        |                        |                        |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| expire-status         | Enable/disable password           | option                 | \-                     | disable                |
|                       | expiration.                       |                        |                        |                        |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                       | +-------------+--------------------------------------------------------+                                     |
|                       | | Option      | Description                                            |                                     |
|                       | +=============+========================================================+                                     |
|                       | | *enable*    | Passwords expire after expire-day days.                |                                     |
|                       | +-------------+--------------------------------------------------------+                                     |
|                       | | *disable*   | Passwords do not expire.                               |                                     |
|                       | +-------------+--------------------------------------------------------+                                     |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-change-characters | Minimum number of unique          | integer                | Minimum value: 0       | 0                      |
|                       | characters in new password which  |                        | Maximum value: 128     |                        |
|                       | do not exist in old password (0 - |                        |                        |                        |
|                       | 128, default = 0. This attribute  |                        |                        |                        |
|                       | overrides reuse-password if both  |                        |                        |                        |
|                       | are enabled).                     |                        |                        |                        |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-lower-case-letter | Minimum number of lowercase       | integer                | Minimum value: 0       | 0                      |
|                       | characters in password (0 - 128,  |                        | Maximum value: 128     |                        |
|                       | default = 0).                     |                        |                        |                        |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-non-alphanumeric  | Minimum number of                 | integer                | Minimum value: 0       | 0                      |
|                       | non-alphanumeric characters in    |                        | Maximum value: 128     |                        |
|                       | password (0 - 128, default = 0).  |                        |                        |                        |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-number            | Minimum number of numeric         | integer                | Minimum value: 0       | 0                      |
|                       | characters in password (0 - 128,  |                        | Maximum value: 128     |                        |
|                       | default = 0).                     |                        |                        |                        |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| min-upper-case-letter | Minimum number of uppercase       | integer                | Minimum value: 0       | 0                      |
|                       | characters in password (0 - 128,  |                        | Maximum value: 128     |                        |
|                       | default = 0).                     |                        |                        |                        |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| minimum-length        | Minimum password length (8 - 128, | integer                | Minimum value: 8       | 8                      |
|                       | default = 8).                     |                        | Maximum value: 128     |                        |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| reuse-password        | Enable/disable reuse of password. | option                 | \-                     | enable                 |
|                       | If both reuse-password and        |                        |                        |                        |
|                       | min-change-characters are         |                        |                        |                        |
|                       | enabled, min-change-characters    |                        |                        |                        |
|                       | overrides.                        |                        |                        |                        |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                       | +-------------+--------------------------------------------------------+                                     |
|                       | | Option      | Description                                            |                                     |
|                       | +=============+========================================================+                                     |
|                       | | *enable*    | Administrators are allowed to reuse the same password  |                                     |
|                       | |             | up to a limit.                                         |                                     |
|                       | +-------------+--------------------------------------------------------+                                     |
|                       | | *disable*   | Administrators must create a new password.             |                                     |
|                       | +-------------+--------------------------------------------------------+                                     |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| reuse-password-limit  | Number of times passwords can be  | integer                | Minimum value: 0       | 0                      |
|                       | reused (0 - 20, default = 0. If   |                        | Maximum value: 20      |                        |
|                       | set to 0, can reuse password an   |                        |                        |                        |
|                       | unlimited number of times.).      |                        |                        |                        |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| status                | Enable/disable setting a password | option                 | \-                     | disable                |
|                       | policy for locally defined        |                        |                        |                        |
|                       | administrator passwords and IPsec |                        |                        |                        |
|                       | VPN pre-shared keys.              |                        |                        |                        |
+-----------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                       | +-------------+--------------------------------------------------------+                                     |
|                       | | Option      | Description                                            |                                     |
|                       | +=============+========================================================+                                     |
|                       | | *enable*    | Enable password policy.                                |                                     |
|                       | +-------------+--------------------------------------------------------+                                     |
|                       | | *disable*   | Disable password policy.                               |                                     |
|                       | +-------------+--------------------------------------------------------+                                     |
+-----------------------+--------------------------------------------------------------------------------------------------------------+

