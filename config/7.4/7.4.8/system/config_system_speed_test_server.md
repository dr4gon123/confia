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
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/b8624cb4-35a5-11f0-a9d0-d2b0d2e22f7d/images/aaf1f4870fd7bd8f0011c4bf3f61a24d_Icon-Light-Bulb.png "Note") | The                               |
|                                                                                                                                                                                      | `config system speed-test-server` |
|                                                                                                                                                                                      | command is read-only.             |
|                                                                                                                                                                                      | Administrators cannot configure   |
|                                                                                                                                                                                      | custom servers.                   |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------+

