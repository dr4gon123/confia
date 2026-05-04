# config webfilter ftgd-local-cat

Configure FortiGuard Web Filter local categories.

## Syntax

```
config webfilter ftgd-local-cat
    Description: Configure FortiGuard Web Filter local categories.
    edit <desc>
        set id {integer}
        set status [enable|disable]
        set urlfilter-table {integer}
    next
end
```

## Parameters

+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter       | Description                       | Type               | Size               | Default            |
+=================+===================================+====================+====================+====================+
| desc            | Local category description.       | string             | Maximum length: 79 |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| id              | Local category ID.                | integer            | Minimum value: 140 | 0                  |
|                 |                                   |                    | Maximum value: 191 |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| status          | Enable/disable the local          | option             | \-                 | enable             |
|                 | category.                         |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *enable*    | Enable the local category.                             |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *disable*   | Disable the local category.                            |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| urlfilter-table | Local URL list.                   | integer            | Minimum value: 0   | 0                  |
| \*              |                                   |                    | Maximum value:     |                    |
|                 |                                   |                    | 4294967295         |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+

