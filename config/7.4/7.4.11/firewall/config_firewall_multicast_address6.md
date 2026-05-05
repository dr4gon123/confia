# config firewall multicast-address6

Configure IPv6 multicast address.

## Syntax

```
config firewall multicast-address6
    Description: Configure IPv6 multicast address.
    edit <name>
        set color {integer}
        set comment {var-string}
        set ip6 {ipv6-network}
        config tagging
            Description: Config object tagging.
            edit <name>
                set category {string}
                set tags <name1>, <name2>, ...
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------------------+--------------+-----------+---------+
| Parameter | Description                                   | Type         | Size      | Default |
+===========+===============================================+==============+===========+=========+
| color     | Color of icon on the GUI.                     | integer      | Minimum   | 0       |
|           |                                               |              | value: 0  |         |
|           |                                               |              | Maximum   |         |
|           |                                               |              | value: 32 |         |
+-----------+-----------------------------------------------+--------------+-----------+---------+
| comment   | Comment.                                      | var-string   | Maximum   |         |
|           |                                               |              | length:   |         |
|           |                                               |              | 255       |         |
+-----------+-----------------------------------------------+--------------+-----------+---------+
| ip6       | IPv6 address prefix (format:                  | ipv6-network | Not       | ::/0    |
|           | xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx/xxx). |              | Specified |         |
+-----------+-----------------------------------------------+--------------+-----------+---------+
| name      | IPv6 multicast address name.                  | string       | Maximum   |         |
|           |                                               |              | length:   |         |
|           |                                               |              | 79        |         |
+-----------+-----------------------------------------------+--------------+-----------+---------+

