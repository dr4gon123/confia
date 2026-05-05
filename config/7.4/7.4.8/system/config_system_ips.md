# config system ips

Configure IPS system settings.

## Syntax

```
config system ips
    Description: Configure IPS system settings.
    set override-signature-hold-by-id [enable|disable]
    set signature-hold-time {user}
end
```

## Parameters

+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                     | Description                       | Type               | Size               | Default            |
+===============================+===================================+====================+====================+====================+
| override-signature-hold-by-id | Enable/disable override of hold   | option             | \-                 | enable             |
|                               | of triggering signatures that are |                    |                    |                    |
|                               | specified by IDs regardless of    |                    |                    |                    |
|                               | hold.                             |                    |                    |                    |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                               | +-------------+--------------------------------------------------------+                         |
|                               | | Option      | Description                                            |                         |
|                               | +=============+========================================================+                         |
|                               | | *enable*    | Allow the signatures specified by IDs to be triggered  |                         |
|                               | |             | even if they are on hold.                              |                         |
|                               | +-------------+--------------------------------------------------------+                         |
|                               | | *disable*   | Do not trigger the signatures that are on hold.        |                         |
|                               | +-------------+--------------------------------------------------------+                         |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| signature-hold-time           | Time to hold and monitor IPS      | user               | Not Specified      | 0h                 |
|                               | signatures. Format \<#d##h\> (day |                    |                    |                    |
|                               | range: 0 - 7, hour range: 0 - 23, |                    |                    |                    |
|                               | max hold time: 7d0h, default hold |                    |                    |                    |
|                               | time: 0d0h).                      |                    |                    |                    |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+

