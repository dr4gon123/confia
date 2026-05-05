# config endpoint-control settings

Configure endpoint control settings.

## Syntax

```
config endpoint-control settings
    Description: Configure endpoint control settings.
    set override [enable|disable]
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| override  | Override global EMS table for     | option             | \-                 | disable            |
|           | this VDOM.                        |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable Overriding global EMS table.                    |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable Overriding global EMS table.                   |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+--------------------------------------------------------------------------------------------------+

