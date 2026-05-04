# config system pcp-server

Configure PCP server information.

## Syntax

```
config system pcp-server
    Description: Configure PCP server information.
    config pools
        Description: Configure PCP pools.
        edit <name>
            set allow-opcode {option1}, {option2}, ...
            set announcement-count {integer}
            set arp-reply [disable|enable]
            set client-mapping-limit {integer}
            set client-subnet <subnet1>, <subnet2>, ...
            set client6-prefix <prefix1>, <prefix2>, ...
            set description {string}
            set ext-intf {string}
            set extip {user}
            set extport {user}
            set id {integer}
            set intl-intf <interface-name1>, <interface-name2>, ...
            set mapping-filter-limit {integer}
            set maximal-lifetime {integer}
            set minimal-lifetime {integer}
            set multicast-announcement [enable|disable]
            set nat46 [disable|enable]
            set recycle-delay {integer}
            set third-party [allow|disallow]
            set third-party-subnet <subnet1>, <subnet2>, ...
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

