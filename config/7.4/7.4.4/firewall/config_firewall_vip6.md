# config firewall vip6

Configure virtual IP for IPv6.

## Syntax

```
config firewall vip6
    Description: Configure virtual IP for IPv6.
    edit <name>
        set add-nat64-route [disable|enable]
        set color {integer}
        set comment {var-string}
        set embedded-ipv4-address [disable|enable]
        set extip {user}
        set extport {user}
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
        set http-redirect [enable|disable]
        set https-cookie-secure [disable|enable]
        set id {integer}
        set ipv4-mappedip {user}
        set ipv4-mappedport {user}
        set ldb-method [static|round-robin|...]
        set mappedip {user}
        set mappedport {user}
        set max-embryonic-connections {integer}
        set monitor <name1>, <name2>, ...
        set nat-source-vip [disable|enable]
        set nat64 [disable|enable]
        set nat66 [disable|enable]
        set ndp-reply [disable|enable]
        set outlook-web-access [disable|enable]
        set persistence [none|http-cookie|...]
        set portforward [disable|enable]
        set protocol [tcp|udp|...]
        config quic
            Description: QUIC setting.
            set max-idle-timeout {integer}
            set max-udp-payload-size {integer}
            set active-connection-id-limit {integer}
            set ack-delay-exponent {integer}
            set max-ack-delay {integer}
            set max-datagram-frame-size {integer}
            set active-migration [enable|disable]
            set grease-quic-bit [enable|disable]
        end
        config realservers
            Description: Select the real servers that this server load balancing VIP will distribute traffic to.
            edit <id>
                set ip {user}
                set port {integer}
                set status [active|standby|...]
                set weight {integer}
                set holddown-interval {integer}
                set healthcheck [disable|enable|...]
                set http-host {string}
                set translate-host [enable|disable]
                set max-connections {integer}
                set monitor <name1>, <name2>, ...
                set client-ip {user}
            next
        end
        set server-type [http|https|...]
        set src-filter <range1>, <range2>, ...
        set src-vip-filter [disable|enable]
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
        set type [static-nat|server-load-balance|...]
        set uuid {uuid}
        set weblogic-server [disable|enable]
        set websphere-server [disable|enable]
    next
end
```

## Parameters

+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| Parameter                        | Description                       | Type                   | Size                   | Default                              |
+==================================+===================================+========================+========================+======================================+
| add-nat64-route                  | Enable/disable adding NAT64       | option                 | \-                     | enable                               |
|                                  | route.                            |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Disable adding NAT64 route.                            |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Enable adding NAT64 route.                             |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| color                            | Color of icon on the GUI.         | integer                | Minimum value: 0       | 0                                    |
|                                  |                                   |                        | Maximum value: 32      |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| comment                          | Comment.                          | var-string             | Maximum length: 255    |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| embedded-ipv4-address            | Enable/disable use of the lower   | option                 | \-                     | disable                              |
|                                  | 32 bits of the external IPv6      |                        |                        |                                      |
|                                  | address as mapped IPv4 address.   |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Disable use of the lower 32 bits of the external IPv6  |                                                   |
|                                  | |             | address as mapped IPv4 address.                        |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Enable use of the lower 32 bits of the external IPv6   |                                                   |
|                                  | |             | address as mapped IPv4 address.                        |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| extip                            | IPv6 address or address range on  | user                   | Not Specified          |                                      |
|                                  | the external interface that you   |                        |                        |                                      |
|                                  | want to map to an address or      |                        |                        |                                      |
|                                  | address range on the destination  |                        |                        |                                      |
|                                  | network.                          |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| extport                          | Incoming port number range that   | user                   | Not Specified          |                                      |
|                                  | you want to map to a port number  |                        |                        |                                      |
|                                  | range on the destination network. |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| h2-support                       | Enable/disable HTTP2 support.     | option                 | \-                     | enable                               |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *enable*    | Enable HTTP2 support.                                  |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *disable*   | Disable HTTP2 support.                                 |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| h3-support                       | Enable/disable HTTP3/QUIC         | option                 | \-                     | disable                              |
|                                  | support.                          |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *enable*    | Enable HTTP3/QUIC support.                             |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *disable*   | Disable HTTP3/QUIC support.                            |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-cookie-age                  | Time in minutes that client web   | integer                | Minimum value: 0       | 60                                   |
|                                  | browsers should keep a cookie.    |                        | Maximum value: 525600  |                                      |
|                                  | Default is 60 minutes. 0 = no     |                        |                        |                                      |
|                                  | time limit.                       |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-cookie-domain               | Domain that HTTP cookie           | string                 | Maximum length: 35     |                                      |
|                                  | persistence should apply to.      |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-cookie-domain-from-host     | Enable/disable use of HTTP cookie | option                 | \-                     | disable                              |
|                                  | domain from host field in HTTP.   |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Disable use of HTTP cookie domain from host field in   |                                                   |
|                                  | |             | HTTP (use http-cooke-domain setting).                  |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Enable use of HTTP cookie domain from host field in    |                                                   |
|                                  | |             | HTTP.                                                  |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-cookie-generation           | Generation of HTTP cookie to be   | integer                | Minimum value: 0       | 0                                    |
|                                  | accepted. Changing invalidates    |                        | Maximum value:         |                                      |
|                                  | all existing cookies.             |                        | 4294967295             |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-cookie-path                 | Limit HTTP cookie persistence to  | string                 | Maximum length: 35     |                                      |
|                                  | the specified path.               |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-cookie-share                | Control sharing of cookies across | option                 | \-                     | same-ip                              |
|                                  | virtual servers. Use of same-ip   |                        |                        |                                      |
|                                  | means a cookie from one virtual   |                        |                        |                                      |
|                                  | server can be used by another.    |                        |                        |                                      |
|                                  | Disable stops cookie sharing.     |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Only allow HTTP cookie to match this virtual server.   |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *same-ip*   | Allow HTTP cookie to match any virtual server with     |                                                   |
|                                  | |             | same IP.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-ip-header                   | For HTTP multiplexing, enable to  | option                 | \-                     | disable                              |
|                                  | add the original client IP        |                        |                        |                                      |
|                                  | address in the XForwarded-For     |                        |                        |                                      |
|                                  | HTTP header.                      |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *enable*    | Enable adding HTTP header.                             |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *disable*   | Disable adding HTTP header.                            |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-ip-header-name              | For HTTP multiplexing, enter a    | string                 | Maximum length: 35     |                                      |
|                                  | custom HTTPS header name. The     |                        |                        |                                      |
|                                  | original client IP address is     |                        |                        |                                      |
|                                  | added to this header. If empty,   |                        |                        |                                      |
|                                  | X-Forwarded-For is used.          |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-multiplex                   | Enable/disable HTTP multiplexing. | option                 | \-                     | disable                              |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *enable*    | Enable HTTP session multiplexing.                      |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *disable*   | Disable HTTP session multiplexing.                     |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-redirect                    | Enable/disable redirection of     | option                 | \-                     | disable                              |
|                                  | HTTP to HTTPS.                    |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *enable*    | Enable redirection of HTTP to HTTPS.                   |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *disable*   | Disable redirection of HTTP to HTTPS.                  |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| https-cookie-secure              | Enable/disable verification that  | option                 | \-                     | disable                              |
|                                  | inserted HTTPS cookies are        |                        |                        |                                      |
|                                  | secure.                           |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Do not mark cookie as secure, allow sharing between an |                                                   |
|                                  | |             | HTTP and HTTPS connection.                             |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Mark inserted cookie as secure, cookie can only be     |                                                   |
|                                  | |             | used for HTTPS a connection.                           |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| id                               | Custom defined ID.                | integer                | Minimum value: 0       | 0                                    |
|                                  |                                   |                        | Maximum value: 65535   |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ipv4-mappedip                    | Range of mapped IP addresses.     | user                   | Not Specified          |                                      |
|                                  | Specify the start IP address      |                        |                        |                                      |
|                                  | followed by a space and the end   |                        |                        |                                      |
|                                  | IP address.                       |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ipv4-mappedport                  | IPv4 port number range on the     | user                   | Not Specified          |                                      |
|                                  | destination network to which the  |                        |                        |                                      |
|                                  | external port number range is     |                        |                        |                                      |
|                                  | mapped.                           |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ldb-method                       | Method used to distribute         | option                 | \-                     | static                               |
|                                  | sessions to real servers.         |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-----------------+--------------------------------------------------------+                                               |
|                                  | | Option          | Description                                            |                                               |
|                                  | +=================+========================================================+                                               |
|                                  | | *static*        | Distribute sessions based on source IP.                |                                               |
|                                  | +-----------------+--------------------------------------------------------+                                               |
|                                  | | *round-robin*   | Distribute sessions based round robin order.           |                                               |
|                                  | +-----------------+--------------------------------------------------------+                                               |
|                                  | | *weighted*      | Distribute sessions based on weight.                   |                                               |
|                                  | +-----------------+--------------------------------------------------------+                                               |
|                                  | | *least-session* | Sends new sessions to the server with the lowest       |                                               |
|                                  | |                 | session count.                                         |                                               |
|                                  | +-----------------+--------------------------------------------------------+                                               |
|                                  | | *least-rtt*     | Distribute new sessions to the server with lowest      |                                               |
|                                  | |                 | Round-Trip-Time.                                       |                                               |
|                                  | +-----------------+--------------------------------------------------------+                                               |
|                                  | | *first-alive*   | Distribute sessions to the first server that is alive. |                                               |
|                                  | +-----------------+--------------------------------------------------------+                                               |
|                                  | | *http-host*     | Distribute sessions to servers based on host field in  |                                               |
|                                  | |                 | HTTP header.                                           |                                               |
|                                  | +-----------------+--------------------------------------------------------+                                               |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| mappedip                         | Mapped IPv6 address range in the  | user                   | Not Specified          |                                      |
|                                  | format startIP-endIP.             |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| mappedport                       | Port number range on the          | user                   | Not Specified          |                                      |
|                                  | destination network to which the  |                        |                        |                                      |
|                                  | external port number range is     |                        |                        |                                      |
|                                  | mapped.                           |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| max-embryonic-connections        | Maximum number of incomplete      | integer                | Minimum value: 0       | 1000                                 |
|                                  | connections.                      |                        | Maximum value: 100000  |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| monitor `<name>`                 | Name of the health check monitor  | string                 | Maximum length: 79     |                                      |
|                                  | to use when polling to determine  |                        |                        |                                      |
|                                  | a virtual server\'s connectivity  |                        |                        |                                      |
|                                  | status.                           |                        |                        |                                      |
|                                  |                                   |                        |                        |                                      |
|                                  | Health monitor name.              |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| name                             | Virtual ip6 name.                 | string                 | Maximum length: 79     |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| nat-source-vip                   | Enable to perform SNAT on traffic | option                 | \-                     | disable                              |
|                                  | from mappedip to the extip for    |                        |                        |                                      |
|                                  | all egress interfaces.            |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Disable nat-source-vip.                                |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Perform SNAT on traffic from mappedip to the extip for |                                                   |
|                                  | |             | all egress interfaces.                                 |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| nat64                            | Enable/disable DNAT64.            | option                 | \-                     | disable                              |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Disable DNAT64.                                        |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Enable DNAT64.                                         |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| nat66                            | Enable/disable DNAT66.            | option                 | \-                     | enable                               |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Disable DNAT66.                                        |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Enable DNAT66.                                         |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ndp-reply                        | Enable/disable this FortiGate     | option                 | \-                     | enable                               |
|                                  | unit\'s ability to respond to NDP |                        |                        |                                      |
|                                  | requests for this virtual IP      |                        |                        |                                      |
|                                  | address.                          |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Disable this FortiGate unit\'s ability to respond to   |                                                   |
|                                  | |             | NDP requests for this virtual IP address.              |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Enable this FortiGate unit\'s ability to respond to    |                                                   |
|                                  | |             | NDP requests for this virtual IP address.              |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| outlook-web-access               | Enable to add the Front-End-Https | option                 | \-                     | disable                              |
|                                  | header for Microsoft Outlook Web  |                        |                        |                                      |
|                                  | Access.                           |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Disable Outlook Web Access support.                    |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Enable Outlook Web Access support.                     |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| persistence                      | Configure how to make sure that   | option                 | \-                     | none                                 |
|                                  | clients connect to the same       |                        |                        |                                      |
|                                  | server every time they make a     |                        |                        |                                      |
|                                  | request that is part of the same  |                        |                        |                                      |
|                                  | session.                          |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +------------------+--------------------------------------------------------+                                              |
|                                  | | Option           | Description                                            |                                              |
|                                  | +==================+========================================================+                                              |
|                                  | | *none*           | None.                                                  |                                              |
|                                  | +------------------+--------------------------------------------------------+                                              |
|                                  | | *http-cookie*    | HTTP cookie.                                           |                                              |
|                                  | +------------------+--------------------------------------------------------+                                              |
|                                  | | *ssl-session-id* | SSL session ID.                                        |                                              |
|                                  | +------------------+--------------------------------------------------------+                                              |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| portforward                      | Enable port forwarding.           | option                 | \-                     | disable                              |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Disable port forward.                                  |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Enable/disable port forwarding.                        |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| protocol                         | Protocol to use when forwarding   | option                 | \-                     | tcp                                  |
|                                  | packets.                          |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *tcp*       | TCP.                                                   |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *udp*       | UDP.                                                   |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *sctp*      | SCTP.                                                  |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| server-type                      | Protocol to be load balanced by   | option                 | \-                     |                                      |
|                                  | the virtual server (also called   |                        |                        |                                      |
|                                  | the server load balance virtual   |                        |                        |                                      |
|                                  | IP).                              |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *http*      | HTTP.                                                  |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *https*     | HTTPS.                                                 |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *imaps*     | IMAPS.                                                 |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *pop3s*     | POP3S.                                                 |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *smtps*     | SMTPS.                                                 |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *ssl*       | SSL.                                                   |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tcp*       | TCP.                                                   |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *udp*       | UDP.                                                   |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *ip*        | IP.                                                    |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| src-filter `<range>`             | Source IP6 filter                 | string                 | Maximum length: 79     |                                      |
|                                  | (x:x:x:x:x:x:x:x/x). Separate     |                        |                        |                                      |
|                                  | addresses with spaces.            |                        |                        |                                      |
|                                  |                                   |                        |                        |                                      |
|                                  | Source-filter range.              |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| src-vip-filter                   | Enable/disable use of             | option                 | \-                     | disable                              |
|                                  | \'src-filter\' to match           |                        |                        |                                      |
|                                  | destinations for the reverse SNAT |                        |                        |                                      |
|                                  | rule.                             |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Match any destination for the reverse SNAT rule.       |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Match only destinations in \'src-filter\' for the      |                                                   |
|                                  | |             | reverse SNAT rule.                                     |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-accept-ffdhe-groups          | Enable/disable FFDHE cipher suite | option                 | \-                     | enable                               |
|                                  | for SSL key exchange.             |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *enable*    | Accept FFDHE groups.                                   |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *disable*   | Do not accept FFDHE groups.                            |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-algorithm                    | Permitted encryption algorithms   | option                 | \-                     | high                                 |
|                                  | for SSL sessions according to     |                        |                        |                                      |
|                                  | encryption strength.              |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *high*      | Use AES.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *medium*    | Use AES, 3DES, or RC4.                                 |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *low*       | Use AES, 3DES, RC4, or DES.                            |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *custom*    | Use config ssl-cipher-suites to select the cipher      |                                                   |
|                                  | |             | suites that are allowed.                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-certificate `<name>`         | Name of the certificate to use    | string                 | Maximum length: 79     |                                      |
|                                  | for SSL handshake.                |                        |                        |                                      |
|                                  |                                   |                        |                        |                                      |
|                                  | Certificate list.                 |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-client-fallback              | Enable/disable support for        | option                 | \-                     | enable                               |
|                                  | preventing Downgrade Attacks on   |                        |                        |                                      |
|                                  | client connections (RFC 7507).    |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Disable.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Enable.                                                |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-client-rekey-count           | Maximum length of data in MB      | integer                | Minimum value: 200     | 0                                    |
|                                  | before triggering a client rekey  |                        | Maximum value: 1048576 |                                      |
|                                  | (0 = disable).                    |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-client-renegotiation         | Allow, deny, or require secure    | option                 | \-                     | secure                               |
|                                  | renegotiation of client sessions  |                        |                        |                                      |
|                                  | to comply with RFC 5746.          |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *allow*     | Allow a SSL client to renegotiate.                     |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *deny*      | Abort any SSL connection that attempts to renegotiate. |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *secure*    | Reject any SSL connection that does not offer a RFC    |                                                   |
|                                  | |             | 5746 Secure Renegotiation Indication.                  |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-client-session-state-max     | Maximum number of client to       | integer                | Minimum value: 1       | 1000                                 |
|                                  | FortiGate SSL session states to   |                        | Maximum value: 10000   |                                      |
|                                  | keep.                             |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-client-session-state-timeout | Number of minutes to keep client  | integer                | Minimum value: 1       | 30                                   |
|                                  | to FortiGate SSL session state.   |                        | Maximum value: 14400   |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-client-session-state-type    | How to expire SSL sessions for    | option                 | \-                     | both                                 |
|                                  | the segment of the SSL connection |                        |                        |                                      |
|                                  | between the client and the        |                        |                        |                                      |
|                                  | FortiGate.                        |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Do not keep session states.                            |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *time*      | Expire session states after this many minutes.         |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *count*     | Expire session states when this maximum is reached.    |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *both*      | Expire session states based on time or count,          |                                                   |
|                                  | |             | whichever occurs first.                                |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-dh-bits                      | Number of bits to use in the      | option                 | \-                     | 2048                                 |
|                                  | Diffie-Hellman exchange for RSA   |                        |                        |                                      |
|                                  | encryption of SSL sessions.       |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *768*       | 768-bit Diffie-Hellman prime.                          |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *1024*      | 1024-bit Diffie-Hellman prime.                         |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *1536*      | 1536-bit Diffie-Hellman prime.                         |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *2048*      | 2048-bit Diffie-Hellman prime.                         |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *3072*      | 3072-bit Diffie-Hellman prime.                         |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *4096*      | 4096-bit Diffie-Hellman prime.                         |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hpkp                         | Enable/disable including HPKP     | option                 | \-                     | disable                              |
|                                  | header in response.               |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +---------------+--------------------------------------------------------+                                                 |
|                                  | | Option        | Description                                            |                                                 |
|                                  | +===============+========================================================+                                                 |
|                                  | | *disable*     | Do not add a HPKP header to each HTTP response.        |                                                 |
|                                  | +---------------+--------------------------------------------------------+                                                 |
|                                  | | *enable*      | Add a HPKP header to each a HTTP response.             |                                                 |
|                                  | +---------------+--------------------------------------------------------+                                                 |
|                                  | | *report-only* | Add a HPKP Report-Only header to each HTTP response.   |                                                 |
|                                  | +---------------+--------------------------------------------------------+                                                 |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hpkp-age                     | Number of minutes the web browser | integer                | Minimum value: 60      | 5184000                              |
|                                  | should keep HPKP.                 |                        | Maximum value:         |                                      |
|                                  |                                   |                        | 157680000              |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hpkp-backup                  | Certificate to generate backup    | string                 | Maximum length: 79     |                                      |
|                                  | HPKP pin from.                    |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hpkp-include-subdomains      | Indicate that HPKP header applies | option                 | \-                     | disable                              |
|                                  | to all subdomains.                |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | HPKP header does not apply to subdomains.              |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | HPKP header applies to subdomains.                     |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hpkp-primary                 | Certificate to generate primary   | string                 | Maximum length: 79     |                                      |
|                                  | HPKP pin from.                    |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hpkp-report-uri              | URL to report HPKP violations to. | var-string             | Maximum length: 255    |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hsts                         | Enable/disable including HSTS     | option                 | \-                     | disable                              |
|                                  | header in response.               |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Do not add a HSTS header to each a HTTP response.      |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Add a HSTS header to each HTTP response.               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hsts-age                     | Number of seconds the client      | integer                | Minimum value: 60      | 5184000                              |
|                                  | should honor the HSTS setting.    |                        | Maximum value:         |                                      |
|                                  |                                   |                        | 157680000              |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-hsts-include-subdomains      | Indicate that HSTS header applies | option                 | \-                     | disable                              |
|                                  | to all subdomains.                |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | HSTS header does not apply to subdomains.              |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | HSTS header applies to subdomains.                     |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-http-location-conversion     | Enable to replace HTTP with HTTPS | option                 | \-                     | disable                              |
|                                  | in the reply\'s Location HTTP     |                        |                        |                                      |
|                                  | header field.                     |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *enable*    | Enable HTTP location conversion.                       |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *disable*   | Disable HTTP location conversion.                      |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-http-match-host              | Enable/disable HTTP host matching | option                 | \-                     | enable                               |
|                                  | for location conversion.          |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *enable*    | Match HTTP host in response header.                    |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *disable*   | Do not match HTTP host.                                |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-max-version                  | Highest SSL/TLS version           | option                 | \-                     | tls-1.3                              |
|                                  | acceptable from a client.         |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *ssl-3.0*   | SSL 3.0.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.0*   | TLS 1.0.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.1*   | TLS 1.1.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.2*   | TLS 1.2.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.3*   | TLS 1.3.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-min-version                  | Lowest SSL/TLS version acceptable | option                 | \-                     | tls-1.1                              |
|                                  | from a client.                    |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *ssl-3.0*   | SSL 3.0.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.0*   | TLS 1.0.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.1*   | TLS 1.1.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.2*   | TLS 1.2.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.3*   | TLS 1.3.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-mode                         | Apply SSL offloading between the  | option                 | \-                     | half                                 |
|                                  | client and the FortiGate (half)   |                        |                        |                                      |
|                                  | or from the client to the         |                        |                        |                                      |
|                                  | FortiGate and from the FortiGate  |                        |                        |                                      |
|                                  | to the server (full).             |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *half*      | Client to FortiGate SSL.                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *full*      | Client to FortiGate and FortiGate to Server SSL.       |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-pfs                          | Select the cipher suites that can | option                 | \-                     | require                              |
|                                  | be used for SSL perfect forward   |                        |                        |                                      |
|                                  | secrecy (PFS). Applies to both    |                        |                        |                                      |
|                                  | client and server sessions.       |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *require*   | Allow only Diffie-Hellman cipher-suites, so PFS is     |                                                   |
|                                  | |             | applied.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *deny*      | Allow only non-Diffie-Hellman cipher-suites, so PFS is |                                                   |
|                                  | |             | not applied.                                           |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *allow*     | Allow use of any cipher suite so PFS may or may not be |                                                   |
|                                  | |             | used depending on the cipher suite selected.           |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-send-empty-frags             | Enable/disable sending empty      | option                 | \-                     | enable                               |
|                                  | fragments to avoid CBC IV attacks |                        |                        |                                      |
|                                  | (SSL 3.0 & TLS 1.0 only). May     |                        |                        |                                      |
|                                  | need to be disabled for           |                        |                        |                                      |
|                                  | compatibility with older systems. |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *enable*    | Send empty fragments.                                  |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *disable*   | Do not send empty fragments.                           |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-algorithm             | Permitted encryption algorithms   | option                 | \-                     | client                               |
|                                  | for the server side of SSL full   |                        |                        |                                      |
|                                  | mode sessions according to        |                        |                        |                                      |
|                                  | encryption strength.              |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *high*      | Use AES.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *medium*    | Use AES, 3DES, or RC4.                                 |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *low*       | Use AES, 3DES, RC4, or DES.                            |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *custom*    | Use config ssl-server-cipher-suites to select the      |                                                   |
|                                  | |             | cipher suites that are allowed.                        |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *client*    | Use the same encryption algorithms for client and      |                                                   |
|                                  | |             | server sessions.                                       |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-max-version           | Highest SSL/TLS version           | option                 | \-                     | client                               |
|                                  | acceptable from a server. Use the |                        |                        |                                      |
|                                  | client setting by default.        |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *ssl-3.0*   | SSL 3.0.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.0*   | TLS 1.0.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.1*   | TLS 1.1.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.2*   | TLS 1.2.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.3*   | TLS 1.3.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *client*    | Use same value as client configuration.                |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-min-version           | Lowest SSL/TLS version acceptable | option                 | \-                     | client                               |
|                                  | from a server. Use the client     |                        |                        |                                      |
|                                  | setting by default.               |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *ssl-3.0*   | SSL 3.0.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.0*   | TLS 1.0.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.1*   | TLS 1.1.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.2*   | TLS 1.2.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *tls-1.3*   | TLS 1.3.                                               |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *client*    | Use same value as client configuration.                |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-renegotiation         | Enable/disable secure             | option                 | \-                     | enable                               |
|                                  | renegotiation to comply with RFC  |                        |                        |                                      |
|                                  | 5746.                             |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *enable*    | Enable secure renegotiation.                           |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *disable*   | Disable secure renegotiation.                          |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-session-state-max     | Maximum number of FortiGate to    | integer                | Minimum value: 1       | 100                                  |
|                                  | Server SSL session states to      |                        | Maximum value: 10000   |                                      |
|                                  | keep.                             |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-session-state-timeout | Number of minutes to keep         | integer                | Minimum value: 1       | 60                                   |
|                                  | FortiGate to Server SSL session   |                        | Maximum value: 14400   |                                      |
|                                  | state.                            |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-server-session-state-type    | How to expire SSL sessions for    | option                 | \-                     | both                                 |
|                                  | the segment of the SSL connection |                        |                        |                                      |
|                                  | between the server and the        |                        |                        |                                      |
|                                  | FortiGate.                        |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Do not keep session states.                            |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *time*      | Expire session states after this many minutes.         |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *count*     | Expire session states when this maximum is reached.    |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *both*      | Expire session states based on time or count,          |                                                   |
|                                  | |             | whichever occurs first.                                |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| type                             | Configure a static NAT server     | option                 | \-                     | static-nat                           |
|                                  | load balance VIP or access proxy. |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-----------------------+--------------------------------------------------------+                                         |
|                                  | | Option                | Description                                            |                                         |
|                                  | +=======================+========================================================+                                         |
|                                  | | *static-nat*          | Static NAT.                                            |                                         |
|                                  | +-----------------------+--------------------------------------------------------+                                         |
|                                  | | *server-load-balance* | Server load balance.                                   |                                         |
|                                  | +-----------------------+--------------------------------------------------------+                                         |
|                                  | | *access-proxy*        | Access proxy.                                          |                                         |
|                                  | +-----------------------+--------------------------------------------------------+                                         |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| uuid                             | Universally Unique Identifier     | uuid                   | Not Specified          | 00000000-0000-0000-0000-000000000000 |
|                                  | (UUID; automatically assigned but |                        |                        |                                      |
|                                  | can be manually reset).           |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| weblogic-server                  | Enable to add an HTTP header to   | option                 | \-                     | disable                              |
|                                  | indicate SSL offloading for a     |                        |                        |                                      |
|                                  | WebLogic server.                  |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Do not add HTTP header indicating SSL offload for      |                                                   |
|                                  | |             | WebLogic server.                                       |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Add HTTP header indicating SSL offload for WebLogic    |                                                   |
|                                  | |             | server.                                                |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| websphere-server                 | Enable to add an HTTP header to   | option                 | \-                     | disable                              |
|                                  | indicate SSL offloading for a     |                        |                        |                                      |
|                                  | WebSphere server.                 |                        |                        |                                      |
+----------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | Option      | Description                                            |                                                   |
|                                  | +=============+========================================================+                                                   |
|                                  | | *disable*   | Do not add HTTP header indicating SSL offload for      |                                                   |
|                                  | |             | WebSphere server.                                      |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
|                                  | | *enable*    | Add HTTP header indicating SSL offload for WebSphere   |                                                   |
|                                  | |             | server.                                                |                                                   |
|                                  | +-------------+--------------------------------------------------------+                                                   |
+----------------------------------+----------------------------------------------------------------------------------------------------------------------------+

