# config firewall vip

Configure virtual IP for IPv4.

## Syntax

```
config firewall vip
    Description: Configure virtual IP for IPv4.
    edit <name>
        set add-nat46-route [disable|enable]
        set arp-reply [disable|enable]
        set client-cert [disable|enable]
        set color {integer}
        set comment {var-string}
        set dns-mapping-ttl {integer}
        set empty-cert-action [accept|block|...]
        set extaddr <name1>, <name2>, ...
        set extintf {string}
        set extip {user}
        set extport {user}
        set gratuitous-arp-interval {integer}
        set gslb-domain-name {string}
        set gslb-hostname {string}
        config gslb-public-ips
            Description: Publicly accessible IP addresses for the FortiGSLB service.
            edit <index>
                set ip {ipv4-address-any}
            next
        end
        set h2-support [enable|disable]
        set h3-support [enable|disable]
        set http-cookie-age {integer}
        set http-cookie-domain {string}
        set http-cookie-domain-from-host [disable|enable]
        set http-cookie-generation {integer}
        set http-cookie-path {string}
        set http-cookie-share [disable|same-ip]
        set http-ip-header [enable|disable]
        set http-ip-header-name {string}
        set http-multiplex [enable|disable]
        set http-multiplex-max-concurrent-request {integer}
        set http-multiplex-max-request {integer}
        set http-multiplex-ttl {integer}
        set http-redirect [enable|disable]
        set https-cookie-secure [disable|enable]
        set id {integer}
        set ipv6-mappedip {user}
        set ipv6-mappedport {user}
        set ldb-method [static|round-robin|...]
        set mapped-addr {string}
        set mappedip <range1>, <range2>, ...
        set mappedport {user}
        set max-embryonic-connections {integer}
        set monitor <name1>, <name2>, ...
        set nat-source-vip [disable|enable]
        set nat44 [disable|enable]
        set nat46 [disable|enable]
        set one-click-gslb-server [disable|enable]
        set outlook-web-access [disable|enable]
        set persistence [none|http-cookie|...]
        set portforward [disable|enable]
        set portmapping-type [1-to-1|m-to-n]
        set protocol [tcp|udp|...]
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
            Description: Select the real servers that this server load balancing VIP will distribute traffic to.
            edit <id>
                set address {string}
                set client-ip {user}
                set healthcheck [disable|enable|...]
                set holddown-interval {integer}
                set http-host {string}
                set ip {user}
                set max-connections {integer}
                set monitor <name1>, <name2>, ...
                set port {integer}
                set status [active|standby|...]
                set translate-host [enable|disable]
                set type [ip|address]
                set verify-cert [enable|disable]
                set weight {integer}
            next
        end
        set server-type [http|https|...]
        set service <name1>, <name2>, ...
        set src-filter <range1>, <range2>, ...
        set src-vip-filter [disable|enable]
        set srcintf-filter <interface-name1>, <interface-name2>, ...
        set ssl-accept-ffdhe-groups [enable|disable]
        set ssl-algorithm [high|medium|...]
        set ssl-certificate <name1>, <name2>, ...
        config ssl-cipher-suites
            Description: SSL/TLS cipher suites acceptable from a client, ordered by priority.
            edit <priority>
                set cipher [TLS-AES-128-GCM-SHA256|TLS-AES-256-GCM-SHA384|...]
                set versions {option1}, {option2}, ...
            next
        end
        set ssl-client-fallback [disable|enable]
        set ssl-client-rekey-count {integer}
        set ssl-client-renegotiation [allow|deny|...]
        set ssl-client-session-state-max {integer}
        set ssl-client-session-state-timeout {integer}
        set ssl-client-session-state-type [disable|time|...]
        set ssl-dh-bits [768|1024|...]
        set ssl-hpkp [disable|enable|...]
        set ssl-hpkp-age {integer}
        set ssl-hpkp-backup {string}
        set ssl-hpkp-include-subdomains [disable|enable]
        set ssl-hpkp-primary {string}
        set ssl-hpkp-report-uri {var-string}
        set ssl-hsts [disable|enable]
        set ssl-hsts-age {integer}
        set ssl-hsts-include-subdomains [disable|enable]
        set ssl-http-location-conversion [enable|disable]
        set ssl-http-match-host [enable|disable]
        set ssl-max-version [ssl-3.0|tls-1.0|...]
        set ssl-min-version [ssl-3.0|tls-1.0|...]
        set ssl-mode [half|full]
        set ssl-pfs [require|deny|...]
        set ssl-send-empty-frags [enable|disable]
        set ssl-server-algorithm [high|medium|...]
        config ssl-server-cipher-suites
            Description: SSL/TLS cipher suites to offer to a server, ordered by priority.
            edit <priority>
                set cipher [TLS-AES-128-GCM-SHA256|TLS-AES-256-GCM-SHA384|...]
                set versions {option1}, {option2}, ...
            next
        end
        set ssl-server-max-version [ssl-3.0|tls-1.0|...]
        set ssl-server-min-version [ssl-3.0|tls-1.0|...]
        set ssl-server-renegotiation [enable|disable]
        set ssl-server-session-state-max {integer}
        set ssl-server-session-state-timeout {integer}
        set ssl-server-session-state-type [disable|time|...]
        set status [disable|enable]
        set type [static-nat|load-balance|...]
        set user-agent-detect [disable|enable]
        set uuid {uuid}
        set weblogic-server [disable|enable]
        set websphere-server [disable|enable]
    next
end
```

## Parameters

+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| Parameter                             | Description                       | Type                   | Size                   | Default                              |
+=======================================+===================================+========================+========================+======================================+
| add-nat46-route                       | Enable/disable adding NAT46       | option                 | \-                     | enable                               |
|                                       | route.                            |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Disable adding NAT46 route.                            |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Enable adding NAT46 route.                             |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| arp-reply                             | Enable to respond to ARP requests | option                 | \-                     | enable                               |
|                                       | for this virtual IP address.      |                        |                        |                                      |
|                                       | Enabled by default.               |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Disable ARP reply.                                     |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Enable ARP reply.                                      |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| client-cert                           | Enable/disable requesting client  | option                 | \-                     | enable                               |
|                                       | certificate.                      |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Disable client certificate request.                    |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Enable client certificate request.                     |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| color                                 | Color of icon on the GUI.         | integer                | Minimum value: 0       | 0                                    |
|                                       |                                   |                        | Maximum value: 32      |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| comment                               | Comment.                          | var-string             | Maximum length: 255    |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| dns-mapping-ttl                       | DNS mapping TTL (Set to zero to   | integer                | Minimum value: 0       | 0                                    |
|                                       | use TTL in DNS response, default  |                        | Maximum value: 604800  |                                      |
|                                       | = 0).                             |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| empty-cert-action                     | Action for an empty client        | option                 | \-                     | block                                |
|                                       | certificate.                      |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-----------------------+--------------------------------------------------------+                                         |
|                                       | | Option                | Description                                            |                                         |
|                                       | +=======================+========================================================+                                         |
|                                       | | *accept*              | Accept the SSL handshake if the client certificate is  |                                         |
|                                       | |                       | empty.                                                 |                                         |
|                                       | +-----------------------+--------------------------------------------------------+                                         |
|                                       | | *block*               | Block the SSL handshake if the client certificate is   |                                         |
|                                       | |                       | empty.                                                 |                                         |
|                                       | +-----------------------+--------------------------------------------------------+                                         |
|                                       | | *accept-unmanageable* | Accept the SSL handshake only if the end-point is      |                                         |
|                                       | |                       | unmanageable.                                          |                                         |
|                                       | +-----------------------+--------------------------------------------------------+                                         |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| extaddr `<name>`                      | External FQDN address name.       | string                 | Maximum length: 79     |                                      |
|                                       |                                   |                        |                        |                                      |
|                                       | Address name.                     |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| extintf                               | Interface connected to the source | string                 | Maximum length: 35     |                                      |
|                                       | network that receives the packets |                        |                        |                                      |
|                                       | that will be forwarded to the     |                        |                        |                                      |
|                                       | destination network.              |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| extip                                 | IP address or address range on    | user                   | Not Specified          |                                      |
|                                       | the external interface that you   |                        |                        |                                      |
|                                       | want to map to an address or      |                        |                        |                                      |
|                                       | address range on the destination  |                        |                        |                                      |
|                                       | network.                          |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| extport                               | Incoming port number range that   | user                   | Not Specified          |                                      |
|                                       | you want to map to a port number  |                        |                        |                                      |
|                                       | range on the destination network. |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| gratuitous-arp-interval               | Enable to have the VIP send       | integer                | Minimum value: 5       | 0                                    |
|                                       | gratuitous ARPs. 0=disabled. Set  |                        | Maximum value: 8640000 |                                      |
|                                       | from 5 up to 8640000 seconds to   |                        |                        |                                      |
|                                       | enable.                           |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| gslb-domain-name                      | Domain to use when integrating    | string                 | Maximum length: 255    |                                      |
|                                       | with FortiGSLB.                   |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| gslb-hostname                         | Hostname to use within the        | string                 | Maximum length: 35     |                                      |
|                                       | configured FortiGSLB domain.      |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| h2-support                            | Enable/disable HTTP2 support      | option                 | \-                     | enable                               |
|                                       | (default = enable).               |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *enable*    | Enable HTTP2 support.                                  |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *disable*   | Disable HTTP2 support.                                 |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| h3-support                            | Enable/disable HTTP3/QUIC support | option                 | \-                     | disable                              |
|                                       | (default = disable).              |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *enable*    | Enable HTTP3/QUIC support.                             |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *disable*   | Disable HTTP3/QUIC support.                            |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-cookie-age                       | Time in minutes that client web   | integer                | Minimum value: 0       | 60                                   |
|                                       | browsers should keep a cookie.    |                        | Maximum value: 525600  |                                      |
|                                       | Default is 60 minutes. 0 = no     |                        |                        |                                      |
|                                       | time limit.                       |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-cookie-domain                    | Domain that HTTP cookie           | string                 | Maximum length: 35     |                                      |
|                                       | persistence should apply to.      |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-cookie-domain-from-host          | Enable/disable use of HTTP cookie | option                 | \-                     | disable                              |
|                                       | domain from host field in HTTP.   |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Disable use of HTTP cookie domain from host field in   |                                                   |
|                                       | |             | HTTP (use http-cooke-domain setting).                  |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Enable use of HTTP cookie domain from host field in    |                                                   |
|                                       | |             | HTTP.                                                  |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-cookie-generation                | Generation of HTTP cookie to be   | integer                | Minimum value: 0       | 0                                    |
|                                       | accepted. Changing invalidates    |                        | Maximum value:         |                                      |
|                                       | all existing cookies.             |                        | 4294967295             |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-cookie-path                      | Limit HTTP cookie persistence to  | string                 | Maximum length: 35     |                                      |
|                                       | the specified path.               |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-cookie-share                     | Control sharing of cookies across | option                 | \-                     | same-ip                              |
|                                       | virtual servers. Use of same-ip   |                        |                        |                                      |
|                                       | means a cookie from one virtual   |                        |                        |                                      |
|                                       | server can be used by another.    |                        |                        |                                      |
|                                       | Disable stops cookie sharing.     |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Only allow HTTP cookie to match this virtual server.   |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *same-ip*   | Allow HTTP cookie to match any virtual server with     |                                                   |
|                                       | |             | same IP.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-ip-header                        | For HTTP multiplexing, enable to  | option                 | \-                     | disable                              |
|                                       | add the original client IP        |                        |                        |                                      |
|                                       | address in the X-Forwarded-For    |                        |                        |                                      |
|                                       | HTTP header.                      |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *enable*    | Enable adding HTTP header.                             |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *disable*   | Disable adding HTTP header.                            |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-ip-header-name                   | For HTTP multiplexing, enter a    | string                 | Maximum length: 35     |                                      |
|                                       | custom HTTPS header name. The     |                        |                        |                                      |
|                                       | original client IP address is     |                        |                        |                                      |
|                                       | added to this header. If empty,   |                        |                        |                                      |
|                                       | X-Forwarded-For is used.          |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-multiplex                        | Enable/disable HTTP multiplexing. | option                 | \-                     | disable                              |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *enable*    | Enable HTTP session multiplexing.                      |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *disable*   | Disable HTTP session multiplexing.                     |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-multiplex-max-concurrent-request | Maximum number of concurrent      | integer                | Minimum value: 0       | 0                                    |
|                                       | requests that a multiplex server  |                        | Maximum value:         |                                      |
|                                       | can handle (default = unlimited). |                        | 2147483647             |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-multiplex-max-request            | Maximum number of requests that a | integer                | Minimum value: 0       | 0                                    |
|                                       | multiplex server can handle       |                        | Maximum value:         |                                      |
|                                       | before disconnecting sessions     |                        | 2147483647             |                                      |
|                                       | (default = unlimited).            |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-multiplex-ttl                    | Time-to-live for idle connections | integer                | Minimum value: 0       | 15                                   |
|                                       | to servers.                       |                        | Maximum value:         |                                      |
|                                       |                                   |                        | 2147483647             |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-redirect                         | Enable/disable redirection of     | option                 | \-                     | disable                              |
|                                       | HTTP to HTTPS.                    |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *enable*    | Enable redirection of HTTP to HTTPS.                   |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *disable*   | Disable redirection of HTTP to HTTPS.                  |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| https-cookie-secure                   | Enable/disable verification that  | option                 | \-                     | disable                              |
|                                       | inserted HTTPS cookies are        |                        |                        |                                      |
|                                       | secure.                           |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Do not mark cookie as secure, allow sharing between an |                                                   |
|                                       | |             | HTTP and HTTPS connection.                             |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Mark inserted cookie as secure, cookie can only be     |                                                   |
|                                       | |             | used for HTTPS a connection.                           |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| id                                    | Custom defined ID.                | integer                | Minimum value: 0       | 0                                    |
|                                       |                                   |                        | Maximum value: 65535   |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ipv6-mappedip                         | Range of mapped IPv6 addresses.   | user                   | Not Specified          |                                      |
|                                       | Specify the start IPv6 address    |                        |                        |                                      |
|                                       | followed by a space and the end   |                        |                        |                                      |
|                                       | IPv6 address.                     |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ipv6-mappedport                       | IPv6 port number range on the     | user                   | Not Specified          |                                      |
|                                       | destination network to which the  |                        |                        |                                      |
|                                       | external port number range is     |                        |                        |                                      |
|                                       | mapped.                           |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ldb-method                            | Method used to distribute         | option                 | \-                     | static                               |
|                                       | sessions to real servers.         |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-----------------+--------------------------------------------------------+                                               |
|                                       | | Option          | Description                                            |                                               |
|                                       | +=================+========================================================+                                               |
|                                       | | *static*        | Distribute to server based on source IP.               |                                               |
|                                       | +-----------------+--------------------------------------------------------+                                               |
|                                       | | *round-robin*   | Distribute to server based round robin order.          |                                               |
|                                       | +-----------------+--------------------------------------------------------+                                               |
|                                       | | *weighted*      | Distribute to server based on weight.                  |                                               |
|                                       | +-----------------+--------------------------------------------------------+                                               |
|                                       | | *least-session* | Distribute to server with lowest session count.        |                                               |
|                                       | +-----------------+--------------------------------------------------------+                                               |
|                                       | | *least-rtt*     | Distribute to server with lowest Round-Trip-Time.      |                                               |
|                                       | +-----------------+--------------------------------------------------------+                                               |
|                                       | | *first-alive*   | Distribute to the first server that is alive.          |                                               |
|                                       | +-----------------+--------------------------------------------------------+                                               |
|                                       | | *http-host*     | Distribute to server based on host field in HTTP       |                                               |
|                                       | |                 | header.                                                |                                               |
|                                       | +-----------------+--------------------------------------------------------+                                               |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| mapped-addr                           | Mapped FQDN address name.         | string                 | Maximum length: 79     |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| mappedip `<range>`                    | IP address or address range on    | string                 | Maximum length: 79     |                                      |
|                                       | the destination network to which  |                        |                        |                                      |
|                                       | the external IP address is        |                        |                        |                                      |
|                                       | mapped.                           |                        |                        |                                      |
|                                       |                                   |                        |                        |                                      |
|                                       | Mapped IP range.                  |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| mappedport                            | Port number range on the          | user                   | Not Specified          |                                      |
|                                       | destination network to which the  |                        |                        |                                      |
|                                       | external port number range is     |                        |                        |                                      |
|                                       | mapped.                           |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| max-embryonic-connections             | Maximum number of incomplete      | integer                | Minimum value: 0       | 1000                                 |
|                                       | connections.                      |                        | Maximum value: 100000  |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| monitor `<name>`                      | Name of the health check monitor  | string                 | Maximum length: 79     |                                      |
|                                       | to use when polling to determine  |                        |                        |                                      |
|                                       | a virtual server\'s connectivity  |                        |                        |                                      |
|                                       | status.                           |                        |                        |                                      |
|                                       |                                   |                        |                        |                                      |
|                                       | Health monitor name.              |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| name                                  | Virtual IP name.                  | string                 | Maximum length: 79     |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| nat-source-vip                        | Enable/disable forcing the source | option                 | \-                     | disable                              |
|                                       | NAT mapped IP to the external IP  |                        |                        |                                      |
|                                       | for all traffic.                  |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Force only the source NAT mapped IP to the external IP |                                                   |
|                                       | |             | for traffic egressing the external interface of the    |                                                   |
|                                       | |             | VIP.                                                   |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Force the source NAT mapped IP to the external IP for  |                                                   |
|                                       | |             | all traffic.                                           |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| nat44                                 | Enable/disable NAT44.             | option                 | \-                     | enable                               |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Disable NAT44.                                         |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Enable NAT44.                                          |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| nat46                                 | Enable/disable NAT46.             | option                 | \-                     | disable                              |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Disable NAT46.                                         |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Enable NAT46.                                          |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| one-click-gslb-server                 | Enable/disable one click GSLB     | option                 | \-                     | disable                              |
|                                       | server integration with           |                        |                        |                                      |
|                                       | FortiGSLB.                        |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Disable integration with FortiGSLB.                    |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Enable integration with FortiGSLB.                     |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| outlook-web-access                    | Enable to add the Front-End-Https | option                 | \-                     | disable                              |
|                                       | header for Microsoft Outlook Web  |                        |                        |                                      |
|                                       | Access.                           |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Disable Outlook Web Access support.                    |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Enable Outlook Web Access support.                     |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| persistence                           | Configure how to make sure that   | option                 | \-                     | none                                 |
|                                       | clients connect to the same       |                        |                        |                                      |
|                                       | server every time they make a     |                        |                        |                                      |
|                                       | request that is part of the same  |                        |                        |                                      |
|                                       | session.                          |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +------------------+--------------------------------------------------------+                                              |
|                                       | | Option           | Description                                            |                                              |
|                                       | +==================+========================================================+                                              |
|                                       | | *none*           | None.                                                  |                                              |
|                                       | +------------------+--------------------------------------------------------+                                              |
|                                       | | *http-cookie*    | HTTP cookie.                                           |                                              |
|                                       | +------------------+--------------------------------------------------------+                                              |
|                                       | | *ssl-session-id* | SSL session ID.                                        |                                              |
|                                       | +------------------+--------------------------------------------------------+                                              |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| portforward                           | Enable/disable port forwarding.   | option                 | \-                     | disable                              |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Disable port forward.                                  |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Enable port forward.                                   |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| portmapping-type                      | Port mapping type.                | option                 | \-                     | 1-to-1                               |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *1-to-1*    | One to one.                                            |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *m-to-n*    | Many to many.                                          |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| protocol                              | Protocol to use when forwarding   | option                 | \-                     | tcp                                  |
|                                       | packets.                          |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *tcp*       | TCP.                                                   |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *udp*       | UDP.                                                   |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *sctp*      | SCTP.                                                  |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *icmp*      | ICMP.                                                  |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| server-type                           | Protocol to be load balanced by   | option                 | \-                     |                                      |
|                                       | the virtual server (also called   |                        |                        |                                      |
|                                       | the server load balance virtual   |                        |                        |                                      |
|                                       | IP).                              |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *http*      | HTTP.                                                  |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *https*     | HTTPS.                                                 |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *imaps*     | IMAPS.                                                 |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *pop3s*     | POP3S.                                                 |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *smtps*     | SMTPS.                                                 |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *ssl*       | SSL.                                                   |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tcp*       | TCP.                                                   |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *udp*       | UDP.                                                   |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *ip*        | IP.                                                    |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| service `<name>`                      | Service name.                     | string                 | Maximum length: 79     |                                      |
|                                       |                                   |                        |                        |                                      |
|                                       | Service name.                     |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| src-filter `<range>`                  | Source address filter. Each       | string                 | Maximum length: 79     |                                      |
|                                       | address must be either an         |                        |                        |                                      |
|                                       | IP/subnet (x.x.x.x/n) or a range  |                        |                        |                                      |
|                                       | (x.x.x.x-y.y.y.y). Separate       |                        |                        |                                      |
|                                       | addresses with spaces.            |                        |                        |                                      |
|                                       |                                   |                        |                        |                                      |
|                                       | Source-filter range.              |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| src-vip-filter                        | Enable/disable use of             | option                 | \-                     | disable                              |
|                                       | \'src-filter\' to match           |                        |                        |                                      |
|                                       | destinations for the reverse SNAT |                        |                        |                                      |
|                                       | rule.                             |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Match any destination for the reverse SNAT rule.       |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Match only destinations in \'src-filter\' for the      |                                                   |
|                                       | |             | reverse SNAT rule.                                     |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| srcintf-filter `<interface-name>`     | Interfaces to which the VIP       | string                 | Maximum length: 79     |                                      |
|                                       | applies. Separate the names with  |                        |                        |                                      |
|                                       | spaces.                           |                        |                        |                                      |
|                                       |                                   |                        |                        |                                      |
|                                       | Interface name.                   |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-accept-ffdhe-groups               | Enable/disable FFDHE cipher suite | option                 | \-                     | enable                               |
|                                       | for SSL key exchange.             |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *enable*    | Accept FFDHE groups.                                   |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *disable*   | Do not accept FFDHE groups.                            |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-algorithm                         | Permitted encryption algorithms   | option                 | \-                     | high                                 |
|                                       | for SSL sessions according to     |                        |                        |                                      |
|                                       | encryption strength.              |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *high*      | High encryption. Allow only AES and ChaCha.            |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *medium*    | Medium encryption. Allow AES, ChaCha, 3DES, and RC4.   |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *low*       | Low encryption. Allow AES, ChaCha, 3DES, RC4, and DES. |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *custom*    | Custom encryption. Use config ssl-cipher-suites to     |                                                   |
|                                       | |             | select the cipher suites that are allowed.             |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-certificate `<name>`              | Name of the certificate to use    | string                 | Maximum length: 79     |                                      |
|                                       | for SSL handshake.                |                        |                        |                                      |
|                                       |                                   |                        |                        |                                      |
|                                       | Certificate list.                 |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-client-fallback                   | Enable/disable support for        | option                 | \-                     | enable                               |
|                                       | preventing Downgrade Attacks on   |                        |                        |                                      |
|                                       | client connections (RFC 7507).    |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Disable.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Enable.                                                |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-client-rekey-count                | Maximum length of data in MB      | integer                | Minimum value: 200     | 0                                    |
|                                       | before triggering a client rekey  |                        | Maximum value: 1048576 |                                      |
|                                       | (0 = disable).                    |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-client-renegotiation              | Allow, deny, or require secure    | option                 | \-                     | secure                               |
|                                       | renegotiation of client sessions  |                        |                        |                                      |
|                                       | to comply with RFC 5746.          |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *allow*     | Allow a SSL client to renegotiate.                     |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *deny*      | Abort any client initiated SSL re-negotiation attempt. |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *secure*    | Abort any client initiated SSL re-negotiation attempt  |                                                   |
|                                       | |             | that does not use RFC 5746 Secure Renegotiation.       |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-client-session-state-max          | Maximum number of client to       | integer                | Minimum value: 1       | 1000                                 |
|                                       | FortiGate SSL session states to   |                        | Maximum value: 10000   |                                      |
|                                       | keep.                             |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-client-session-state-timeout      | Number of minutes to keep client  | integer                | Minimum value: 1       | 30                                   |
|                                       | to FortiGate SSL session state.   |                        | Maximum value: 14400   |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-client-session-state-type         | How to expire SSL sessions for    | option                 | \-                     | both                                 |
|                                       | the segment of the SSL connection |                        |                        |                                      |
|                                       | between the client and the        |                        |                        |                                      |
|                                       | FortiGate.                        |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Do not keep session states.                            |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *time*      | Expire session states after this many minutes.         |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *count*     | Expire session states when this maximum is reached.    |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *both*      | Expire session states based on time or count,          |                                                   |
|                                       | |             | whichever occurs first.                                |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-dh-bits                           | Number of bits to use in the      | option                 | \-                     | 2048                                 |
|                                       | Diffie-Hellman exchange for RSA   |                        |                        |                                      |
|                                       | encryption of SSL sessions.       |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *768*       | 768-bit Diffie-Hellman prime.                          |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *1024*      | 1024-bit Diffie-Hellman prime.                         |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *1536*      | 1536-bit Diffie-Hellman prime.                         |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *2048*      | 2048-bit Diffie-Hellman prime.                         |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *3072*      | 3072-bit Diffie-Hellman prime.                         |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *4096*      | 4096-bit Diffie-Hellman prime.                         |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hpkp                              | Enable/disable including HPKP     | option                 | \-                     | disable                              |
|                                       | header in response.               |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +---------------+--------------------------------------------------------+                                                 |
|                                       | | Option        | Description                                            |                                                 |
|                                       | +===============+========================================================+                                                 |
|                                       | | *disable*     | Do not add a HPKP header to each HTTP response.        |                                                 |
|                                       | +---------------+--------------------------------------------------------+                                                 |
|                                       | | *enable*      | Add a HPKP header to each a HTTP response.             |                                                 |
|                                       | +---------------+--------------------------------------------------------+                                                 |
|                                       | | *report-only* | Add a HPKP Report-Only header to each HTTP response.   |                                                 |
|                                       | +---------------+--------------------------------------------------------+                                                 |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hpkp-age                          | Number of seconds the client      | integer                | Minimum value: 60      | 5184000                              |
|                                       | should honor the HPKP setting.    |                        | Maximum value:         |                                      |
|                                       |                                   |                        | 157680000              |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hpkp-backup                       | Certificate to generate backup    | string                 | Maximum length: 79     |                                      |
|                                       | HPKP pin from.                    |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hpkp-include-subdomains           | Indicate that HPKP header applies | option                 | \-                     | disable                              |
|                                       | to all subdomains.                |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | HPKP header does not apply to subdomains.              |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | HPKP header applies to subdomains.                     |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hpkp-primary                      | Certificate to generate primary   | string                 | Maximum length: 79     |                                      |
|                                       | HPKP pin from.                    |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hpkp-report-uri                   | URL to report HPKP violations to. | var-string             | Maximum length: 255    |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hsts                              | Enable/disable including HSTS     | option                 | \-                     | disable                              |
|                                       | header in response.               |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Do not add a HSTS header to each a HTTP response.      |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Add a HSTS header to each HTTP response.               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hsts-age                          | Number of seconds the client      | integer                | Minimum value: 60      | 5184000                              |
|                                       | should honor the HSTS setting.    |                        | Maximum value:         |                                      |
|                                       |                                   |                        | 157680000              |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hsts-include-subdomains           | Indicate that HSTS header applies | option                 | \-                     | disable                              |
|                                       | to all subdomains.                |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | HSTS header does not apply to subdomains.              |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | HSTS header applies to subdomains.                     |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-http-location-conversion          | Enable to replace HTTP with HTTPS | option                 | \-                     | disable                              |
|                                       | in the reply\'s Location HTTP     |                        |                        |                                      |
|                                       | header field.                     |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *enable*    | Enable HTTP location conversion.                       |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *disable*   | Disable HTTP location conversion.                      |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-http-match-host                   | Enable/disable HTTP host matching | option                 | \-                     | enable                               |
|                                       | for location conversion.          |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *enable*    | Match HTTP host in response header.                    |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *disable*   | Do not match HTTP host.                                |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-max-version                       | Highest SSL/TLS version           | option                 | \-                     | tls-1.3                              |
|                                       | acceptable from a client.         |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *ssl-3.0*   | SSL 3.0.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.0*   | TLS 1.0.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.1*   | TLS 1.1.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.2*   | TLS 1.2.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.3*   | TLS 1.3.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-min-version                       | Lowest SSL/TLS version acceptable | option                 | \-                     | tls-1.1                              |
|                                       | from a client.                    |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *ssl-3.0*   | SSL 3.0.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.0*   | TLS 1.0.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.1*   | TLS 1.1.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.2*   | TLS 1.2.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.3*   | TLS 1.3.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-mode                              | Apply SSL offloading between the  | option                 | \-                     | half                                 |
|                                       | client and the FortiGate (half)   |                        |                        |                                      |
|                                       | or from the client to the         |                        |                        |                                      |
|                                       | FortiGate and from the FortiGate  |                        |                        |                                      |
|                                       | to the server (full).             |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *half*      | Client to FortiGate SSL.                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *full*      | Client to FortiGate and FortiGate to Server SSL.       |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-pfs                               | Select the cipher suites that can | option                 | \-                     | require                              |
|                                       | be used for SSL perfect forward   |                        |                        |                                      |
|                                       | secrecy (PFS). Applies to both    |                        |                        |                                      |
|                                       | client and server sessions.       |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *require*   | Allow only Diffie-Hellman cipher-suites, so PFS is     |                                                   |
|                                       | |             | applied.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *deny*      | Allow only non-Diffie-Hellman cipher-suites, so PFS is |                                                   |
|                                       | |             | not applied.                                           |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *allow*     | Allow use of any cipher suite so PFS may or may not be |                                                   |
|                                       | |             | used depending on the cipher suite selected.           |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-send-empty-frags                  | Enable/disable sending empty      | option                 | \-                     | enable                               |
|                                       | fragments to avoid CBC IV attacks |                        |                        |                                      |
|                                       | (SSL 3.0 & TLS 1.0 only). May     |                        |                        |                                      |
|                                       | need to be disabled for           |                        |                        |                                      |
|                                       | compatibility with older systems. |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *enable*    | Send empty fragments.                                  |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *disable*   | Do not send empty fragments.                           |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-algorithm                  | Permitted encryption algorithms   | option                 | \-                     | client                               |
|                                       | for the server side of SSL full   |                        |                        |                                      |
|                                       | mode sessions according to        |                        |                        |                                      |
|                                       | encryption strength.              |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *high*      | High encryption. Allow only AES and ChaCha.            |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *medium*    | Medium encryption. Allow AES, ChaCha, 3DES, and RC4.   |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *low*       | Low encryption. Allow AES, ChaCha, 3DES, RC4, and DES. |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *custom*    | Custom encryption. Use ssl-server-cipher-suites to     |                                                   |
|                                       | |             | select the cipher suites that are allowed.             |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *client*    | Use the same encryption algorithms for both client and |                                                   |
|                                       | |             | server sessions.                                       |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-max-version                | Highest SSL/TLS version           | option                 | \-                     | client                               |
|                                       | acceptable from a server. Use the |                        |                        |                                      |
|                                       | client setting by default.        |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *ssl-3.0*   | SSL 3.0.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.0*   | TLS 1.0.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.1*   | TLS 1.1.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.2*   | TLS 1.2.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.3*   | TLS 1.3.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *client*    | Use same value as client configuration.                |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-min-version                | Lowest SSL/TLS version acceptable | option                 | \-                     | client                               |
|                                       | from a server. Use the client     |                        |                        |                                      |
|                                       | setting by default.               |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *ssl-3.0*   | SSL 3.0.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.0*   | TLS 1.0.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.1*   | TLS 1.1.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.2*   | TLS 1.2.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *tls-1.3*   | TLS 1.3.                                               |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *client*    | Use same value as client configuration.                |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-renegotiation              | Enable/disable secure             | option                 | \-                     | enable                               |
|                                       | renegotiation to comply with RFC  |                        |                        |                                      |
|                                       | 5746.                             |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *enable*    | Enable secure renegotiation.                           |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *disable*   | Disable secure renegotiation.                          |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-session-state-max          | Maximum number of FortiGate to    | integer                | Minimum value: 1       | 100                                  |
|                                       | Server SSL session states to      |                        | Maximum value: 10000   |                                      |
|                                       | keep.                             |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-session-state-timeout      | Number of minutes to keep         | integer                | Minimum value: 1       | 60                                   |
|                                       | FortiGate to Server SSL session   |                        | Maximum value: 14400   |                                      |
|                                       | state.                            |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-session-state-type         | How to expire SSL sessions for    | option                 | \-                     | both                                 |
|                                       | the segment of the SSL connection |                        |                        |                                      |
|                                       | between the server and the        |                        |                        |                                      |
|                                       | FortiGate.                        |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Do not keep session states.                            |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *time*      | Expire session states after this many minutes.         |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *count*     | Expire session states when this maximum is reached.    |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *both*      | Expire session states based on time or count,          |                                                   |
|                                       | |             | whichever occurs first.                                |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| status                                | Enable/disable VIP.               | option                 | \-                     | enable                               |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Disable the VIP.                                       |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Enable the VIP.                                        |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| type                                  | Configure a static NAT, load      | option                 | \-                     | static-nat                           |
|                                       | balance, server load balance,     |                        |                        |                                      |
|                                       | access proxy, DNS translation, or |                        |                        |                                      |
|                                       | FQDN VIP.                         |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-----------------------+--------------------------------------------------------+                                         |
|                                       | | Option                | Description                                            |                                         |
|                                       | +=======================+========================================================+                                         |
|                                       | | *static-nat*          | Static NAT.                                            |                                         |
|                                       | +-----------------------+--------------------------------------------------------+                                         |
|                                       | | *load-balance*        | Load balance.                                          |                                         |
|                                       | +-----------------------+--------------------------------------------------------+                                         |
|                                       | | *server-load-balance* | Server load balance.                                   |                                         |
|                                       | +-----------------------+--------------------------------------------------------+                                         |
|                                       | | *dns-translation*     | DNS translation.                                       |                                         |
|                                       | +-----------------------+--------------------------------------------------------+                                         |
|                                       | | *fqdn*                | Fully qualified domain name.                           |                                         |
|                                       | +-----------------------+--------------------------------------------------------+                                         |
|                                       | | *access-proxy*        | Access proxy.                                          |                                         |
|                                       | +-----------------------+--------------------------------------------------------+                                         |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| user-agent-detect                     | Enable/disable detecting device   | option                 | \-                     | enable                               |
|                                       | type by HTTP user-agent if no     |                        |                        |                                      |
|                                       | client certificate is provided.   |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Disable detecting unknown devices by HTTP user-agent   |                                                   |
|                                       | |             | if no client certificate is provided.                  |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Enable detecting unknown devices by HTTP user-agent if |                                                   |
|                                       | |             | no client certificate is provided.                     |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| uuid                                  | Universally Unique Identifier     | uuid                   | Not Specified          | 00000000-0000-0000-0000-000000000000 |
|                                       | (UUID; automatically assigned but |                        |                        |                                      |
|                                       | can be manually reset).           |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| weblogic-server                       | Enable to add an HTTP header to   | option                 | \-                     | disable                              |
|                                       | indicate SSL offloading for a     |                        |                        |                                      |
|                                       | WebLogic server.                  |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Do not add HTTP header indicating SSL offload for      |                                                   |
|                                       | |             | WebLogic server.                                       |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Add HTTP header indicating SSL offload for WebLogic    |                                                   |
|                                       | |             | server.                                                |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| websphere-server                      | Enable to add an HTTP header to   | option                 | \-                     | disable                              |
|                                       | indicate SSL offloading for a     |                        |                        |                                      |
|                                       | WebSphere server.                 |                        |                        |                                      |
+---------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | Option      | Description                                            |                                                   |
|                                       | +=============+========================================================+                                                   |
|                                       | | *disable*   | Do not add HTTP header indicating SSL offload for      |                                                   |
|                                       | |             | WebSphere server.                                      |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
|                                       | | *enable*    | Add HTTP header indicating SSL offload for WebSphere   |                                                   |
|                                       | |             | server.                                                |                                                   |
|                                       | +-------------+--------------------------------------------------------+                                                   |
+---------------------------------------+----------------------------------------------------------------------------------------------------------------------------+

