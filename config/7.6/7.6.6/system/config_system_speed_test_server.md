# config system speed-test-server

Configure speed test server list.

## Syntax

```
config system speed-test-server
    Description: Configure speed test server list.
    edit <name>
        config host
            Description: Hosts of the server.
            edit <id>
                set distance {integer}
                set ip {ipv4-address}
                set latitude {string}
                set longitude {string}
                set password {password}
                set port {integer}
                set user {string}
            next
        end
        set timestamp {integer}
    next
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/61a6a037-fafc-11f0-8b43-d2943efe5b2f/images/ee1164a7c379bf08dab1e2cc5d77a88a_Icon-Light-Bulb.png "Note") | The                               |
|                                                                                                                                                                                      | `config system speed-test-server` |
|                                                                                                                                                                                      | command is read-only.             |
|                                                                                                                                                                                      | Administrators cannot configure   |
|                                                                                                                                                                                      | custom servers.                   |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------+

