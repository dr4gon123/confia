# config wireless-controller mpsk-profile

Configure MPSK profile.

## Syntax

```
config wireless-controller mpsk-profile
    Description: Configure MPSK profile.
    edit <name>
        set mpsk-concurrent-clients {integer}
        config mpsk-group
            Description: List of multiple PSK groups.
            edit <name>
                set vlan-type [no-vlan|fixed-vlan]
                set vlan-id {integer}
                config mpsk-key
                    Description: List of multiple PSK entries.
                    edit <name>
                        set mac {mac-address}
                        set passphrase {password}
                        set concurrent-client-limit-type [default|unlimited|...]
                        set concurrent-clients {integer}
                        set comment {var-string}
                        set mpsk-schedules <name1>, <name2>, ...
                    next
                end
            next
        end
    next
end
```

## Parameters

+-------------------------+-----------------------------------+---------+---------+---------+
| Parameter               | Description                       | Type    | Size    | Default |
+=========================+===================================+=========+=========+=========+
| mpsk-concurrent-clients | Maximum number of concurrent      | integer | Minimum | 0       |
|                         | clients that connect using the    |         | value:  |         |
|                         | same passphrase in multiple PSK   |         | 0       |         |
|                         | authentication.                   |         | Maximum |         |
|                         |                                   |         | value:  |         |
|                         |                                   |         | 65535   |         |
+-------------------------+-----------------------------------+---------+---------+---------+
| name                    | MPSK profile name.                | string  | Maximum |         |
|                         |                                   |         | length: |         |
|                         |                                   |         | 35      |         |
+-------------------------+-----------------------------------+---------+---------+---------+

