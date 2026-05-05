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
            set status [disable|deep-inspection]
            set quic [inspect|bypass|...]
            set proxy-after-tcp-handshake [enable|disable]
            set client-certificate [bypass|inspect|...]
            set unsupported-ssl-version [allow|block]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set expired-server-cert [allow|block|...]
            set revoked-server-cert [allow|block|...]
            set untrusted-server-cert [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set cert-validation-failure [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
        end
        config ftps
            Description: Configure FTPS options.
            set ports {integer}
            set status [disable|deep-inspection]
            set client-certificate [bypass|inspect|...]
            set unsupported-ssl-version [allow|block]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set expired-server-cert [allow|block|...]
            set revoked-server-cert [allow|block|...]
            set untrusted-server-cert [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set cert-validation-failure [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
            set min-allowed-ssl-version [ssl-3.0|tls-1.0|...]
        end
        config https
            Description: Configure HTTPS options.
            set ports {integer}
            set status [disable|certificate-inspection|...]
            set quic [inspect|bypass|...]
            set proxy-after-tcp-handshake [enable|disable]
            set client-certificate [bypass|inspect|...]
            set unsupported-ssl-version [allow|block]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set expired-server-cert [allow|block|...]
            set revoked-server-cert [allow|block|...]
            set untrusted-server-cert [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set cert-validation-failure [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
            set cert-probe-failure [allow|block]
            set min-allowed-ssl-version [ssl-3.0|tls-1.0|...]
        end
        config imaps
            Description: Configure IMAPS options.
            set ports {integer}
            set status [disable|deep-inspection]
            set proxy-after-tcp-handshake [enable|disable]
            set client-certificate [bypass|inspect|...]
            set unsupported-ssl-version [allow|block]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set expired-server-cert [allow|block|...]
            set revoked-server-cert [allow|block|...]
            set untrusted-server-cert [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set cert-validation-failure [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
        end
        set mapi-over-https [enable|disable]
        config pop3s
            Description: Configure POP3S options.
            set ports {integer}
            set status [disable|deep-inspection]
            set proxy-after-tcp-handshake [enable|disable]
            set client-certificate [bypass|inspect|...]
            set unsupported-ssl-version [allow|block]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set expired-server-cert [allow|block|...]
            set revoked-server-cert [allow|block|...]
            set untrusted-server-cert [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set cert-validation-failure [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
        end
        set rpc-over-https [enable|disable]
        set server-cert <name1>, <name2>, ...
        set server-cert-mode [re-sign|replace]
        config smtps
            Description: Configure SMTPS options.
            set ports {integer}
            set status [disable|deep-inspection]
            set proxy-after-tcp-handshake [enable|disable]
            set client-certificate [bypass|inspect|...]
            set unsupported-ssl-version [allow|block]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set expired-server-cert [allow|block|...]
            set revoked-server-cert [allow|block|...]
            set untrusted-server-cert [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set cert-validation-failure [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
        end
        config ssh
            Description: Configure SSH options.
            set ports {integer}
            set status [disable|deep-inspection]
            set inspect-all [disable|deep-inspection]
            set proxy-after-tcp-handshake [enable|disable]
            set unsupported-version [bypass|block]
            set ssh-tun-policy-check [disable|enable]
            set ssh-algorithm [compatible|high-encryption]
        end
        config ssl
            Description: Configure SSL options.
            set inspect-all [disable|certificate-inspection|...]
            set client-certificate [bypass|inspect|...]
            set unsupported-ssl-version [allow|block]
            set unsupported-ssl-cipher [allow|block]
            set unsupported-ssl-negotiation [allow|block]
            set expired-server-cert [allow|block|...]
            set revoked-server-cert [allow|block|...]
            set untrusted-server-cert [allow|block|...]
            set cert-validation-timeout [allow|block|...]
            set cert-validation-failure [allow|block|...]
            set sni-server-cert-check [enable|strict|...]
            set cert-probe-failure [allow|block]
            set min-allowed-ssl-version [ssl-3.0|tls-1.0|...]
        end
        set ssl-anomaly-log [disable|enable]
        config ssl-exempt
            Description: Servers to exempt from SSL inspection.
            edit <id>
                set type [fortiguard-category|address|...]
                set fortiguard-category {integer}
                set address {string}
                set address6 {string}
                set wildcard-fqdn {string}
                set regex {string}
            next
        end
        set ssl-exemption-ip-rating [enable|disable]
        set ssl-exemption-log [disable|enable]
        set ssl-handshake-log [disable|enable]
        set ssl-negotiation-log [disable|enable]
        config ssl-server
            Description: SSL server settings used for client certificate request.
            edit <id>
                set ip {ipv4-address-any}
                set https-client-certificate [bypass|inspect|...]
                set smtps-client-certificate [bypass|inspect|...]
                set pop3s-client-certificate [bypass|inspect|...]
                set imaps-client-certificate [bypass|inspect|...]
                set ftps-client-certificate [bypass|inspect|...]
                set ssl-other-client-certificate [bypass|inspect|...]
            next
        end
        set ssl-server-cert-log [disable|enable]
        set supported-alpn [http1-1|http2|...]
        set untrusted-caname {string}
        set use-ssl-server [disable|enable]
    next
end
```

## Parameters

+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| Parameter                      | Description                       | Type               | Size               | Default               |
+================================+===================================+====================+====================+=======================+
| allowlist                      | Enable/disable exempting servers  | option             | \-                 | disable               |
|                                | by FortiGuard allowlist.          |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *enable*    | Enable setting.                                        |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *disable*   | Disable setting.                                       |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| block-blocklisted-certificates | Enable/disable blocking SSL-based | option             | \-                 | enable                |
|                                | botnet communication by           |                    |                    |                       |
|                                | FortiGuard certificate blocklist. |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *disable*   | Disable FortiGuard certificate blocklist.              |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *enable*    | Enable FortiGuard certificate blocklist.               |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| caname                         | CA certificate used by SSL        | string             | Maximum length: 35 | Fortinet_CA_SSL       |
|                                | Inspection.                       |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| comment                        | Optional comments.                | var-string         | Maximum length:    |                       |
|                                |                                   |                    | 255                |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| mapi-over-https                | Enable/disable inspection of MAPI | option             | \-                 | disable               |
|                                | over HTTPS.                       |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *enable*    | Enable inspection of MAPI over HTTPS.                  |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *disable*   | Disable inspection of MAPI over HTTPS.                 |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| name                           | Name.                             | string             | Maximum length: 35 |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| rpc-over-https                 | Enable/disable inspection of RPC  | option             | \-                 | disable               |
|                                | over HTTPS.                       |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *enable*    | Enable inspection of RPC over HTTPS.                   |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *disable*   | Disable inspection of RPC over HTTPS.                  |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| server-cert `<name>`           | Certificate used by SSL           | string             | Maximum length: 79 |                       |
|                                | Inspection to replace server      |                    |                    |                       |
|                                | certificate.                      |                    |                    |                       |
|                                |                                   |                    |                    |                       |
|                                | Certificate list.                 |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| server-cert-mode               | Re-sign or replace the server\'s  | option             | \-                 | re-sign               |
|                                | certificate.                      |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *re-sign*   | Multiple clients connecting to multiple servers.       |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *replace*   | Protect an SSL server.                                 |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| ssl-anomaly-log                | Enable/disable logging of SSL     | option             | \-                 | enable                |
|                                | anomalies.                        |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *disable*   | Disable logging of SSL anomalies.                      |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *enable*    | Enable logging of SSL anomalies.                       |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| ssl-exemption-ip-rating        | Enable/disable IP based URL       | option             | \-                 | enable                |
|                                | rating.                           |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *enable*    | Enable IP based URL rating.                            |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *disable*   | Disable IP based URL rating.                           |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| ssl-exemption-log              | Enable/disable logging of SSL     | option             | \-                 | disable               |
|                                | exemptions.                       |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *disable*   | Disable logging of SSL exemptions.                     |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *enable*    | Enable logging of SSL exemptions.                      |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| ssl-handshake-log              | Enable/disable logging of TLS     | option             | \-                 | disable               |
|                                | handshakes.                       |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *disable*   | Disable logging of TLS handshakes.                     |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *enable*    | Enable logging of TLS handshakes.                      |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| ssl-negotiation-log            | Enable/disable logging of SSL     | option             | \-                 | enable                |
|                                | negotiation events.               |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *disable*   | Disable logging of SSL negotiation events.             |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *enable*    | Enable logging of SSL negotiation events.              |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| ssl-server-cert-log            | Enable/disable logging of server  | option             | \-                 | disable               |
|                                | certificate information.          |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *disable*   | Disable logging of server certificate information.     |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *enable*    | Enable logging of server certificate information.      |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| supported-alpn                 | Configure ALPN option.            | option             | \-                 | all                   |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *http1-1*   | Enable all ALPN including HTTP1.1 except HTTP2 and     |                            |
|                                | |             | SPDY.                                                  |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *http2*     | Enable all ALPN including HTTP2 except HTTP1.1 and     |                            |
|                                | |             | SPDY.                                                  |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *all*       | Allow all ALPN extensions except SPDY.                 |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *none*      | Do not use ALPN.                                       |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| untrusted-caname               | Untrusted CA certificate used by  | string             | Maximum length: 35 | Fortinet_CA_Untrusted |
|                                | SSL Inspection.                   |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
| use-ssl-server                 | Enable/disable the use of SSL     | option             | \-                 | disable               |
|                                | server table for SSL offloading.  |                    |                    |                       |
+--------------------------------+-----------------------------------+--------------------+--------------------+-----------------------+
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | Option      | Description                                            |                            |
|                                | +=============+========================================================+                            |
|                                | | *disable*   | Don\'t use SSL server configuration.                   |                            |
|                                | +-------------+--------------------------------------------------------+                            |
|                                | | *enable*    | Use SSL server configuration.                          |                            |
|                                | +-------------+--------------------------------------------------------+                            |
+--------------------------------+-----------------------------------------------------------------------------------------------------+

