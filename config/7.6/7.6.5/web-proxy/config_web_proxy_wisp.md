# config web-proxy wisp

Configure Websense Integrated Services Protocol (WISP) servers.

## Syntax

```
config web-proxy wisp
    Description: Configure Websense Integrated Services Protocol (WISP) servers.
    edit <name>
        set comment {var-string}
        set max-connections {integer}
        set outgoing-ip {ipv4-address-any}
        set server-ip {ipv4-address-any}
        set server-port {integer}
        set timeout {integer}
    next
end
```

## Parameters

+-----------------+-----------------------------------+------------------+-----------+---------+
| Parameter       | Description                       | Type             | Size      | Default |
+=================+===================================+==================+===========+=========+
| comment         | Comment.                          | var-string       | Maximum   |         |
|                 |                                   |                  | length:   |         |
|                 |                                   |                  | 255       |         |
+-----------------+-----------------------------------+------------------+-----------+---------+
| max-connections | Maximum number of web proxy WISP  | integer          | Minimum   | 64      |
|                 | connections (4 - 4096, default =  |                  | value: 4  |         |
|                 | 64).                              |                  | Maximum   |         |
|                 |                                   |                  | value:    |         |
|                 |                                   |                  | 4096      |         |
+-----------------+-----------------------------------+------------------+-----------+---------+
| name            | Server name.                      | string           | Maximum   |         |
|                 |                                   |                  | length:   |         |
|                 |                                   |                  | 35        |         |
+-----------------+-----------------------------------+------------------+-----------+---------+
| outgoing-ip     | WISP outgoing IP address.         | ipv4-address-any | Not       | 0.0.0.0 |
|                 |                                   |                  | Specified |         |
+-----------------+-----------------------------------+------------------+-----------+---------+
| server-ip       | WISP server IP address.           | ipv4-address-any | Not       | 0.0.0.0 |
|                 |                                   |                  | Specified |         |
+-----------------+-----------------------------------+------------------+-----------+---------+
| server-port     | WISP server port (1 - 65535,      | integer          | Minimum   | 15868   |
|                 | default = 15868).                 |                  | value: 1  |         |
|                 |                                   |                  | Maximum   |         |
|                 |                                   |                  | value:    |         |
|                 |                                   |                  | 65535     |         |
+-----------------+-----------------------------------+------------------+-----------+---------+
| timeout         | Period of time before WISP        | integer          | Minimum   | 5       |
|                 | requests time out (1 - 15 sec,    |                  | value: 1  |         |
|                 | default = 5).                     |                  | Maximum   |         |
|                 |                                   |                  | value: 15 |         |
+-----------------+-----------------------------------+------------------+-----------+---------+

