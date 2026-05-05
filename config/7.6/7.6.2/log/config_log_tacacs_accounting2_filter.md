# config log tacacs+accounting2 filter

Settings for TACACS+ accounting events filter.

## Syntax

```
config log tacacs+accounting2 filter
    Description: Settings for TACACS+ accounting events filter.
    set cli-cmd-audit [enable|disable]
    set config-change-audit [enable|disable]
    set login-audit [enable|disable]
end
```

## Parameters

+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter           | Description                       | Type               | Size               | Default            |
+=====================+===================================+====================+====================+====================+
| cli-cmd-audit       | Enable/disable TACACS+ accounting | option             | \-                 | disable            |
|                     | for CLI commands audit.           |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *enable*    | Enable TACACS+ accounting for CLI commands audit.      |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | Disable TACACS+ accounting for CLI commands audit.     |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| config-change-audit | Enable/disable TACACS+ accounting | option             | \-                 | enable             |
|                     | for configuration change events   |                    |                    |                    |
|                     | audit.                            |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *enable*    | Enable TACACS+ accounting for configuration change     |                         |
|                     | |             | events audit.                                          |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | Disable TACACS+ accounting for configuration change    |                         |
|                     | |             | events audit.                                          |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| login-audit         | Enable/disable TACACS+ accounting | option             | \-                 | enable             |
|                     | for login events audit.           |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *enable*    | Enable TACACS+ accounting for login events audit.      |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | Disable TACACS+ accounting for login events audit.     |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+--------------------------------------------------------------------------------------------------+

