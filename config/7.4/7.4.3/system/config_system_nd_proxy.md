# config system nd-proxy

Configure IPv6 neighbor discovery proxy (RFC4389).

## Syntax

```
config system nd-proxy
    Description: Configure IPv6 neighbor discovery proxy (RFC4389).
    set member <interface-name1>, <interface-name2>, ...
    set status [enable|disable]
end
```

## Parameters

+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter          | Description                       | Type               | Size               | Default            |
+====================+===================================+====================+====================+====================+
| member             | Interfaces using the neighbor     | string             | Maximum length: 79 |                    |
| `<interface-name>` | discovery proxy.                  |                    |                    |                    |
|                    |                                   |                    |                    |                    |
|                    | Interface name.                   |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status             | Enable/disable neighbor discovery | option             | \-                 | disable            |
|                    | proxy.                            |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable neighbor discovery proxy.                       |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable neighbor discovery proxy.                      |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+--------------------------------------------------------------------------------------------------+

