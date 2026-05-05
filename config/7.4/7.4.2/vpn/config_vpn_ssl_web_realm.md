# config vpn ssl web realm

Realm.

## Syntax

```
config vpn ssl web realm
    Description: Realm.
    edit <url-path>
        set login-page {var-string}
        set max-concurrent-user {integer}
        set nas-ip {ipv4-address}
        set radius-port {integer}
        set radius-server {string}
        set virtual-host {var-string}
        set virtual-host-only [enable|disable]
        set virtual-host-server-cert {string}
    next
end
```

## Parameters

+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                | Description                       | Type               | Size               | Default            |
+==========================+===================================+====================+====================+====================+
| login-page               | Replacement HTML for SSL-VPN      | var-string         | Maximum length:    |                    |
|                          | login page.                       |                    | 32768              |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-concurrent-user      | Maximum concurrent users.         | integer            | Minimum value: 0   | 0                  |
|                          |                                   |                    | Maximum value:     |                    |
|                          |                                   |                    | 65535              |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| nas-ip                   | IP address used as a NAS-IP to    | ipv4-address       | Not Specified      | 0.0.0.0            |
|                          | communicate with the RADIUS       |                    |                    |                    |
|                          | server.                           |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| radius-port              | RADIUS service port number.       | integer            | Minimum value: 0   | 0                  |
|                          |                                   |                    | Maximum value:     |                    |
|                          |                                   |                    | 65535              |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| radius-server            | RADIUS server associated with     | string             | Maximum length: 35 |                    |
|                          | realm.                            |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| url-path                 | URL path to access SSL-VPN login  | string             | Maximum length: 35 |                    |
|                          | page.                             |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| virtual-host             | Virtual host name for realm.      | var-string         | Maximum length:    |                    |
|                          |                                   |                    | 255                |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| virtual-host-only        | Enable/disable enforcement of     | option             | \-                 | disable            |
|                          | virtual host method for SSL-VPN   |                    |                    |                    |
|                          | client access.                    |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | Option      | Description                                            |                         |
|                          | +=============+========================================================+                         |
|                          | | *enable*    | Enable setting.                                        |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *disable*   | Disable setting.                                       |                         |
|                          | +-------------+--------------------------------------------------------+                         |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| virtual-host-server-cert | Name of the server certificate to | string             | Maximum length: 35 |                    |
|                          | used for this realm.              |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+

