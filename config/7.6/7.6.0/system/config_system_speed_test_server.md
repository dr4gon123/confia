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
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/8f97e145-3344-11ef-bfe5-fa163e15d75b/images/3d5a27c10e382df6c0e4ffe77ffa76e2_Icon-Light-Bulb.png "Note") | The                               |
|                                                                                                                                                                                      | `config system speed-test-server` |
|                                                                                                                                                                                      | command is read-only.             |
|                                                                                                                                                                                      | Administrators cannot configure   |
|                                                                                                                                                                                      | custom servers.                   |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------+

