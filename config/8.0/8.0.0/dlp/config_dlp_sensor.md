# config dlp sensor

Configure sensors used by DLP blocking.

## Syntax

```
config dlp sensor
    Description: Configure sensors used by DLP blocking.
    edit <name>
        set comment {var-string}
        config entries
            Description: DLP sensor entries.
            edit <id>
                set count {integer}
                set dictionary {string}
                set status [enable|disable]
            next
        end
        set eval {string}
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        set match-type [match-all|match-any|...]
        set uuid {uuid}
    next
end
```

## Parameters

+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| Parameter            | Description                       | Type                | Size                | Default                              |
+======================+===================================+=====================+=====================+======================================+
| comment              | Optional comments.                | var-string          | Maximum length: 255 |                                      |
+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| eval                 | Expression to evaluate.           | string              | Maximum length: 255 |                                      |
+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| fabric-force-sync \* | Enable/disable forced             | option              | \-                  | disable                              |
|                      | synchronization of configuration  |                     |                     |                                      |
|                      | objects from the root FortiGate   |                     |                     |                                      |
|                      | unit to the downstream devices.   |                     |                     |                                      |
|                      | Configuration conflict check is   |                     |                     |                                      |
|                      | skipped.                          |                     |                     |                                      |
+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                             |
|                      | | Option      | Description                                            |                                             |
|                      | +=============+========================================================+                                             |
|                      | | *enable*    | Enable forced synchronization of configuration objects |                                             |
|                      | |             | from the root FortiGate unit to the downstream         |                                             |
|                      | |             | devices.                                               |                                             |
|                      | +-------------+--------------------------------------------------------+                                             |
|                      | | *disable*   | Disable forced synchronization of configuration        |                                             |
|                      | |             | objects from the root FortiGate unit to the downstream |                                             |
|                      | |             | devices.                                               |                                             |
|                      | +-------------+--------------------------------------------------------+                                             |
+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| fabric-object \*     | Security Fabric global object     | option              | \-                  | disable                              |
|                      | setting.                          |                     |                     |                                      |
+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                             |
|                      | | Option      | Description                                            |                                             |
|                      | +=============+========================================================+                                             |
|                      | | *enable*    | Object is set as a security fabric-wide global object. |                                             |
|                      | +-------------+--------------------------------------------------------+                                             |
|                      | | *disable*   | Object is local to this security fabric member.        |                                             |
|                      | +-------------+--------------------------------------------------------+                                             |
+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| fabric-object-source | Source of truth for fabric        | option              | \-                  | root                                 |
| \*                   | object.                           |                     |                     |                                      |
+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                             |
|                      | | Option      | Description                                            |                                             |
|                      | +=============+========================================================+                                             |
|                      | | *member*    | Source of truth for this object is a non-root member   |                                             |
|                      | |             | of fabric.                                             |                                             |
|                      | +-------------+--------------------------------------------------------+                                             |
|                      | | *local*     | Source of truth for this object is this security       |                                             |
|                      | |             | fabric member.                                         |                                             |
|                      | +-------------+--------------------------------------------------------+                                             |
|                      | | *root*      | Source of truth for this object is the root of the     |                                             |
|                      | |             | fabric.                                                |                                             |
|                      | +-------------+--------------------------------------------------------+                                             |
+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| match-type           | Logical relation between entries  | option              | \-                  | match-any                            |
|                      | (default = match-any).            |                     |                     |                                      |
+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
|                      | +--------------+--------------------------------------------------------+                                            |
|                      | | Option       | Description                                            |                                            |
|                      | +==============+========================================================+                                            |
|                      | | *match-all*  | Match all entries.                                     |                                            |
|                      | +--------------+--------------------------------------------------------+                                            |
|                      | | *match-any*  | Match any entries.                                     |                                            |
|                      | +--------------+--------------------------------------------------------+                                            |
|                      | | *match-eval* | Match an expression evaluation.                        |                                            |
|                      | +--------------+--------------------------------------------------------+                                            |
+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| name                 | Name of table containing the      | string              | Maximum length: 35  |                                      |
|                      | sensor.                           |                     |                     |                                      |
+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| uuid \*              | Universally Unique Identifier     | uuid                | Not Specified       | 00000000-0000-0000-0000-000000000000 |
|                      | (UUID; automatically assigned but |                     |                     |                                      |
|                      | can be manually reset).           |                     |                     |                                      |
+----------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+

