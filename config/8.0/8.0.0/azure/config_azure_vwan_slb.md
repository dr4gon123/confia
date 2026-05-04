# config azure vwan-slb

Configure Azure vWAN slb setting.

## Syntax

```
config azure vwan-slb
    Description: Configure Azure vWAN slb setting.
    set mode [passive|active]
    config permanent-security-rules
        Description: Configure permanent security rules.
        config rules
            Description: Configure security rules.
            edit <name>
                set applies-on {string}
                set destination-port-ranges {string}
                set protocol [TCP|UDP]
                set source-address-prefix {string}
            next
        end
        set status [disable|enable|...]
        set version {integer}
    end
    config temporary-security-rules
        Description: Configure temporary security rules.
        set expiration-time {string}
        config rules
            Description: Configure security rules.
            edit <name>
                set destination-port-ranges {string}
                set protocol [TCP|UDP]
                set source-address-prefix {string}
            next
        end
        set status [disable|enable|...]
    end
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| mode      | Mode of VWAN SLB setting.         | option             | \-                 | passive            |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *passive*   | VWAN SLB setting is passive.                           |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *active*    | VWAN SLB setting is active for pushing to online.      |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+--------------------------------------------------------------------------------------------------+

