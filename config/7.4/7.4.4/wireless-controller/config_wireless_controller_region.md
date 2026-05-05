# config wireless-controller region

Configure FortiAP regions (for floor plans and maps).

## Syntax

```
config wireless-controller region
    Description: Configure FortiAP regions (for floor plans and maps).
    edit <name>
        set comments {string}
        set grayscale [enable|disable]
        set opacity {integer}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| comments  | Comments.                         | string             | Maximum length:    |                    |
|           |                                   |                    | 1027               |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| grayscale | Region image grayscale.           | option             | \-                 | disable            |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable region image grayscale.                         |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable region image grayscale.                        |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| name      | FortiAP region name.              | string             | Maximum length: 35 |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| opacity   | Region image opacity.             | integer            | Minimum value: 0   | 100                |
|           |                                   |                    | Maximum value: 100 |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+

