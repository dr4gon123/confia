# config firewall auth-portal

Configure firewall authentication portals.

## Syntax

```
config firewall auth-portal
    Description: Configure firewall authentication portals.
    set groups <name1>, <name2>, ...
    set identity-based-route {string}
    set portal-addr {string}
    set portal-addr6 {string}
    set proxy-auth [enable|disable]
end
```

## Parameters

+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter            | Description                       | Type               | Size               | Default            |
+======================+===================================+====================+====================+====================+
| groups `<name>`      | Firewall user groups permitted to | string             | Maximum length: 79 |                    |
|                      | authenticate through this portal. |                    |                    |                    |
|                      | Separate group names with spaces. |                    |                    |                    |
|                      |                                   |                    |                    |                    |
|                      | Group name.                       |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| identity-based-route | Name of the identity-based route  | string             | Maximum length: 35 |                    |
|                      | that applies to this portal.      |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| portal-addr          | Address (or FQDN) of the          | string             | Maximum length: 63 |                    |
|                      | authentication portal.            |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| portal-addr6         | IPv6 address (or FQDN) of         | string             | Maximum length: 63 |                    |
|                      | authentication portal.            |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| proxy-auth           | Enable/disable authentication by  | option             | \-                 | disable            |
|                      | proxy daemon.                     |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | Option      | Description                                            |                         |
|                      | +=============+========================================================+                         |
|                      | | *enable*    | Users are authenticated by proxy daemon.               |                         |
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | *disable*   | Users are not authenticated by proxy daemon.           |                         |
|                      | +-------------+--------------------------------------------------------+                         |
+----------------------+--------------------------------------------------------------------------------------------------+

