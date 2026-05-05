# config vpn ssl settings

Configure SSL-VPN.

## Syntax

```
config vpn ssl settings
    Description: Configure SSL-VPN.
    set algorithm [high|medium|...]
    set auth-session-check-source-ip [enable|disable]
    set auth-timeout {integer}
    config authentication-rule
        Description: Authentication rule for SSL-VPN.
        edit <id>
            set auth [any|local|...]
            set cipher [any|high|...]
            set client-cert [enable|disable]
            set groups <name1>, <name2>, ...
            set portal {string}
            set realm {string}
            set source-address <name1>, <name2>, ...
            set source-address-negate [enable|disable]
            set source-address6 <name1>, <name2>, ...
            set source-address6-negate [enable|disable]
            set source-interface <name1>, <name2>, ...
            set user-peer {string}
            set users <name1>, <name2>, ...
        next
    end
    set auto-tunnel-static-route [enable|disable]
    set banned-cipher {option1}, {option2}, ...
    set browser-language-detection [enable|disable]
    set check-referer [enable|disable]
    set ciphersuite {option1}, {option2}, ...
    set client-sigalgs [no-rsa-pss|all]
    set default-portal {string}
    set deflate-compression-level {integer}
    set deflate-min-data-size {integer}
    set dns-server1 {ipv4-address}
    set dns-server2 {ipv4-address}
    set dns-suffix {var-string}
    set dtls-heartbeat-fail-count {integer}
    set dtls-heartbeat-idle-timeout {integer}
    set dtls-heartbeat-interval {integer}
    set dtls-hello-timeout {integer}
    set dtls-max-proto-ver [dtls1-0|dtls1-2]
    set dtls-min-proto-ver [dtls1-0|dtls1-2]
    set dtls-tunnel [enable|disable]
    set dual-stack-mode [enable|disable]
    set encode-2f-sequence [enable|disable]
    set encrypt-and-store-password [enable|disable]
    set force-two-factor-auth [enable|disable]
    set header-x-forwarded-for [pass|add|...]
    set hsts-include-subdomains [enable|disable]
    set http-compression [enable|disable]
    set http-only-cookie [enable|disable]
    set http-request-body-timeout {integer}
    set http-request-header-timeout {integer}
    set https-redirect [enable|disable]
    set idle-timeout {integer}
    set ipv6-dns-server1 {ipv6-address}
    set ipv6-dns-server2 {ipv6-address}
    set ipv6-wins-server1 {ipv6-address}
    set ipv6-wins-server2 {ipv6-address}
    set login-attempt-limit {integer}
    set login-block-time {integer}
    set login-timeout {integer}
    set port {integer}
    set port-precedence [enable|disable]
    set reqclientcert [enable|disable]
    set saml-redirect-port {integer}
    set server-hostname {string}
    set servercert {string}
    set source-address <name1>, <name2>, ...
    set source-address-negate [enable|disable]
    set source-address6 <name1>, <name2>, ...
    set source-address6-negate [enable|disable]
    set source-interface <name1>, <name2>, ...
    set ssl-client-renegotiation [disable|enable]
    set ssl-insert-empty-fragment [enable|disable]
    set ssl-max-proto-ver [tls1-0|tls1-1|...]
    set ssl-min-proto-ver [tls1-0|tls1-1|...]
    set status [enable|disable]
    set transform-backward-slashes [enable|disable]
    set tunnel-addr-assigned-method [first-available|round-robin]
    set tunnel-connect-without-reauth [enable|disable]
    set tunnel-ip-pools <name1>, <name2>, ...
    set tunnel-ipv6-pools <name1>, <name2>, ...
    set tunnel-user-session-timeout {integer}
    set unsafe-legacy-renegotiation [enable|disable]
    set url-obscuration [enable|disable]
    set user-peer {string}
    set wins-server1 {ipv4-address}
    set wins-server2 {ipv4-address}
    set x-content-type-options [enable|disable]
    set ztna-trusted-client [enable|disable]
end
```

## Parameters

+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| Parameter                     | Description                       | Type                      | Size                      | Default                      |
+===============================+===================================+===========================+===========================+==============================+
| algorithm                     | Force the SSL-VPN security level. | option                    | \-                        | high                         |
|                               | High allows only high. Medium     |                           |                           |                              |
|                               | allows medium and high. Low       |                           |                           |                              |
|                               | allows any.                       |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *high*      | High algorithms.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *medium*    | High and medium algorithms.                            |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *default*   | default                                                |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *low*       | All algorithms.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| auth-session-check-source-ip  | Enable/disable checking of source | option                    | \-                        | enable                       |
|                               | IP for authentication session.    |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable checking of source IP for authentication        |                                                 |
|                               | |             | session.                                               |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable checking of source IP for authentication       |                                                 |
|                               | |             | session.                                               |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| auth-timeout                  | SSL-VPN authentication timeout    | integer                   | Minimum value: 0 Maximum  | 28800                        |
|                               | (1 - 259200 sec (3 days), 0 for   |                           | value: 259200             |                              |
|                               | no timeout).                      |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| auto-tunnel-static-route      | Enable/disable to auto-create     | option                    | \-                        | enable                       |
|                               | static routes for the SSL-VPN     |                           |                           |                              |
|                               | tunnel IP addresses.              |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| banned-cipher                 | Select one or more cipher         | option                    | \-                        | SHA1 SHA256 SHA384           |
|                               | technologies that cannot be used  |                           |                           |                              |
|                               | in SSL-VPN negotiations. Only     |                           |                           |                              |
|                               | applies to TLS 1.2 and below.     |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *RSA*       | Ban the use of cipher suites using RSA key.            |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *DHE*       | Ban the use of cipher suites using authenticated       |                                                 |
|                               | |             | ephemeral DH key agreement.                            |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *ECDHE*     | Ban the use of cipher suites using authenticated       |                                                 |
|                               | |             | ephemeral ECDH key agreement.                          |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *DSS*       | Ban the use of cipher suites using DSS authentication. |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *ECDSA*     | Ban the use of cipher suites using ECDSA               |                                                 |
|                               | |             | authentication.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *AES*       | Ban the use of cipher suites using either 128 or 256   |                                                 |
|                               | |             | bit AES.                                               |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *AESGCM*    | Ban the use of cipher suites AES in Galois Counter     |                                                 |
|                               | |             | Mode (GCM).                                            |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *CAMELLIA*  | Ban the use of cipher suites using either 128 or 256   |                                                 |
|                               | |             | bit CAMELLIA.                                          |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *3DES*      | Ban the use of cipher suites using triple DES          |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *SHA1*      | Ban the use of cipher suites using HMAC-SHA1.          |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *SHA256*    | Ban the use of cipher suites using HMAC-SHA256.        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *SHA384*    | Ban the use of cipher suites using HMAC-SHA384.        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *STATIC*    | Ban the use of cipher suites using static keys.        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *CHACHA20*  | Ban the use of cipher suites using ChaCha20.           |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *ARIA*      | Ban the use of cipher suites using ARIA.               |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *AESCCM*    | Ban the use of cipher suites using AESCCM.             |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| browser-language-detection    | Enable/disable overriding the     | option                    | \-                        | enable                       |
|                               | configured system language based  |                           |                           |                              |
|                               | on the preferred language of the  |                           |                           |                              |
|                               | browser.                          |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| check-referer                 | Enable/disable verification of    | option                    | \-                        | disable                      |
|                               | referer field in HTTP request     |                           |                           |                              |
|                               | header.                           |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable verification of referer field in HTTP request   |                                                 |
|                               | |             | header.                                                |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable verification of referer field in HTTP request  |                                                 |
|                               | |             | header.                                                |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ciphersuite                   | Select one or more TLS 1.3        | option                    | \-                        | TLS-AES-128-GCM-SHA256       |
|                               | ciphersuites to enable. Does not  |                           |                           | TLS-AES-256-GCM-SHA384       |
|                               | affect ciphers in TLS 1.2 and     |                           |                           | TLS-CHACHA20-POLY1305-SHA256 |
|                               | below. At least one must be       |                           |                           |                              |
|                               | enabled. To disable all, set      |                           |                           |                              |
|                               | ssl-max-proto-ver to tls1-2 or    |                           |                           |                              |
|                               | below.                            |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +--------------------------------+--------------------------------------------------------+                              |
|                               | | Option                         | Description                                            |                              |
|                               | +================================+========================================================+                              |
|                               | | *TLS-AES-128-GCM-SHA256*       | Enable TLS-AES-128-GCM-SHA256 in TLS 1.3.              |                              |
|                               | +--------------------------------+--------------------------------------------------------+                              |
|                               | | *TLS-AES-256-GCM-SHA384*       | Enable TLS-AES-256-GCM-SHA384 in TLS 1.3.              |                              |
|                               | +--------------------------------+--------------------------------------------------------+                              |
|                               | | *TLS-CHACHA20-POLY1305-SHA256* | Enable TLS-CHACHA20-POLY1305-SHA256 in TLS 1.3.        |                              |
|                               | +--------------------------------+--------------------------------------------------------+                              |
|                               | | *TLS-AES-128-CCM-SHA256*       | Enable TLS-AES-128-CCM-SHA256 in TLS 1.3.              |                              |
|                               | +--------------------------------+--------------------------------------------------------+                              |
|                               | | *TLS-AES-128-CCM-8-SHA256*     | Enable TLS-AES-128-CCM-8-SHA256 in TLS 1.3.            |                              |
|                               | +--------------------------------+--------------------------------------------------------+                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| client-sigalgs                | Set signature algorithms related  | option                    | \-                        | all                          |
|                               | to client authentication. Affects |                           |                           |                              |
|                               | TLS version \<= 1.2 only.         |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +--------------+--------------------------------------------------------+                                                |
|                               | | Option       | Description                                            |                                                |
|                               | +==============+========================================================+                                                |
|                               | | *no-rsa-pss* | Disable RSA-PSS signature algorithms for client        |                                                |
|                               | |              | authentication.                                        |                                                |
|                               | +--------------+--------------------------------------------------------+                                                |
|                               | | *all*        | Enable all supported signature algorithms for client   |                                                |
|                               | |              | authentication.                                        |                                                |
|                               | +--------------+--------------------------------------------------------+                                                |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| default-portal                | Default SSL-VPN portal.           | string                    | Maximum length: 35        |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| deflate-compression-level     | Compression level (0\~9).         | integer                   | Minimum value: 0 Maximum  | 6                            |
|                               |                                   |                           | value: 9                  |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| deflate-min-data-size         | Minimum amount of data that       | integer                   | Minimum value: 200        | 300                          |
|                               | triggers compression (200 - 65535 |                           | Maximum value: 65535      |                              |
|                               | bytes).                           |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dns-server1                   | DNS server 1.                     | ipv4-address              | Not Specified             | 0.0.0.0                      |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dns-server2                   | DNS server 2.                     | ipv4-address              | Not Specified             | 0.0.0.0                      |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dns-suffix                    | DNS suffix used for SSL-VPN       | var-string                | Maximum length: 253       |                              |
|                               | clients.                          |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dtls-heartbeat-fail-count     | Number of missing heartbeats      | integer                   | Minimum value: 3 Maximum  | 3                            |
|                               | before the connection is          |                           | value: 10                 |                              |
|                               | considered dropped.               |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dtls-heartbeat-idle-timeout   | Idle timeout before DTLS          | integer                   | Minimum value: 3 Maximum  | 3                            |
|                               | heartbeat is sent.                |                           | value: 10                 |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dtls-heartbeat-interval       | Interval between DTLS heartbeat.  | integer                   | Minimum value: 3 Maximum  | 3                            |
|                               |                                   |                           | value: 10                 |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dtls-hello-timeout            | SSLVPN maximum DTLS hello timeout | integer                   | Minimum value: 10 Maximum | 10                           |
|                               | (10 - 60 sec, default = 10).      |                           | value: 60                 |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dtls-max-proto-ver            | DTLS maximum protocol version.    | option                    | \-                        | dtls1-2                      |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *dtls1-0*   | DTLS version 1.0.                                      |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *dtls1-2*   | DTLS version 1.2.                                      |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dtls-min-proto-ver            | DTLS minimum protocol version.    | option                    | \-                        | dtls1-0                      |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *dtls1-0*   | DTLS version 1.0.                                      |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *dtls1-2*   | DTLS version 1.2.                                      |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dtls-tunnel                   | Enable/disable DTLS to prevent    | option                    | \-                        | enable                       |
|                               | eavesdropping, tampering, or      |                           |                           |                              |
|                               | message forgery.                  |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dual-stack-mode               | Tunnel mode: enable parallel IPv4 | option                    | \-                        | disable                      |
|                               | and IPv6 tunnel. Web mode:        |                           |                           |                              |
|                               | support IPv4 and IPv6 bookmarks   |                           |                           |                              |
|                               | in the portal.                    |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| encode-2f-sequence            | Encode \\2F sequence to forward   | option                    | \-                        | disable                      |
|                               | slash in URLs.                    |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| encrypt-and-store-password    | Encrypt and store user passwords  | option                    | \-                        | disable                      |
|                               | for SSL-VPN web sessions.         |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| force-two-factor-auth         | Enable/disable only PKI users     | option                    | \-                        | disable                      |
|                               | with two-factor authentication    |                           |                           |                              |
|                               | for SSL-VPNs.                     |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| header-x-forwarded-for        | Forward the same, add, or remove  | option                    | \-                        | add                          |
|                               | HTTP header.                      |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *pass*      | Forward the same HTTP header.                          |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *add*       | Add the HTTP header.                                   |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *remove*    | Remove the HTTP header.                                |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| hsts-include-subdomains       | Add HSTS includeSubDomains        | option                    | \-                        | disable                      |
|                               | response header.                  |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| http-compression              | Enable/disable to allow HTTP      | option                    | \-                        | disable                      |
|                               | compression over SSL-VPN tunnels. |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| http-only-cookie              | Enable/disable SSL-VPN support    | option                    | \-                        | enable                       |
|                               | for HttpOnly cookies.             |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| http-request-body-timeout     | SSL-VPN session is disconnected   | integer                   | Minimum value: 0 Maximum  | 30                           |
|                               | if an HTTP request body is not    |                           | value: 4294967295         |                              |
|                               | received within this time (1 - 60 |                           |                           |                              |
|                               | sec, default = 20).               |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| http-request-header-timeout   | SSL-VPN session is disconnected   | integer                   | Minimum value: 0 Maximum  | 20                           |
|                               | if an HTTP request header is not  |                           | value: 4294967295         |                              |
|                               | received within this time (1 - 60 |                           |                           |                              |
|                               | sec, default = 20).               |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| https-redirect                | Enable/disable redirect of port   | option                    | \-                        | disable                      |
|                               | 80 to SSL-VPN port.               |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| idle-timeout                  | SSL-VPN disconnects if idle for   | integer                   | Minimum value: 0 Maximum  | 300                          |
|                               | specified time in seconds.        |                           | value: 259200             |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ipv6-dns-server1              | IPv6 DNS server 1.                | ipv6-address              | Not Specified             | ::                           |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ipv6-dns-server2              | IPv6 DNS server 2.                | ipv6-address              | Not Specified             | ::                           |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ipv6-wins-server1             | IPv6 WINS server 1.               | ipv6-address              | Not Specified             | ::                           |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ipv6-wins-server2             | IPv6 WINS server 2.               | ipv6-address              | Not Specified             | ::                           |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| login-attempt-limit           | SSL-VPN maximum login attempt     | integer                   | Minimum value: 0 Maximum  | 2                            |
|                               | times before block (0 - 10,       |                           | value: 4294967295         |                              |
|                               | default = 2, 0 = no limit).       |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| login-block-time              | Time for which a user is blocked  | integer                   | Minimum value: 0 Maximum  | 60                           |
|                               | from logging in after too many    |                           | value: 4294967295         |                              |
|                               | failed login attempts (0 - 86400  |                           |                           |                              |
|                               | sec, default = 60).               |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| login-timeout                 | SSLVPN maximum login timeout      | integer                   | Minimum value: 10 Maximum | 30                           |
|                               | (10 - 180 sec, default = 30).     |                           | value: 180                |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| port                          | SSL-VPN access port (1 - 65535).  | integer                   | Minimum value: 1 Maximum  | 10443                        |
|                               |                                   |                           | value: 65535              |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| port-precedence               | Enable/disable, Enable means that | option                    | \-                        | enable                       |
|                               | if SSL-VPN connections are        |                           |                           |                              |
|                               | allowed on an interface admin GUI |                           |                           |                              |
|                               | connections are blocked on that   |                           |                           |                              |
|                               | interface.                        |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| reqclientcert                 | Enable/disable to require client  | option                    | \-                        | disable                      |
|                               | certificates for all SSL-VPN      |                           |                           |                              |
|                               | users.                            |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| saml-redirect-port            | SAML local redirect port in the   | integer                   | Minimum value: 0 Maximum  | 8020                         |
|                               | machine running FortiClient (0 -  |                           | value: 65535              |                              |
|                               | 65535). 0 is to disable           |                           |                           |                              |
|                               | redirection on FGT side.          |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| server-hostname               | Server hostname for HTTPS. When   | string                    | Maximum length: 255       |                              |
|                               | set, will be used for SSL VPN web |                           |                           |                              |
|                               | proxy host header for any         |                           |                           |                              |
|                               | redirection.                      |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| servercert                    | Name of the server certificate to | string                    | Maximum length: 35        |                              |
|                               | be used for SSL-VPNs.             |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| source-address `<name>`       | Source address of incoming        | string                    | Maximum length: 79        |                              |
|                               | traffic.                          |                           |                           |                              |
|                               |                                   |                           |                           |                              |
|                               | Address name.                     |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| source-address-negate         | Enable/disable negated source     | option                    | \-                        | disable                      |
|                               | address match.                    |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| source-address6 `<name>`      | IPv6 source address of incoming   | string                    | Maximum length: 79        |                              |
|                               | traffic.                          |                           |                           |                              |
|                               |                                   |                           |                           |                              |
|                               | IPv6 address name.                |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| source-address6-negate        | Enable/disable negated source     | option                    | \-                        | disable                      |
|                               | IPv6 address match.               |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| source-interface `<name>`     | SSL-VPN source interface of       | string                    | Maximum length: 35        |                              |
|                               | incoming traffic.                 |                           |                           |                              |
|                               |                                   |                           |                           |                              |
|                               | Interface name.                   |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ssl-client-renegotiation      | Enable/disable to allow client    | option                    | \-                        | disable                      |
|                               | renegotiation by the server if    |                           |                           |                              |
|                               | the tunnel goes down.             |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *disable*   | Abort any SSL connection that attempts to renegotiate. |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *enable*    | Allow a SSL client to renegotiate.                     |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ssl-insert-empty-fragment     | Enable/disable insertion of empty | option                    | \-                        | enable                       |
|                               | fragment.                         |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ssl-max-proto-ver             | SSL maximum protocol version.     | option                    | \-                        | tls1-3                       |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *tls1-0*    | TLS version 1.0.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *tls1-1*    | TLS version 1.1.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *tls1-2*    | TLS version 1.2.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *tls1-3*    | TLS version 1.3.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ssl-min-proto-ver             | SSL minimum protocol version.     | option                    | \-                        | tls1-2                       |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *tls1-0*    | TLS version 1.0.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *tls1-1*    | TLS version 1.1.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *tls1-2*    | TLS version 1.2.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *tls1-3*    | TLS version 1.3.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| status                        | Enable/disable SSL-VPN.           | option                    | \-                        | enable                       |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable SSL-VPN.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable SSL-VPN.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| transform-backward-slashes    | Transform backward slashes to     | option                    | \-                        | disable                      |
|                               | forward slashes in URLs.          |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| tunnel-addr-assigned-method   | Method used for assigning address | option                    | \-                        | first-available              |
|                               | for tunnel.                       |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------------+--------------------------------------------------------+                                           |
|                               | | Option            | Description                                            |                                           |
|                               | +===================+========================================================+                                           |
|                               | | *first-available* | Assign the first available address from the pools.     |                                           |
|                               | +-------------------+--------------------------------------------------------+                                           |
|                               | | *round-robin*     | Assign the available address from the pool with a      |                                           |
|                               | |                   | round robin fashion.                                   |                                           |
|                               | +-------------------+--------------------------------------------------------+                                           |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| tunnel-connect-without-reauth | Enable/disable tunnel connection  | option                    | \-                        | disable                      |
|                               | without re-authorization if       |                           |                           |                              |
|                               | previous connection dropped.      |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable tunnel connection without re-authorization.     |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable tunnel connection without re-authorization.    |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| tunnel-ip-pools `<name>`      | Names of the IPv4 IP Pool         | string                    | Maximum length: 79        |                              |
|                               | firewall objects that define the  |                           |                           |                              |
|                               | IP addresses reserved for remote  |                           |                           |                              |
|                               | clients.                          |                           |                           |                              |
|                               |                                   |                           |                           |                              |
|                               | Address name.                     |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| tunnel-ipv6-pools `<name>`    | Names of the IPv6 IP Pool         | string                    | Maximum length: 79        |                              |
|                               | firewall objects that define the  |                           |                           |                              |
|                               | IP addresses reserved for remote  |                           |                           |                              |
|                               | clients.                          |                           |                           |                              |
|                               |                                   |                           |                           |                              |
|                               | Address name.                     |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| tunnel-user-session-timeout   | Number of seconds after which     | integer                   | Minimum value: 1 Maximum  | 30                           |
|                               | user sessions are cleaned up      |                           | value: 86400              |                              |
|                               | after tunnel connection is        |                           |                           |                              |
|                               | dropped (1 - 86400, default =     |                           |                           |                              |
|                               | 30).                              |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| unsafe-legacy-renegotiation   | Enable/disable unsafe legacy      | option                    | \-                        | disable                      |
|                               | re-negotiation.                   |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| url-obscuration               | Enable/disable to obscure the     | option                    | \-                        | disable                      |
|                               | host name of the URL of the web   |                           |                           |                              |
|                               | browser display.                  |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| user-peer                     | Name of user peer.                | string                    | Maximum length: 35        |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| wins-server1                  | WINS server 1.                    | ipv4-address              | Not Specified             | 0.0.0.0                      |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| wins-server2                  | WINS server 2.                    | ipv4-address              | Not Specified             | 0.0.0.0                      |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| x-content-type-options        | Add HTTP X-Content-Type-Options   | option                    | \-                        | enable                       |
|                               | header.                           |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable setting.                                        |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable setting.                                       |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ztna-trusted-client           | Enable/disable verification of    | option                    | \-                        | disable                      |
|                               | device certificate for SSLVPN     |                           |                           |                              |
|                               | ZTNA session.                     |                           |                           |                              |
+-------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | Option      | Description                                            |                                                 |
|                               | +=============+========================================================+                                                 |
|                               | | *enable*    | Enable verification of device certificate for SSLVPN   |                                                 |
|                               | |             | ZTNA session.                                          |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
|                               | | *disable*   | Disable verification of device certificate for SSLVPN  |                                                 |
|                               | |             | ZTNA session.                                          |                                                 |
|                               | +-------------+--------------------------------------------------------+                                                 |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------------+

