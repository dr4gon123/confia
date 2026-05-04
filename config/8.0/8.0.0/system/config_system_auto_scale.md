# config system auto-scale

Configure system auto-scaling.

## Syntax

```
config system auto-scale
    Description: Configure system auto-scaling.
    set callback-url {var-string}
    set cloud-mode {string}
    set hb-interval {integer}
    set primary-ip {ipv4-address-any}
    set psksecret {password-3}
    set role [primary|secondary]
    set status [enable|disable]
    set sync-interface {string}
end
```

## Parameters

+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter      | Description                       | Type               | Size               | Default            |
+================+===================================+====================+====================+====================+
| callback-url   | Callback URL.                     | var-string         | Maximum length:    |                    |
|                |                                   |                    | 4095               |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| cloud-mode     | Auto-scaling cloud mode.          | string             | Maximum length: 31 |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| hb-interval    | Time between sending heartbeat    | integer            | Minimum value: 5   | 10                 |
|                | packets (5 - 120 seconds).        |                    | Maximum value: 120 |                    |
|                | Increase to reduce false          |                    |                    |                    |
|                | positives.                        |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| primary-ip     | Primary IP address.               | ipv4-address-any   | Not Specified      | 0.0.0.0            |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| psksecret      | Pre-shared secret for             | password-3         | Not Specified      |                    |
|                | auto-scaling authentication       |                    |                    |                    |
|                | (ASCII string or hexadecimal      |                    |                    |                    |
|                | encoded with a leading 0x).       |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| role           | Auto-scaling role.                | option             | \-                 | secondary          |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                | +-------------+--------------------------------------------------------+                         |
|                | | Option      | Description                                            |                         |
|                | +=============+========================================================+                         |
|                | | *primary*   | Primary in auto-scaling.                               |                         |
|                | +-------------+--------------------------------------------------------+                         |
|                | | *secondary* | Secondary in auto-scaling.                             |                         |
|                | +-------------+--------------------------------------------------------+                         |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| status         | Auto-Scaling status.              | option             | \-                 | disable            |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                | +-------------+--------------------------------------------------------+                         |
|                | | Option      | Description                                            |                         |
|                | +=============+========================================================+                         |
|                | | *enable*    | Enable system auto-scaling                             |                         |
|                | +-------------+--------------------------------------------------------+                         |
|                | | *disable*   | Disable system auto-scaling.                           |                         |
|                | +-------------+--------------------------------------------------------+                         |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| sync-interface | Interface used for                | string             | Maximum length: 15 |                    |
|                | synchronization.                  |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+

