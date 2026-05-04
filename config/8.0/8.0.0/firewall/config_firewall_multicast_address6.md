# config firewall multicast-address6

Configure IPv6 multicast address.

## Syntax

```
config firewall multicast-address6
    Description: Configure IPv6 multicast address.
    edit <name>
        set color {integer}
        set comment {var-string}
        set custom-tags <name1>, <name2>, ...
        set display-with [all-tags|first-tag-only|...]
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

+--------------+-----------------------------------------------+----------------------+----------------------+----------------------+
| Parameter    | Description                                   | Type                 | Size                 | Default              |
+==============+===============================================+======================+======================+======================+
| color        | Color of icon on the GUI.                     | integer              | Minimum value: 0     | 0                    |
|              |                                               |                      | Maximum value: 32    |                      |
+--------------+-----------------------------------------------+----------------------+----------------------+----------------------+
| comment      | Comment.                                      | var-string           | Maximum length: 255  |                      |
+--------------+-----------------------------------------------+----------------------+----------------------+----------------------+
| custom-tags  | Custom tags.                                  | string               | Maximum length: 35   |                      |
| `<name>` \*  |                                               |                      |                      |                      |
|              | Names of custom tags used with this address.  |                      |                      |                      |
+--------------+-----------------------------------------------+----------------------+----------------------+----------------------+
| display-with | Display object with first tag, all tags, or   | option               | \-                   | all-tags             |
| \*           | just the icon.                                |                      |                      |                      |
+--------------+-----------------------------------------------+----------------------+----------------------+----------------------+
|              | +------------------+--------------------------------------------------------+                                      |
|              | | Option           | Description                                            |                                      |
|              | +==================+========================================================+                                      |
|              | | *all-tags*       | Display object using all custom tags.                  |                                      |
|              | +------------------+--------------------------------------------------------+                                      |
|              | | *first-tag-only* | Display object using first custom tag.                 |                                      |
|              | +------------------+--------------------------------------------------------+                                      |
|              | | *icon-and-color* | Display object using icon and color.                   |                                      |
|              | +------------------+--------------------------------------------------------+                                      |
+--------------+-----------------------------------------------+----------------------+----------------------+----------------------+
| ip6          | IPv6 address prefix (format:                  | ipv6-network         | Not Specified        | ::/0                 |
|              | xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx/xxx). |                      |                      |                      |
+--------------+-----------------------------------------------+----------------------+----------------------+----------------------+
| name         | IPv6 multicast address name.                  | string               | Maximum length: 79   |                      |
+--------------+-----------------------------------------------+----------------------+----------------------+----------------------+

