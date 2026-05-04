# config user quarantine

Configure quarantine support.

## Syntax

```
config user quarantine
    Description: Configure quarantine support.
    set firewall-groups {string}
    set quarantine [enable|disable]
    config targets
        Description: Quarantine entry to hold multiple MACs.
        edit <entry>
            set description {string}
            config macs
                Description: Quarantine MACs.
                edit <mac>
                    set description {string}
                    set drop [disable|enable]
                    set parent {string}
                next
            end
        next
    end
    set traffic-policy {string}
end
```

## Parameters

+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter       | Description                       | Type               | Size               | Default            |
+=================+===================================+====================+====================+====================+
| firewall-groups | Firewall address group which      | string             | Maximum length: 79 |                    |
|                 | includes all quarantine MAC       |                    |                    |                    |
|                 | address.                          |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| quarantine      | Enable/disable quarantine.        | option             | \-                 | enable             |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *enable*    | Enable quarantine.                                     |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *disable*   | Disable quarantine.                                    |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| traffic-policy  | Traffic policy for quarantined    | string             | Maximum length: 63 |                    |
|                 | MACs.                             |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+

