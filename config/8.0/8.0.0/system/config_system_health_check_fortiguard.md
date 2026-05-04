# config system health-check-fortiguard

SD-WAN status checking or health checking. Identify a server predefined by FortiGuard and determine how SD-WAN verifies that FGT can communicate with it.

## Syntax

```
config system health-check-fortiguard
    Description: SD-WAN status checking or health checking. Identify a server predefined by FortiGuard and determine how SD-WAN verifies that FGT can communicate with it.
    edit <name>
        set obsolete {integer}
        set protocol [ping|tcp-echo|...]
        set server {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter | Description                       | Type                 | Size                 | Default              |
+===========+===================================+======================+======================+======================+
| name      | Status check or predefined        | string               | Maximum length: 35   |                      |
|           | health-check targets name.        |                      |                      |                      |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| obsolete  | Indicates whether Health Check    | integer              | Minimum value: 0     | 0                    |
|           | service can be used. Read-only.   |                      | Maximum value: 255   |                      |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| protocol  | Protocol name.                    | option               | \-                   | ping                 |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
|           | +---------------+--------------------------------------------------------+                             |
|           | | Option        | Description                                            |                             |
|           | +===============+========================================================+                             |
|           | | *ping*        | Use PING to test the link with the server.             |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *tcp-echo*    | Use TCP echo to test the link with the server.         |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *udp-echo*    | Use UDP echo to test the link with the server.         |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *http*        | Use HTTP-GET to test the link with the server.         |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *https*       | Use HTTPS-GET to test the link with the server.        |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *twamp*       | Use TWAMP to test the link with the server.            |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *dns*         | Use DNS query to test the link with the server.        |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *tcp-connect* | Use a full TCP connection to test the link with the    |                             |
|           | |               | server.                                                |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *ftp*         | Use FTP to test the link with the server.              |                             |
|           | +---------------+--------------------------------------------------------+                             |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| server    | Status check or predefined        | string               | Maximum length: 127  |                      |
|           | health-check domain name.         |                      |                      |                      |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+

