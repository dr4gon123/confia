# config system vdom-sflow

Configure sFlow per VDOM to add or change the IP address and UDP port that FortiGate sFlow agents in this VDOM use to send sFlow datagrams to an sFlow collector.

## Syntax

```
config system vdom-sflow
    Description: Configure sFlow per VDOM to add or change the IP address and UDP port that FortiGate sFlow agents in this VDOM use to send sFlow datagrams to an sFlow collector.
    set collector-ip {ipv4-address}
    set collector-port {integer}
    set interface {string}
    set interface-select-method [auto|sdwan|...]
    set source-ip {ipv4-address}
    set vdom-sflow [enable|disable]
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
| vdom-sflow              | Enable/disable the sFlow          | option             | \-                 | disable            |
|                         | configuration for the current     |                    |                    |                    |
|                         | VDOM.                             |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable sFlow for this VDOM.                            |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable sFlow for this VDOM.                           |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+--------------------------------------------------------------------------------------------------+

