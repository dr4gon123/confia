# config dnsfilter profile

Configure DNS domain filter profile.

## Syntax

```
config dnsfilter profile
    Description: Configure DNS domain filter profile.
    edit <name>
        set block-action [block|redirect|...]
        set block-botnet [disable|enable]
        set comment {var-string}
        config dns-translation
            Description: DNS translation settings.
            edit <id>
                set addr-type [ipv4|ipv6]
                set dst {ipv4-address}
                set dst6 {ipv6-address}
                set netmask {ipv4-netmask}
                set prefix {integer}
                set src {ipv4-address}
                set src6 {ipv6-address}
                set status [enable|disable]
            next
        end
        config domain-filter
            Description: Domain filter settings.
            set domain-filter-table {integer}
        end
        set external-ip-blocklist <name1>, <name2>, ...
        config ftgd-dns
            Description: FortiGuard DNS Filter settings.
            config filters
                Description: FortiGuard DNS domain filters.
                edit <id>
                    set action [block|monitor]
                    set category {integer}
                    set log [enable|disable]
                next
            end
            set options {option1}, {option2}, ...
        end
        set log-all-domain [enable|disable]
        set redirect-portal {ipv4-address}
        set redirect-portal6 {ipv6-address}
        set safe-search [disable|enable]
        set sdns-domain-log [enable|disable]
        set sdns-ftgd-err-log [enable|disable]
        set transparent-dns-database <name1>, <name2>, ...
        set youtube-restrict [strict|moderate]
    next
end
```

## Parameters

+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter                | Description                       | Type                 | Size                 | Default              |
+==========================+===================================+======================+======================+======================+
| block-action             | Action to take for blocked        | option               | \-                   | redirect             |
|                          | domains.                          |                      |                      |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                          | +------------------+--------------------------------------------------------+                          |
|                          | | Option           | Description                                            |                          |
|                          | +==================+========================================================+                          |
|                          | | *block*          | Return NXDOMAIN for blocked domains.                   |                          |
|                          | +------------------+--------------------------------------------------------+                          |
|                          | | *redirect*       | Redirect blocked domains to SDNS portal.               |                          |
|                          | +------------------+--------------------------------------------------------+                          |
|                          | | *block-sevrfail* | Return SERVFAIL for blocked domains.                   |                          |
|                          | +------------------+--------------------------------------------------------+                          |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| block-botnet             | Enable/disable blocking botnet    | option               | \-                   | disable              |
|                          | C&C DNS lookups.                  |                      |                      |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                          | +-------------+--------------------------------------------------------+                               |
|                          | | Option      | Description                                            |                               |
|                          | +=============+========================================================+                               |
|                          | | *disable*   | Disable blocking botnet C&C DNS lookups.               |                               |
|                          | +-------------+--------------------------------------------------------+                               |
|                          | | *enable*    | Enable blocking botnet C&C DNS lookups.                |                               |
|                          | +-------------+--------------------------------------------------------+                               |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| comment                  | Comment.                          | var-string           | Maximum length: 255  |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| external-ip-blocklist    | One or more external IP block     | string               | Maximum length: 79   |                      |
| `<name>`                 | lists.                            |                      |                      |                      |
|                          |                                   |                      |                      |                      |
|                          | External domain block list name.  |                      |                      |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| log-all-domain           | Enable/disable logging of all     | option               | \-                   | disable              |
|                          | domains visited (detailed DNS     |                      |                      |                      |
|                          | logging).                         |                      |                      |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                          | +-------------+--------------------------------------------------------+                               |
|                          | | Option      | Description                                            |                               |
|                          | +=============+========================================================+                               |
|                          | | *enable*    | Enable logging of all domains visited.                 |                               |
|                          | +-------------+--------------------------------------------------------+                               |
|                          | | *disable*   | Disable logging of all domains visited.                |                               |
|                          | +-------------+--------------------------------------------------------+                               |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| name                     | Profile name.                     | string               | Maximum length: 35   |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| redirect-portal          | IPv4 address of the SDNS redirect | ipv4-address         | Not Specified        | 0.0.0.0              |
|                          | portal.                           |                      |                      |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| redirect-portal6         | IPv6 address of the SDNS redirect | ipv6-address         | Not Specified        | ::                   |
|                          | portal.                           |                      |                      |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| safe-search              | Enable/disable Google, Bing,      | option               | \-                   | disable              |
|                          | YouTube, Qwant, DuckDuckGo safe   |                      |                      |                      |
|                          | search.                           |                      |                      |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                          | +-------------+--------------------------------------------------------+                               |
|                          | | Option      | Description                                            |                               |
|                          | +=============+========================================================+                               |
|                          | | *disable*   | Disable Google, Bing, YouTube, Qwant, DuckDuckGo safe  |                               |
|                          | |             | search.                                                |                               |
|                          | +-------------+--------------------------------------------------------+                               |
|                          | | *enable*    | Enable Google, Bing, YouTube, Qwant, DuckDuckGo safe   |                               |
|                          | |             | search.                                                |                               |
|                          | +-------------+--------------------------------------------------------+                               |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| sdns-domain-log          | Enable/disable domain filtering   | option               | \-                   | enable               |
|                          | and botnet domain logging.        |                      |                      |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                          | +-------------+--------------------------------------------------------+                               |
|                          | | Option      | Description                                            |                               |
|                          | +=============+========================================================+                               |
|                          | | *enable*    | Enable domain filtering and botnet domain logging.     |                               |
|                          | +-------------+--------------------------------------------------------+                               |
|                          | | *disable*   | Disable domain filtering and botnet domain logging.    |                               |
|                          | +-------------+--------------------------------------------------------+                               |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| sdns-ftgd-err-log        | Enable/disable FortiGuard SDNS    | option               | \-                   | enable               |
|                          | rating error logging.             |                      |                      |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                          | +-------------+--------------------------------------------------------+                               |
|                          | | Option      | Description                                            |                               |
|                          | +=============+========================================================+                               |
|                          | | *enable*    | Enable FortiGuard SDNS rating error logging.           |                               |
|                          | +-------------+--------------------------------------------------------+                               |
|                          | | *disable*   | Disable FortiGuard SDNS rating error logging.          |                               |
|                          | +-------------+--------------------------------------------------------+                               |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| transparent-dns-database | Transparent DNS database zones.   | string               | Maximum length: 79   |                      |
| `<name>`                 |                                   |                      |                      |                      |
|                          | DNS database zone name.           |                      |                      |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| youtube-restrict         | Set safe search for YouTube       | option               | \-                   | strict               |
|                          | restriction level.                |                      |                      |                      |
+--------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                          | +-------------+--------------------------------------------------------+                               |
|                          | | Option      | Description                                            |                               |
|                          | +=============+========================================================+                               |
|                          | | *strict*    | Enable strict safe seach for YouTube.                  |                               |
|                          | +-------------+--------------------------------------------------------+                               |
|                          | | *moderate*  | Enable moderate safe search for YouTube.               |                               |
|                          | +-------------+--------------------------------------------------------+                               |
+--------------------------+--------------------------------------------------------------------------------------------------------+

