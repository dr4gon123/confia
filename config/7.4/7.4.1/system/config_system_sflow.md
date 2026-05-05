# config system sflow

Configure sFlow.

## Syntax

```
config system sflow
    Description: Configure sFlow.
    set collector-ip {ipv4-address}
    set collector-port {integer}
    set interface {string}
    set interface-select-method [auto|sdwan|...]
    set source-ip {ipv4-address}
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
| collector-ip            | IP address of the sFlow collector | ipv4-address       | Not Specified      | 0.0.0.0            |
|                         | that sFlow agents added to        |                    |                    |                    |
|                         | interfaces in this VDOM send      |                    |                    |                    |
|                         | sFlow datagrams to.               |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| collector-port          | UDP port number used for sending  | integer            | Minimum value: 0   | 6343               |
|                         | sFlow datagrams.                  |                    | Maximum value:     |                    |
|                         |                                   |                    | 65535              |                    |
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

