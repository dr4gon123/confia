# config firewall ssh setting

SSH proxy settings.

## Syntax

```
config firewall ssh setting
    Description: SSH proxy settings.
    set caname {string}
    set host-trusted-checking [enable|disable]
    set hostkey-dsa1024 {string}
    set hostkey-ecdsa256 {string}
    set hostkey-ecdsa384 {string}
    set hostkey-ecdsa521 {string}
    set hostkey-ed25519 {string}
    set hostkey-rsa2048 {string}
    set untrusted-caname {string}
end
```

## Parameters

+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter             | Description                       | Type               | Size               | Default            |
+=======================+===================================+====================+====================+====================+
| caname                | CA certificate used by SSH        | string             | Maximum length: 35 |                    |
|                       | Inspection.                       |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| host-trusted-checking | Enable/disable host trusted       | option             | \-                 | enable             |
|                       | checking.                         |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | Option      | Description                                            |                         |
|                       | +=============+========================================================+                         |
|                       | | *enable*    | Enable host key trusted checking.                      |                         |
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | *disable*   | Disable host key trusted checking.                     |                         |
|                       | +-------------+--------------------------------------------------------+                         |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| hostkey-dsa1024       | DSA certificate used by SSH       | string             | Maximum length: 35 |                    |
|                       | proxy.                            |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| hostkey-ecdsa256      | ECDSA nid256 certificate used by  | string             | Maximum length: 35 |                    |
|                       | SSH proxy.                        |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| hostkey-ecdsa384      | ECDSA nid384 certificate used by  | string             | Maximum length: 35 |                    |
|                       | SSH proxy.                        |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| hostkey-ecdsa521      | ECDSA nid384 certificate used by  | string             | Maximum length: 35 |                    |
|                       | SSH proxy.                        |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| hostkey-ed25519       | ED25519 hostkey used by SSH       | string             | Maximum length: 35 |                    |
|                       | proxy.                            |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| hostkey-rsa2048       | RSA certificate used by SSH       | string             | Maximum length: 35 |                    |
|                       | proxy.                            |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| untrusted-caname      | Untrusted CA certificate used by  | string             | Maximum length: 35 |                    |
|                       | SSH Inspection.                   |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+

