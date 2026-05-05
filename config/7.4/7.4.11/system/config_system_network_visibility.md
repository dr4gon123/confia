# config system network-visibility

Configure network visibility settings.

## Syntax

```
config system network-visibility
    Description: Configure network visibility settings.
    set destination-hostname-visibility [disable|enable]
    set destination-location [disable|enable]
    set destination-visibility [disable|enable]
    set hostname-limit {integer}
    set hostname-ttl {integer}
    set source-location [disable|enable]
end
```

## Parameters

+---------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                       | Description                       | Type               | Size               | Default            |
+=================================+===================================+====================+====================+====================+
| destination-hostname-visibility | Enable/disable logging of         | option             | \-                 | enable             |
|                                 | destination hostname visibility.  |                    |                    |                    |
+---------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                 | +-------------+--------------------------------------------------------+                         |
|                                 | | Option      | Description                                            |                         |
|                                 | +=============+========================================================+                         |
|                                 | | *disable*   | Disable logging of destination hostname visibility.    |                         |
|                                 | +-------------+--------------------------------------------------------+                         |
|                                 | | *enable*    | Enable logging of destination hostname visibility.     |                         |
|                                 | +-------------+--------------------------------------------------------+                         |
+---------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| destination-location            | Enable/disable logging of         | option             | \-                 | enable             |
|                                 | destination geographical location |                    |                    |                    |
|                                 | visibility.                       |                    |                    |                    |
+---------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                 | +-------------+--------------------------------------------------------+                         |
|                                 | | Option      | Description                                            |                         |
|                                 | +=============+========================================================+                         |
|                                 | | *disable*   | Disable logging of destination geographical location   |                         |
|                                 | |             | visibility.                                            |                         |
|                                 | +-------------+--------------------------------------------------------+                         |
|                                 | | *enable*    | Enable logging of destination geographical location    |                         |
|                                 | |             | visibility.                                            |                         |
|                                 | +-------------+--------------------------------------------------------+                         |
+---------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| destination-visibility          | Enable/disable logging of         | option             | \-                 | enable             |
|                                 | destination visibility.           |                    |                    |                    |
+---------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                 | +-------------+--------------------------------------------------------+                         |
|                                 | | Option      | Description                                            |                         |
|                                 | +=============+========================================================+                         |
|                                 | | *disable*   | Disable logging of destination visibility.             |                         |
|                                 | +-------------+--------------------------------------------------------+                         |
|                                 | | *enable*    | Enable logging of destination visibility.              |                         |
|                                 | +-------------+--------------------------------------------------------+                         |
+---------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| hostname-limit                  | Limit of the number of hostname   | integer            | Minimum value: 0   | 5000               |
|                                 | table entries (0 - 50000).        |                    | Maximum value:     |                    |
|                                 |                                   |                    | 50000              |                    |
+---------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| hostname-ttl                    | TTL of hostname table entries     | integer            | Minimum value: 60  | 86400              |
|                                 | (60 - 86400).                     |                    | Maximum value:     |                    |
|                                 |                                   |                    | 86400              |                    |
+---------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-location                 | Enable/disable logging of source  | option             | \-                 | enable             |
|                                 | geographical location visibility. |                    |                    |                    |
+---------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                 | +-------------+--------------------------------------------------------+                         |
|                                 | | Option      | Description                                            |                         |
|                                 | +=============+========================================================+                         |
|                                 | | *disable*   | Disable logging of source geographical location        |                         |
|                                 | |             | visibility.                                            |                         |
|                                 | +-------------+--------------------------------------------------------+                         |
|                                 | | *enable*    | Enable logging of source geographical location         |                         |
|                                 | |             | visibility.                                            |                         |
|                                 | +-------------+--------------------------------------------------------+                         |
+---------------------------------+--------------------------------------------------------------------------------------------------+

