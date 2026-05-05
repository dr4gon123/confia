# config system sso-fortigate-cloud-admin

Configure FortiCloud SSO admin users.

## Syntax

```
config system sso-fortigate-cloud-admin
    Description: Configure FortiCloud SSO admin users.
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
| accprofile | FortiCloud SSO admin user access  | string | Maximum |         |
|            | profile. Permission is set to     |        | length: |         |
|            | read-only without a FortiGate     |        | 35      |         |
|            | Cloud Central Management license. |        |         |         |
+------------+-----------------------------------+--------+---------+---------+
| name       | FortiCloud SSO admin name.        | string | Maximum |         |
|            |                                   |        | length: |         |
|            |                                   |        | 64      |         |
+------------+-----------------------------------+--------+---------+---------+
| vdom       | Virtual domain(s) that the        | string | Maximum |         |
| `<name>`   | administrator can access.         |        | length: |         |
|            |                                   |        | 79      |         |
|            | Virtual domain name.              |        |         |         |
+------------+-----------------------------------+--------+---------+---------+

