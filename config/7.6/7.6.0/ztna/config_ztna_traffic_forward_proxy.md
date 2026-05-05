# config ztna traffic-forward-proxy

Configure ZTNA traffic forward proxy.

## Syntax

```
config ztna traffic-forward-proxy
    Description: Configure ZTNA traffic forward proxy.
    edit <name>
        set auth-portal [disable|enable]
        set client-cert [disable|enable]
        set comment {var-string}
        set empty-cert-action [accept|block|...]
        set h3-support [enable|disable]
        set interface {string}
        set log-blocked-traffic [enable|disable]
        set port {user}
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
        set status [enable|disable]
        set svr-pool-multiplex [enable|disable]
        set svr-pool-server-max-concurrent-request {integer}
        set svr-pool-server-max-request {integer}
        set svr-pool-ttl {integer}
        set user-agent-detect [disable|enable]
    next
end
```

## Parameters

+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                              | Description                       | Type                   | Size                   | Default                |
+========================================+===================================+========================+========================+========================+
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
| comment                                | Comment.                          | var-string             | Maximum length: 255    |                        |
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
| h3-support                             | Enable/disable HTTP3/QUIC support | option                 | \-                     | disable                |
|                                        | (default = disable).              |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *enable*    | Enable HTTP3/QUIC support.                             |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *disable*   | Disable HTTP3/QUIC support.                            |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| interface                              | interface name                    | string                 | Maximum length: 15     |                        |
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
| name                                   | Traffic forward proxy name        | string                 | Maximum length: 79     |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| port                                   | Accept incoming traffic on one or | user                   | Not Specified          |                        |
|                                        | more ports (0 - 65535).           |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-accept-ffdhe-groups                | Enable/disable FFDHE cipher suite | option                 | \-                     | enable                 |
|                                        | for SSL key exchange.             |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *enable*    | Accept FFDHE groups.                                   |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *disable*   | Do not accept FFDHE groups.                            |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-algorithm                          | Permitted encryption algorithms   | option                 | \-                     | high                   |
|                                        | for SSL sessions according to     |                        |                        |                        |
|                                        | encryption strength.              |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *high*      | High encryption. Allow only AES and ChaCha.            |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *medium*    | Medium encryption. Allow AES, ChaCha, 3DES, and RC4.   |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *low*       | Low encryption. Allow AES, ChaCha, 3DES, RC4, and DES. |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *custom*    | Custom encryption. Use config ssl-cipher-suites to     |                                     |
|                                        | |             | select the cipher suites that are allowed.             |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-certificate `<name>`               | Name of the certificate to use    | string                 | Maximum length: 79     |                        |
|                                        | for SSL handshake.                |                        |                        |                        |
|                                        |                                   |                        |                        |                        |
|                                        | Certificate list.                 |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-client-fallback                    | Enable/disable support for        | option                 | \-                     | enable                 |
|                                        | preventing Downgrade Attacks on   |                        |                        |                        |
|                                        | client connections (RFC 7507).    |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *disable*   | Disable.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *enable*    | Enable.                                                |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-client-rekey-count                 | Maximum length of data in MB      | integer                | Minimum value: 200     | 0                      |
|                                        | before triggering a client rekey  |                        | Maximum value: 1048576 |                        |
|                                        | (0 = disable).                    |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-client-renegotiation               | Allow, deny, or require secure    | option                 | \-                     | secure                 |
|                                        | renegotiation of client sessions  |                        |                        |                        |
|                                        | to comply with RFC 5746.          |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *allow*     | Allow a SSL client to renegotiate.                     |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *deny*      | Abort any client initiated SSL re-negotiation attempt. |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *secure*    | Abort any client initiated SSL re-negotiation attempt  |                                     |
|                                        | |             | that does not use RFC 5746 Secure Renegotiation.       |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-client-session-state-max           | Maximum number of client to       | integer                | Minimum value: 1       | 1000                   |
|                                        | FortiProxy SSL session states to  |                        | Maximum value: 10000   |                        |
|                                        | keep.                             |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-client-session-state-timeout       | Number of minutes to keep client  | integer                | Minimum value: 1       | 30                     |
|                                        | to FortiProxy SSL session state.  |                        | Maximum value: 14400   |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-client-session-state-type          | How to expire SSL sessions for    | option                 | \-                     | both                   |
|                                        | the segment of the SSL connection |                        |                        |                        |
|                                        | between the client and the        |                        |                        |                        |
|                                        | FortiGate.                        |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *disable*   | Do not keep session states.                            |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *time*      | Expire session states after this many minutes.         |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *count*     | Expire session states when this maximum is reached.    |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *both*      | Expire session states based on time or count,          |                                     |
|                                        | |             | whichever occurs first.                                |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-dh-bits                            | Bit-size of Diffie-Hellman (DH)   | option                 | \-                     | 2048                   |
|                                        | prime used in DHE-RSA negotiation |                        |                        |                        |
|                                        | (default = 2048).                 |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *768*       | 768-bit Diffie-Hellman prime.                          |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *1024*      | 1024-bit Diffie-Hellman prime.                         |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *1536*      | 1536-bit Diffie-Hellman prime.                         |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *2048*      | 2048-bit Diffie-Hellman prime.                         |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *3072*      | 3072-bit Diffie-Hellman prime.                         |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *4096*      | 4096-bit Diffie-Hellman prime.                         |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-hpkp                               | Enable/disable including HPKP     | option                 | \-                     | disable                |
|                                        | header in response.               |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +---------------+--------------------------------------------------------+                                   |
|                                        | | Option        | Description                                            |                                   |
|                                        | +===============+========================================================+                                   |
|                                        | | *disable*     | Do not add a HPKP header to each HTTP response.        |                                   |
|                                        | +---------------+--------------------------------------------------------+                                   |
|                                        | | *enable*      | Add a HPKP header to each a HTTP response.             |                                   |
|                                        | +---------------+--------------------------------------------------------+                                   |
|                                        | | *report-only* | Add a HPKP Report-Only header to each HTTP response.   |                                   |
|                                        | +---------------+--------------------------------------------------------+                                   |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-hpkp-age                           | Number of seconds the client      | integer                | Minimum value: 60      | 5184000                |
|                                        | should honor the HPKP setting.    |                        | Maximum value:         |                        |
|                                        |                                   |                        | 157680000              |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-hpkp-backup                        | Certificate to generate backup    | string                 | Maximum length: 79     |                        |
|                                        | HPKP pin from.                    |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-hpkp-include-subdomains            | Indicate that HPKP header applies | option                 | \-                     | disable                |
|                                        | to all subdomains.                |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *disable*   | HPKP header does not apply to subdomains.              |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *enable*    | HPKP header applies to subdomains.                     |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-hpkp-primary                       | Certificate to generate primary   | string                 | Maximum length: 79     |                        |
|                                        | HPKP pin from.                    |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-hpkp-report-uri                    | URL to report HPKP violations to. | var-string             | Maximum length: 255    |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-hsts                               | Enable/disable including HSTS     | option                 | \-                     | disable                |
|                                        | header in response.               |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *disable*   | Do not add a HSTS header to each a HTTP response.      |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *enable*    | Add a HSTS header to each HTTP response.               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-hsts-age                           | Number of seconds the client      | integer                | Minimum value: 60      | 5184000                |
|                                        | should honor the HSTS setting.    |                        | Maximum value:         |                        |
|                                        |                                   |                        | 157680000              |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-hsts-include-subdomains            | Indicate that HSTS header applies | option                 | \-                     | disable                |
|                                        | to all subdomains.                |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *disable*   | HSTS header does not apply to subdomains.              |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *enable*    | HSTS header applies to subdomains.                     |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-http-location-conversion           | Enable to replace HTTP with HTTPS | option                 | \-                     | disable                |
|                                        | in the reply\'s Location HTTP     |                        |                        |                        |
|                                        | header field.                     |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *enable*    | Enable HTTP location conversion.                       |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *disable*   | Disable HTTP location conversion.                      |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-http-match-host                    | Enable/disable HTTP host matching | option                 | \-                     | enable                 |
|                                        | for location conversion.          |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *enable*    | Match HTTP host in response header.                    |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *disable*   | Do not match HTTP host.                                |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-max-version                        | Highest SSL/TLS version           | option                 | \-                     | tls-1.3                |
|                                        | acceptable from a client.         |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *ssl-3.0*   | SSL 3.0.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.0*   | TLS 1.0.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.1*   | TLS 1.1.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.2*   | TLS 1.2.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.3*   | TLS 1.3.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-min-version                        | Lowest SSL/TLS version acceptable | option                 | \-                     | tls-1.1                |
|                                        | from a client.                    |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *ssl-3.0*   | SSL 3.0.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.0*   | TLS 1.0.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.1*   | TLS 1.1.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.2*   | TLS 1.2.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.3*   | TLS 1.3.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-mode                               | Apply SSL offloading between the  | option                 | \-                     | half                   |
|                                        | client and the FortiGate (half)   |                        |                        |                        |
|                                        | or from the client to the         |                        |                        |                        |
|                                        | FortiGate and from the FortiGate  |                        |                        |                        |
|                                        | to the server (full).             |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *half*      | Client to FortiProxy SSL.                              |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *full*      | Client to FortiProxy and FortiProxy to Server SSL.     |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-pfs                                | Select the cipher suites that can | option                 | \-                     | require                |
|                                        | be used for SSL perfect forward   |                        |                        |                        |
|                                        | secrecy (PFS). Applies to both    |                        |                        |                        |
|                                        | client and server sessions.       |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *require*   | Allow only Diffie-Hellman cipher-suites, so PFS is     |                                     |
|                                        | |             | applied.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *deny*      | Allow only non-Diffie-Hellman cipher-suites, so PFS is |                                     |
|                                        | |             | not applied.                                           |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *allow*     | Allow use of any cipher suite so PFS may or may not be |                                     |
|                                        | |             | used depending on the cipher suite selected.           |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-send-empty-frags                   | Enable/disable sending empty      | option                 | \-                     | enable                 |
|                                        | fragments to avoid CBC IV attacks |                        |                        |                        |
|                                        | (SSL 3.0 & TLS 1.0 only). May     |                        |                        |                        |
|                                        | need to be disabled for           |                        |                        |                        |
|                                        | compatibility with older systems. |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *enable*    | Send empty fragments.                                  |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *disable*   | Do not send empty fragments.                           |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-server-algorithm                   | Permitted encryption algorithms   | option                 | \-                     | client                 |
|                                        | for the server side of SSL full   |                        |                        |                        |
|                                        | mode sessions according to        |                        |                        |                        |
|                                        | encryption strength.              |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *high*      | High encryption. Allow only AES and ChaCha.            |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *medium*    | Medium encryption. Allow AES, ChaCha, 3DES, and RC4.   |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *low*       | Low encryption. Allow AES, ChaCha, 3DES, RC4, and DES. |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *custom*    | Custom encryption. Use ssl-server-cipher-suites to     |                                     |
|                                        | |             | select the cipher suites that are allowed.             |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *client*    | Use the same encryption algorithms for both client and |                                     |
|                                        | |             | server sessions.                                       |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-server-max-version                 | Highest SSL/TLS version           | option                 | \-                     | client                 |
|                                        | acceptable from a server. Use the |                        |                        |                        |
|                                        | client setting by default.        |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *ssl-3.0*   | SSL 3.0.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.0*   | TLS 1.0.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.1*   | TLS 1.1.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.2*   | TLS 1.2.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.3*   | TLS 1.3.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *client*    | Use same value as client configuration.                |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-server-min-version                 | Lowest SSL/TLS version acceptable | option                 | \-                     | client                 |
|                                        | from a server. Use the client     |                        |                        |                        |
|                                        | setting by default.               |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *ssl-3.0*   | SSL 3.0.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.0*   | TLS 1.0.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.1*   | TLS 1.1.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.2*   | TLS 1.2.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *tls-1.3*   | TLS 1.3.                                               |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *client*    | Use same value as client configuration.                |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-server-renegotiation               | Enable/disable secure             | option                 | \-                     | enable                 |
|                                        | renegotiation to comply with RFC  |                        |                        |                        |
|                                        | 5746.                             |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *enable*    | Enable secure renegotiation.                           |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *disable*   | Disable secure renegotiation.                          |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-server-session-state-max           | Maximum number of FortiGate to    | integer                | Minimum value: 1       | 100                    |
|                                        | Server SSL session states to      |                        | Maximum value: 10000   |                        |
|                                        | keep.                             |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-server-session-state-timeout       | Number of minutes to keep         | integer                | Minimum value: 1       | 60                     |
|                                        | FortiGate to Server SSL session   |                        | Maximum value: 14400   |                        |
|                                        | state.                            |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssl-server-session-state-type          | How to expire SSL sessions for    | option                 | \-                     | both                   |
|                                        | the segment of the SSL connection |                        |                        |                        |
|                                        | between the server and the        |                        |                        |                        |
|                                        | FortiGate.                        |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *disable*   | Do not keep session states.                            |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *time*      | Expire session states after this many minutes.         |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *count*     | Expire session states when this maximum is reached.    |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *both*      | Expire session states based on time or count,          |                                     |
|                                        | |             | whichever occurs first.                                |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| status                                 | Enable/disable the traffic        | option                 | \-                     | disable                |
|                                        | forward proxy for ZTNA traffic.   |                        |                        |                        |
+----------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | Option      | Description                                            |                                     |
|                                        | +=============+========================================================+                                     |
|                                        | | *enable*    | Enable the ZTNA traffic forward proxy.                 |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
|                                        | | *disable*   | Disable the ZTNA traffic forward proxy.                |                                     |
|                                        | +-------------+--------------------------------------------------------+                                     |
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
+----------------------------------------+--------------------------------------------------------------------------------------------------------------+

