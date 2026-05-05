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
                set ip {ipv4-address}
                set port {integer}
                set user {string}
                set password {password}
                set longitude {string}
                set latitude {string}
                set distance {integer}
            next
        end
        set timestamp {integer}
    next
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/f2fdc419-484a-11ee-8e6d-fa163e15d75b/images/fd8569c03b167b49cc47d5280232fc7b_Icon-Light-Bulb.png "Note") | The                               |
|                                                                                                                                                                                      | `config system speed-test-server` |
|                                                                                                                                                                                      | command is read-only.             |
|                                                                                                                                                                                      | Administrators cannot configure   |
|                                                                                                                                                                                      | custom servers.                   |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------+

