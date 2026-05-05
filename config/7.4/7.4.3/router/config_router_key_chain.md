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
                set algorithm [md5|hmac-sha1|...]
                set key-string {password}
                set send-lifetime {user}
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

