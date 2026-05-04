# config ips sensor

Configure IPS sensor.

## Syntax

```
config ips sensor
    Description: Configure IPS sensor.
    edit <name>
        set block-malicious-url [disable|enable]
        set comment {var-string}
        config entries
            Description: IPS sensor filter.
            edit <id>
                set action [pass|block|...]
                set application {user}
                set cve <cve-entry1>, <cve-entry2>, ...
                set default-action [all|pass|...]
                set default-status [all|enable|...]
                config exempt-ip
                    Description: Traffic from selected source or destination IP addresses is exempt from this signature.
                    edit <id>
                        set dst-ip {ipv4-classnet}
                        set src-ip {ipv4-classnet}
                    next
                end
                set last-modified {user}
                set location {user}
                set log [disable|enable]
                set log-attack-context [disable|enable]
                set log-packet [disable|enable]
                set os {user}
                set protocol {user}
                set quarantine [none|attacker]
                set quarantine-expiry {user}
                set quarantine-log [disable|enable]
                set rate-count {integer}
                set rate-duration {integer}
                set rate-mode [periodical|continuous]
                set rate-track [none|src-ip|...]
                set rule <id1>, <id2>, ...
                set severity {user}
                set status [disable|enable|...]
                set vuln-type <id1>, <id2>, ...
            next
        end
        set extended-log [enable|disable]
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        set replacemsg-group {string}
        set scan-botnet-connections [disable|block|...]
        set uuid {uuid}
    next
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter               | Description                       | Type               | Size               | Default                              |
+=========================+===================================+====================+====================+======================================+
| block-malicious-url     | Enable/disable malicious URL      | option             | \-                 | disable                              |
|                         | blocking.                         |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *disable*   | Disable malicious URL blocking.                        |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *enable*    | Enable malicious URL blocking.                         |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| comment                 | Comment.                          | var-string         | Maximum length:    |                                      |
|                         |                                   |                    | 255                |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| extended-log            | Enable/disable extended logging.  | option             | \-                 | disable                              |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *enable*    | Enable setting.                                        |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *disable*   | Disable setting.                                       |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-force-sync \*    | Enable/disable forced             | option             | \-                 | disable                              |
|                         | synchronization of configuration  |                    |                    |                                      |
|                         | objects from the root FortiGate   |                    |                    |                                      |
|                         | unit to the downstream devices.   |                    |                    |                                      |
|                         | Configuration conflict check is   |                    |                    |                                      |
|                         | skipped.                          |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *enable*    | Enable forced synchronization of configuration objects |                                           |
|                         | |             | from the root FortiGate unit to the downstream         |                                           |
|                         | |             | devices.                                               |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *disable*   | Disable forced synchronization of configuration        |                                           |
|                         | |             | objects from the root FortiGate unit to the downstream |                                           |
|                         | |             | devices.                                               |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object \*        | Security Fabric global object     | option             | \-                 | disable                              |
|                         | setting.                          |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *enable*    | Object is set as a security fabric-wide global object. |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *disable*   | Object is local to this security fabric member.        |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object-source \* | Source of truth for fabric        | option             | \-                 | root                                 |
|                         | object.                           |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *member*    | Source of truth for this object is a non-root member   |                                           |
|                         | |             | of fabric.                                             |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *local*     | Source of truth for this object is this security       |                                           |
|                         | |             | fabric member.                                         |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *root*      | Source of truth for this object is the root of the     |                                           |
|                         | |             | fabric.                                                |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name                    | Sensor name.                      | string             | Maximum length: 47 |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| replacemsg-group        | Replacement message group.        | string             | Maximum length: 35 |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| scan-botnet-connections | Block or monitor connections to   | option             | \-                 | disable                              |
|                         | Botnet servers, or disable Botnet |                    |                    |                                      |
|                         | scanning.                         |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *disable*   | Do not scan connections to botnet servers.             |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *block*     | Block connections to botnet servers.                   |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *monitor*   | Log connections to botnet servers.                     |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid \*                 | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                         | (UUID; automatically assigned but |                    |                    |                                      |
|                         | can be manually reset).           |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

