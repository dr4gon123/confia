# config switch-controller acl ingress

Configure ingress ACL policies to be applied on managed FortiSwitch ports.

## Syntax

```
config switch-controller acl ingress
    Description: Configure ingress ACL policies to be applied on managed FortiSwitch ports.
    edit <id>
        config action
            Description: ACL actions.
            set count [enable|disable]
            set drop [enable|disable]
        end
        config classifier
            Description: ACL classifiers.
            set dst-ip-prefix {ipv4-classnet}
            set dst-mac {mac-address}
            set src-ip-prefix {ipv4-classnet}
            set src-mac {mac-address}
            set vlan {integer}
        end
        set description {string}
    next
end
```

## Parameters

+-------------+-----------------------------------+---------+------------+---------+
| Parameter   | Description                       | Type    | Size       | Default |
+=============+===================================+=========+============+=========+
| description | Description for the ACL policy.   | string  | Maximum    |         |
|             |                                   |         | length: 63 |         |
+-------------+-----------------------------------+---------+------------+---------+
| id          | ACL ID.                           | integer | Minimum    | 0       |
|             |                                   |         | value: 0   |         |
|             |                                   |         | Maximum    |         |
|             |                                   |         | value:     |         |
|             |                                   |         | 4294967295 |         |
+-------------+-----------------------------------+---------+------------+---------+

