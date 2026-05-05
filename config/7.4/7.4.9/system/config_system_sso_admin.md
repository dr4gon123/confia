# config system sso-admin

Configure SSO admin users.

## Syntax

```
config system sso-admin
    Description: Configure SSO admin users.
    edit <name>
        set accprofile {string}
        set vdom <name1>, <name2>, ...
    next
end
```

## Parameters

+------------+-----------------------------------+--------+---------+---------+
| Parameter  | Description                       | Type   | Size    | Default |
+============+===================================+========+=========+=========+
| accprofile | SSO admin user access profile.    | string | Maximum |         |
|            |                                   |        | length: |         |
|            |                                   |        | 35      |         |
+------------+-----------------------------------+--------+---------+---------+
| name       | SSO admin name.                   | string | Maximum |         |
|            |                                   |        | length: |         |
|            |                                   |        | 64      |         |
+------------+-----------------------------------+--------+---------+---------+
| vdom       | Virtual domain(s) that the        | string | Maximum |         |
| `<name>`   | administrator can access.         |        | length: |         |
|            |                                   |        | 79      |         |
|            | Virtual domain name.              |        |         |         |
+------------+-----------------------------------+--------+---------+---------+

