# config user external-identity-provider

Configure external identity provider.

## Syntax

```
config user external-identity-provider
    Description: Configure external identity provider.
    edit <name>
        set group-attr-name {string}
        set interface {string}
        set interface-select-method [auto|sdwan|...]
        set port {integer}
        set server-identity-check [disable|enable]
        set source-ip {string}
        set timeout {integer}
        set type {option}
        set url {string}
        set user-attr-name {string}
        set version [v1.0|beta]
        set vrf-select {integer}
    next
end
```

## Parameters

+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                           | Type               | Size               | Default            |
+=========================+=======================================+====================+====================+====================+
| group-attr-name         | Group attribute name in               | string             | Maximum length: 63 | id                 |
|                         | authentication query.                 |                    |                    |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| interface               | Specify outgoing interface to reach   | string             | Maximum length: 15 |                    |
|                         | server.                               |                    |                    |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| interface-select-method | Specify how to select outgoing        | option             | \-                 | auto               |
|                         | interface to reach server.            |                    |                    |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                             |
|                         | | Option      | Description                                            |                             |
|                         | +=============+========================================================+                             |
|                         | | *auto*      | Set outgoing interface automatically.                  |                             |
|                         | +-------------+--------------------------------------------------------+                             |
|                         | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                             |
|                         | |             | rules.                                                 |                             |
|                         | +-------------+--------------------------------------------------------+                             |
|                         | | *specify*   | Set outgoing interface manually.                       |                             |
|                         | +-------------+--------------------------------------------------------+                             |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| name                    | External identity provider name.      | string             | Maximum length: 35 |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| port                    | External identity provider service    | integer            | Minimum value: 0   | 0                  |
|                         | port number (0 to use default).       |                    | Maximum value:     |                    |
|                         |                                       |                    | 65535              |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| server-identity-check   | Enable/disable server\'s identity     | option             | \-                 | enable             |
|                         | check against its certificate and     |                    |                    |                    |
|                         | subject alternative name(s).          |                    |                    |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                             |
|                         | | Option      | Description                                            |                             |
|                         | +=============+========================================================+                             |
|                         | | *disable*   | Do not check server\'s identity against its            |                             |
|                         | |             | certificate and subject alternative name(s).           |                             |
|                         | +-------------+--------------------------------------------------------+                             |
|                         | | *enable*    | Check server\'s identity against its certificate and   |                             |
|                         | |             | subject alternative name(s).                           |                             |
|                         | +-------------+--------------------------------------------------------+                             |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| source-ip               | Use this IPv4/v6 address to connect   | string             | Maximum length: 63 |                    |
|                         | to the external identity provider.    |                    |                    |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| timeout                 | Connection timeout value in seconds   | integer            | Minimum value: 1   | 5                  |
|                         | (default=5).                          |                    | Maximum value: 60  |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| type                    | External identity provider type.      | option             | \-                 |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                             |
|                         | | Option      | Description                                            |                             |
|                         | +=============+========================================================+                             |
|                         | | *ms-graph*  | Microsoft Graph server.                                |                             |
|                         | +-------------+--------------------------------------------------------+                             |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| url                     | External identity provider URL (e.g.  | string             | Maximum length:    |                    |
|                         | \"https://example.com:8080/api/v1\"). |                    | 127                |                    |
|                         | Read-only.                            |                    |                    |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| user-attr-name          | User attribute name in authentication | string             | Maximum length: 63 | userPrincipalName  |
|                         | query.                                |                    |                    |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| version                 | External identity API version.        | option             | \-                 |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                             |
|                         | | Option      | Description                                            |                             |
|                         | +=============+========================================================+                             |
|                         | | *v1.0*      | MS Graph REST API v1.0.                                |                             |
|                         | +-------------+--------------------------------------------------------+                             |
|                         | | *beta*      | MS Graph REST API beta (debug build only).             |                             |
|                         | +-------------+--------------------------------------------------------+                             |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+
| vrf-select              | VRF ID used for connection to server. | integer            | Minimum value: 0   | 0                  |
|                         |                                       |                    | Maximum value: 511 |                    |
+-------------------------+---------------------------------------+--------------------+--------------------+--------------------+

