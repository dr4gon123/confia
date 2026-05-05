# config system dns-database

Configure DNS databases.

## Syntax

```
config system dns-database
    Description: Configure DNS databases.
    edit <name>
        set allow-transfer {user}
        set authoritative [enable|disable]
        set contact {string}
        config dns-entry
            Description: DNS entry.
            edit <id>
                set canonical-name {string}
                set hostname {string}
                set ip {ipv4-address-any}
                set ipv6 {ipv6-address}
                set preference {integer}
                set status [enable|disable]
                set ttl {integer}
                set type [A|NS|...]
            next
        end
        set domain {string}
        set forwarder {user}
        set forwarder6 {ipv6-address}
        set ip-primary {ipv4-address-any}
        set primary-name {string}
        set rr-max {integer}
        set source-ip {ipv4-address}
        set source-ip6 {ipv6-address}
        set status [enable|disable]
        set ttl {integer}
        set type [primary|secondary]
        set view [shadow|public|...]
    next
end
```

## Parameters

+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter      | Description                       | Type                 | Size                 | Default              |
+================+===================================+======================+======================+======================+
| allow-transfer | DNS zone transfer IP address      | user                 | Not Specified        |                      |
|                | list.                             |                      |                      |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| authoritative  | Enable/disable authoritative      | option               | \-                   | enable               |
|                | zone.                             |                      |                      |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
|                | +-------------+--------------------------------------------------------+                               |
|                | | Option      | Description                                            |                               |
|                | +=============+========================================================+                               |
|                | | *enable*    | Enable authoritative zone.                             |                               |
|                | +-------------+--------------------------------------------------------+                               |
|                | | *disable*   | Disable authoritative zone.                            |                               |
|                | +-------------+--------------------------------------------------------+                               |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| contact        | Email address of the              | string               | Maximum length: 255  | host                 |
|                | administrator for this zone. You  |                      |                      |                      |
|                | can specify only the username,    |                      |                      |                      |
|                | such as admin or the full email   |                      |                      |                      |
|                | address, such as admin@test.com   |                      |                      |                      |
|                | When using only a username, the   |                      |                      |                      |
|                | domain of the email will be this  |                      |                      |                      |
|                | zone.                             |                      |                      |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| domain         | Domain name.                      | string               | Maximum length: 255  |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| forwarder      | DNS zone forwarder IP address     | user                 | Not Specified        |                      |
|                | list.                             |                      |                      |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| forwarder6     | Forwarder IPv6 address.           | ipv6-address         | Not Specified        | ::                   |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| ip-primary     | IP address of primary DNS server. | ipv4-address-any     | Not Specified        | 0.0.0.0              |
|                | Entries in this primary DNS       |                      |                      |                      |
|                | server and imported into the DNS  |                      |                      |                      |
|                | zone.                             |                      |                      |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| name           | Zone name.                        | string               | Maximum length: 35   |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| primary-name   | Domain name of the default DNS    | string               | Maximum length: 255  | dns                  |
|                | server for this zone.             |                      |                      |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| rr-max         | Maximum number of resource        | integer              | Minimum value: 10    | 16384                |
|                | records (10 - 65536, 0 means      |                      | Maximum value: 65536 |                      |
|                | infinite).                        |                      |                      |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| source-ip      | Source IP for forwarding to DNS   | ipv4-address         | Not Specified        | 0.0.0.0              |
|                | server.                           |                      |                      |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| source-ip6     | IPv6 source IP address for        | ipv6-address         | Not Specified        | ::                   |
|                | forwarding to DNS server.         |                      |                      |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| status         | Enable/disable this DNS zone.     | option               | \-                   | enable               |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
|                | +-------------+--------------------------------------------------------+                               |
|                | | Option      | Description                                            |                               |
|                | +=============+========================================================+                               |
|                | | *enable*    | Enable setting.                                        |                               |
|                | +-------------+--------------------------------------------------------+                               |
|                | | *disable*   | Disable setting.                                       |                               |
|                | +-------------+--------------------------------------------------------+                               |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| ttl            | Default time-to-live value for    | integer              | Minimum value: 0     | 86400                |
|                | the entries of this DNS zone (0 - |                      | Maximum value:       |                      |
|                | 2147483647 sec, default = 86400). |                      | 2147483647           |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| type           | Zone type (primary to manage      | option               | \-                   | primary              |
|                | entries directly, secondary to    |                      |                      |                      |
|                | import entries from other zones). |                      |                      |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
|                | +-------------+--------------------------------------------------------+                               |
|                | | Option      | Description                                            |                               |
|                | +=============+========================================================+                               |
|                | | *primary*   | Primary DNS zone, to manage entries directly.          |                               |
|                | +-------------+--------------------------------------------------------+                               |
|                | | *secondary* | Secondary DNS zone, to import entries from other DNS   |                               |
|                | |             | zones.                                                 |                               |
|                | +-------------+--------------------------------------------------------+                               |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
| view           | Zone view (public to serve public | option               | \-                   | shadow               |
|                | clients, shadow to serve internal |                      |                      |                      |
|                | clients).                         |                      |                      |                      |
+----------------+-----------------------------------+----------------------+----------------------+----------------------+
|                | +---------------+--------------------------------------------------------+                             |
|                | | Option        | Description                                            |                             |
|                | +===============+========================================================+                             |
|                | | *shadow*      | Shadow DNS zone to serve internal clients.             |                             |
|                | +---------------+--------------------------------------------------------+                             |
|                | | *public*      | Public DNS zone to serve public clients.               |                             |
|                | +---------------+--------------------------------------------------------+                             |
|                | | *shadow-ztna* | implicit DNS zone for ztna dox tunnel.                 |                             |
|                | +---------------+--------------------------------------------------------+                             |
|                | | *proxy*       | Shadow DNS zone for internal proxy.                    |                             |
|                | +---------------+--------------------------------------------------------+                             |
+----------------+--------------------------------------------------------------------------------------------------------+

