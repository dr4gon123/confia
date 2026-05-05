# config authentication setting

Configure authentication setting.

## Syntax

```
config authentication setting
    Description: Configure authentication setting.
    set active-auth-scheme {string}
    set auth-https [enable|disable]
    set captive-portal {string}
    set captive-portal-ip {ipv4-address-any}
    set captive-portal-ip6 {ipv6-address}
    set captive-portal-port {integer}
    set captive-portal-ssl-port {integer}
    set captive-portal-type [fqdn|ip]
    set captive-portal6 {string}
    set cert-auth [enable|disable]
    set cert-captive-portal {string}
    set cert-captive-portal-ip {ipv4-address-any}
    set cert-captive-portal-port {integer}
    set cookie-max-age {integer}
    set cookie-refresh-div {integer}
    set dev-range <name1>, <name2>, ...
    set ip-auth-cookie [enable|disable]
    set persistent-cookie [enable|disable]
    set sso-auth-scheme {string}
    set update-time {user}
    set user-cert-ca <name1>, <name2>, ...
end
```

## Parameters

+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| Parameter                | Description                        | Type               | Size               | Default            |
+==========================+====================================+====================+====================+====================+
| active-auth-scheme       | Active authentication method       | string             | Maximum length: 35 |                    |
|                          | (scheme name).                     |                    |                    |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| auth-https               | Enable/disable redirecting HTTP    | option             | \-                 | enable             |
|                          | user authentication to HTTPS.      |                    |                    |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                          |
|                          | | Option      | Description                                            |                          |
|                          | +=============+========================================================+                          |
|                          | | *enable*    | Enable setting.                                        |                          |
|                          | +-------------+--------------------------------------------------------+                          |
|                          | | *disable*   | Disable setting.                                       |                          |
|                          | +-------------+--------------------------------------------------------+                          |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| captive-portal           | Captive portal host name.          | string             | Maximum length:    |                    |
|                          |                                    |                    | 255                |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| captive-portal-ip        | Captive portal IP address.         | ipv4-address-any   | Not Specified      | 0.0.0.0            |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| captive-portal-ip6       | Captive portal IPv6 address.       | ipv6-address       | Not Specified      | ::                 |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| captive-portal-port      | Captive portal port number (1 -    | integer            | Minimum value: 1   | 7830               |
|                          | 65535, default = 7830).            |                    | Maximum value:     |                    |
|                          |                                    |                    | 65535              |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| captive-portal-ssl-port  | Captive portal SSL port number     | integer            | Minimum value: 1   | 7831               |
|                          | (1 - 65535, default = 7831).       |                    | Maximum value:     |                    |
|                          |                                    |                    | 65535              |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| captive-portal-type      | Captive portal type.               | option             | \-                 | fqdn               |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                          |
|                          | | Option      | Description                                            |                          |
|                          | +=============+========================================================+                          |
|                          | | *fqdn*      | Use FQDN for captive portal.                           |                          |
|                          | +-------------+--------------------------------------------------------+                          |
|                          | | *ip*        | Use an IP address for captive portal.                  |                          |
|                          | +-------------+--------------------------------------------------------+                          |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| captive-portal6          | IPv6 captive portal host name.     | string             | Maximum length:    |                    |
|                          |                                    |                    | 255                |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| cert-auth                | Enable/disable redirecting         | option             | \-                 | disable            |
|                          | certificate authentication to      |                    |                    |                    |
|                          | HTTPS portal.                      |                    |                    |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                          |
|                          | | Option      | Description                                            |                          |
|                          | +=============+========================================================+                          |
|                          | | *enable*    | Enable setting.                                        |                          |
|                          | +-------------+--------------------------------------------------------+                          |
|                          | | *disable*   | Disable setting.                                       |                          |
|                          | +-------------+--------------------------------------------------------+                          |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| cert-captive-portal      | Certificate captive portal host    | string             | Maximum length:    |                    |
|                          | name.                              |                    | 255                |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| cert-captive-portal-ip   | Certificate captive portal IP      | ipv4-address-any   | Not Specified      | 0.0.0.0            |
|                          | address.                           |                    |                    |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| cert-captive-portal-port | Certificate captive portal port    | integer            | Minimum value: 1   | 7832               |
|                          | number (1 - 65535, default =       |                    | Maximum value:     |                    |
|                          | 7832).                             |                    | 65535              |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| cookie-max-age           | Persistent web portal cookie       | integer            | Minimum value: 30  | 480                |
|                          | maximum age in minutes (30 - 10080 |                    | Maximum value:     |                    |
|                          | (1 week), default = 480 (8         |                    | 10080              |                    |
|                          | hours)).                           |                    |                    |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| cookie-refresh-div       | Refresh rate divider of persistent | integer            | Minimum value: 2   | 2                  |
|                          | web portal cookie (default = 2).   |                    | Maximum value: 4   |                    |
|                          | Refresh value =                    |                    |                    |                    |
|                          | cookie-max-age/cookie-refresh-div. |                    |                    |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| dev-range `<name>`       | Address range for the IP based     | string             | Maximum length: 79 |                    |
|                          | device query.                      |                    |                    |                    |
|                          |                                    |                    |                    |                    |
|                          | Address name.                      |                    |                    |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| ip-auth-cookie           | Enable/disable persistent cookie   | option             | \-                 | disable            |
|                          | on IP based web portal             |                    |                    |                    |
|                          | authentication (default =          |                    |                    |                    |
|                          | disable).                          |                    |                    |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                          |
|                          | | Option      | Description                                            |                          |
|                          | +=============+========================================================+                          |
|                          | | *enable*    | Enable persistent cookie for IP-based authentication.  |                          |
|                          | +-------------+--------------------------------------------------------+                          |
|                          | | *disable*   | Disable persistent cookie for IP-based authentication. |                          |
|                          | +-------------+--------------------------------------------------------+                          |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| persistent-cookie        | Enable/disable persistent cookie   | option             | \-                 | enable             |
|                          | on web portal authentication       |                    |                    |                    |
|                          | (default = enable).                |                    |                    |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                          |
|                          | | Option      | Description                                            |                          |
|                          | +=============+========================================================+                          |
|                          | | *enable*    | Enable persistent cookie.                              |                          |
|                          | +-------------+--------------------------------------------------------+                          |
|                          | | *disable*   | Disable persistent cookie.                             |                          |
|                          | +-------------+--------------------------------------------------------+                          |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| sso-auth-scheme          | Single-Sign-On authentication      | string             | Maximum length: 35 |                    |
|                          | method (scheme name).              |                    |                    |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| update-time              | Time of the last update.           | user               | Not Specified      |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+
| user-cert-ca `<name>`    | CA certificate used for client     | string             | Maximum length: 79 |                    |
|                          | certificate verification.          |                    |                    |                    |
|                          |                                    |                    |                    |                    |
|                          | CA certificate list.               |                    |                    |                    |
+--------------------------+------------------------------------+--------------------+--------------------+--------------------+

