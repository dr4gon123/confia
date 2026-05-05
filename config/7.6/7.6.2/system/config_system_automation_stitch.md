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
        set condition <name1>, <name2>, ...
        set condition-logic [and|or]
        set description {var-string}
        set destination <name1>, <name2>, ...
        set status [enable|disable]
        set trigger {string}
    next
end
```

## Parameters

+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter       | Description                       | Type               | Size               | Default            |
+=================+===================================+====================+====================+====================+
| condition       | Automation conditions.            | string             | Maximum length: 79 |                    |
| `<name>`        |                                   |                    |                    |                    |
|                 | Condition name.                   |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| condition-logic | Apply AND/OR logic to the         | option             | \-                 | and                |
|                 | specified automation conditions.  |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *and*       | All specified conditions must be met.                  |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *or*        | At least one specified condition needs to be met.      |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| description     | Description.                      | var-string         | Maximum length:    |                    |
|                 |                                   |                    | 255                |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| destination     | Serial number/HA group-name of    | string             | Maximum length: 79 |                    |
| `<name>`        | destination devices.              |                    |                    |                    |
|                 |                                   |                    |                    |                    |
|                 | Destination name.                 |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| name            | Name.                             | string             | Maximum length: 35 |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| status          | Enable/disable this stitch.       | option             | \-                 | enable             |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *enable*    | Enable stitch.                                         |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *disable*   | Disable stitch.                                        |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| trigger         | Trigger name.                     | string             | Maximum length: 35 |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+

