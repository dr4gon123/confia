# config wanopt profile

Configure WAN optimization profiles.

## Syntax

```
config wanopt profile
    Description: Configure WAN optimization profiles.
    edit <name>
        set auth-group {string}
        config cifs
            Description: Enable/disable CIFS (Windows sharing) WAN Optimization and configure CIFS WAN Optimization features.
            set byte-caching [enable|disable]
            set prefer-chunking [dynamic|fix]
            set protocol-opt [protocol|tcp]
            set secure-tunnel [enable|disable]
            set status [enable|disable]
            set tunnel-sharing [shared|express-shared|...]
        end
        set comments {var-string}
        config ftp
            Description: Enable/disable FTP WAN Optimization and configure FTP WAN Optimization features.
            set byte-caching [enable|disable]
            set prefer-chunking [dynamic|fix]
            set protocol-opt [protocol|tcp]
            set secure-tunnel [enable|disable]
            set status [enable|disable]
            set tunnel-sharing [shared|express-shared|...]
        end
        config http
            Description: Enable/disable HTTP WAN Optimization and configure HTTP WAN Optimization features.
            set byte-caching [enable|disable]
            set prefer-chunking [dynamic|fix]
            set protocol-opt [protocol|tcp]
            set secure-tunnel [enable|disable]
            set ssl [enable|disable]
            set status [enable|disable]
            set tunnel-sharing [shared|express-shared|...]
        end
        config mapi
            Description: Enable/disable MAPI email WAN Optimization and configure MAPI WAN Optimization features.
            set byte-caching [enable|disable]
            set secure-tunnel [enable|disable]
            set status [enable|disable]
            set tunnel-sharing [shared|express-shared|...]
        end
        config tcp
            Description: Enable/disable TCP WAN Optimization and configure TCP WAN Optimization features.
            set byte-caching [enable|disable]
            set byte-caching-opt [mem-only|mem-disk]
            set port {user}
            set secure-tunnel [enable|disable]
            set ssl [enable|disable]
            set ssl-port {user}
            set status [enable|disable]
            set tunnel-sharing [shared|express-shared|...]
        end
        set transparent [enable|disable]
    next
end
```

## Parameters

+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter   | Description                       | Type               | Size               | Default            |
+=============+===================================+====================+====================+====================+
| auth-group  | Optionally add an authentication  | string             | Maximum length: 35 |                    |
|             | group to restrict access to the   |                    |                    |                    |
|             | WAN Optimization tunnel to peers  |                    |                    |                    |
|             | in the authentication group.      |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| comments    | Comment.                          | var-string         | Maximum length:    |                    |
|             |                                   |                    | 255                |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| name        | Profile name.                     | string             | Maximum length: 35 |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| transparent | Enable/disable transparent mode.  | option             | \-                 | enable             |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *enable*    | Determine if WAN Optimization changes client packet    |                         |
|             | |             | source addresses. Affects the routing configuration on |                         |
|             | |             | the server network.                                    |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *disable*   | Disable transparent mode. Client packets source        |                         |
|             | |             | addresses are changed to the source address of the     |                         |
|             | |             | FortiGate internal interface. Similar to source NAT.   |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+--------------------------------------------------------------------------------------------------+

