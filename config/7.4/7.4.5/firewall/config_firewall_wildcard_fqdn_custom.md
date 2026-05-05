# config firewall wildcard-fqdn custom

Config global/VDOM Wildcard FQDN address.

## Syntax

```
config firewall wildcard-fqdn custom
    Description: Config global/VDOM Wildcard FQDN address.
    edit <name>
        set color {integer}
        set comment {var-string}
        set uuid {uuid}
        set wildcard-fqdn {string}
    next
end
```

## Parameters

+---------------+-----------------------------------+------------+-----------+--------------------------------------+
| Parameter     | Description                       | Type       | Size      | Default                              |
+===============+===================================+============+===========+======================================+
| color         | GUI icon color.                   | integer    | Minimum   | 0                                    |
|               |                                   |            | value: 0  |                                      |
|               |                                   |            | Maximum   |                                      |
|               |                                   |            | value: 32 |                                      |
+---------------+-----------------------------------+------------+-----------+--------------------------------------+
| comment       | Comment.                          | var-string | Maximum   |                                      |
|               |                                   |            | length:   |                                      |
|               |                                   |            | 255       |                                      |
+---------------+-----------------------------------+------------+-----------+--------------------------------------+
| name          | Address name.                     | string     | Maximum   |                                      |
|               |                                   |            | length:   |                                      |
|               |                                   |            | 79        |                                      |
+---------------+-----------------------------------+------------+-----------+--------------------------------------+
| uuid          | Universally Unique Identifier     | uuid       | Not       | 00000000-0000-0000-0000-000000000000 |
|               | (UUID; automatically assigned but |            | Specified |                                      |
|               | can be manually reset).           |            |           |                                      |
+---------------+-----------------------------------+------------+-----------+--------------------------------------+
| wildcard-fqdn | Wildcard FQDN.                    | string     | Maximum   |                                      |
|               |                                   |            | length:   |                                      |
|               |                                   |            | 255       |                                      |
+---------------+-----------------------------------+------------+-----------+--------------------------------------+

