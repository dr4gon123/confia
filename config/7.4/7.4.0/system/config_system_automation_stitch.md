# config system automation-stitch

Automation stitches.

## Syntax

```
config system automation-stitch
    Description: Automation stitches.
    edit <name>
        config actions
            Description: Configure stitch actions.
            edit <id>
                set action {string}
                set delay {integer}
                set required [enable|disable]
            next
        end
        set description {var-string}
        set destination <name1>, <name2>, ...
        set status [enable|disable]
        set trigger {string}
    next
end
```

## Parameters

+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter   | Description                       | Type               | Size               | Default            |
+=============+===================================+====================+====================+====================+
| description | Description.                      | var-string         | Maximum length:    |                    |
|             |                                   |                    | 255                |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| destination | Serial number/HA group-name of    | string             | Maximum length: 79 |                    |
| `<name>`    | destination devices.              |                    |                    |                    |
|             |                                   |                    |                    |                    |
|             | Destination name.                 |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| name        | Name.                             | string             | Maximum length: 35 |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| status      | Enable/disable this stitch.       | option             | \-                 | enable             |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *enable*    | Enable stitch.                                         |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *disable*   | Disable stitch.                                        |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| trigger     | Trigger name.                     | string             | Maximum length: 35 |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+

