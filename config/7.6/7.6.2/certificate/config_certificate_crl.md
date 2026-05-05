# config certificate crl

Certificate Revocation List as a PEM file.

## Syntax

```
config certificate crl
    Description: Certificate Revocation List as a PEM file.
    edit <name>
        set crl {user}
        set http-url {string}
        set ldap-password {password}
        set ldap-server {string}
        set ldap-username {string}
        set range [global|vdom]
        set scep-cert {string}
        set scep-url {string}
        set source [factory|user|...]
        set source-ip {ipv4-address}
        set update-interval {integer}
        set update-vdom {string}
    next
end
```

## Parameters

+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter       | Description                       | Type               | Size               | Default            |
+=================+===================================+====================+====================+====================+
| crl             | Certificate Revocation List as a  | user               | Not Specified      |                    |
|                 | PEM file.                         |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| http-url        | HTTP server URL for CRL           | string             | Maximum length:    |                    |
|                 | auto-update.                      |                    | 255                |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ldap-password   | LDAP server user password.        | password           | Not Specified      |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ldap-server     | LDAP server name for CRL          | string             | Maximum length: 35 |                    |
|                 | auto-update.                      |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ldap-username   | LDAP server user name.            | string             | Maximum length: 63 |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| name            | Name.                             | string             | Maximum length: 35 |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| range           | Either global or VDOM IP address  | option             | \-                 | global             |
|                 | range for the certificate.        |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *global*    | Global range.                                          |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *vdom*      | VDOM IP address range.                                 |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| scep-cert       | Local certificate for SCEP        | string             | Maximum length: 35 | Fortinet_CA_SSL    |
|                 | communication for CRL             |                    |                    |                    |
|                 | auto-update.                      |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| scep-url        | SCEP server URL for CRL           | string             | Maximum length:    |                    |
|                 | auto-update.                      |                    | 255                |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| source          | Certificate source type.          | option             | \-                 | user               |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *factory*   | Factory installed certificate.                         |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *user*      | User generated certificate.                            |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *bundle*    | Bundle file certificate.                               |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip       | Source IP address for             | ipv4-address       | Not Specified      | 0.0.0.0            |
|                 | communications to a HTTP or SCEP  |                    |                    |                    |
|                 | CA server.                        |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| update-interval | Time in seconds before the        | integer            | Minimum value: 0   | 0                  |
|                 | FortiGate checks for an updated   |                    | Maximum value:     |                    |
|                 | CRL. Set to 0 to update only when |                    | 4294967295         |                    |
|                 | it expires.                       |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| update-vdom     | VDOM for CRL update.              | string             | Maximum length: 31 | root               |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+

