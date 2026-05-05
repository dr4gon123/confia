# config system security-rating controls

Settings for individual Security Rating controls.

## Syntax

```
config system security-rating controls
    Description: Settings for individual Security Rating controls.
    edit <name>
        set display-insight [enable|disable]
        set display-report [enable|disable]
    next
end
```

## Parameters

+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter       | Description                       | Type               | Size               | Default            |
+=================+===================================+====================+====================+====================+
| display-insight | Enable/disable displaying the     | option             | \-                 | enable             |
|                 | Security Rating control as an     |                    |                    |                    |
|                 | insight across the GUI.           |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *enable*    | Enable displaying the Security Rating control as an    |                         |
|                 | |             | insight across the GUI.                                |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *disable*   | Disable displaying the Security Rating control as an   |                         |
|                 | |             | insight across the GUI.                                |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| display-report  | Enable/disable displaying the     | option             | \-                 | enable             |
|                 | Security Rating control in the    |                    |                    |                    |
|                 | default report.                   |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *enable*    | Enable displaying the Security Rating control in the   |                         |
|                 | |             | default report.                                        |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *disable*   | Disable displaying the Security Rating control in the  |                         |
|                 | |             | default report.                                        |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| name            | Security Rating control name.     | string             | Maximum length: 35 |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+

