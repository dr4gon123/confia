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
        set max-bandwidth {integer}
        set max-concurrent-session {integer}
        set max-concurrent-tcp-session {integer}
        set max-concurrent-udp-session {integer}
    next
end
```

## Parameters

+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                  | Description                       | Type               | Size               | Default            |
+============================+===================================+====================+====================+====================+
| bandwidth-unit             | Unit of measurement for maximum   | option             | \-                 | kbps               |
|                            | bandwidth for this shaper (Kbps,  |                    |                    |                    |
|                            | Mbps or Gbps).                    |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | Option      | Description                                            |                         |
|                            | +=============+========================================================+                         |
|                            | | *kbps*      | Kilobits per second.                                   |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *mbps*      | Megabits per second.                                   |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *gbps*      | Gigabits per second.                                   |                         |
|                            | +-------------+--------------------------------------------------------+                         |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| diffserv-forward           | Enable/disable changing the       | option             | \-                 | disable            |
|                            | Forward (original) DiffServ       |                    |                    |                    |
|                            | setting applied to traffic        |                    |                    |                    |
|                            | accepted by this shaper.          |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | Option      | Description                                            |                         |
|                            | +=============+========================================================+                         |
|                            | | *enable*    | Enable setting forward (original) traffic DiffServ.    |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *disable*   | Disable setting forward (original) traffic DiffServ.   |                         |
|                            | +-------------+--------------------------------------------------------+                         |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| diffserv-reverse           | Enable/disable changing the       | option             | \-                 | disable            |
|                            | Reverse (reply) DiffServ setting  |                    |                    |                    |
|                            | applied to traffic accepted by    |                    |                    |                    |
|                            | this shaper.                      |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | Option      | Description                                            |                         |
|                            | +=============+========================================================+                         |
|                            | | *enable*    | Enable setting reverse (reply) traffic DiffServ.       |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *disable*   | Disable setting reverse (reply) traffic DiffServ.      |                         |
|                            | +-------------+--------------------------------------------------------+                         |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| diffservcode-forward       | Forward (original) DiffServ       | user               | Not Specified      |                    |
|                            | setting to be applied to traffic  |                    |                    |                    |
|                            | accepted by this shaper.          |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| diffservcode-rev           | Reverse (reply) DiffServ setting  | user               | Not Specified      |                    |
|                            | to be applied to traffic accepted |                    |                    |                    |
|                            | by this shaper.                   |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-bandwidth              | Upper bandwidth limit enforced by | integer            | Minimum value: 0   | 0                  |
|                            | this shaper (0 - 80000000). 0     |                    | Maximum value:     |                    |
|                            | means no limit. Units depend on   |                    | 80000000 \*\*      |                    |
|                            | the bandwidth-unit setting.       |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-concurrent-session     | Maximum number of concurrent      | integer            | Minimum value: 0   | 0                  |
|                            | sessions allowed by this shaper   |                    | Maximum value:     |                    |
|                            | (0 - 2097000). 0 means no limit.  |                    | 2097000            |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-concurrent-tcp-session | Maximum number of concurrent TCP  | integer            | Minimum value: 0   | 0                  |
|                            | sessions allowed by this shaper   |                    | Maximum value:     |                    |
|                            | (0 - 2097000). 0 means no limit.  |                    | 2097000            |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-concurrent-udp-session | Maximum number of concurrent UDP  | integer            | Minimum value: 0   | 0                  |
|                            | sessions allowed by this shaper   |                    | Maximum value:     |                    |
|                            | (0 - 2097000). 0 means no limit.  |                    | 2097000            |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                       | Traffic shaper name.              | string             | Maximum length: 35 |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+

