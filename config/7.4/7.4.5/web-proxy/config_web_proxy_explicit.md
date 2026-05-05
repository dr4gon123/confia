# config web-proxy explicit

Configure explicit Web proxy settings.

## Syntax

```
config web-proxy explicit
    Description: Configure explicit Web proxy settings.
    set client-cert [disable|enable]
    set empty-cert-action [accept|block|...]
    set ftp-incoming-port {user}
    set ftp-over-http [enable|disable]
    set http-connection-mode [static|multiplex|...]
    set http-incoming-port {user}
    set https-incoming-port {user}
    set https-replacement-message [enable|disable]
    set incoming-ip {ipv4-address-any}
    set incoming-ip6 {ipv6-address}
    set ipv6-status [enable|disable]
    set message-upon-server-error [enable|disable]
    set outgoing-ip {ipv4-address-any}
    set outgoing-ip6 {ipv6-address}
    set pac-file-data {user}
    set pac-file-name {string}
    set pac-file-server-port {user}
    set pac-file-server-status [enable|disable]
    set pac-file-through-https [enable|disable]
    set pac-file-url {user}
    config pac-policy
        Description: PAC policies.
        edit <policyid>
            set comments {var-string}
            set dstaddr <name1>, <name2>, ...
            set pac-file-data {user}
            set pac-file-name {string}
            set srcaddr <name1>, <name2>, ...
            set srcaddr6 <name1>, <name2>, ...
            set status [enable|disable]
        next
    end
    set pref-dns-result [ipv4|ipv6|...]
    set realm {string}
    set sec-default-action [accept|deny]
    set secure-web-proxy [disable|enable|...]
    set secure-web-proxy-cert <name1>, <name2>, ...
    set socks [enable|disable]
    set socks-incoming-port {user}
    set ssl-algorithm [high|medium|...]
    set ssl-dh-bits [768|1024|...]
    set status [enable|disable]
    set strict-guest [enable|disable]
    set trace-auth-no-rsp [enable|disable]
    set unknown-http-version [reject|best-effort]
    set user-agent-detect [disable|enable]
end
```

## Parameters

+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                 | Description                       | Type                   | Size                   | Default                |
+===========================+===================================+========================+========================+========================+
| client-cert               | Enable/disable to request client  | option                 | \-                     | disable                |
|                           | certificate.                      |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *disable*   | Disable client certificate request.                    |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *enable*    | Enable client certificate request.                     |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| empty-cert-action         | Action of an empty client         | option                 | \-                     | block                  |
|                           | certificate.                      |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-----------------------+--------------------------------------------------------+                           |
|                           | | Option                | Description                                            |                           |
|                           | +=======================+========================================================+                           |
|                           | | *accept*              | Accept the SSL handshake if the client certificate is  |                           |
|                           | |                       | empty.                                                 |                           |
|                           | +-----------------------+--------------------------------------------------------+                           |
|                           | | *block*               | Block the SSL handshake if the client certificate is   |                           |
|                           | |                       | empty.                                                 |                           |
|                           | +-----------------------+--------------------------------------------------------+                           |
|                           | | *accept-unmanageable* | Accept the SSL handshake only if the end-point is      |                           |
|                           | |                       | unmanageable.                                          |                           |
|                           | +-----------------------+--------------------------------------------------------+                           |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ftp-incoming-port         | Accept incoming FTP-over-HTTP     | user                   | Not Specified          |                        |
|                           | requests on one or more ports.    |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ftp-over-http             | Enable to proxy FTP-over-HTTP     | option                 | \-                     | disable                |
|                           | sessions sent from a web browser. |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *enable*    | Enable FTP-over-HTTP sessions.                         |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *disable*   | Disable FTP-over-HTTP sessions.                        |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| http-connection-mode      | HTTP connection mode.             | option                 | \-                     | static                 |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +--------------+--------------------------------------------------------+                                    |
|                           | | Option       | Description                                            |                                    |
|                           | +==============+========================================================+                                    |
|                           | | *static*     | Only one server connection exists during the proxy     |                                    |
|                           | |              | session.                                               |                                    |
|                           | +--------------+--------------------------------------------------------+                                    |
|                           | | *multiplex*  | Established connections are held until the proxy       |                                    |
|                           | |              | session ends.                                          |                                    |
|                           | +--------------+--------------------------------------------------------+                                    |
|                           | | *serverpool* | Established connections are shared with other proxy    |                                    |
|                           | |              | sessions.                                              |                                    |
|                           | +--------------+--------------------------------------------------------+                                    |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| http-incoming-port        | Accept incoming HTTP requests on  | user                   | Not Specified          |                        |
|                           | one or more ports.                |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| https-incoming-port       | Accept incoming HTTPS requests on | user                   | Not Specified          |                        |
|                           | one or more ports.                |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| https-replacement-message | Enable/disable sending the client | option                 | \-                     | enable                 |
|                           | a replacement message for HTTPS   |                        |                        |                        |
|                           | requests.                         |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *enable*    | Display a replacement message for HTTPS requests.      |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *disable*   | Do not display a replacement message for HTTPS         |                                     |
|                           | |             | requests.                                              |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| incoming-ip               | Restrict the explicit HTTP proxy  | ipv4-address-any       | Not Specified          | 0.0.0.0                |
|                           | to only accept sessions from this |                        |                        |                        |
|                           | IP address. An interface must     |                        |                        |                        |
|                           | have this IP address.             |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| incoming-ip6              | Restrict the explicit web proxy   | ipv6-address           | Not Specified          | ::                     |
|                           | to only accept sessions from this |                        |                        |                        |
|                           | IPv6 address. An interface must   |                        |                        |                        |
|                           | have this IPv6 address.           |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipv6-status               | Enable/disable allowing an IPv6   | option                 | \-                     | disable                |
|                           | web proxy destination in policies |                        |                        |                        |
|                           | and all IPv6 related entries in   |                        |                        |                        |
|                           | this command.                     |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *enable*    | Enable allowing an IPv6 web proxy destination.         |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *disable*   | Disable allowing an IPv6 web proxy destination.        |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| message-upon-server-error | Enable/disable displaying a       | option                 | \-                     | enable                 |
|                           | replacement message when a server |                        |                        |                        |
|                           | error is detected.                |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *enable*    | Display a replacement message when a server error is   |                                     |
|                           | |             | detected.                                              |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *disable*   | Do not display a replacement message when a server     |                                     |
|                           | |             | error is detected.                                     |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| outgoing-ip               | Outgoing HTTP requests will have  | ipv4-address-any       | Not Specified          |                        |
|                           | this IP address as their source   |                        |                        |                        |
|                           | address. An interface must have   |                        |                        |                        |
|                           | this IP address.                  |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| outgoing-ip6              | Outgoing HTTP requests will leave | ipv6-address           | Not Specified          |                        |
|                           | this IPv6. Multiple interfaces    |                        |                        |                        |
|                           | can be specified. Interfaces must |                        |                        |                        |
|                           | have these IPv6 addresses.        |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| pac-file-data             | PAC file contents enclosed in     | user                   | Not Specified          |                        |
|                           | quotes (maximum of 256K bytes).   |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| pac-file-name             | Pac file name.                    | string                 | Maximum length: 63     | proxy.pac              |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| pac-file-server-port      | Port number that PAC traffic from | user                   | Not Specified          |                        |
|                           | client web browsers uses to       |                        |                        |                        |
|                           | connect to the explicit web       |                        |                        |                        |
|                           | proxy.                            |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| pac-file-server-status    | Enable/disable Proxy              | option                 | \-                     | disable                |
|                           | Auto-Configuration (PAC) for      |                        |                        |                        |
|                           | users of this explicit proxy      |                        |                        |                        |
|                           | profile.                          |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *enable*    | Enable Proxy Auto-Configuration (PAC).                 |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *disable*   | Disable Proxy Auto-Configuration (PAC).                |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| pac-file-through-https    | Enable/disable to get Proxy       | option                 | \-                     | disable                |
|                           | Auto-Configuration (PAC) through  |                        |                        |                        |
|                           | HTTPS.                            |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *enable*    | Enable to get Proxy Auto-Configuration (PAC) through   |                                     |
|                           | |             | HTTPS.                                                 |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *disable*   | Disable to get Proxy Auto-Configuration (PAC) through  |                                     |
|                           | |             | HTTPS.                                                 |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| pac-file-url              | PAC file access URL. Read-only.   | user                   | Not Specified          |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| pref-dns-result           | Prefer resolving addresses using  | option                 | \-                     | ipv4                   |
|                           | the configured IPv4 or IPv6 DNS   |                        |                        |                        |
|                           | server.                           |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +---------------+--------------------------------------------------------+                                   |
|                           | | Option        | Description                                            |                                   |
|                           | +===============+========================================================+                                   |
|                           | | *ipv4*        | Send the IPv4 request first and then the IPv6 request. |                                   |
|                           | |               | Use the DNS response that returns to the FortiGate     |                                   |
|                           | |               | first.                                                 |                                   |
|                           | +---------------+--------------------------------------------------------+                                   |
|                           | | *ipv6*        | Send the IPv6 request first and then the IPv4 request. |                                   |
|                           | |               | Use the DNS response that returns to the FortiGate     |                                   |
|                           | |               | first.                                                 |                                   |
|                           | +---------------+--------------------------------------------------------+                                   |
|                           | | *ipv4-strict* | Use the IPv4 DNS response. If the IPv6 DNS response    |                                   |
|                           | |               | arrives first, wait 50ms for the IPv4 response and     |                                   |
|                           | |               | then use the IPv4 response, otherwise the IPv6.        |                                   |
|                           | +---------------+--------------------------------------------------------+                                   |
|                           | | *ipv6-strict* | Use the IPv6 DNS response. If the IPv4 DNS response    |                                   |
|                           | |               | arrives first, wait 50ms for the IPv6 response and     |                                   |
|                           | |               | then use the IPv6 response, otherwise the IPv4.        |                                   |
|                           | +---------------+--------------------------------------------------------+                                   |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| realm                     | Authentication realm used to      | string                 | Maximum length: 63     | default                |
|                           | identify the explicit web proxy   |                        |                        |                        |
|                           | (maximum of 63 characters).       |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| sec-default-action        | Accept or deny explicit web proxy | option                 | \-                     | deny                   |
|                           | sessions when no web proxy        |                        |                        |                        |
|                           | firewall policy exists.           |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *accept*    | Accept requests. All explicit web proxy traffic is     |                                     |
|                           | |             | accepted whether there is an explicit web proxy policy |                                     |
|                           | |             | or not.                                                |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *deny*      | Deny requests unless there is a matching explicit web  |                                     |
|                           | |             | proxy policy.                                          |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| secure-web-proxy          | Enable/disable/require the secure | option                 | \-                     | disable                |
|                           | web proxy for HTTP and HTTPS      |                        |                        |                        |
|                           | session.                          |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *disable*   | Disable secure webproxy.                               |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *enable*    | Enable secure webproxy access.                         |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *secure*    | Require secure webproxy access.                        |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| secure-web-proxy-cert     | Name of certificates for secure   | string                 | Maximum length: 79     |                        |
| `<name>`                  | web proxy.                        |                        |                        |                        |
|                           |                                   |                        |                        |                        |
|                           | Certificate list.                 |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| socks                     | Enable/disable the SOCKS proxy.   | option                 | \-                     | disable                |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *enable*    | Enable the SOCKS proxy.                                |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *disable*   | Disable the SOCKS proxy.                               |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| socks-incoming-port       | Accept incoming SOCKS proxy       | user                   | Not Specified          |                        |
|                           | requests on one or more ports.    |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-algorithm             | Relative strength of encryption   | option                 | \-                     | low                    |
|                           | algorithms accepted in HTTPS deep |                        |                        |                        |
|                           | scan: high, medium, or low.       |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *high*      | High encrption. Allow only AES and ChaCha.             |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *medium*    | Medium encryption. Allow AES, ChaCha, 3DES, and RC4.   |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *low*       | Low encryption. Allow AES, ChaCha, 3DES, RC4, and DES. |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-dh-bits               | Bit-size of Diffie-Hellman.       | option                 | \-                     | 2048                   |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *768*       | 768-bit Diffie-Hellman prime.                          |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *1024*      | 1024-bit Diffie-Hellman prime.                         |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *1536*      | 1536-bit Diffie-Hellman prime.                         |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *2048*      | 2048-bit Diffie-Hellman prime.                         |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| status                    | Enable/disable the explicit Web   | option                 | \-                     | disable                |
|                           | proxy for HTTP and HTTPS session. |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *enable*    | Enable the explicit web proxy.                         |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *disable*   | Disable the explicit web proxy.                        |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| strict-guest              | Enable/disable strict guest user  | option                 | \-                     | disable                |
|                           | checking by the explicit web      |                        |                        |                        |
|                           | proxy.                            |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *enable*    | Enable strict guest user checking.                     |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *disable*   | Disable strict guest user checking.                    |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| trace-auth-no-rsp         | Enable/disable logging timed-out  | option                 | \-                     | disable                |
|                           | authentication requests.          |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *enable*    | Enable logging timed-out authentication requests.      |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *disable*   | Disable logging timed-out authentication requests.     |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| unknown-http-version      | How to handle HTTP sessions that  | option                 | \-                     | reject                 |
|                           | do not comply with HTTP 0.9, 1.0, |                        |                        |                        |
|                           | or 1.1.                           |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +---------------+--------------------------------------------------------+                                   |
|                           | | Option        | Description                                            |                                   |
|                           | +===============+========================================================+                                   |
|                           | | *reject*      | Reject or tear down HTTP sessions that do not use HTTP |                                   |
|                           | |               | 0.9, 1.0, or 1.1.                                      |                                   |
|                           | +---------------+--------------------------------------------------------+                                   |
|                           | | *best-effort* | Assume all HTTP sessions comply with HTTP 0.9, 1.0, or |                                   |
|                           | |               | 1.1. If a session uses a different HTTP version, it    |                                   |
|                           | |               | may not parse correctly and the connection may be      |                                   |
|                           | |               | lost.                                                  |                                   |
|                           | +---------------+--------------------------------------------------------+                                   |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| user-agent-detect         | Enable/disable to detect device   | option                 | \-                     | enable                 |
|                           | type by HTTP user-agent if no     |                        |                        |                        |
|                           | client certificate provided.      |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | Option      | Description                                            |                                     |
|                           | +=============+========================================================+                                     |
|                           | | *disable*   | Disable to detect unknown device by HTTP user-agent if |                                     |
|                           | |             | no client certificate provided.                        |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
|                           | | *enable*    | Enable to detect unknown device by HTTP user-agent if  |                                     |
|                           | |             | no client certificate provided.                        |                                     |
|                           | +-------------+--------------------------------------------------------+                                     |
+---------------------------+--------------------------------------------------------------------------------------------------------------+

