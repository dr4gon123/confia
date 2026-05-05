# config firewall schedule onetime

Onetime schedule configuration.

## Syntax

```
config firewall schedule onetime
    Description: Onetime schedule configuration.
    edit <name>
        set color {integer}
        set end {user}
        set end-utc {user}
        set expiration-days {integer}
        set fabric-object [enable|disable]
        set start {user}
        set start-utc {user}
        set uuid {uuid}
    next
end
```

## Parameters

+-----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter       | Description                       | Type               | Size               | Default                              |
+=================+===================================+====================+====================+======================================+
| color           | Color of icon on the GUI.         | integer            | Minimum value: 0   | 0                                    |
|                 |                                   |                    | Maximum value: 32  |                                      |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| end             | Schedule end date and time,       | user               | Not Specified      |                                      |
|                 | format hh:mm yyyy/mm/dd.          |                    |                    |                                      |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| end-utc         | Schedule end date and time, in    | user               | Not Specified      |                                      |
|                 | epoch format.                     |                    |                    |                                      |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| expiration-days | Write an event log message this   | integer            | Minimum value: 0   | 3                                    |
|                 | many days before the schedule     |                    | Maximum value: 100 |                                      |
|                 | expires.                          |                    |                    |                                      |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object   | Security Fabric global object     | option             | \-                 | disable                              |
|                 | setting.                          |                    |                    |                                      |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                 | +-------------+--------------------------------------------------------+                                           |
|                 | | Option      | Description                                            |                                           |
|                 | +=============+========================================================+                                           |
|                 | | *enable*    | Object is set as a security fabric-wide global object. |                                           |
|                 | +-------------+--------------------------------------------------------+                                           |
|                 | | *disable*   | Object is local to this security fabric member.        |                                           |
|                 | +-------------+--------------------------------------------------------+                                           |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name            | Onetime schedule name.            | string             | Maximum length: 31 |                                      |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| start           | Schedule start date and time,     | user               | Not Specified      |                                      |
|                 | format hh:mm yyyy/mm/dd.          |                    |                    |                                      |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| start-utc       | Schedule start date and time, in  | user               | Not Specified      |                                      |
|                 | epoch format.                     |                    |                    |                                      |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid            | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                 | (UUID; automatically assigned but |                    |                    |                                      |
|                 | can be manually reset).           |                    |                    |                                      |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

