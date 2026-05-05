# config wireless-controller ssid-policy

Configure WiFi SSID policies.

## Syntax

```
config wireless-controller ssid-policy
    Description: Configure WiFi SSID policies.
    edit <name>
        set description {var-string}
        set vlan {string}
    next
end
```

## Parameters

+-------------+-----------------------------------+------------+---------+---------+
| Parameter   | Description                       | Type       | Size    | Default |
+=============+===================================+============+=========+=========+
| description | Description.                      | var-string | Maximum |         |
|             |                                   |            | length: |         |
|             |                                   |            | 255     |         |
+-------------+-----------------------------------+------------+---------+---------+
| name        | Name.                             | string     | Maximum |         |
|             |                                   |            | length: |         |
|             |                                   |            | 35      |         |
+-------------+-----------------------------------+------------+---------+---------+
| vlan        | VLAN interface name.              | string     | Maximum |         |
|             |                                   |            | length: |         |
|             |                                   |            | 35      |         |
+-------------+-----------------------------------+------------+---------+---------+

