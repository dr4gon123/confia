# config system password-policy-guest-admin

Configure the password policy for guest administrators.

## Syntax

```
config system password-policy-guest-admin
    Description: Configure the password policy for guest administrators.
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
    set status [enable|disable]
end
```

## Parameters

+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| Parameter             | Description                       | Type                    | Size                    | Default                 |
+=======================+===================================+=========================+=========================+=========================+
| apply-to              | Guest administrator to which this | option                  | \-                      | guest-admin-password    |
|                       | password policy applies.          |                         |                         |                         |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                       | +------------------------+--------------------------------------------------------+                             |
|                       | | Option                 | Description                                            |                             |
|                       | +========================+========================================================+                             |
|                       | | *guest-admin-password* | Apply to guest administrator password.                 |                             |
|                       | +------------------------+--------------------------------------------------------+                             |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| expire-day            | Number of days after which        | integer                 | Minimum value: 1        | 90                      |
|                       | passwords expire (1 - 999 days,   |                         | Maximum value: 999      |                         |
|                       | default = 90).                    |                         |                         |                         |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| expire-status         | Enable/disable password           | option                  | \-                      | disable                 |
|                       | expiration.                       |                         |                         |                         |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                       | +-------------+--------------------------------------------------------+                                        |
|                       | | Option      | Description                                            |                                        |
|                       | +=============+========================================================+                                        |
|                       | | *enable*    | Passwords expire after expire-day days.                |                                        |
|                       | +-------------+--------------------------------------------------------+                                        |
|                       | | *disable*   | Passwords do not expire.                               |                                        |
|                       | +-------------+--------------------------------------------------------+                                        |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| min-change-characters | Minimum number of unique          | integer                 | Minimum value: 0        | 0                       |
|                       | characters in new password which  |                         | Maximum value: 128      |                         |
|                       | do not exist in old password (0 - |                         |                         |                         |
|                       | 128, default = 0. This attribute  |                         |                         |                         |
|                       | overrides reuse-password if both  |                         |                         |                         |
|                       | are enabled).                     |                         |                         |                         |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| min-lower-case-letter | Minimum number of lowercase       | integer                 | Minimum value: 0        | 0                       |
|                       | characters in password (0 - 128,  |                         | Maximum value: 128      |                         |
|                       | default = 0).                     |                         |                         |                         |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| min-non-alphanumeric  | Minimum number of                 | integer                 | Minimum value: 0        | 0                       |
|                       | non-alphanumeric characters in    |                         | Maximum value: 128      |                         |
|                       | password (0 - 128, default = 0).  |                         |                         |                         |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| min-number            | Minimum number of numeric         | integer                 | Minimum value: 0        | 0                       |
|                       | characters in password (0 - 128,  |                         | Maximum value: 128      |                         |
|                       | default = 0).                     |                         |                         |                         |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| min-upper-case-letter | Minimum number of uppercase       | integer                 | Minimum value: 0        | 0                       |
|                       | characters in password (0 - 128,  |                         | Maximum value: 128      |                         |
|                       | default = 0).                     |                         |                         |                         |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| minimum-length        | Minimum password length (8 - 128, | integer                 | Minimum value: 8        | 8                       |
|                       | default = 8).                     |                         | Maximum value: 128      |                         |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| reuse-password        | Enable/disable reuse of password. | option                  | \-                      | enable                  |
|                       | If both reuse-password and        |                         |                         |                         |
|                       | min-change-characters are         |                         |                         |                         |
|                       | enabled, min-change-characters    |                         |                         |                         |
|                       | overrides.                        |                         |                         |                         |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                       | +-------------+--------------------------------------------------------+                                        |
|                       | | Option      | Description                                            |                                        |
|                       | +=============+========================================================+                                        |
|                       | | *enable*    | Administrators are allowed to reuse the same password. |                                        |
|                       | +-------------+--------------------------------------------------------+                                        |
|                       | | *disable*   | Administrators must create a new password.             |                                        |
|                       | +-------------+--------------------------------------------------------+                                        |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| status                | Enable/disable setting a password | option                  | \-                      | disable                 |
|                       | policy for locally defined        |                         |                         |                         |
|                       | administrator passwords and IPsec |                         |                         |                         |
|                       | VPN pre-shared keys.              |                         |                         |                         |
+-----------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                       | +-------------+--------------------------------------------------------+                                        |
|                       | | Option      | Description                                            |                                        |
|                       | +=============+========================================================+                                        |
|                       | | *enable*    | Enable password policy.                                |                                        |
|                       | +-------------+--------------------------------------------------------+                                        |
|                       | | *disable*   | Disable password policy.                               |                                        |
|                       | +-------------+--------------------------------------------------------+                                        |
+-----------------------+-----------------------------------------------------------------------------------------------------------------+

