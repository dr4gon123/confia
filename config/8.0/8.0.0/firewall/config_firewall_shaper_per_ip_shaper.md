# config firewall shaper per-ip-shaper

Configure per-IP traffic shaper.

## Syntax

```
config firewall shaper per-ip-shaper
    Description: Configure per-IP traffic shaper.
    edit <name>
        set bandwidth-unit [kbps|mbps|...]
        set diffserv-forward [enable|disable]
        set diffserv-reverse [enable|disable]
        set diffservcode-forward {user}
        set diffservcode-rev {user}
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        set max-bandwidth {integer}
        set max-concurrent-session {integer}
        set max-concurrent-tcp-session {integer}
        set max-concurrent-udp-session {integer}
        set uuid {uuid}
    next
end
```

## Parameters

+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter                  | Description                       | Type               | Size               | Default                              |
+============================+===================================+====================+====================+======================================+
| bandwidth-unit             | Unit of measurement for maximum   | option             | \-                 | kbps                                 |
|                            | bandwidth for this shaper (Kbps,  |                    |                    |                                      |
|                            | Mbps or Gbps).                    |                    |                    |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | Option      | Description                                            |                                           |
|                            | +=============+========================================================+                                           |
|                            | | *kbps*      | Kilobits per second.                                   |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | *mbps*      | Megabits per second.                                   |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | *gbps*      | Gigabits per second.                                   |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| diffserv-forward           | Enable/disable changing the       | option             | \-                 | disable                              |
|                            | Forward (original) DiffServ       |                    |                    |                                      |
|                            | setting applied to traffic        |                    |                    |                                      |
|                            | accepted by this shaper.          |                    |                    |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | Option      | Description                                            |                                           |
|                            | +=============+========================================================+                                           |
|                            | | *enable*    | Enable setting forward (original) traffic DiffServ.    |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | *disable*   | Disable setting forward (original) traffic DiffServ.   |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| diffserv-reverse           | Enable/disable changing the       | option             | \-                 | disable                              |
|                            | Reverse (reply) DiffServ setting  |                    |                    |                                      |
|                            | applied to traffic accepted by    |                    |                    |                                      |
|                            | this shaper.                      |                    |                    |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | Option      | Description                                            |                                           |
|                            | +=============+========================================================+                                           |
|                            | | *enable*    | Enable setting reverse (reply) traffic DiffServ.       |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | *disable*   | Disable setting reverse (reply) traffic DiffServ.      |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| diffservcode-forward       | Forward (original) DiffServ       | user               | Not Specified      |                                      |
|                            | setting to be applied to traffic  |                    |                    |                                      |
|                            | accepted by this shaper.          |                    |                    |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| diffservcode-rev           | Reverse (reply) DiffServ setting  | user               | Not Specified      |                                      |
|                            | to be applied to traffic accepted |                    |                    |                                      |
|                            | by this shaper.                   |                    |                    |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-force-sync \*       | Enable/disable forced             | option             | \-                 | disable                              |
|                            | synchronization of configuration  |                    |                    |                                      |
|                            | objects from the root FortiGate   |                    |                    |                                      |
|                            | unit to the downstream devices.   |                    |                    |                                      |
|                            | Configuration conflict check is   |                    |                    |                                      |
|                            | skipped.                          |                    |                    |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | Option      | Description                                            |                                           |
|                            | +=============+========================================================+                                           |
|                            | | *enable*    | Enable forced synchronization of configuration objects |                                           |
|                            | |             | from the root FortiGate unit to the downstream         |                                           |
|                            | |             | devices.                                               |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | *disable*   | Disable forced synchronization of configuration        |                                           |
|                            | |             | objects from the root FortiGate unit to the downstream |                                           |
|                            | |             | devices.                                               |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object \*           | Security Fabric global object     | option             | \-                 | disable                              |
|                            | setting.                          |                    |                    |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | Option      | Description                                            |                                           |
|                            | +=============+========================================================+                                           |
|                            | | *enable*    | Object is set as a security fabric-wide global object. |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | *disable*   | Object is local to this security fabric member.        |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object-source \*    | Source of truth for fabric        | option             | \-                 | root                                 |
|                            | object.                           |                    |                    |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | Option      | Description                                            |                                           |
|                            | +=============+========================================================+                                           |
|                            | | *member*    | Source of truth for this object is a non-root member   |                                           |
|                            | |             | of fabric.                                             |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | *local*     | Source of truth for this object is this security       |                                           |
|                            | |             | fabric member.                                         |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
|                            | | *root*      | Source of truth for this object is the root of the     |                                           |
|                            | |             | fabric.                                                |                                           |
|                            | +-------------+--------------------------------------------------------+                                           |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| max-bandwidth              | Upper bandwidth limit enforced by | integer            | Minimum value: 0   | 0                                    |
|                            | this shaper (0 - 80000000). 0     |                    | Maximum value:     |                                      |
|                            | means no limit. Units depend on   |                    | 80000000 \*\*      |                                      |
|                            | the bandwidth-unit setting.       |                    |                    |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| max-concurrent-session     | Maximum number of concurrent      | integer            | Minimum value: 0   | 0                                    |
|                            | sessions allowed by this shaper   |                    | Maximum value:     |                                      |
|                            | (0 - 2097000). 0 means no limit.  |                    | 2097000            |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| max-concurrent-tcp-session | Maximum number of concurrent TCP  | integer            | Minimum value: 0   | 0                                    |
|                            | sessions allowed by this shaper   |                    | Maximum value:     |                                      |
|                            | (0 - 2097000). 0 means no limit.  |                    | 2097000            |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| max-concurrent-udp-session | Maximum number of concurrent UDP  | integer            | Minimum value: 0   | 0                                    |
|                            | sessions allowed by this shaper   |                    | Maximum value:     |                                      |
|                            | (0 - 2097000). 0 means no limit.  |                    | 2097000            |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name                       | Traffic shaper name.              | string             | Maximum length: 35 |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid \*                    | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                            | (UUID; automatically assigned but |                    |                    |                                      |
|                            | can be manually reset).           |                    |                    |                                      |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

