# config switch-controller security-policy admin

Configure fortiswitch's admin security-policy.

## Syntax

```
config switch-controller security-policy admin
    Description: Configure fortiswitch's admin security-policy.
    edit <name>
        set auto [disable|enable]
        set ip6-trusthost1 {ipv6-prefix}
        set ip6-trusthost10 {ipv6-prefix}
        set ip6-trusthost2 {ipv6-prefix}
        set ip6-trusthost3 {ipv6-prefix}
        set ip6-trusthost4 {ipv6-prefix}
        set ip6-trusthost5 {ipv6-prefix}
        set ip6-trusthost6 {ipv6-prefix}
        set ip6-trusthost7 {ipv6-prefix}
        set ip6-trusthost8 {ipv6-prefix}
        set ip6-trusthost9 {ipv6-prefix}
        set trusthost1 {ipv4-classnet}
        set trusthost10 {ipv4-classnet}
        set trusthost2 {ipv4-classnet}
        set trusthost3 {ipv4-classnet}
        set trusthost4 {ipv4-classnet}
        set trusthost5 {ipv4-classnet}
        set trusthost6 {ipv4-classnet}
        set trusthost7 {ipv4-classnet}
        set trusthost8 {ipv4-classnet}
        set trusthost9 {ipv4-classnet}
    next
end
```

## Parameters

+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter       | Description                       | Type               | Size               | Default            |
+=================+===================================+====================+====================+====================+
| auto            | Automatically set based on the    | option             | \-                 | disable            |
|                 | host ip connected via the         |                    |                    |                    |
|                 | Fortilink interface.              |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *disable*   | Disable.                                               |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *enable*    | Enable.                                                |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-trusthost1  | Trusted IPv6 host.                | ipv6-prefix        | Not Specified      | ::/0               |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-trusthost10 | Trusted IPv6 host.                | ipv6-prefix        | Not Specified      | ::/0               |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-trusthost2  | Trusted IPv6 host.                | ipv6-prefix        | Not Specified      | ::/0               |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-trusthost3  | Trusted IPv6 host.                | ipv6-prefix        | Not Specified      | ::/0               |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-trusthost4  | Trusted IPv6 host.                | ipv6-prefix        | Not Specified      | ::/0               |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-trusthost5  | Trusted IPv6 host.                | ipv6-prefix        | Not Specified      | ::/0               |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-trusthost6  | Trusted IPv6 host.                | ipv6-prefix        | Not Specified      | ::/0               |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-trusthost7  | Trusted IPv6 host.                | ipv6-prefix        | Not Specified      | ::/0               |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-trusthost8  | Trusted IPv6 host.                | ipv6-prefix        | Not Specified      | ::/0               |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-trusthost9  | Trusted IPv6 host.                | ipv6-prefix        | Not Specified      | ::/0               |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| name            | Policy name.                      | string             | Maximum length: 31 |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| trusthost1      | Trusted IPv4 host.                | ipv4-classnet      | Not Specified      | 0.0.0.0 0.0.0.0    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| trusthost10     | Trusted IPv4 host.                | ipv4-classnet      | Not Specified      | 0.0.0.0 0.0.0.0    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| trusthost2      | Trusted IPv4 host.                | ipv4-classnet      | Not Specified      | 0.0.0.0 0.0.0.0    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| trusthost3      | Trusted IPv4 host.                | ipv4-classnet      | Not Specified      | 0.0.0.0 0.0.0.0    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| trusthost4      | Trusted IPv4 host.                | ipv4-classnet      | Not Specified      | 0.0.0.0 0.0.0.0    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| trusthost5      | Trusted IPv4 host.                | ipv4-classnet      | Not Specified      | 0.0.0.0 0.0.0.0    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| trusthost6      | Trusted IPv4 host.                | ipv4-classnet      | Not Specified      | 0.0.0.0 0.0.0.0    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| trusthost7      | Trusted IPv4 host.                | ipv4-classnet      | Not Specified      | 0.0.0.0 0.0.0.0    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| trusthost8      | Trusted IPv4 host.                | ipv4-classnet      | Not Specified      | 0.0.0.0 0.0.0.0    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| trusthost9      | Trusted IPv4 host.                | ipv4-classnet      | Not Specified      | 0.0.0.0 0.0.0.0    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+

