# config vpn ssl settings

Configure Agentless VPN.

## Syntax

```
config vpn ssl settings
    Description: Configure Agentless VPN.
    set algorithm [high|medium|...]
    set auth-session-check-source-ip [enable|disable]
    set auth-timeout {integer}
    config authentication-rule
        Description: Authentication rule for Agentless VPN.
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
    set banned-cipher {option1}, {option2}, ...
    set browser-language-detection [enable|disable]
    set check-referer [enable|disable]
    set ciphersuite {option1}, {option2}, ...
    set client-sigalgs [no-rsa-pss|all]
    set default-portal {string}
    set deflate-compression-level {integer}
    set deflate-min-data-size {integer}
    set dns-suffix {var-string}
    set dtls-heartbeat-fail-count {integer}
    set dtls-heartbeat-idle-timeout {integer}
    set dtls-heartbeat-interval {integer}
    set dtls-hello-timeout {integer}
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
    set login-attempt-limit {integer}
    set login-block-time {integer}
    set login-timeout {integer}
    set port {integer}
    set port-precedence [enable|disable]
    set remote-https-cert-check [no-check|warn-on-error|...]
    set reqclientcert [enable|disable]
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
    set tls-groups {option1}, {option2}, ...
    set transform-backward-slashes [enable|disable]
    set unsafe-legacy-renegotiation [enable|disable]
    set url-obscuration [enable|disable]
    set user-peer {string}
    set x-content-type-options [enable|disable]
end
```

## Parameters

+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| Parameter                    | Description                       | Type                      | Size                      | Default                      |
+==============================+===================================+===========================+===========================+==============================+
| algorithm                    | Force the Agentless VPN security  | option                    | \-                        | high                         |
|                              | level. High allows only high.     |                           |                           |                              |
|                              | Medium allows medium and high.    |                           |                           |                              |
|                              | Low allows any.                   |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *high*      | High algorithms.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *medium*    | High and medium algorithms.                            |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *default*   | default                                                |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *low*       | All algorithms.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| auth-session-check-source-ip | Enable/disable checking of source | option                    | \-                        | enable                       |
|                              | IP for authentication session.    |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable checking of source IP for authentication        |                                                 |
|                              | |             | session.                                               |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable checking of source IP for authentication       |                                                 |
|                              | |             | session.                                               |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| auth-timeout                 | Agentless VPN authentication      | integer                   | Minimum value: 0 Maximum  | 28800                        |
|                              | timeout (1 - 259200 sec (3 days), |                           | value: 259200             |                              |
|                              | 0 for no timeout).                |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| banned-cipher                | Select one or more cipher         | option                    | \-                        | SHA1 SHA256 SHA384           |
|                              | technologies that cannot be used  |                           |                           |                              |
|                              | in Agentless VPN negotiations.    |                           |                           |                              |
|                              | Only applies to TLS 1.2 and       |                           |                           |                              |
|                              | below.                            |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *RSA*       | Ban the use of cipher suites using RSA key.            |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *DHE*       | Ban the use of cipher suites using authenticated       |                                                 |
|                              | |             | ephemeral DH key agreement.                            |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *ECDHE*     | Ban the use of cipher suites using authenticated       |                                                 |
|                              | |             | ephemeral ECDH key agreement.                          |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *DSS*       | Ban the use of cipher suites using DSS authentication. |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *ECDSA*     | Ban the use of cipher suites using ECDSA               |                                                 |
|                              | |             | authentication.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *AES*       | Ban the use of cipher suites using either 128 or 256   |                                                 |
|                              | |             | bit AES.                                               |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *AESGCM*    | Ban the use of cipher suites AES in Galois Counter     |                                                 |
|                              | |             | Mode (GCM).                                            |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *CAMELLIA*  | Ban the use of cipher suites using either 128 or 256   |                                                 |
|                              | |             | bit CAMELLIA.                                          |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *3DES*      | Ban the use of cipher suites using triple DES          |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *SHA1*      | Ban the use of cipher suites using HMAC-SHA1.          |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *SHA256*    | Ban the use of cipher suites using HMAC-SHA256.        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *SHA384*    | Ban the use of cipher suites using HMAC-SHA384.        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *STATIC*    | Ban the use of cipher suites using static keys.        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *CHACHA20*  | Ban the use of cipher suites using ChaCha20.           |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *ARIA*      | Ban the use of cipher suites using ARIA.               |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *AESCCM*    | Ban the use of cipher suites using AESCCM.             |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| browser-language-detection   | Enable/disable overriding the     | option                    | \-                        | enable                       |
|                              | configured system language based  |                           |                           |                              |
|                              | on the preferred language of the  |                           |                           |                              |
|                              | browser.                          |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| check-referer                | Enable/disable verification of    | option                    | \-                        | disable                      |
|                              | referer field in HTTP request     |                           |                           |                              |
|                              | header.                           |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable verification of referer field in HTTP request   |                                                 |
|                              | |             | header.                                                |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable verification of referer field in HTTP request  |                                                 |
|                              | |             | header.                                                |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ciphersuite                  | Select one or more TLS 1.3        | option                    | \-                        | TLS-AES-128-GCM-SHA256       |
|                              | ciphersuites to enable. Does not  |                           |                           | TLS-AES-256-GCM-SHA384       |
|                              | affect ciphers in TLS 1.2 and     |                           |                           | TLS-CHACHA20-POLY1305-SHA256 |
|                              | below. At least one must be       |                           |                           |                              |
|                              | enabled. To disable all, set      |                           |                           |                              |
|                              | ssl-max-proto-ver to tls1-2 or    |                           |                           |                              |
|                              | below.                            |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +--------------------------------+--------------------------------------------------------+                              |
|                              | | Option                         | Description                                            |                              |
|                              | +================================+========================================================+                              |
|                              | | *TLS-AES-128-GCM-SHA256*       | Enable TLS-AES-128-GCM-SHA256 in TLS 1.3.              |                              |
|                              | +--------------------------------+--------------------------------------------------------+                              |
|                              | | *TLS-AES-256-GCM-SHA384*       | Enable TLS-AES-256-GCM-SHA384 in TLS 1.3.              |                              |
|                              | +--------------------------------+--------------------------------------------------------+                              |
|                              | | *TLS-CHACHA20-POLY1305-SHA256* | Enable TLS-CHACHA20-POLY1305-SHA256 in TLS 1.3.        |                              |
|                              | +--------------------------------+--------------------------------------------------------+                              |
|                              | | *TLS-AES-128-CCM-SHA256*       | Enable TLS-AES-128-CCM-SHA256 in TLS 1.3.              |                              |
|                              | +--------------------------------+--------------------------------------------------------+                              |
|                              | | *TLS-AES-128-CCM-8-SHA256*     | Enable TLS-AES-128-CCM-8-SHA256 in TLS 1.3.            |                              |
|                              | +--------------------------------+--------------------------------------------------------+                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| client-sigalgs               | Set signature algorithms related  | option                    | \-                        | all                          |
|                              | to client authentication. Affects |                           |                           |                              |
|                              | TLS version \<= 1.2 only.         |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +--------------+--------------------------------------------------------+                                                |
|                              | | Option       | Description                                            |                                                |
|                              | +==============+========================================================+                                                |
|                              | | *no-rsa-pss* | Disable RSA-PSS signature algorithms for client        |                                                |
|                              | |              | authentication.                                        |                                                |
|                              | +--------------+--------------------------------------------------------+                                                |
|                              | | *all*        | Enable all supported signature algorithms for client   |                                                |
|                              | |              | authentication.                                        |                                                |
|                              | +--------------+--------------------------------------------------------+                                                |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| default-portal               | Default Agentless VPN portal.     | string                    | Maximum length: 35        |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| deflate-compression-level    | Compression level (0\~9).         | integer                   | Minimum value: 0 Maximum  | 6                            |
|                              |                                   |                           | value: 9                  |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| deflate-min-data-size        | Minimum amount of data that       | integer                   | Minimum value: 200        | 300                          |
|                              | triggers compression (200 - 65535 |                           | Maximum value: 65535      |                              |
|                              | bytes).                           |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dns-suffix                   | DNS suffix used for Agentless VPN | var-string                | Maximum length: 253       |                              |
|                              | clients.                          |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dtls-heartbeat-fail-count    | Number of missing heartbeats      | integer                   | Minimum value: 3 Maximum  | 3                            |
|                              | before the connection is          |                           | value: 10                 |                              |
|                              | considered dropped.               |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dtls-heartbeat-idle-timeout  | Idle timeout before DTLS          | integer                   | Minimum value: 3 Maximum  | 3                            |
|                              | heartbeat is sent.                |                           | value: 10                 |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dtls-heartbeat-interval      | Interval between DTLS heartbeat.  | integer                   | Minimum value: 3 Maximum  | 3                            |
|                              |                                   |                           | value: 10                 |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dtls-hello-timeout           | SSLVPN maximum DTLS hello timeout | integer                   | Minimum value: 10 Maximum | 10                           |
|                              | (10 - 60 sec, default = 10).      |                           | value: 60                 |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| dual-stack-mode              | Agentless web mode: support IPv4  | option                    | \-                        | disable                      |
|                              | and IPv6 bookmarks in the portal. |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| encode-2f-sequence           | Encode \\2F sequence to forward   | option                    | \-                        | disable                      |
|                              | slash in URLs.                    |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| encrypt-and-store-password   | Encrypt and store user passwords  | option                    | \-                        | disable                      |
|                              | for Agentless VPN web sessions.   |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| force-two-factor-auth        | Enable/disable only PKI users     | option                    | \-                        | disable                      |
|                              | with two-factor authentication    |                           |                           |                              |
|                              | for Agentless VPNs.               |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| header-x-forwarded-for       | Forward the same, add, or remove  | option                    | \-                        | add                          |
|                              | HTTP header.                      |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *pass*      | Forward the same HTTP header.                          |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *add*       | Add the HTTP header.                                   |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *remove*    | Remove the HTTP header.                                |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| hsts-include-subdomains      | Add HSTS includeSubDomains        | option                    | \-                        | disable                      |
|                              | response header.                  |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| http-compression             | Enable/disable to allow HTTP      | option                    | \-                        | disable                      |
|                              | compression over Agentless VPN    |                           |                           |                              |
|                              | connections.                      |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| http-only-cookie             | Enable/disable Agentless VPN      | option                    | \-                        | enable                       |
|                              | support for HttpOnly cookies.     |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| http-request-body-timeout    | Agentless VPN session is          | integer                   | Minimum value: 0 Maximum  | 30                           |
|                              | disconnected if an HTTP request   |                           | value: 4294967295         |                              |
|                              | body is not received within this  |                           |                           |                              |
|                              | time (1 - 60 sec, default = 20).  |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| http-request-header-timeout  | Agentless VPN session is          | integer                   | Minimum value: 0 Maximum  | 20                           |
|                              | disconnected if an HTTP request   |                           | value: 4294967295         |                              |
|                              | header is not received within     |                           |                           |                              |
|                              | this time (1 - 60 sec, default =  |                           |                           |                              |
|                              | 20).                              |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| https-redirect               | Enable/disable redirect of port   | option                    | \-                        | disable                      |
|                              | 80 to Agentless VPN port.         |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| idle-timeout                 | Agentless VPN disconnects if idle | integer                   | Minimum value: 0 Maximum  | 300                          |
|                              | for specified time in seconds.    |                           | value: 259200             |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| login-attempt-limit          | Agentless VPN maximum login       | integer                   | Minimum value: 0 Maximum  | 2                            |
|                              | attempt times before block (0 -   |                           | value: 10                 |                              |
|                              | 10, default = 2, 0 = no limit).   |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| login-block-time             | Time for which a user is blocked  | integer                   | Minimum value: 0 Maximum  | 60                           |
|                              | from logging in after too many    |                           | value: 86400              |                              |
|                              | failed login attempts (0 - 86400  |                           |                           |                              |
|                              | sec, default = 60).               |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| login-timeout                | Agentless VPN maximum login       | integer                   | Minimum value: 10 Maximum | 30                           |
|                              | timeout (10 - 180 sec, default =  |                           | value: 180                |                              |
|                              | 30).                              |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| port                         | Agentless VPN access port (1 -    | integer                   | Minimum value: 1 Maximum  | 10443                        |
|                              | 65535).                           |                           | value: 65535              |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| port-precedence              | Enable/disable, Enable means that | option                    | \-                        | enable                       |
|                              | if Agentless VPN connections are  |                           |                           |                              |
|                              | allowed on an interface admin GUI |                           |                           |                              |
|                              | connections are blocked on that   |                           |                           |                              |
|                              | interface.                        |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| remote-https-cert-check      | Configure how the FortiGate unit  | option                    | \-                        | warn-on-error                |
|                              | checks and responds to the remote |                           |                           |                              |
|                              | HTTPS server\'s certificate       |                           |                           |                              |
|                              | (default = warn-on-error).        |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | Option            | Description                                            |                                           |
|                              | +===================+========================================================+                                           |
|                              | | *no-check*        | Do not check the remote HTTPS server\'s certificate.   |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *warn-on-error*   | Display a warning when there is a certificate error.   |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *reject-on-error* | Reject connection when there is a certificate error.   |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| reqclientcert                | Enable/disable to require client  | option                    | \-                        | disable                      |
|                              | certificates for all Agentless    |                           |                           |                              |
|                              | VPN users.                        |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| server-hostname              | Server hostname for HTTPS. When   | string                    | Maximum length: 255       |                              |
|                              | set, will be used for Agentless   |                           |                           |                              |
|                              | VPN web proxy host header for any |                           |                           |                              |
|                              | redirection.                      |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| servercert                   | Name of the server certificate to | string                    | Maximum length: 35        |                              |
|                              | be used for Agentless VPNs.       |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| source-address `<name>`      | Source address of incoming        | string                    | Maximum length: 79        |                              |
|                              | traffic.                          |                           |                           |                              |
|                              |                                   |                           |                           |                              |
|                              | Address name.                     |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| source-address-negate        | Enable/disable negated source     | option                    | \-                        | disable                      |
|                              | address match.                    |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| source-address6 `<name>`     | IPv6 source address of incoming   | string                    | Maximum length: 79        |                              |
|                              | traffic.                          |                           |                           |                              |
|                              |                                   |                           |                           |                              |
|                              | IPv6 address name.                |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| source-address6-negate       | Enable/disable negated source     | option                    | \-                        | disable                      |
|                              | IPv6 address match.               |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| source-interface `<name>`    | Agentless VPN source interface of | string                    | Maximum length: 35        |                              |
|                              | incoming traffic.                 |                           |                           |                              |
|                              |                                   |                           |                           |                              |
|                              | Interface name.                   |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ssl-client-renegotiation     | Enable/disable to allow client    | option                    | \-                        | disable                      |
|                              | renegotiation by the server if    |                           |                           |                              |
|                              | the tunnel goes down.             |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *disable*   | Abort any SSL connection that attempts to renegotiate. |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *enable*    | Allow a SSL client to renegotiate.                     |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ssl-insert-empty-fragment    | Enable/disable insertion of empty | option                    | \-                        | enable                       |
|                              | fragment.                         |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ssl-max-proto-ver            | SSL maximum protocol version.     | option                    | \-                        | tls1-3                       |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *tls1-0*    | TLS version 1.0.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *tls1-1*    | TLS version 1.1.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *tls1-2*    | TLS version 1.2.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *tls1-3*    | TLS version 1.3.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| ssl-min-proto-ver            | SSL minimum protocol version.     | option                    | \-                        | tls1-2                       |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *tls1-0*    | TLS version 1.0.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *tls1-1*    | TLS version 1.1.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *tls1-2*    | TLS version 1.2.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *tls1-3*    | TLS version 1.3.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| status                       | Enable/disable Agentless VPN.     | option                    | \-                        | enable                       |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable Agentless VPN.                                  |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable Agentless VPN.                                 |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| tls-groups                   | Configure the supported groups    | option                    | \-                        | P-521 P-384 ML-KEM768        |
|                              | for TLS negotiation.              |                           |                           | ML-KEM1024 P-384-MLKEM1024   |
|                              |                                   |                           |                           | P-256-MLKEM768               |
|                              |                                   |                           |                           | X25519-MLKEM768 X448         |
|                              |                                   |                           |                           | FFDHE4096 FFDHE6144          |
|                              |                                   |                           |                           | FFDHE8192                    |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | Option            | Description                                            |                                           |
|                              | +===================+========================================================+                                           |
|                              | | *P-521*           | P-521                                                  |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *P-384*           | P-384                                                  |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *P-256*           | P-256                                                  |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *ML-KEM512*       | ML-KEM512                                              |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *ML-KEM768*       | ML-KEM768                                              |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *ML-KEM1024*      | ML-KEM1024                                             |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *P-384-MLKEM1024* | P-384-MLKEM1024                                        |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *P-256-MLKEM768*  | P-256-MLKEM768                                         |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *X25519-MLKEM768* | X25519-MLKEM768                                        |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *X448*            | X448                                                   |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *X25519*          | X25519                                                 |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *FFDHE2048*       | FFDHE2048                                              |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *FFDHE3072*       | FFDHE3072                                              |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *FFDHE4096*       | FFDHE4096                                              |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *FFDHE6144*       | FFDHE6144                                              |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
|                              | | *FFDHE8192*       | FFDHE8192                                              |                                           |
|                              | +-------------------+--------------------------------------------------------+                                           |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| transform-backward-slashes   | Transform backward slashes to     | option                    | \-                        | disable                      |
|                              | forward slashes in URLs.          |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| unsafe-legacy-renegotiation  | Enable/disable unsafe legacy      | option                    | \-                        | disable                      |
|                              | re-negotiation.                   |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| url-obscuration              | Enable/disable to obscure the     | option                    | \-                        | disable                      |
|                              | host name of the URL of the web   |                           |                           |                              |
|                              | browser display.                  |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| user-peer                    | Name of user peer.                | string                    | Maximum length: 35        |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
| x-content-type-options       | Add HTTP X-Content-Type-Options   | option                    | \-                        | enable                       |
|                              | header.                           |                           |                           |                              |
+------------------------------+-----------------------------------+---------------------------+---------------------------+------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable setting.                                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable setting.                                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+--------------------------------------------------------------------------------------------------------------------------+

