# config system sflow

Configure sFlow.

## Syntax

```
config system sflow
    Description: Configure sFlow.
    config collectors
        Description: sFlow collectors.
        edit <id>
            set collector-ip {ipv4-address}
            set collector-port {integer}
            set interface {string}
            set interface-select-method [auto|sdwan|...]
            set source-ip {ipv4-address}
        next
    end
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
| collector-ip            | IP addresses of the sFlow         | ipv4-address       | Not Specified      | 0.0.0.0            |
|                         | collectors that sFlow agents      |                    |                    |                    |
|                         | added to interfaces in this VDOM  |                    |                    |                    |
|                         | send sFlow datagrams to.          |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| collector-port          | UDP port number used for sending  | integer            | Minimum value: 0   | 6343               |
|                         | sFlow datagrams (configure only   |                    | Maximum value:     |                    |
|                         | if required by your sFlow         |                    | 65535              |                    |
|                         | collector or your network         |                    |                    |                    |
|                         | configuration) (0 - 65535,        |                    |                    |                    |
|                         | default = 6343).                  |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| id                      | ID.                               | integer            | Minimum value: 0   | 0                  |
|                         |                                   |                    | Maximum value:     |                    |
|                         |                                   |                    | 4294967295         |                    |
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
| source-ip               | Source IP address for sFlow       | ipv4-address       | Not Specified      | 0.0.0.0            |
|                         | agent.                            |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+

