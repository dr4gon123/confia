# config extension-controller fortigate-profile

FortiGate connector profile configuration.

## Syntax

```
config extension-controller fortigate-profile
    Description: FortiGate connector profile configuration.
    edit <name>
        set extension {option}
        set id {integer}
        config lan-extension
            Description: FortiGate connector LAN extension configuration.
            set backhaul-interface {string}
            set backhaul-ip {string}
            set ipsec-tunnel {string}
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter | Description                       | Type                | Size                | Default             |
+===========+===================================+=====================+=====================+=====================+
| extension | Extension option. Read-only.      | option              | \-                  | lan-extension       |
+-----------+-----------------------------------+---------------------+---------------------+---------------------+
|           | +-----------------+--------------------------------------------------------+                        |
|           | | Option          | Description                                            |                        |
|           | +=================+========================================================+                        |
|           | | *lan-extension* | LAN extension.                                         |                        |
|           | +-----------------+--------------------------------------------------------+                        |
+-----------+-----------------------------------+---------------------+---------------------+---------------------+
| id        | ID.                               | integer             | Minimum value: 0    | 32                  |
|           |                                   |                     | Maximum value:      |                     |
|           |                                   |                     | 102400000           |                     |
+-----------+-----------------------------------+---------------------+---------------------+---------------------+
| name      | FortiGate connector profile name. | string              | Maximum length: 31  |                     |
+-----------+-----------------------------------+---------------------+---------------------+---------------------+

