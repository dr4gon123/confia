# config wireless-controller mpsk-profile

Configure MPSK profile.

## Syntax

```
config wireless-controller mpsk-profile
    Description: Configure MPSK profile.
    edit <name>
        set mpsk-concurrent-clients {integer}
        set mpsk-external-server {string}
        set mpsk-external-server-auth [enable|disable]
        config mpsk-group
            Description: List of multiple PSK groups.
            edit <name>
                config mpsk-key
                    Description: List of multiple PSK entries.
                    edit <name>
                        set comment {var-string}
                        set concurrent-client-limit-type [default|unlimited|...]
                        set concurrent-clients {integer}
                        set key-type [wpa2-personal|wpa3-sae]
                        set mac {mac-address}
                        set mpsk-schedules <name1>, <name2>, ...
                        set passphrase {password}
                        set sae-password {password}
                        set sae-pk [enable|disable]
                        set sae-private-key {string}
                    next
                end
                set vlan-id {integer}
                set vlan-type [no-vlan|fixed-vlan]
            next
        end
        set mpsk-type [wpa2-personal|wpa3-sae|...]
    next
end
```

## Parameters

+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                 | Description                       | Type                   | Size                   | Default                |
+===========================+===================================+========================+========================+========================+
| mpsk-concurrent-clients   | Maximum number of concurrent      | integer                | Minimum value: 0       | 0                      |
|                           | clients that connect using the    |                        | Maximum value: 65535   |                        |
|                           | same passphrase in multiple PSK   |                        |                        |                        |
|                           | authentication (0 - 65535,        |                        |                        |                        |
|                           | default = 0, meaning no           |                        |                        |                        |
|                           | limitation).                      |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| mpsk-external-server      | RADIUS server to be used to       | string                 | Maximum length: 35     |                        |
|                           | authenticate MPSK users.          |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| mpsk-external-server-auth | Enable/Disable MPSK external      | option                 | \-                     | disable                |
|                           | server authentication (default =  |                        |                        |                        |
|                           | disable).                         |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *enable*    | Enable MPSK external server authentication.            |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *disable*   | Disable MPSK external server authentication.           |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| mpsk-type                 | Select the security type of keys  | option                 | \-                     | wpa2-personal          |
|                           | for this profile.                 |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-----------------------+--------------------------------------------------------+                           |
|                           | | Option                | Description                                            |                           |
|                           | +=======================+========================================================+                           |
|                           | | *wpa2-personal*       | WPA2 personal.                                         |                           |
|                           | +-----------------------+--------------------------------------------------------+                           |
|                           | | *wpa3-sae*            | WPA3 SAE.                                              |                           |
|                           | +-----------------------+--------------------------------------------------------+                           |
|                           | | *wpa3-sae-transition* | WPA3 SAE transition.                                   |                           |
|                           | +-----------------------+--------------------------------------------------------+                           |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| name                      | MPSK profile name.                | string                 | Maximum length: 35     |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+

