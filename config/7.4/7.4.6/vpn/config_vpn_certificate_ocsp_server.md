# config vpn certificate ocsp-server

OCSP server configuration.

## Syntax

```
config vpn certificate ocsp-server
    Description: OCSP server configuration.
    edit <name>
        set cert {string}
        set secondary-cert {string}
        set secondary-url {string}
        set source-ip {string}
        set unavail-action [revoke|ignore]
        set url {string}
    next
end
```

## Parameters

+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter      | Description                       | Type               | Size               | Default            |
+================+===================================+====================+====================+====================+
| cert           | OCSP server certificate.          | string             | Maximum length:    |                    |
|                |                                   |                    | 127                |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| name           | OCSP server entry name.           | string             | Maximum length: 35 |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| secondary-cert | Secondary OCSP server             | string             | Maximum length:    |                    |
|                | certificate.                      |                    | 127                |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| secondary-url  | Secondary OCSP server URL.        | string             | Maximum length:    |                    |
|                |                                   |                    | 127                |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip      | Source IP address for dynamic AIA | string             | Maximum length: 63 |                    |
|                | and OCSP queries.                 |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| unavail-action | Action when server is unavailable | option             | \-                 | revoke             |
|                | (revoke the certificate or ignore |                    |                    |                    |
|                | the result of the check).         |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                | +-------------+--------------------------------------------------------+                         |
|                | | Option      | Description                                            |                         |
|                | +=============+========================================================+                         |
|                | | *revoke*    | Revoke certificate if server is unavailable.           |                         |
|                | +-------------+--------------------------------------------------------+                         |
|                | | *ignore*    | Ignore OCSP check if server is unavailable.            |                         |
|                | +-------------+--------------------------------------------------------+                         |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| url            | OCSP server URL.                  | string             | Maximum length:    |                    |
|                |                                   |                    | 127                |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+

