# config vpn ipsec forticlient

Configure FortiClient policy realm.

## Syntax

```
config vpn ipsec forticlient
    Description: Configure FortiClient policy realm.
    edit <realm>
        set phase2name {string}
        set status [enable|disable]
        set usergroupname {string}
    next
end
```

## Parameters

+---------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter     | Description                       | Type               | Size               | Default            |
+===============+===================================+====================+====================+====================+
| phase2name    | Phase 2 tunnel name that you      | string             | Maximum length: 35 |                    |
|               | defined in the FortiClient dialup |                    |                    |                    |
|               | configuration.                    |                    |                    |                    |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
| realm         | FortiClient realm name.           | string             | Maximum length: 35 |                    |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
| status        | Enable/disable this FortiClient   | option             | \-                 | enable             |
|               | configuration.                    |                    |                    |                    |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
|               | +-------------+--------------------------------------------------------+                         |
|               | | Option      | Description                                            |                         |
|               | +=============+========================================================+                         |
|               | | *enable*    | Enable setting.                                        |                         |
|               | +-------------+--------------------------------------------------------+                         |
|               | | *disable*   | Disable setting.                                       |                         |
|               | +-------------+--------------------------------------------------------+                         |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
| usergroupname | User group name for FortiClient   | string             | Maximum length: 35 |                    |
|               | users.                            |                    |                    |                    |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+

