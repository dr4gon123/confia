# config router ripng

Configure RIPng.

## Syntax

```
config router ripng
    Description: Configure RIPng.
    config aggregate-address
        Description: Aggregate address.
        edit <id>
            set prefix6 {ipv6-prefix}
        next
    end
    set default-information-originate [enable|disable]
    set default-metric {integer}
    config distance
        Description: Distance.
        edit <id>
            set distance {integer}
            set prefix6 {ipv6-prefix}
            set access-list6 {string}
        next
    end
    config distribute-list
        Description: Distribute list.
        edit <id>
            set status [enable|disable]
            set direction [in|out]
            set listname {string}
            set interface {string}
        next
    end
    set garbage-timer {integer}
    config interface
        Description: RIPng interface configuration.
        edit <name>
            set split-horizon-status [enable|disable]
            set split-horizon [poisoned|regular]
            set flags {integer}
        next
    end
    set max-out-metric {integer}
    config neighbor
        Description: Neighbor.
        edit <id>
            set ip6 {ipv6-address}
            set interface {string}
        next
    end
    config network
        Description: Network.
        edit <id>
            set prefix {ipv6-prefix}
        next
    end
    config offset-list
        Description: Offset list.
        edit <id>
            set status [enable|disable]
            set direction [in|out]
            set access-list6 {string}
            set offset {integer}
            set interface {string}
        next
    end
    set passive-interface <name1>, <name2>, ...
    config redistribute
        Description: Redistribute configuration.
        edit <name>
            set status [enable|disable]
            set metric {integer}
            set routemap {string}
        next
    end
    set timeout-timer {integer}
    set update-timer {integer}
end
```

## Parameters

+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                     | Description                       | Type               | Size               | Default            |
+===============================+===================================+====================+====================+====================+
| default-information-originate | Enable/disable generation of      | option             | \-                 | disable            |
|                               | default route.                    |                    |                    |                    |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                               | +-------------+--------------------------------------------------------+                         |
|                               | | Option      | Description                                            |                         |
|                               | +=============+========================================================+                         |
|                               | | *enable*    | Enable setting.                                        |                         |
|                               | +-------------+--------------------------------------------------------+                         |
|                               | | *disable*   | Disable setting.                                       |                         |
|                               | +-------------+--------------------------------------------------------+                         |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| default-metric                | Default metric.                   | integer            | Minimum value: 1   | 1                  |
|                               |                                   |                    | Maximum value: 16  |                    |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| garbage-timer                 | Garbage timer.                    | integer            | Minimum value: 5   | 120                |
|                               |                                   |                    | Maximum value:     |                    |
|                               |                                   |                    | 2147483647         |                    |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-out-metric                | Maximum metric allowed to         | integer            | Minimum value: 0   | 0                  |
|                               | output(0 means \'not set\').      |                    | Maximum value: 15  |                    |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| passive-interface `<name>`    | Passive interface configuration.  | string             | Maximum length: 79 |                    |
|                               |                                   |                    |                    |                    |
|                               | Passive interface name.           |                    |                    |                    |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| timeout-timer                 | Timeout timer.                    | integer            | Minimum value: 5   | 180                |
|                               |                                   |                    | Maximum value:     |                    |
|                               |                                   |                    | 2147483647         |                    |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| update-timer                  | Update timer.                     | integer            | Minimum value: 5   | 30                 |
|                               |                                   |                    | Maximum value:     |                    |
|                               |                                   |                    | 2147483647         |                    |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+

