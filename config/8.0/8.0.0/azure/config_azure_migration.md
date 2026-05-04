# config azure migration

Azure post live migration process.

## Syntax

```
config azure migration
    Description: Azure post live migration process.
    set auto-reboot [enable|disable]
end
```

## Parameters

+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter   | Description                       | Type               | Size               | Default            |
+=============+===================================+====================+====================+====================+
| auto-reboot | Enable/disable automatic reboot   | option             | \-                 | disable            |
|             | after a live migration finishes   |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *enable*    | Enable automatic reboot after live migration           |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *disable*   | Disable automatic reboot after live migration          |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+--------------------------------------------------------------------------------------------------+

