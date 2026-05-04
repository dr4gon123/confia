# config user peer

Configure peer users.

## Syntax

```
config user peer
    Description: Configure peer users.
    edit <name>
        set ca {string}
        set checkemail {string}
        set checkhost {string}
        set checkip {user}
        set cn {string}
        set cn-type [string|email|...]
        set mandatory-ca-verify [enable|disable]
        set mfa-mode [none|password|...]
        set mfa-password {password}
        set mfa-server {string}
        set mfa-username {string}
        set ocsp-override-server {string}
        set passwd {password}
        set subject {string}
        set two-factor [enable|disable]
    next
end
```

## Parameters

+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter            | Description                       | Type                   | Size                   | Default                |
+======================+===================================+========================+========================+========================+
| ca                   | Name of the CA certificate.       | string                 | Maximum length: 127    |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| checkemail \*        | Peer certificate email address.   | string                 | Maximum length: 127    |                        |
|                      | Check passes if the certificate   |                        |                        |                        |
|                      | SAN matches the specified email   |                        |                        |                        |
|                      | address. If the certificate has   |                        |                        |                        |
|                      | no email-type SAN, the            |                        |                        |                        |
|                      | emailAddress DN in the Subject is |                        |                        |                        |
|                      | checked instead.                  |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| checkhost \*         | Peer certificate hostname. Check  | string                 | Maximum length: 255    |                        |
|                      | passes if the certificate SAN     |                        |                        |                        |
|                      | matches the specified hostname,   |                        |                        |                        |
|                      | and the client IP matches the     |                        |                        |                        |
|                      | hostname\'s resolved IP. If the   |                        |                        |                        |
|                      | certificate has no DNS-type SAN,  |                        |                        |                        |
|                      | CN is checked instead.            |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| checkip \*           | Peer certificate IP address.      | user                   | Not Specified          |                        |
|                      | Check passes if the certificate   |                        |                        |                        |
|                      | SAN and the client IP both match  |                        |                        |                        |
|                      | the specified IP.                 |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| cn                   | Peer certificate common name.     | string                 | Maximum length: 255    |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| cn-type \*           | Peer certificate common name      | option                 | \-                     | string                 |
|                      | type.                             |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                      | +-------------+--------------------------------------------------------+                                     |
|                      | | Option      | Description                                            |                                     |
|                      | +=============+========================================================+                                     |
|                      | | *string*    | Normal string.                                         |                                     |
|                      | +-------------+--------------------------------------------------------+                                     |
|                      | | *email*     | Email address.                                         |                                     |
|                      | +-------------+--------------------------------------------------------+                                     |
|                      | | *FQDN*      | Fully Qualified Domain Name.                           |                                     |
|                      | +-------------+--------------------------------------------------------+                                     |
|                      | | *ipv4*      | IPv4 address.                                          |                                     |
|                      | +-------------+--------------------------------------------------------+                                     |
|                      | | *ipv6*      | IPv6 address.                                          |                                     |
|                      | +-------------+--------------------------------------------------------+                                     |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| mandatory-ca-verify  | Determine what happens to the     | option                 | \-                     | enable                 |
|                      | peer if the CA certificate is not |                        |                        |                        |
|                      | installed. Disable to             |                        |                        |                        |
|                      | automatically consider the peer   |                        |                        |                        |
|                      | certificate as valid.             |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                      | +-------------+--------------------------------------------------------+                                     |
|                      | | Option      | Description                                            |                                     |
|                      | +=============+========================================================+                                     |
|                      | | *enable*    | Enable setting.                                        |                                     |
|                      | +-------------+--------------------------------------------------------+                                     |
|                      | | *disable*   | Disable setting.                                       |                                     |
|                      | +-------------+--------------------------------------------------------+                                     |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| mfa-mode             | MFA mode for remote peer          | option                 | \-                     | none                   |
|                      | authentication/authorization.     |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                      | +--------------------+--------------------------------------------------------+                              |
|                      | | Option             | Description                                            |                              |
|                      | +====================+========================================================+                              |
|                      | | *none*             | None.                                                  |                              |
|                      | +--------------------+--------------------------------------------------------+                              |
|                      | | *password*         | Specified username/password.                           |                              |
|                      | +--------------------+--------------------------------------------------------+                              |
|                      | | *subject-identity* | Subject identity extracted from certificate.           |                              |
|                      | +--------------------+--------------------------------------------------------+                              |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| mfa-password         | Unified password for remote       | password               | Not Specified          |                        |
|                      | authentication. This field may be |                        |                        |                        |
|                      | left empty when RADIUS            |                        |                        |                        |
|                      | authentication is used, in which  |                        |                        |                        |
|                      | case the FortiGate will use the   |                        |                        |                        |
|                      | RADIUS username as a password.    |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| mfa-server           | Name of a remote authenticator.   | string                 | Maximum length: 35     |                        |
|                      | Performs client access right      |                        |                        |                        |
|                      | check.                            |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| mfa-username         | Unified username for remote       | string                 | Maximum length: 35     |                        |
|                      | authentication.                   |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| name                 | Peer name.                        | string                 | Maximum length: 35     |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ocsp-override-server | Online Certificate Status         | string                 | Maximum length: 35     |                        |
|                      | Protocol (OCSP) server for        |                        |                        |                        |
|                      | certificate retrieval.            |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| passwd               | Peer\'s password used for         | password               | Not Specified          |                        |
|                      | two-factor authentication.        |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| subject              | Peer certificate name             | string                 | Maximum length: 255    |                        |
|                      | constraints.                      |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| two-factor           | Enable/disable two-factor         | option                 | \-                     | disable                |
|                      | authentication, applying          |                        |                        |                        |
|                      | certificate and password-based    |                        |                        |                        |
|                      | authentication.                   |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                      | +-------------+--------------------------------------------------------+                                     |
|                      | | Option      | Description                                            |                                     |
|                      | +=============+========================================================+                                     |
|                      | | *enable*    | Enable 2-factor authentication.                        |                                     |
|                      | +-------------+--------------------------------------------------------+                                     |
|                      | | *disable*   | Disable 2-factor authentication.                       |                                     |
|                      | +-------------+--------------------------------------------------------+                                     |
+----------------------+--------------------------------------------------------------------------------------------------------------+

