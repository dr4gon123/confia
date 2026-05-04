# config firewall multicast-address

Configure multicast addresses.

## Syntax

```
config firewall multicast-address
    Description: Configure multicast addresses.
    edit <name>
        set associated-interface {string}
        set color {integer}
        set comment {var-string}
        set custom-tags <name1>, <name2>, ...
        set display-with [all-tags|first-tag-only|...]
        set end-ip {ipv4-address-any}
        set start-ip {ipv4-address-any}
        set subnet {ipv4-classnet-any}
        config tagging
            Description: Config object tagging.
            edit <name>
                set category {string}
                set tags <name1>, <name2>, ...
            next
        end
        set type [multicastrange|broadcastmask]
    next
end
```

## Parameters

+----------------------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter            | Description                       | Type                 | Size                 | Default              |
+======================+===================================+======================+======================+======================+
| associated-interface | Interface associated with the     | string               | Maximum length: 35   |                      |
|                      | address object. When setting up a |                      |                      |                      |
|                      | policy, only addresses associated |                      |                      |                      |
|                      | with this interface are           |                      |                      |                      |
|                      | available.                        |                      |                      |                      |
+----------------------+-----------------------------------+----------------------+----------------------+----------------------+
| color                | Integer value to determine the    | integer              | Minimum value: 0     | 0                    |
|                      | color of the icon in the GUI (1 - |                      | Maximum value: 32    |                      |
|                      | 32, default = 0, which sets value |                      |                      |                      |
|                      | to 1).                            |                      |                      |                      |
+----------------------+-----------------------------------+----------------------+----------------------+----------------------+
| comment              | Comment.                          | var-string           | Maximum length: 255  |                      |
+----------------------+-----------------------------------+----------------------+----------------------+----------------------+
| custom-tags `<name>` | Custom tags.                      | string               | Maximum length: 35   |                      |
| \*                   |                                   |                      |                      |                      |
|                      | Names of custom tags used with    |                      |                      |                      |
|                      | this address.                     |                      |                      |                      |
+----------------------+-----------------------------------+----------------------+----------------------+----------------------+
| display-with \*      | Display object with first tag,    | option               | \-                   | all-tags             |
|                      | all tags, or just the icon.       |                      |                      |                      |
+----------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                      | +------------------+--------------------------------------------------------+                          |
|                      | | Option           | Description                                            |                          |
|                      | +==================+========================================================+                          |
|                      | | *all-tags*       | Display object using all custom tags.                  |                          |
|                      | +------------------+--------------------------------------------------------+                          |
|                      | | *first-tag-only* | Display object using first custom tag.                 |                          |
|                      | +------------------+--------------------------------------------------------+                          |
|                      | | *icon-and-color* | Display object using icon and color.                   |                          |
|                      | +------------------+--------------------------------------------------------+                          |
+----------------------+-----------------------------------+----------------------+----------------------+----------------------+
| end-ip               | Final IPv4 address (inclusive) in | ipv4-address-any     | Not Specified        | 0.0.0.0              |
|                      | the range for the address.        |                      |                      |                      |
+----------------------+-----------------------------------+----------------------+----------------------+----------------------+
| name                 | Multicast address name.           | string               | Maximum length: 79   |                      |
+----------------------+-----------------------------------+----------------------+----------------------+----------------------+
| start-ip             | First IPv4 address (inclusive) in | ipv4-address-any     | Not Specified        | 0.0.0.0              |
|                      | the range for the address.        |                      |                      |                      |
+----------------------+-----------------------------------+----------------------+----------------------+----------------------+
| subnet               | Broadcast address and subnet.     | ipv4-classnet-any    | Not Specified        | 0.0.0.0 0.0.0.0      |
+----------------------+-----------------------------------+----------------------+----------------------+----------------------+
| type                 | Type of address object: multicast | option               | \-                   | multicastrange       |
|                      | IP address range or broadcast     |                      |                      |                      |
|                      | IP/mask to be treated as a        |                      |                      |                      |
|                      | multicast address.                |                      |                      |                      |
+----------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                      | +------------------+--------------------------------------------------------+                          |
|                      | | Option           | Description                                            |                          |
|                      | +==================+========================================================+                          |
|                      | | *multicastrange* | Multicast range.                                       |                          |
|                      | +------------------+--------------------------------------------------------+                          |
|                      | | *broadcastmask*  | Broadcast IP/mask.                                     |                          |
|                      | +------------------+--------------------------------------------------------+                          |
+----------------------+--------------------------------------------------------------------------------------------------------+

