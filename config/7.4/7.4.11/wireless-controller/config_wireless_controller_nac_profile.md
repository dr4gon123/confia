# config wireless-controller nac-profile

Configure WiFi network access control (NAC) profiles.

## Syntax

```
config wireless-controller nac-profile
    Description: Configure WiFi network access control (NAC) profiles.
    edit <name>
        set comment {var-string}
        set onboarding-vlan {string}
    next
end
```

## Parameters

+-----------------+-----------------------------------+------------+---------+---------+
| Parameter       | Description                       | Type       | Size    | Default |
+=================+===================================+============+=========+=========+
| comment         | Comment.                          | var-string | Maximum |         |
|                 |                                   |            | length: |         |
|                 |                                   |            | 255     |         |
+-----------------+-----------------------------------+------------+---------+---------+
| name            | Name.                             | string     | Maximum |         |
|                 |                                   |            | length: |         |
|                 |                                   |            | 35      |         |
+-----------------+-----------------------------------+------------+---------+---------+
| onboarding-vlan | VLAN interface name.              | string     | Maximum |         |
|                 |                                   |            | length: |         |
|                 |                                   |            | 35      |         |
+-----------------+-----------------------------------+------------+---------+---------+

