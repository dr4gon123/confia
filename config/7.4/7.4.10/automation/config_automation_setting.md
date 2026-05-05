# config automation setting

Automation setting configuration.

## Syntax

```
config automation setting
    Description: Automation setting configuration.
    set fabric-sync [enable|disable]
    set max-concurrent-stitches {integer}
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
| fabric-sync             | Enable/disable synchronization of | option             | \-                 | enable             |
|                         | automation settings with security |                    |                    |                    |
|                         | fabric.                           |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Synchronize automation setting with security fabric.   |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Do not synchronize automation setting with security    |                         |
|                         | |             | fabric.                                                |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-concurrent-stitches | Maximum number of automation      | integer            | Minimum value: 32  | 512 \*\*           |
|                         | stitches that are allowed to run  |                    | Maximum value:     |                    |
|                         | concurrently.                     |                    | 1024 \*\*          |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+

