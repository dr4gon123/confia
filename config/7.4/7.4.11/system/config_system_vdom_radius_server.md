# config system vdom-radius-server

Configure a RADIUS server to use as a RADIUS Single Sign On (RSSO) server for this VDOM.

## Syntax

```
config system vdom-radius-server
    Description: Configure a RADIUS server to use as a RADIUS Single Sign On (RSSO) server for this VDOM.
    edit <name>
        set radius-server-vdom {string}
        set status [enable|disable]
    next
end
```

## Parameters

+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter          | Description                       | Type               | Size               | Default            |
+====================+===================================+====================+====================+====================+
| name               | Name of the VDOM that you are     | string             | Maximum length: 31 |                    |
|                    | adding the RADIUS server to.      |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| radius-server-vdom | Use this option to select another | string             | Maximum length: 31 |                    |
|                    | VDOM containing a VDOM RSSO       |                    |                    |                    |
|                    | RADIUS server to use for the      |                    |                    |                    |
|                    | current VDOM.                     |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status             | Enable/disable the RSSO RADIUS    | option             | \-                 | disable            |
|                    | server for this VDOM.             |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable the RSSO RADIUS server for this VDOM.           |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable the RSSO RADIUS server for this VDOM.          |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+--------------------------------------------------------------------------------------------------+

