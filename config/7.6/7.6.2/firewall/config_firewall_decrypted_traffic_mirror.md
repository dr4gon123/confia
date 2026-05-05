# config firewall decrypted-traffic-mirror

Configure decrypted traffic mirror.

## Syntax

```
config firewall decrypted-traffic-mirror
    Description: Configure decrypted traffic mirror.
    edit <name>
        set dstmac {mac-address}
        set interface <name1>, <name2>, ...
        set traffic-source [client|server|...]
        set traffic-type {option1}, {option2}, ...
    next
end
```

## Parameters

+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter      | Description                       | Type               | Size               | Default            |
+================+===================================+====================+====================+====================+
| dstmac         | Set destination MAC address for   | mac-address        | Not Specified      | ff:ff:ff:ff:ff:ff  |
|                | mirrored traffic.                 |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface      | Decrypted traffic mirror          | string             | Maximum length: 79 |                    |
| `<name>`       | interface.                        |                    |                    |                    |
|                |                                   |                    |                    |                    |
|                | Decrypted traffic mirror          |                    |                    |                    |
|                | interface.                        |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| name           | Name.                             | string             | Maximum length: 35 |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| traffic-source | Source of decrypted traffic to be | option             | \-                 | client             |
|                | mirrored.                         |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                | +-------------+--------------------------------------------------------+                         |
|                | | Option      | Description                                            |                         |
|                | +=============+========================================================+                         |
|                | | *client*    | Mirror client side decrypted traffic.                  |                         |
|                | +-------------+--------------------------------------------------------+                         |
|                | | *server*    | Mirror server side decrypted traffic.                  |                         |
|                | +-------------+--------------------------------------------------------+                         |
|                | | *both*      | Mirror both client and server side decrypted traffic.  |                         |
|                | +-------------+--------------------------------------------------------+                         |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| traffic-type   | Types of decrypted traffic to be  | option             | \-                 | ssl                |
|                | mirrored.                         |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                | +-------------+--------------------------------------------------------+                         |
|                | | Option      | Description                                            |                         |
|                | +=============+========================================================+                         |
|                | | *ssl*       | Mirror decrypted SSL traffic.                          |                         |
|                | +-------------+--------------------------------------------------------+                         |
|                | | *ssh*       | Mirror decrypted SSH traffic.                          |                         |
|                | +-------------+--------------------------------------------------------+                         |
+----------------+--------------------------------------------------------------------------------------------------+

