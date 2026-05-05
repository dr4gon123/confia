# config user tacacs+

Configure TACACS+ server entries.

## Syntax

```
config user tacacs+
    Description: Configure TACACS+ server entries.
    edit <name>
        set authen-type [mschap|chap|...]
        set authorization [enable|disable]
        set interface {string}
        set interface-select-method [auto|sdwan|...]
        set key {password}
        set port {integer}
        set secondary-key {password}
        set secondary-server {string}
        set server {string}
        set source-ip {string}
        set status-ttl {integer}
        set tertiary-key {password}
        set tertiary-server {string}
    next
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
| authen-type             | Allowed authentication            | option             | \-                 | auto               |
|                         | protocols/methods.                |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *mschap*    | MSCHAP.                                                |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *chap*      | CHAP.                                                  |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *pap*       | PAP.                                                   |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *ascii*     | ASCII.                                                 |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *auto*      | Use PAP, MSCHAP, and CHAP (in that order).             |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| authorization           | Enable/disable TACACS+            | option             | \-                 | disable            |
|                         | authorization.                    |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable TACACS+ authorization.                          |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable TACACS+ authorization.                         |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface               | Specify outgoing interface to     | string             | Maximum length: 15 |                    |
|                         | reach server.                     |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface-select-method | Specify how to select outgoing    | option             | \-                 | auto               |
|                         | interface to reach server.        |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *auto*      | Set outgoing interface automatically.                  |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                         |
|                         | |             | rules.                                                 |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *specify*   | Set outgoing interface manually.                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| key                     | Key to access the primary server. | password           | Not Specified      |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                    | TACACS+ server entry name.        | string             | Maximum length: 35 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| port                    | Port number of the TACACS+        | integer            | Minimum value: 1   | 49                 |
|                         | server.                           |                    | Maximum value:     |                    |
|                         |                                   |                    | 65535              |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| secondary-key           | Key to access the secondary       | password           | Not Specified      |                    |
|                         | server.                           |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| secondary-server        | Secondary TACACS+ server CN       | string             | Maximum length: 63 |                    |
|                         | domain name or IP address.        |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| server                  | Primary TACACS+ server CN domain  | string             | Maximum length: 63 |                    |
|                         | name or IP address.               |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip               | Source IP address for             | string             | Maximum length: 63 |                    |
|                         | communications to TACACS+ server. |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status-ttl              | Time for which server             | integer            | Minimum value: 0   | 300                |
|                         | reachability is cached so that    |                    | Maximum value: 600 |                    |
|                         | when a server is unreachable, it  |                    |                    |                    |
|                         | will not be retried for at least  |                    |                    |                    |
|                         | this period of time (0 = cache    |                    |                    |                    |
|                         | disabled, default = 300).         |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| tertiary-key            | Key to access the tertiary        | password           | Not Specified      |                    |
|                         | server.                           |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| tertiary-server         | Tertiary TACACS+ server CN domain | string             | Maximum length: 63 |                    |
|                         | name or IP address.               |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+

