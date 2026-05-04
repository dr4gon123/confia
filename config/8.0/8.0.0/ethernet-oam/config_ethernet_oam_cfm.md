# config ethernet-oam cfm

CFM domain configuration.

## Syntax

```
config ethernet-oam cfm
    Description: CFM domain configuration.
    edit <domain-id>
        set domain-level {integer}
        set domain-name {text}
        config service
            Description: CFM service configuration.
            edit <service-id>
                set cos {integer}
                set interface {string}
                set mepid {integer}
                set message-interval [100|1000|...]
                set sender-id [None|Hostname]
                set service-name {text}
            next
        end
    next
end
```

## Parameters

+--------------+-----------------------------------+---------+------------+---------+
| Parameter    | Description                       | Type    | Size       | Default |
+==============+===================================+=========+============+=========+
| domain-id    | OAM domain ID.                    | integer | Minimum    | 0       |
|              |                                   |         | value: 0   |         |
|              |                                   |         | Maximum    |         |
|              |                                   |         | value:     |         |
|              |                                   |         | 4294967295 |         |
+--------------+-----------------------------------+---------+------------+---------+
| domain-level | OAM maintenance level (0 - 7)     | integer | Minimum    | 7       |
|              |                                   |         | value: 0   |         |
|              |                                   |         | Maximum    |         |
|              |                                   |         | value: 7   |         |
+--------------+-----------------------------------+---------+------------+---------+
| domain-name  | OAM domain name. Maintenance      | text    | Not        |         |
|              | Domain Identifier (MDID).         |         | Specified  |         |
+--------------+-----------------------------------+---------+------------+---------+

