# config system geoip-override

Configure geographical location mapping for IP address(es) to override mappings from FortiGuard.

## Syntax

```
config system geoip-override
    Description: Configure geographical location mapping for IP address(es) to override mappings from FortiGuard.
    edit <name>
        set country-id {string}
        set description {string}
        config ip-range
            Description: Table of IP ranges assigned to country.
            edit <id>
                set start-ip {ipv4-address}
                set end-ip {ipv4-address}
            next
        end
        config ip6-range
            Description: Table of IPv6 ranges assigned to country.
            edit <id>
                set start-ip {ipv6-address}
                set end-ip {ipv6-address}
            next
        end
    next
end
```

## Parameters

+-------------+-----------------------------------+--------+---------+---------+
| Parameter   | Description                       | Type   | Size    | Default |
+=============+===================================+========+=========+=========+
| country-id  | Two character Country ID code.    | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 2       |         |
+-------------+-----------------------------------+--------+---------+---------+
| description | Description.                      | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 127     |         |
+-------------+-----------------------------------+--------+---------+---------+
| name        | Location name.                    | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 63      |         |
+-------------+-----------------------------------+--------+---------+---------+

