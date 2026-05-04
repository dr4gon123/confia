# config system pcp-server

Configure PCP server information.

## Syntax

```
config system pcp-server
    Description: Configure PCP server information.
    config pools
        Description: Configure PCP pools.
        edit <name>
            set description {string}
            set id {integer}
            set client-subnet <subnet1>, <subnet2>, ...
            set ext-intf {string}
            set arp-reply [disable|enable]
            set extip {user}
            set extport {user}
            set minimal-lifetime {integer}
            set maximal-lifetime {integer}
            set client-mapping-limit {integer}
            set mapping-filter-limit {integer}
            set allow-opcode {option1}, {option2}, ...
            set third-party [allow|disallow]
            set third-party-subnet <subnet1>, <subnet2>, ...
            set multicast-announcement [enable|disable]
            set announcement-count {integer}
            set intl-intf <interface-name1>, <interface-name2>, ...
            set recycle-delay {integer}
        next
    end
    set status [enable|disable]
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| status    | Enable/disable PCP server.        | option             | \-                 | disable            |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable PCP Server.                                     |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable PCP Server.                                    |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+--------------------------------------------------------------------------------------------------+

