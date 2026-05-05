# config vpn certificate setting

VPN certificate setting.

## Syntax

```
config vpn certificate setting
    Description: VPN certificate setting.
    set cert-expire-warning {integer}
    set certname-dsa1024 {string}
    set certname-dsa2048 {string}
    set certname-ecdsa256 {string}
    set certname-ecdsa384 {string}
    set certname-ecdsa521 {string}
    set certname-ed25519 {string}
    set certname-ed448 {string}
    set certname-rsa1024 {string}
    set certname-rsa2048 {string}
    set certname-rsa4096 {string}
    set check-ca-cert [enable|disable]
    set check-ca-chain [enable|disable]
    set cmp-key-usage-checking [enable|disable]
    set cmp-save-extra-certs [enable|disable]
    set cn-allow-multi [disable|enable]
    set cn-match [substring|value]
    config crl-verification
        Description: CRL verification options.
        set chain-crl-absence [ignore|revoke]
        set expiry [ignore|revoke]
        set leaf-crl-absence [ignore|revoke]
    end
    set interface {string}
    set interface-select-method [auto|sdwan|...]
    set ocsp-default-server {string}
    set ocsp-option [certificate|server]
    set ocsp-status [enable|mandatory|...]
    set proxy {string}
    set proxy-password {password}
    set proxy-port {integer}
    set proxy-username {string}
    set source-ip {string}
    set ssl-min-proto-version [default|SSLv3|...]
    set strict-ocsp-check [enable|disable]
    set subject-match [substring|value]
    set subject-set [subset|superset]
    set vrf-select {integer}
end
```

## Parameters

+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| Parameter               | Description                       | Type                 | Size                 | Default               |
+=========================+===================================+======================+======================+=======================+
| cert-expire-warning     | Number of days before a           | integer              | Minimum value: 0     | 14                    |
|                         | certificate expires to send a     |                      | Maximum value: 100   |                       |
|                         | warning. Set to 0 to disable      |                      |                      |                       |
|                         | sending of the warning.           |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| certname-dsa1024        | 1024 bit DSA key certificate for  | string               | Maximum length: 35   | Fortinet_SSL_DSA1024  |
|                         | re-signing server certificates    |                      |                      |                       |
|                         | for SSL inspection.               |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| certname-dsa2048        | 2048 bit DSA key certificate for  | string               | Maximum length: 35   | Fortinet_SSL_DSA2048  |
|                         | re-signing server certificates    |                      |                      |                       |
|                         | for SSL inspection.               |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| certname-ecdsa256       | 256 bit ECDSA key certificate for | string               | Maximum length: 35   | Fortinet_SSL_ECDSA256 |
|                         | re-signing server certificates    |                      |                      |                       |
|                         | for SSL inspection.               |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| certname-ecdsa384       | 384 bit ECDSA key certificate for | string               | Maximum length: 35   | Fortinet_SSL_ECDSA384 |
|                         | re-signing server certificates    |                      |                      |                       |
|                         | for SSL inspection.               |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| certname-ecdsa521       | 521 bit ECDSA key certificate for | string               | Maximum length: 35   | Fortinet_SSL_ECDSA521 |
|                         | re-signing server certificates    |                      |                      |                       |
|                         | for SSL inspection.               |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| certname-ed25519        | 253 bit EdDSA key certificate for | string               | Maximum length: 35   | Fortinet_SSL_ED25519  |
|                         | re-signing server certificates    |                      |                      |                       |
|                         | for SSL inspection.               |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| certname-ed448          | 456 bit EdDSA key certificate for | string               | Maximum length: 35   | Fortinet_SSL_ED448    |
|                         | re-signing server certificates    |                      |                      |                       |
|                         | for SSL inspection.               |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| certname-rsa1024        | 1024 bit RSA key certificate for  | string               | Maximum length: 35   | Fortinet_SSL_RSA1024  |
|                         | re-signing server certificates    |                      |                      |                       |
|                         | for SSL inspection.               |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| certname-rsa2048        | 2048 bit RSA key certificate for  | string               | Maximum length: 35   | Fortinet_SSL_RSA2048  |
|                         | re-signing server certificates    |                      |                      |                       |
|                         | for SSL inspection.               |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| certname-rsa4096        | 4096 bit RSA key certificate for  | string               | Maximum length: 35   | Fortinet_SSL_RSA4096  |
|                         | re-signing server certificates    |                      |                      |                       |
|                         | for SSL inspection.               |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| check-ca-cert           | Enable/disable verification of    | option               | \-                   | enable                |
|                         | the user certificate and pass     |                      |                      |                       |
|                         | authentication if any CA in the   |                      |                      |                       |
|                         | chain is trusted.                 |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | Option      | Description                                            |                                |
|                         | +=============+========================================================+                                |
|                         | | *enable*    | Enable verification of the user certificate.           |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *disable*   | Disable verification of the user certificate.          |                                |
|                         | +-------------+--------------------------------------------------------+                                |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| check-ca-chain          | Enable/disable verification of    | option               | \-                   | disable               |
|                         | the entire certificate chain and  |                      |                      |                       |
|                         | pass authentication only if the   |                      |                      |                       |
|                         | chain is complete and all of the  |                      |                      |                       |
|                         | CAs in the chain are trusted.     |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | Option      | Description                                            |                                |
|                         | +=============+========================================================+                                |
|                         | | *enable*    | Enable verification of the entire certificate chain.   |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *disable*   | Disable verification of the entire certificate chain.  |                                |
|                         | +-------------+--------------------------------------------------------+                                |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| cmp-key-usage-checking  | Enable/disable server certificate | option               | \-                   | enable                |
|                         | key usage checking in CMP mode.   |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | Option      | Description                                            |                                |
|                         | +=============+========================================================+                                |
|                         | | *enable*    | Enable server certificate key usage checking in CMP    |                                |
|                         | |             | mode.                                                  |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *disable*   | Disable server certificate key usage checking in CMP   |                                |
|                         | |             | mode.                                                  |                                |
|                         | +-------------+--------------------------------------------------------+                                |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| cmp-save-extra-certs    | Enable/disable saving extra       | option               | \-                   | disable               |
|                         | certificates in CMP mode.         |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | Option      | Description                                            |                                |
|                         | +=============+========================================================+                                |
|                         | | *enable*    | Enable saving extra certificates in CMP mode.          |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *disable*   | Disable saving extra certificates in CMP mode.         |                                |
|                         | +-------------+--------------------------------------------------------+                                |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| cn-allow-multi          | When searching for a matching     | option               | \-                   | enable                |
|                         | certificate, allow multiple CN    |                      |                      |                       |
|                         | fields in certificate subject     |                      |                      |                       |
|                         | name.                             |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | Option      | Description                                            |                                |
|                         | +=============+========================================================+                                |
|                         | | *disable*   | Does not allow multiple CN entries in certificate      |                                |
|                         | |             | matching.                                              |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *enable*    | Allow multiple CN entries in certificate matching.     |                                |
|                         | +-------------+--------------------------------------------------------+                                |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| cn-match                | When searching for a matching     | option               | \-                   | substring             |
|                         | certificate, control how to do CN |                      |                      |                       |
|                         | value matching with certificate   |                      |                      |                       |
|                         | subject name.                     |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | Option      | Description                                            |                                |
|                         | +=============+========================================================+                                |
|                         | | *substring* | Find a match if the name being searched for is a part  |                                |
|                         | |             | or the same as a certificate CN.                       |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *value*     | Find a match if the name being searched for is same as |                                |
|                         | |             | a certificate CN.                                      |                                |
|                         | +-------------+--------------------------------------------------------+                                |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| interface               | Specify outgoing interface to     | string               | Maximum length: 15   |                       |
|                         | reach server.                     |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| interface-select-method | Specify how to select outgoing    | option               | \-                   | auto                  |
|                         | interface to reach server.        |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | Option      | Description                                            |                                |
|                         | +=============+========================================================+                                |
|                         | | *auto*      | Set outgoing interface automatically.                  |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                                |
|                         | |             | rules.                                                 |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *specify*   | Set outgoing interface manually.                       |                                |
|                         | +-------------+--------------------------------------------------------+                                |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| ocsp-default-server     | Default OCSP server.              | string               | Maximum length: 35   |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| ocsp-option             | Specify whether the OCSP URL is   | option               | \-                   | server                |
|                         | from certificate or configured    |                      |                      |                       |
|                         | OCSP server.                      |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +---------------+--------------------------------------------------------+                              |
|                         | | Option        | Description                                            |                              |
|                         | +===============+========================================================+                              |
|                         | | *certificate* | Use URL from certificate.                              |                              |
|                         | +---------------+--------------------------------------------------------+                              |
|                         | | *server*      | Use URL from configured OCSP server.                   |                              |
|                         | +---------------+--------------------------------------------------------+                              |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| ocsp-status             | Enable/disable receiving          | option               | \-                   | disable               |
|                         | certificates using the OCSP.      |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | Option      | Description                                            |                                |
|                         | +=============+========================================================+                                |
|                         | | *enable*    | OCSP is performed if CRL is not checked.               |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *mandatory* | If cert is not revoked by CRL, OCSP is performed.      |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *disable*   | OCSP is not performed.                                 |                                |
|                         | +-------------+--------------------------------------------------------+                                |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| proxy                   | Proxy server FQDN or IP for       | string               | Maximum length: 127  |                       |
|                         | OCSP/CA queries during            |                      |                      |                       |
|                         | certificate verification.         |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| proxy-password          | Proxy server password.            | password             | Not Specified        |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| proxy-port              | Proxy server port.                | integer              | Minimum value: 1     | 8080                  |
|                         |                                   |                      | Maximum value: 65535 |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| proxy-username          | Proxy server user name.           | string               | Maximum length: 63   |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| source-ip               | Source IP address for dynamic AIA | string               | Maximum length: 63   |                       |
|                         | and OCSP queries.                 |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| ssl-min-proto-version   | Minimum supported protocol        | option               | \-                   | default               |
|                         | version for SSL/TLS connections.  |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | Option      | Description                                            |                                |
|                         | +=============+========================================================+                                |
|                         | | *default*   | Follow system global setting.                          |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *SSLv3*     | SSLv3.                                                 |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *TLSv1*     | TLSv1.                                                 |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *TLSv1-1*   | TLSv1.1.                                               |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *TLSv1-2*   | TLSv1.2.                                               |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *TLSv1-3*   | TLSv1.3.                                               |                                |
|                         | +-------------+--------------------------------------------------------+                                |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| strict-ocsp-check       | Enable/disable strict mode OCSP   | option               | \-                   | disable               |
|                         | checking.                         |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | Option      | Description                                            |                                |
|                         | +=============+========================================================+                                |
|                         | | *enable*    | Enable strict mode OCSP checking.                      |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *disable*   | Disable strict mode OCSP checking.                     |                                |
|                         | +-------------+--------------------------------------------------------+                                |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| subject-match           | When searching for a matching     | option               | \-                   | substring             |
|                         | certificate, control how to do    |                      |                      |                       |
|                         | RDN value matching with           |                      |                      |                       |
|                         | certificate subject name.         |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | Option      | Description                                            |                                |
|                         | +=============+========================================================+                                |
|                         | | *substring* | Find a match if the name being searched for is a part  |                                |
|                         | |             | or the same as a certificate subject RDN.              |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *value*     | Find a match if the name being searched for is same as |                                |
|                         | |             | a certificate subject RDN.                             |                                |
|                         | +-------------+--------------------------------------------------------+                                |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| subject-set             | When searching for a matching     | option               | \-                   | subset                |
|                         | certificate, control how to do    |                      |                      |                       |
|                         | RDN set matching with certificate |                      |                      |                       |
|                         | subject name.                     |                      |                      |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | Option      | Description                                            |                                |
|                         | +=============+========================================================+                                |
|                         | | *subset*    | Find a match if the name being searched for is a       |                                |
|                         | |             | subset of a certificate subject.                       |                                |
|                         | +-------------+--------------------------------------------------------+                                |
|                         | | *superset*  | Find a match if the name being searched for is a       |                                |
|                         | |             | superset of a certificate subject.                     |                                |
|                         | +-------------+--------------------------------------------------------+                                |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+
| vrf-select              | VRF ID used for connection to     | integer              | Minimum value: 0     | 0                     |
|                         | server.                           |                      | Maximum value: 511   |                       |
+-------------------------+-----------------------------------+----------------------+----------------------+-----------------------+

