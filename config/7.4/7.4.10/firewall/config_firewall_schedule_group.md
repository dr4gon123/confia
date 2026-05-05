# config firewall schedule group

Schedule group configuration.

## Syntax

```
config firewall schedule group
    Description: Schedule group configuration.
    edit <name>
        set color {integer}
        set fabric-object [enable|disable]
        set member <name1>, <name2>, ...
    next
end
```

## Parameters

+---------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter     | Description                       | Type               | Size               | Default            |
+===============+===================================+====================+====================+====================+
| color         | Color of icon on the GUI.         | integer            | Minimum value: 0   | 0                  |
|               |                                   |                    | Maximum value: 32  |                    |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
| fabric-object | Security Fabric global object     | option             | \-                 | disable            |
|               | setting.                          |                    |                    |                    |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
|               | +-------------+--------------------------------------------------------+                         |
|               | | Option      | Description                                            |                         |
|               | +=============+========================================================+                         |
|               | | *enable*    | Object is set as a security fabric-wide global object. |                         |
|               | +-------------+--------------------------------------------------------+                         |
|               | | *disable*   | Object is local to this security fabric member.        |                         |
|               | +-------------+--------------------------------------------------------+                         |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
| member        | Schedules added to the schedule   | string             | Maximum length: 79 |                    |
| `<name>`      | group.                            |                    |                    |                    |
|               |                                   |                    |                    |                    |
|               | Schedule name.                    |                    |                    |                    |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
| name          | Schedule group name.              | string             | Maximum length: 31 |                    |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+

