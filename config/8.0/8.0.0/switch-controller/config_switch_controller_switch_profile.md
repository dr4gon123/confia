# config switch-controller switch-profile

Configure FortiSwitch switch profile.

## Syntax

```
config switch-controller switch-profile
    Description: Configure FortiSwitch switch profile.
    edit <name>
        set login [enable|disable]
        set login-passwd {password}
        set login-passwd-override [enable|disable]
        set private-data-encryption [enable|disable]
        set private-data-encryption-key {password}
        set revision-backup-on-logout [enable|disable]
        set revision-backup-on-upgrade [enable|disable]
    next
end
```

## Parameters

+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                   | Description                       | Type               | Size               | Default            |
+=============================+===================================+====================+====================+====================+
| login                       | Enable/disable FortiSwitch serial | option             | \-                 | enable             |
|                             | console.                          |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable FortiSwitch serial console.                     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable FortiSwitch serial console.                    |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| login-passwd                | Login password of managed         | password           | Not Specified      |                    |
|                             | FortiSwitch.                      |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| login-passwd-override       | Enable/disable overriding the     | option             | \-                 | disable            |
|                             | admin administrator password for  |                    |                    |                    |
|                             | a managed FortiSwitch with the    |                    |                    |                    |
|                             | FortiGate admin administrator     |                    |                    |                    |
|                             | account password.                 |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Override a managed FortiSwitch\'s admin administrator  |                         |
|                             | |             | password.                                              |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Use the managed FortiSwitch admin administrator        |                         |
|                             | |             | account password.                                      |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                        | FortiSwitch Profile name.         | string             | Maximum length: 35 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| private-data-encryption \*  | Enable/disable private data       | option             | \-                 | disable            |
|                             | encryption for non-admin          |                    |                    |                    |
|                             | passwords.                        |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable private data encryption.                        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable private data encryption.                       |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| private-data-encryption-key | Private data encryption key       | password           | Not Specified      |                    |
| \*                          | length (32 hexadecimal numbers).  |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| revision-backup-on-logout   | Enable/disable automatic revision | option             | \-                 | disable            |
|                             | backup upon logout from           |                    |                    |                    |
|                             | FortiSwitch.                      |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable automatic revision backup upon logout from      |                         |
|                             | |             | FortiSwitch.                                           |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable automatic revision backup upon logout from     |                         |
|                             | |             | FortiSwitch.                                           |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| revision-backup-on-upgrade  | Enable/disable automatic revision | option             | \-                 | disable            |
|                             | backup upon FortiSwitch image     |                    |                    |                    |
|                             | upgrade.                          |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable automatic revision backup upon FortiSwitch      |                         |
|                             | |             | image upgrade.                                         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable automatic revision backup upon FortiSwitch     |                         |
|                             | |             | image upgrade.                                         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+--------------------------------------------------------------------------------------------------+

