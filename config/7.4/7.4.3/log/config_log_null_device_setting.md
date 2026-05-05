# config log null-device setting

Settings for null device logging.

## Syntax

```
config log null-device setting
    Description: Settings for null device logging.
    set status [enable|disable]
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| status    | Enable/disable statistics         | option             | \-                 | disable            |
|           | collection for when no external   |                    |                    |                    |
|           | logging destination, such as      |                    |                    |                    |
|           | FortiAnalyzer, is present (data   |                    |                    |                    |
|           | is not saved).                    |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable statistics collection for when no external      |                         |
|           | |             | logging destination, such as FortiAnalyzer, is present |                         |
|           | |             | (data is not saved).                                   |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable statistics collection for when no external     |                         |
|           | |             | logging destination, such as FortiAnalyzer, is present |                         |
|           | |             | (data is not saved).                                   |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+--------------------------------------------------------------------------------------------------+

