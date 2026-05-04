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
                set url-map {string}
                set service [http|https|...]
                set ldb-method [static|round-robin|...]
                set virtual-host {string}
                set url-map-type [sub-string|wildcard|...]
                config realservers
                    Description: Select the real servers that this Access Proxy will distribute traffic to.
                    edit <id>
                        set addr-type [ip|fqdn]
                        set address {string}
                        set ip {ipv4-address-any}
                        set domain {string}
                        set port {integer}
                        set mappedport {user}
                        set status [active|standby|...]
                        set type [tcp-forwarding|ssh]
                        set external-auth [enable|disable]
                        set tunnel-encryption [enable|disable]
                        set weight {integer}
                        set http-host {string}
                        set health-check [disable|enable]
                        set health-check-proto [ping|http|...]
                        set holddown-interval [enable|disable]
                        set translate-host [enable|disable]
                        set ssh-client-cert {string}
                        set ssh-host-key-validation [disable|enable]
                        set ssh-host-key <name1>, <name2>, ...
                    next
                end
                set application <name1>, <name2>, ...
                set persistence [none|http-cookie]
                set http-cookie-domain-from-host [disable|enable]
                set http-cookie-domain {string}
                set http-cookie-path {string}
                set http-cookie-generation {integer}
                set http-cookie-age {integer}
                set http-cookie-share [disable|same-ip]
                set https-cookie-secure [disable|enable]
                set saml-server {string}
                set saml-redirect [disable|enable]
                set ssl-dh-bits [768|1024|...]
                set ssl-algorithm [high|medium|...]
                config ssl-cipher-suites
                    Description: SSL/TLS cipher suites to offer to a server, ordered by priority.
                    edit <priority>
                        set cipher [TLS-AES-128-GCM-SHA256|TLS-AES-256-GCM-SHA384|...]
                        set versions {option1}, {option2}, ...
                    next
                end
                set ssl-min-version [tls-1.0|tls-1.1|...]
                set ssl-max-version [tls-1.0|tls-1.1|...]
                set ssl-renegotiation [enable|disable]
                set ssl-vpn-web-portal {string}
            next
        end
        config api-gateway6
            Description: Set IPv6 API Gateway.
            edit <id>
                set url-map {string}
                set service [http|https|...]
                set ldb-method [static|round-robin|...]
                set virtual-host {string}
                set url-map-type [sub-string|wildcard|...]
                config realservers
                    Description: Select the real servers that this Access Proxy will distribute traffic to.
                    edit <id>
                        set addr-type [ip|fqdn]
                        set address {string}
                        set ip {ipv6-address}
                        set domain {string}
                        set port {integer}
                        set mappedport {user}
                        set status [active|standby|...]
                        set type [tcp-forwarding|ssh]
                        set external-auth [enable|disable]
                        set tunnel-encryption [enable|disable]
                        set weight {integer}
                        set http-host {string}
                        set health-check [disable|enable]
                        set health-check-proto [ping|http|...]
                        set holddown-interval [enable|disable]
                        set translate-host [enable|disable]
                        set ssh-client-cert {string}
                        set ssh-host-key-validation [disable|enable]
                        set ssh-host-key <name1>, <name2>, ...
                    next
                end
                set application <name1>, <name2>, ...
                set persistence [none|http-cookie]
                set http-cookie-domain-from-host [disable|enable]
                set http-cookie-domain {string}
                set http-cookie-path {string}
                set http-cookie-generation {integer}
                set http-cookie-age {integer}
                set http-cookie-share [disable|same-ip]
                set https-cookie-secure [disable|enable]
                set saml-server {string}
                set saml-redirect [disable|enable]
                set ssl-dh-bits [768|1024|...]
                set ssl-algorithm [high|medium|...]
                config ssl-cipher-suites
                    Description: SSL/TLS cipher suites to offer to a server, ordered by priority.
                    edit <priority>
                        set cipher [TLS-AES-128-GCM-SHA256|TLS-AES-256-GCM-SHA384|...]
                        set versions {option1}, {option2}, ...
                    next
                end
                set ssl-min-version [tls-1.0|tls-1.1|...]
                set ssl-max-version [tls-1.0|tls-1.1|...]
                set ssl-renegotiation [enable|disable]
                set ssl-vpn-web-portal {string}
            next
        end
        set auth-portal [disable|enable]
        set auth-virtual-host {string}
        set client-cert [disable|enable]
        set decrypted-traffic-mirror {string}
        set empty-cert-action [accept|block|...]
        set http-supported-max-version [http1|http2]
        set log-blocked-traffic [enable|disable]
        set svr-pool-multiplex [enable|disable]
        set svr-pool-server-max-request {integer}
        set svr-pool-ttl {integer}
        set user-agent-detect [disable|enable]
        set vip {string}
    next
end
```

## Parameters

+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                   | Description                       | Type                   | Size                   | Default                |
+=============================+===================================+========================+========================+========================+
| add-vhost-domain-to-dnsdb   | Enable/disable adding             | option                 | \-                     | disable                |
|                             | vhost/domain to dnsdb for ztna    |                        |                        |                        |
|                             | dox tunnel.                       |                        |                        |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | Option      | Description                                            |                                     |
|                             | +=============+========================================================+                                     |
|                             | | *enable*    | add dns entry for all vhosts used by access proxy.     |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | *disable*   | Do not add dns entry for all vhosts used by access     |                                     |
|                             | |             | proxy.                                                 |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| auth-portal                 | Enable/disable authentication     | option                 | \-                     | disable                |
|                             | portal.                           |                        |                        |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | Option      | Description                                            |                                     |
|                             | +=============+========================================================+                                     |
|                             | | *disable*   | Disable authentication portal.                         |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | *enable*    | Enable authentication portal.                          |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| auth-virtual-host           | Virtual host for authentication   | string                 | Maximum length: 79     |                        |
|                             | portal.                           |                        |                        |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| client-cert                 | Enable/disable to request client  | option                 | \-                     | enable                 |
|                             | certificate.                      |                        |                        |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | Option      | Description                                            |                                     |
|                             | +=============+========================================================+                                     |
|                             | | *disable*   | Disable client certificate request.                    |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | *enable*    | Enable client certificate request.                     |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| decrypted-traffic-mirror    | Decrypted traffic mirror.         | string                 | Maximum length: 35     |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| empty-cert-action           | Action of an empty client         | option                 | \-                     | block                  |
|                             | certificate.                      |                        |                        |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                             | +-----------------------+--------------------------------------------------------+                           |
|                             | | Option                | Description                                            |                           |
|                             | +=======================+========================================================+                           |
|                             | | *accept*              | Accept the SSL handshake if the client certificate is  |                           |
|                             | |                       | empty.                                                 |                           |
|                             | +-----------------------+--------------------------------------------------------+                           |
|                             | | *block*               | Block the SSL handshake if the client certificate is   |                           |
|                             | |                       | empty.                                                 |                           |
|                             | +-----------------------+--------------------------------------------------------+                           |
|                             | | *accept-unmanageable* | Accept the SSL handshake only if the end-point is      |                           |
|                             | |                       | unmanageable.                                          |                           |
|                             | +-----------------------+--------------------------------------------------------+                           |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| http-supported-max-version  | Maximum supported HTTP versions.  | option                 | \-                     | http2                  |
|                             | default = HTTP2                   |                        |                        |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | Option      | Description                                            |                                     |
|                             | +=============+========================================================+                                     |
|                             | | *http1*     | Support HTTP 1.1 and HTTP1.                            |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | *http2*     | Support HTTP2, HTTP 1.1, and HTTP1.                    |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| log-blocked-traffic         | Enable/disable logging of blocked | option                 | \-                     | enable                 |
|                             | traffic.                          |                        |                        |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | Option      | Description                                            |                                     |
|                             | +=============+========================================================+                                     |
|                             | | *enable*    | Log all traffic denied by this access proxy.           |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | *disable*   | Do not log all traffic denied by this access proxy.    |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| name                        | Access Proxy name.                | string                 | Maximum length: 79     |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| svr-pool-multiplex          | Enable/disable server pool        | option                 | \-                     | enable                 |
|                             | multiplexing. Share connected     |                        |                        |                        |
|                             | server in HTTP, HTTPS, and        |                        |                        |                        |
|                             | web-portal api-gateway.           |                        |                        |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | Option      | Description                                            |                                     |
|                             | +=============+========================================================+                                     |
|                             | | *enable*    | Enable server pool multiplexing. Share connected       |                                     |
|                             | |             | server.                                                |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | *disable*   | Disable server pool multiplexing. Do not share         |                                     |
|                             | |             | connected server.                                      |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| svr-pool-server-max-request | Maximum number of requests that   | integer                | Minimum value: 0       | 0                      |
|                             | servers in server pool handle     |                        | Maximum value:         |                        |
|                             | before disconnecting.             |                        | 2147483647             |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| svr-pool-ttl                | Time-to-live in the server pool   | integer                | Minimum value: 0       | 15                     |
|                             | for idle connections to servers.  |                        | Maximum value:         |                        |
|                             |                                   |                        | 2147483647             |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| user-agent-detect           | Enable/disable to detect device   | option                 | \-                     | enable                 |
|                             | type by HTTP user-agent if no     |                        |                        |                        |
|                             | client certificate provided.      |                        |                        |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | Option      | Description                                            |                                     |
|                             | +=============+========================================================+                                     |
|                             | | *disable*   | Disable to detect unknown device by HTTP user-agent if |                                     |
|                             | |             | no client certificate provided.                        |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
|                             | | *enable*    | Enable to detect unknown device by HTTP user-agent if  |                                     |
|                             | |             | no client certificate provided.                        |                                     |
|                             | +-------------+--------------------------------------------------------+                                     |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| vip                         | Virtual IP name.                  | string                 | Maximum length: 79     |                        |
+-----------------------------+-----------------------------------+------------------------+------------------------+------------------------+

