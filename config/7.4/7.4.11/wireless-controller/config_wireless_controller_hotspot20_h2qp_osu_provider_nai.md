# config wireless-controller hotspot20 h2qp-osu-provider-nai

Configure online sign up (OSU) provider NAI list.

## Syntax

```
config wireless-controller hotspot20 h2qp-osu-provider-nai
    Description: Configure online sign up (OSU) provider NAI list.
    edit <name>
        config nai-list
            Description: OSU NAI list.
            edit <name>
                set osu-nai {string}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | OSU provider NAI ID.              | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

