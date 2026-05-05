# config firewall access-proxy-virtual-host

Configure Access Proxy virtual hosts.

## Syntax

```
config firewall access-proxy-virtual-host
    Description: Configure Access Proxy virtual hosts.
    edit <name>
        set host {string}
        set host-type [sub-string|wildcard]
        set replacemsg-group {string}
        set ssl-certificate <name1>, <name2>, ...
    next
end
```

## Parameters

+------------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter        | Description                       | Type                | Size                | Default             |
+==================+===================================+=====================+=====================+=====================+
| host             | The host name.                    | string              | Maximum length: 79  |                     |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+
| host-type        | Type of host pattern.             | option              | \-                  | sub-string          |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                  | +--------------+--------------------------------------------------------+                           |
|                  | | Option       | Description                                            |                           |
|                  | +==============+========================================================+                           |
|                  | | *sub-string* | Match the pattern if a string contains the sub-string. |                           |
|                  | +--------------+--------------------------------------------------------+                           |
|                  | | *wildcard*   | Match the pattern with wildcards.                      |                           |
|                  | +--------------+--------------------------------------------------------+                           |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+
| name             | Virtual host name.                | string              | Maximum length: 79  |                     |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+
| replacemsg-group | Access-proxy-virtual-host         | string              | Maximum length: 35  |                     |
|                  | replacement message override      |                     |                     |                     |
|                  | group.                            |                     |                     |                     |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+
| ssl-certificate  | SSL certificates for this host.   | string              | Maximum length: 79  |                     |
| `<name>`         |                                   |                     |                     |                     |
|                  | Certificate list.                 |                     |                     |                     |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+

