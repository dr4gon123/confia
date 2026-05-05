# config system api-user

Configure API users.

## Syntax

```
config system api-user
    Description: Configure API users.
    edit <name>
        set accprofile {string}
        set api-key {password-2}
        set comments {var-string}
        set cors-allow-origin {string}
        set peer-auth [enable|disable]
        set peer-group {string}
        set schedule {string}
        config trusthost
            Description: Trusthost.
            edit <id>
                set ipv4-trusthost {ipv4-classnet}
                set ipv6-trusthost {ipv6-prefix}
                set type [ipv4-trusthost|ipv6-trusthost]
            next
        end
        set vdom <name1>, <name2>, ...
    next
end
```

## Parameters

+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter         | Description                       | Type               | Size               | Default            |
+===================+===================================+====================+====================+====================+
| accprofile        | Admin user access profile.        | string             | Maximum length: 35 |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| api-key           | Admin user password.              | password-2         | Not Specified      |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| comments          | Comment.                          | var-string         | Maximum length:    |                    |
|                   |                                   |                    | 255                |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| cors-allow-origin | Value for                         | string             | Maximum length:    |                    |
|                   | Access-Control-Allow-Origin on    |                    | 269                |                    |
|                   | API responses. Avoid using \'\*\' |                    |                    |                    |
|                   | if possible.                      |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name              | User name.                        | string             | Maximum length: 35 |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| peer-auth         | Enable/disable peer               | option             | \-                 | disable            |
|                   | authentication.                   |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *enable*    | Enable peer.                                           |                         |
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | *disable*   | Disable peer.                                          |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| peer-group        | Peer group name.                  | string             | Maximum length: 35 |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| schedule          | Schedule name.                    | string             | Maximum length: 35 |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vdom `<name>`     | Virtual domains.                  | string             | Maximum length: 79 |                    |
|                   |                                   |                    |                    |                    |
|                   | Virtual domain name.              |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+

