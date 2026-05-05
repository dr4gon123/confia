# config ztna web-proxy

Configure ZTNA web-proxy.

## Syntax

```
config ztna web-proxy
    Description: Configure ZTNA web-proxy.
    edit <name>
        config api-gateway
            Description: Set IPv4 API Gateway.
            edit <id>
                set h2-support [enable|disable]
                set h3-support [enable|disable]
                set http-cookie-age {integer}
                set http-cookie-domain {string}
                set http-cookie-domain-from-host [disable|enable]
                set http-cookie-generation {integer}
                set http-cookie-path {string}
                set http-cookie-share [disable|same-ip]
                set https-cookie-secure [disable|enable]
                set ldb-method [static|round-robin|...]
                set persistence [none|http-cookie]
                config quic
                    Description: QUIC setting.
                    set ack-delay-exponent {integer}
                    set active-connection-id-limit {integer}
                    set active-migration [enable|disable]
                    set grease-quic-bit [enable|disable]
                    set max-ack-delay {integer}
                    set max-datagram-frame-size {integer}
                    set max-idle-timeout {integer}
                    set max-udp-payload-size {integer}
                end
                config realservers
                    Description: Select the real servers that this Access Proxy will distribute traffic to.
                    edit <id>
                        set addr-type [ip|fqdn]
                        set address {string}
                        set health-check [disable|enable]
                        set health-check-proto [ping|http|...]
                        set holddown-interval [enable|disable]
                        set http-host {string}
                        set ip {ipv4-address-any}
                        set port {integer}
                        set status [active|standby|...]
                        set translate-host [enable|disable]
                        set weight {integer}
                    next
                end
                set service [http|https]
                set ssl-algorithm [high|medium|...]
                config ssl-cipher-suites
                    Description: SSL/TLS cipher suites to offer to a server, ordered by priority.
                    edit <priority>
                        set cipher [TLS-AES-128-GCM-SHA256|TLS-AES-256-GCM-SHA384|...]
                        set versions {option1}, {option2}, ...
                    next
                end
                set ssl-dh-bits [768|1024|...]
                set ssl-max-version [tls-1.0|tls-1.1|...]
                set ssl-min-version [tls-1.0|tls-1.1|...]
                set ssl-renegotiation [enable|disable]
                set url-map {string}
                set url-map-type [sub-string|wildcard|...]
            next
        end
        config api-gateway6
            Description: Set IPv6 API Gateway.
            edit <id>
                set h2-support [enable|disable]
                set h3-support [enable|disable]
                set http-cookie-age {integer}
                set http-cookie-domain {string}
                set http-cookie-domain-from-host [disable|enable]
                set http-cookie-generation {integer}
                set http-cookie-path {string}
                set http-cookie-share [disable|same-ip]
                set https-cookie-secure [disable|enable]
                set ldb-method [static|round-robin|...]
                set persistence [none|http-cookie]
                config quic
                    Description: QUIC setting.
                    set ack-delay-exponent {integer}
                    set active-connection-id-limit {integer}
                    set active-migration [enable|disable]
                    set grease-quic-bit [enable|disable]
                    set max-ack-delay {integer}
                    set max-datagram-frame-size {integer}
                    set max-idle-timeout {integer}
                    set max-udp-payload-size {integer}
                end
                config realservers
                    Description: Select the real servers that this Access Proxy will distribute traffic to.
                    edit <id>
                        set addr-type [ip|fqdn]
                        set address {string}
                        set health-check [disable|enable]
                        set health-check-proto [ping|http|...]
                        set holddown-interval [enable|disable]
                        set http-host {string}
                        set ip {ipv6-address}
                        set port {integer}
                        set status [active|standby|...]
                        set translate-host [enable|disable]
                        set weight {integer}
                    next
                end
                set service [http|https]
                set ssl-algorithm [high|medium|...]
                config ssl-cipher-suites
                    Description: SSL/TLS cipher suites to offer to a server, ordered by priority.
                    edit <priority>
                        set cipher [TLS-AES-128-GCM-SHA256|TLS-AES-256-GCM-SHA384|...]
                        set versions {option1}, {option2}, ...
                    next
                end
                set ssl-dh-bits [768|1024|...]
                set ssl-max-version [tls-1.0|tls-1.1|...]
                set ssl-min-version [tls-1.0|tls-1.1|...]
                set ssl-renegotiation [enable|disable]
                set url-map {string}
                set url-map-type [sub-string|wildcard|...]
            next
        end
        set auth-portal [disable|enable]
        set auth-virtual-host {string}
        set decrypted-traffic-mirror {string}
        set host {string}
        set log-blocked-traffic [disable|enable]
        set svr-pool-multiplex [enable|disable]
        set svr-pool-server-max-concurrent-request {integer}
        set svr-pool-server-max-request {integer}
        set svr-pool-ttl {integer}
        set vip {string}
        set vip6 {string}
    next
end
```

## Parameters

+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                              | Description                       | Type               | Size               | Default            |
+========================================+===================================+====================+====================+====================+
| auth-portal                            | Enable/disable authentication     | option             | \-                 | disable            |
|                                        | portal.                           |                    |                    |                    |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                        | +-------------+--------------------------------------------------------+                         |
|                                        | | Option      | Description                                            |                         |
|                                        | +=============+========================================================+                         |
|                                        | | *disable*   | Disable authentication portal.                         |                         |
|                                        | +-------------+--------------------------------------------------------+                         |
|                                        | | *enable*    | Enable authentication portal.                          |                         |
|                                        | +-------------+--------------------------------------------------------+                         |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| auth-virtual-host                      | Virtual host for authentication   | string             | Maximum length: 79 |                    |
|                                        | portal.                           |                    |                    |                    |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| decrypted-traffic-mirror               | Decrypted traffic mirror.         | string             | Maximum length: 35 |                    |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| host                                   | Virtual or real host name.        | string             | Maximum length: 79 |                    |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| log-blocked-traffic                    | Enable/disable logging of blocked | option             | \-                 | enable             |
|                                        | traffic.                          |                    |                    |                    |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                        | +-------------+--------------------------------------------------------+                         |
|                                        | | Option      | Description                                            |                         |
|                                        | +=============+========================================================+                         |
|                                        | | *disable*   | Do not log all traffic denied by this ZTNA web-proxy.  |                         |
|                                        | +-------------+--------------------------------------------------------+                         |
|                                        | | *enable*    | Log all traffic denied by this ZTNA web-proxy.         |                         |
|                                        | +-------------+--------------------------------------------------------+                         |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                                   | ZTNA proxy name.                  | string             | Maximum length: 79 |                    |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| svr-pool-multiplex                     | Enable/disable server pool        | option             | \-                 | enable             |
|                                        | multiplexing. Share connected     |                    |                    |                    |
|                                        | server in HTTP and HTTPS          |                    |                    |                    |
|                                        | api-gateways.                     |                    |                    |                    |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                        | +-------------+--------------------------------------------------------+                         |
|                                        | | Option      | Description                                            |                         |
|                                        | +=============+========================================================+                         |
|                                        | | *enable*    | Enable server pool multiplexing. Share connected       |                         |
|                                        | |             | server.                                                |                         |
|                                        | +-------------+--------------------------------------------------------+                         |
|                                        | | *disable*   | Disable server pool multiplexing. Do not share         |                         |
|                                        | |             | connected server.                                      |                         |
|                                        | +-------------+--------------------------------------------------------+                         |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| svr-pool-server-max-concurrent-request | Maximum number of concurrent      | integer            | Minimum value: 0   | 0                  |
|                                        | requests that servers in the      |                    | Maximum value:     |                    |
|                                        | server pool could handle (default |                    | 2147483647         |                    |
|                                        | = unlimited).                     |                    |                    |                    |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| svr-pool-server-max-request            | Maximum number of requests that   | integer            | Minimum value: 0   | 0                  |
|                                        | servers in the server pool handle |                    | Maximum value:     |                    |
|                                        | before disconnecting (default =   |                    | 2147483647         |                    |
|                                        | unlimited).                       |                    |                    |                    |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| svr-pool-ttl                           | Time-to-live in the server pool   | integer            | Minimum value: 0   | 15                 |
|                                        | for idle connections to servers.  |                    | Maximum value:     |                    |
|                                        |                                   |                    | 2147483647         |                    |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vip                                    | Virtual IP name.                  | string             | Maximum length: 79 |                    |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vip6                                   | Virtual IPv6 name.                | string             | Maximum length: 79 |                    |
+----------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+

