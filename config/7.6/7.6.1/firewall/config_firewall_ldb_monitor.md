# config firewall ldb-monitor

Configure server load balancing health monitors.

## Syntax

```
config firewall ldb-monitor
    Description: Configure server load balancing health monitors.
    edit <name>
        set dns-match-ip {ipv4-address}
        set dns-protocol [udp|tcp]
        set dns-request-domain {string}
        set http-get {string}
        set http-match {string}
        set http-max-redirects {integer}
        set interval {integer}
        set port {integer}
        set retry {integer}
        set src-ip {ipv4-address}
        set timeout {integer}
        set type [ping|tcp|...]
    next
end
```

## Parameters

+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter          | Description                       | Type               | Size               | Default            |
+====================+===================================+====================+====================+====================+
| dns-match-ip       | Response IP expected from DNS     | ipv4-address       | Not Specified      | 0.0.0.0            |
|                    | server.                           |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dns-protocol       | Select the protocol used by the   | option             | \-                 | udp                |
|                    | DNS health check monitor to check |                    |                    |                    |
|                    | the health of the server (UDP |   |                    |                    |                    |
|                    | TCP).                             |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *udp*       | UDP.                                                   |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *tcp*       | TCP.                                                   |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dns-request-domain | Fully qualified domain name to    | string             | Maximum length:    |                    |
|                    | resolve for the DNS probe.        |                    | 255                |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| http-get           | Request URI used to send a GET    | string             | Maximum length:    |                    |
|                    | request to check the health of an |                    | 255                |                    |
|                    | HTTP server. Optionally provide a |                    |                    |                    |
|                    | hostname before the first \'/\'   |                    |                    |                    |
|                    | and it will be used as the HTTP   |                    |                    |                    |
|                    | Host Header.                      |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| http-match         | String to match the value         | string             | Maximum length:    |                    |
|                    | expected in response to an        |                    | 255                |                    |
|                    | HTTP-GET request.                 |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| http-max-redirects | The maximum number of HTTP        | integer            | Minimum value: 0   | 0                  |
|                    | redirects to be allowed.          |                    | Maximum value: 5   |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interval           | Time between health checks.       | integer            | Minimum value: 5   | 10                 |
|                    |                                   |                    | Maximum value:     |                    |
|                    |                                   |                    | 65535              |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name               | Monitor name.                     | string             | Maximum length: 35 |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| port               | Service port used to perform the  | integer            | Minimum value: 0   | 0                  |
|                    | health check. If 0, health check  |                    | Maximum value:     |                    |
|                    | monitor inherits port configured  |                    | 65535              |                    |
|                    | for the server.                   |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| retry              | Number health check attempts      | integer            | Minimum value: 1   | 3                  |
|                    | before the server is considered   |                    | Maximum value: 255 |                    |
|                    | down.                             |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| src-ip             | Source IP for ldb-monitor.        | ipv4-address       | Not Specified      | 0.0.0.0            |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| timeout            | Time to wait to receive response  | integer            | Minimum value: 1   | 2                  |
|                    | to a health check from a server.  |                    | Maximum value: 255 |                    |
|                    | Reaching the timeout means the    |                    |                    |                    |
|                    | health check failed.              |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| type               | Select the Monitor type used by   | option             | \-                 |                    |
|                    | the health check monitor to check |                    |                    |                    |
|                    | the health of the server (PING |  |                    |                    |                    |
|                    | TCP | HTTP | HTTPS | DNS).        |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *ping*      | PING health monitor.                                   |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *tcp*       | TCP-connect health monitor.                            |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *http*      | HTTP-GET health monitor.                               |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *https*     | HTTP-GET health monitor with SSL.                      |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *dns*       | DNS health monitor.                                    |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+--------------------------------------------------------------------------------------------------+

