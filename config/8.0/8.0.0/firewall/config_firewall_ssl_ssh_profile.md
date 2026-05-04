# config firewall ssl-ssh-profile

Configure SSL/SSH protocol options.

## Syntax

```
config firewall ssl-ssh-profile
    Description: Configure SSL/SSH protocol options.
    edit <name>
        set allowlist [enable|disable]
        set block-blocklisted-certificates [disable|enable]
        set caname {string}
        set comment {var-string}
        config dot
            Description: Configure DNS over TLS options.
            set cert-validation-failure [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set client-certificate [bypass|inspect|...]
            set expired-server-cert [allow|block|...]
            set proxy-after-tcp-handshake [enable|disable]
            set quic [inspect|bypass|...]
            set revoked-server-cert [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
            set status [disable|deep-inspection]
            set udp-not-quic [allow|block]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set unsupported-ssl-version [allow|block]
            set untrusted-server-cert [allow|block|...]
        end
        config ech-outer-sni
            Description: ClientHelloOuter SNIs to be blocked.
            edit <name>
                set sni {string}
            next
        end
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        config ftps
            Description: Configure FTPS options.
            set cert-validation-failure [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set client-certificate [bypass|inspect|...]
            set expired-server-cert [allow|block|...]
            set min-allowed-ssl-version [ssl-3.0|tls-1.0|...]
            set ports {integer}
            set revoked-server-cert [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
            set status [disable|deep-inspection]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set unsupported-ssl-version [allow|block]
            set untrusted-server-cert [allow|block|...]
        end
        config https
            Description: Configure HTTPS options.
            set cert-probe-failure [allow|block]
            set cert-validation-failure [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set client-certificate [bypass|inspect|...]
            set encrypted-client-hello [allow|block]
            set expired-server-cert [allow|block|...]
            set min-allowed-ssl-version [ssl-3.0|tls-1.0|...]
            set ports {integer}
            set proxy-after-tcp-handshake [enable|disable]
            set quic [inspect|bypass|...]
            set revoked-server-cert [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
            set status [disable|certificate-inspection|...]
            set udp-not-quic [allow|block]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set unsupported-ssl-version [allow|block]
            set untrusted-server-cert [allow|block|...]
        end
        config imaps
            Description: Configure IMAPS options.
            set cert-validation-failure [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set client-certificate [bypass|inspect|...]
            set expired-server-cert [allow|block|...]
            set ports {integer}
            set proxy-after-tcp-handshake [enable|disable]
            set revoked-server-cert [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
            set status [disable|deep-inspection]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set unsupported-ssl-version [allow|block]
            set untrusted-server-cert [allow|block|...]
        end
        set mapi-over-https [enable|disable]
        config pop3s
            Description: Configure POP3S options.
            set cert-validation-failure [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set client-certificate [bypass|inspect|...]
            set expired-server-cert [allow|block|...]
            set ports {integer}
            set proxy-after-tcp-handshake [enable|disable]
            set revoked-server-cert [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
            set status [disable|deep-inspection]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set unsupported-ssl-version [allow|block]
            set untrusted-server-cert [allow|block|...]
        end
        set rpc-over-https [enable|disable]
        set server-cert <name1>, <name2>, ...
        set server-cert-mode [re-sign|replace]
        config smtps
            Description: Configure SMTPS options.
            set cert-validation-failure [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set client-certificate [bypass|inspect|...]
            set expired-server-cert [allow|block|...]
            set ports {integer}
            set proxy-after-tcp-handshake [enable|disable]
            set revoked-server-cert [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
            set status [disable|deep-inspection]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set unsupported-ssl-version [allow|block]
            set untrusted-server-cert [allow|block|...]
        end
        config ssh
            Description: Configure SSH options.
            set inspect-all [disable|deep-inspection]
            set ports {integer}
            set proxy-after-tcp-handshake [enable|disable]
            set ssh-algorithm [compatible|high-encryption]
            set ssh-tun-policy-check [disable|enable]
            set status [disable|deep-inspection]
            set unsupported-version [bypass|block]
        end
        config ssl
            Description: Configure SSL options.
            set cert-probe-failure [allow|block]
            set cert-validation-failure [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set client-certificate [bypass|inspect|...]
            set encrypted-client-hello [allow|block]
            set expired-server-cert [allow|block|...]
            set inspect-all [disable|certificate-inspection|...]
            set min-allowed-ssl-version [ssl-3.0|tls-1.0|...]
            set revoked-server-cert [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set unsupported-ssl-version [allow|block]
            set untrusted-server-cert [allow|block|...]
        end
        set ssl-anomaly-log [disable|enable]
        config ssl-exempt
            Description: Servers to exempt from SSL inspection.
            edit <id>
                set address {string}
                set address6 {string}
                set fortiguard-category {integer}
                set regex {string}
                set type [fortiguard-category|address|...]
                set wildcard-fqdn {string}
            next
        end
        set ssl-exemption-ip-rating [enable|disable]
        set ssl-exemption-log [disable|enable]
        set ssl-handshake-log [disable|enable]
        set ssl-negotiation-log [disable|enable]
        config ssl-server
            Description: SSL server settings used for client certificate request.
            edit <id>
                set ftps-client-certificate [bypass|inspect|...]
                set https-client-certificate [bypass|inspect|...]
                set imaps-client-certificate [bypass|inspect|...]
                set ip {ipv4-address-any}
                set pop3s-client-certificate [bypass|inspect|...]
                set smtps-client-certificate [bypass|inspect|...]
                set ssl-other-client-certificate [bypass|inspect|...]
            next
        end
        set ssl-server-cert-log [disable|enable]
        set supported-alpn [http1-1|http2|...]
        set untrusted-caname {string}
        set use-ssl-server [disable|enable]
        set uuid {uuid}
    next
end
```

## Parameters

+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter                      | Description                       | Type               | Size               | Default                              |
+================================+===================================+====================+====================+======================================+
| allowlist                      | Enable/disable exempting servers  | option             | \-                 | disable                              |
|                                | by FortiGuard allowlist.          |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable setting.                                        |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable setting.                                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| block-blocklisted-certificates | Enable/disable blocking SSL-based | option             | \-                 | enable                               |
|                                | botnet communication by           |                    |                    |                                      |
|                                | FortiGuard certificate blocklist. |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable FortiGuard certificate blocklist.              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable FortiGuard certificate blocklist.               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| caname                         | CA certificate used by SSL        | string             | Maximum length: 35 | Fortinet_CA_SSL                      |
|                                | Inspection.                       |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| comment                        | Optional comments.                | var-string         | Maximum length:    |                                      |
|                                |                                   |                    | 255                |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-force-sync \*           | Enable/disable forced             | option             | \-                 | disable                              |
|                                | synchronization of configuration  |                    |                    |                                      |
|                                | objects from the root FortiGate   |                    |                    |                                      |
|                                | unit to the downstream devices.   |                    |                    |                                      |
|                                | Configuration conflict check is   |                    |                    |                                      |
|                                | skipped.                          |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable forced synchronization of configuration objects |                                           |
|                                | |             | from the root FortiGate unit to the downstream         |                                           |
|                                | |             | devices.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable forced synchronization of configuration        |                                           |
|                                | |             | objects from the root FortiGate unit to the downstream |                                           |
|                                | |             | devices.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object \*               | Security Fabric global object     | option             | \-                 | disable                              |
|                                | setting.                          |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Object is set as a security fabric-wide global object. |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Object is local to this security fabric member.        |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object-source \*        | Source of truth for fabric        | option             | \-                 | root                                 |
|                                | object.                           |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *member*    | Source of truth for this object is a non-root member   |                                           |
|                                | |             | of fabric.                                             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *local*     | Source of truth for this object is this security       |                                           |
|                                | |             | fabric member.                                         |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *root*      | Source of truth for this object is the root of the     |                                           |
|                                | |             | fabric.                                                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| mapi-over-https                | Enable/disable inspection of MAPI | option             | \-                 | disable                              |
|                                | over HTTPS.                       |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable inspection of MAPI over HTTPS.                  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable inspection of MAPI over HTTPS.                 |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name                           | Name.                             | string             | Maximum length: 47 |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| rpc-over-https                 | Enable/disable inspection of RPC  | option             | \-                 | disable                              |
|                                | over HTTPS.                       |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable inspection of RPC over HTTPS.                   |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable inspection of RPC over HTTPS.                  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| server-cert `<name>`           | Certificate used by SSL           | string             | Maximum length: 79 |                                      |
|                                | Inspection to replace server      |                    |                    |                                      |
|                                | certificate.                      |                    |                    |                                      |
|                                |                                   |                    |                    |                                      |
|                                | Certificate list.                 |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| server-cert-mode               | Re-sign or replace the server\'s  | option             | \-                 | re-sign                              |
|                                | certificate.                      |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *re-sign*   | Multiple clients connecting to multiple servers.       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *replace*   | Protect an SSL server.                                 |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ssl-anomaly-log                | Enable/disable logging of SSL     | option             | \-                 | enable                               |
|                                | anomalies.                        |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable logging of SSL anomalies.                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable logging of SSL anomalies.                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ssl-exemption-ip-rating        | Enable/disable IP based URL       | option             | \-                 | enable                               |
|                                | rating.                           |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable IP based URL rating.                            |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable IP based URL rating.                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ssl-exemption-log              | Enable/disable logging of SSL     | option             | \-                 | disable                              |
|                                | exemptions.                       |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable logging of SSL exemptions.                     |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable logging of SSL exemptions.                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ssl-handshake-log              | Enable/disable logging of TLS     | option             | \-                 | disable                              |
|                                | handshakes.                       |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable logging of TLS handshakes.                     |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable logging of TLS handshakes.                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ssl-negotiation-log            | Enable/disable logging of SSL     | option             | \-                 | enable                               |
|                                | negotiation events.               |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable logging of SSL negotiation events.             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable logging of SSL negotiation events.              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ssl-server-cert-log            | Enable/disable logging of server  | option             | \-                 | disable                              |
|                                | certificate information.          |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable logging of server certificate information.     |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable logging of server certificate information.      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| supported-alpn                 | Configure ALPN option.            | option             | \-                 | all                                  |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *http1-1*   | Enable all ALPN including HTTP1.1 except HTTP2 and     |                                           |
|                                | |             | SPDY.                                                  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *http2*     | Enable all ALPN including HTTP2 except HTTP1.1 and     |                                           |
|                                | |             | SPDY.                                                  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *all*       | Allow all ALPN extensions except SPDY.                 |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *none*      | Do not use ALPN.                                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| untrusted-caname               | Untrusted CA certificate used by  | string             | Maximum length: 35 | Fortinet_CA_Untrusted                |
|                                | SSL Inspection.                   |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| use-ssl-server                 | Enable/disable the use of SSL     | option             | \-                 | disable                              |
|                                | server table for SSL offloading.  |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Don\'t use SSL server configuration.                   |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Use SSL server configuration.                          |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid \*                        | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                                | (UUID; automatically assigned but |                    |                    |                                      |
|                                | can be manually reset).           |                    |                    |                                      |
+--------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

