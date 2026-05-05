# config firewall access-proxy

Configure IPv4 access proxy.

## Syntax

```
config firewall access-proxy
    Description: Configure IPv4 access proxy.
    edit <name>
        set add-vhost-domain-to-dnsdb [enable|disable]
        config api-gateway
            Description: Set IPv4 API Gateway.
            edit <id>
                set application <name1>, <name2>, ...
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
                        set domain {string}
                        set external-auth [enable|disable]
                        set health-check [disable|enable]
                        set health-check-proto [ping|http|...]
                        set holddown-interval [enable|disable]
                        set http-host {string}
                        set ip {ipv4-address-any}
                        set mappedport {user}
                        set port {integer}
                        set ssh-client-cert {string}
                        set ssh-host-key <name1>, <name2>, ...
                        set ssh-host-key-validation [disable|enable]
                        set status [active|standby|...]
                        set translate-host [enable|disable]
                        set tunnel-encryption [enable|disable]
                        set type [tcp-forwarding|ssh]
                        set verify-cert [enable|disable]
                        set weight {integer}
                    next
                end
                set saml-redirect [disable|enable]
                set saml-server {string}
                set service [http|https|...]
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
                set ssl-vpn-web-portal {string}
                set url-map {string}
                set url-map-type [sub-string|wildcard|...]
                set virtual-host {string}
            next
        end
        config api-gateway6
            Description: Set IPv6 API Gateway.
            edit <id>
                set application <name1>, <name2>, ...
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
                        set domain {string}
                        set external-auth [enable|disable]
                        set health-check [disable|enable]
                        set health-check-proto [ping|http|...]
                        set holddown-interval [enable|disable]
                        set http-host {string}
                        set ip {ipv6-address}
                        set mappedport {user}
                        set port {integer}
                        set ssh-client-cert {string}
                        set ssh-host-key <name1>, <name2>, ...
                        set ssh-host-key-validation [disable|enable]
                        set status [active|standby|...]
                        set translate-host [enable|disable]
                        set tunnel-encryption [enable|disable]
                        set type [tcp-forwarding|ssh]
                        set verify-cert [enable|disable]
                        set weight {integer}
                    next
                end
                set saml-redirect [disable|enable]
                set saml-server {string}
                set service [http|https|...]
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
                set ssl-vpn-web-portal {string}
                set url-map {string}
                set url-map-type [sub-string|wildcard|...]
                set virtual-host {string}
            next
        end
        set auth-portal [disable|enable]
        set auth-virtual-host {string}
        set client-cert [disable|enable]
        set decrypted-traffic-mirror {string}
        set empty-cert-action [accept|block|...]
        set log-blocked-traffic [enable|disable]
        set svr-pool-multiplex [enable|disable]
        set svr-pool-server-max-concurrent-request {integer}
        set svr-pool-server-max-request {integer}
        set svr-pool-ttl {integer}
        set user-agent-detect [disable|enable]
        set vip {string}
    next
end
```

## Parameters

+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                              | Description                       | Type                   | Size                   | Default                |
+========================================+===================================+========================+========================+========================+
| add-vhost-domain-to-dnsdb              | Enable/disable adding             | option                 | \-                     | disable                |
|                                        | vhost/domain to dnsdb for ztna    |                        |                        |                        |
|                                        | dox tunnel.                       |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *enable*    | add dns entry for all vhosts used by access proxy.     |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *disable*   | Do not add dns entry for all vhosts used by access     |                                     |
|                                        | |             | proxy.                                                 |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| auth-portal                            | Enable/disable authentication     | option                 | \-                     | disable                |
|                                        | portal.                           |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *disable*   | Disable authentication portal.                         |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *enable*    | Enable authentication portal.                          |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| auth-virtual-host                      | Virtual host for authentication   | string                 | Maximum length: 79     |                        |
|                                        | portal.                           |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| client-cert                            | Enable/disable to request client  | option                 | \-                     | enable                 |
|                                        | certificate.                      |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *disable*   | Disable client certificate request.                    |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *enable*    | Enable client certificate request.                     |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| decrypted-traffic-mirror               | Decrypted traffic mirror.         | string                 | Maximum length: 35     |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| empty-cert-action                      | Action of an empty client         | option                 | \-                     | block                  |
|                                        | certificate.                      |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-----------------------+--------------------------------------------------------+                           |
|                                        | | Option                | Description                                            |                           |
|                                        | +=======================+========================================================+                           |
|                                        | | *accept*              | Accept the SSL handshake if the client certificate is  |                           |
|                                        | |                       | empty.                                                 |                           |
|                                        | +-----------------------+--------------------------------------------------------+                           |
|                                        | | *block*               | Block the SSL handshake if the client certificate is   |                           |
|                                        | |                       | empty.                                                 |                           |
|                                        | +-----------------------+--------------------------------------------------------+                           |
|                                        | | *accept-unmanageable* | Accept the SSL handshake only if the end-point is      |                           |
|                                        | |                       | unmanageable.                                          |                           |
|                                        | +-----------------------+--------------------------------------------------------+                           |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| log-blocked-traffic                    | Enable/disable logging of blocked | option                 | \-                     | enable                 |
|                                        | traffic.                          |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *enable*    | Log all traffic denied by this access proxy.           |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *disable*   | Do not log all traffic denied by this access proxy.    |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| name                                   | Access Proxy name.                | string                 | Maximum length: 79     |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| svr-pool-multiplex                     | Enable/disable server pool        | option                 | \-                     | enable                 |
|                                        | multiplexing. Share connected     |                        |                        |                        |
|                                        | server in HTTP, HTTPS, and        |                        |                        |                        |
|                                        | web-portal api-gateway.           |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *enable*    | Enable server pool multiplexing. Share connected       |                                     |
|                                        | |             | server.                                                |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *disable*   | Disable server pool multiplexing. Do not share         |                                     |
|                                        | |             | connected server.                                      |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| svr-pool-server-max-concurrent-request | Maximum number of concurrent      | integer                | Minimum value: 0       | 0                      |
|                                        | requests that servers in server   |                        | Maximum value:         |                        |
|                                        | pool could handle (default =      |                        | 2147483647             |                        |
|                                        | unlimited).                       |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| svr-pool-server-max-request            | Maximum number of requests that   | integer                | Minimum value: 0       | 0                      |
|                                        | servers in server pool handle     |                        | Maximum value:         |                        |
|                                        | before disconnecting (default =   |                        | 2147483647             |                        |
|                                        | unlimited).                       |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| svr-pool-ttl                           | Time-to-live in the server pool   | integer                | Minimum value: 0       | 15                     |
|                                        | for idle connections to servers.  |                        | Maximum value:         |                        |
|                                        |                                   |                        | 2147483647             |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| user-agent-detect                      | Enable/disable to detect device   | option                 | \-                     | enable                 |
|                                        | type by HTTP user-agent if no     |                        |                        |                        |
|                                        | client certificate provided.      |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *disable*   | Disable to detect unknown device by HTTP user-agent if |                                     |
|                                        | |             | no client certificate provided.                        |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *enable*    | Enable to detect unknown device by HTTP user-agent if  |                                     |
|                                        | |             | no client certificate provided.                        |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| vip                                    | Virtual IP name.                  | string                 | Maximum length: 79     |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+

