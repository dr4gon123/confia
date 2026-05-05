# config system acme

Configure ACME client.

## Syntax

```
config system acme
    Description: Configure ACME client.
    config accounts
        Description: ACME accounts list.
        edit <id>
            set status {string}
            set url {string}
            set ca_url {string}
            set email {string}
            set privatekey {string}
        next
    end
    set interface <interface-name1>, <interface-name2>, ...
    set source-ip {ipv4-address}
    set source-ip6 {ipv6-address}
    set use-ha-direct [enable|disable]
end
```

## Parameters

+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter          | Description                       | Type               | Size               | Default            |
+====================+===================================+====================+====================+====================+
| interface          | Interface(s) on which the ACME    | string             | Maximum length: 79 |                    |
| `<interface-name>` | client will listen for            |                    |                    |                    |
|                    | challenges.                       |                    |                    |                    |
|                    |                                   |                    |                    |                    |
|                    | Interface name.                   |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip          | Source IPv4 address used to       | ipv4-address       | Not Specified      | 0.0.0.0            |
|                    | connect to the ACME server.       |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip6         | Source IPv6 address used to       | ipv6-address       | Not Specified      | ::                 |
|                    | connect to the ACME server.       |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| use-ha-direct      | Enable the use of \'ha-mgmt\'     | option             | \-                 | disable            |
|                    | interface to connect to the ACME  |                    |                    |                    |
|                    | server when \'ha-direct\' is      |                    |                    |                    |
|                    | enabled in HA configuration       |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable setting.                                        |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable setting.                                       |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+--------------------------------------------------------------------------------------------------+

