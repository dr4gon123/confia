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
                config mpsk-key
                    Description: List of multiple PSK entries.
                    edit <name>
                        set comment {var-string}
                        set concurrent-client-limit-type [default|unlimited|...]
                        set concurrent-clients {integer}
                        set mac {mac-address}
                        set mpsk-schedules <name1>, <name2>, ...
                        set passphrase {password}
                    next
                end
                set vlan-id {integer}
                set vlan-type [no-vlan|fixed-vlan]
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

