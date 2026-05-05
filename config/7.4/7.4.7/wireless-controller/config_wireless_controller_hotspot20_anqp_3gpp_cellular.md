# config wireless-controller hotspot20 anqp-3gpp-cellular

Configure 3GPP public land mobile network (PLMN).

## Syntax

```
config wireless-controller hotspot20 anqp-3gpp-cellular
    Description: Configure 3GPP public land mobile network (PLMN).
    edit <name>
        config mcc-mnc-list
            Description: Mobile Country Code and Mobile Network Code configuration.
            edit <id>
                set mcc {string}
                set mnc {string}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | 3GPP PLMN name.                   | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

