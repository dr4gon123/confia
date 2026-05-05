# config user krb-keytab

Configure Kerberos keytab entries.

## Syntax

```
config user krb-keytab
    Description: Configure Kerberos keytab entries.
    edit <name>
        set keytab {string}
        set ldap-server <name1>, <name2>, ...
        set pac-data [enable|disable]
        set principal {string}
    next
end
```

## Parameters

+-------------+-------------------------------------+--------------------+--------------------+--------------------+
| Parameter   | Description                         | Type               | Size               | Default            |
+=============+=====================================+====================+====================+====================+
| keytab      | Base64 coded keytab file containing | string             | Maximum length:    |                    |
|             | a pre-shared key.                   |                    | 8191               |                    |
+-------------+-------------------------------------+--------------------+--------------------+--------------------+
| ldap-server | LDAP server name(s).                | string             | Maximum length: 79 |                    |
| `<name>`    |                                     |                    |                    |                    |
|             | LDAP server name.                   |                    |                    |                    |
+-------------+-------------------------------------+--------------------+--------------------+--------------------+
| name        | Kerberos keytab entry name.         | string             | Maximum length: 35 |                    |
+-------------+-------------------------------------+--------------------+--------------------+--------------------+
| pac-data    | Enable/disable parsing PAC data in  | option             | \-                 | enable             |
|             | the ticket.                         |                    |                    |                    |
+-------------+-------------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                           |
|             | | Option      | Description                                            |                           |
|             | +=============+========================================================+                           |
|             | | *enable*    | Enable parsing PAC data in the ticket.                 |                           |
|             | +-------------+--------------------------------------------------------+                           |
|             | | *disable*   | Disable parsing PAC data in the ticket.                |                           |
|             | +-------------+--------------------------------------------------------+                           |
+-------------+-------------------------------------+--------------------+--------------------+--------------------+
| principal   | Kerberos service principal. For     | string             | Maximum length:    |                    |
|             | example,                            |                    | 511                |                    |
|             | HTTP/myfgt.example.com@example.com. |                    |                    |                    |
+-------------+-------------------------------------+--------------------+--------------------+--------------------+

