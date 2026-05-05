# config router key-chain

Configure key-chain.

## Syntax

```
config router key-chain
    Description: Configure key-chain.
    edit <name>
        config key
            Description: Configuration method to edit key settings.
            edit <id>
                set accept-lifetime {user}
                set send-lifetime {user}
                set key-string {password}
                set algorithm [md5|hmac-sha1|...]
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | Key-chain name.                   | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

