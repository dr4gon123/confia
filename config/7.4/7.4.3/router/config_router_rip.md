# config router rip

Configure RIP.

## Syntax

```
config router rip
    Description: Configure RIP.
    set default-information-originate [enable|disable]
    set default-metric {integer}
    config distance
        Description: Distance.
        edit <id>
            set access-list {string}
            set distance {integer}
            set prefix {ipv4-classnet-any}
        next
    end
    config distribute-list
        Description: Distribute list.
        edit <id>
            set direction [in|out]
            set interface {string}
            set listname {string}
            set status [enable|disable]
        next
    end
    set garbage-timer {integer}
    config interface
        Description: RIP interface configuration.
        edit <name>
            set auth-keychain {string}
            set auth-mode [none|text|...]
            set auth-string {password}
            set flags {integer}
            set receive-version {option1}, {option2}, ...
            set send-version {option1}, {option2}, ...
            set send-version2-broadcast [disable|enable]
            set split-horizon [poisoned|regular]
            set split-horizon-status [enable|disable]
        next
    end
    set max-out-metric {integer}
    config neighbor
        Description: Neighbor.
        edit <id>
            set ip {ipv4-address}
        next
    end
    config network
        Description: Network.
        edit <id>
            set prefix {ipv4-classnet}
        next
    end
    config offset-list
        Description: Offset list.
        edit <id>
            set access-list {string}
            set direction [in|out]
            set interface {string}
            set offset {integer}
            set status [enable|disable]
        next
    end
    set passive-interface <name1>, <name2>, ...
    config redistribute
        Description: Redistribute configuration. Read-only.
        edit <name>
            set metric {integer}
            set routemap {string}
            set status [enable|disable]
        next
    end
    set timeout-timer {integer}
    set update-timer {integer}
    set version [1|2]
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
| garbage-timer                 | Garbage timer in seconds.         | integer            | Minimum value: 5   | 120                |
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
| timeout-timer                 | Timeout timer in seconds.         | integer            | Minimum value: 5   | 180                |
|                               |                                   |                    | Maximum value:     |                    |
|                               |                                   |                    | 2147483647         |                    |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| update-timer                  | Update timer in seconds.          | integer            | Minimum value: 1   | 30                 |
|                               |                                   |                    | Maximum value:     |                    |
|                               |                                   |                    | 2147483647         |                    |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| version                       | RIP version.                      | option             | \-                 | 2                  |
+-------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                               | +-------------+--------------------------------------------------------+                         |
|                               | | Option      | Description                                            |                         |
|                               | +=============+========================================================+                         |
|                               | | *1*         | Version 1.                                             |                         |
|                               | +-------------+--------------------------------------------------------+                         |
|                               | | *2*         | Version 2.                                             |                         |
|                               | +-------------+--------------------------------------------------------+                         |
+-------------------------------+--------------------------------------------------------------------------------------------------+

