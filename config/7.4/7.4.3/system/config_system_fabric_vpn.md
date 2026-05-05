# config system fabric-vpn

Setup for self orchestrated fabric auto discovery VPN.

## Syntax

```
config system fabric-vpn
    Description: Setup for self orchestrated fabric auto discovery VPN.
    config advertised-subnets
        Description: Local advertised subnets.
        edit <id>
            set access [inbound|bidirectional]
            set bgp-network {integer}
            set firewall-address {string}
            set policies {integer}
            set prefix {ipv4-classnet}
        next
    end
    set bgp-as {integer}
    set branch-name {string}
    set health-checks {string}
    set loopback-address-block {ipv4-classnet-host}
    set loopback-advertised-subnet {integer}
    set loopback-interface {string}
    config overlays
        Description: Local overlay interfaces table.
        edit <name>
            set bgp-neighbor {string}
            set bgp-neighbor-group {string}
            set bgp-neighbor-range {integer}
            set bgp-network {integer}
            set interface {string}
            set ipsec-phase1 {string}
            set overlay-policy {integer}
            set overlay-tunnel-block {ipv4-classnet-host}
            set remote-gw {ipv4-address-any}
            set route-policy {integer}
            set sdwan-member {integer}
        next
    end
    set policy-rule [health-check|manual|...]
    set psksecret {password-3}
    set sdwan-zone {string}
    set status [enable|disable]
    set sync-mode [enable|disable]
    set vpn-role [hub|spoke]
end
```

## Parameters

+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter                  | Description                       | Type                  | Size                  | Default               |
+============================+===================================+=======================+=======================+=======================+
| bgp-as                     | BGP Router AS number, valid from  | integer               | Minimum value: 0      | 0                     |
|                            | 1 to 4294967295.                  |                       | Maximum value:        |                       |
|                            |                                   |                       | 4294967295            |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| branch-name                | Branch name.                      | string                | Maximum length: 35    |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| health-checks              | Underlying health checks.         | string                | Maximum length: 35    |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| loopback-address-block     | IPv4 address and subnet mask for  | ipv4-classnet-host    | Not Specified         | 0.0.0.0 0.0.0.0       |
|                            | hub\'s loopback address, syntax:  |                       |                       |                       |
|                            | X.X.X.X/24.                       |                       |                       |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| loopback-advertised-subnet | Loopback advertised subnet        | integer               | Minimum value: 0      | 0                     |
|                            | reference.                        |                       | Maximum value:        |                       |
|                            |                                   |                       | 4294967295            |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| loopback-interface         | Loopback interface.               | string                | Maximum length: 15    |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| policy-rule                | Policy creation rule.             | option                | \-                    | health-check          |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                            | +----------------+--------------------------------------------------------+                               |
|                            | | Option         | Description                                            |                               |
|                            | +================+========================================================+                               |
|                            | | *health-check* | Create health check policy automatically.              |                               |
|                            | +----------------+--------------------------------------------------------+                               |
|                            | | *manual*       | All policies will be created manually.                 |                               |
|                            | +----------------+--------------------------------------------------------+                               |
|                            | | *auto*         | Automatically create allow policies.                   |                               |
|                            | +----------------+--------------------------------------------------------+                               |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| psksecret                  | Pre-shared secret for ADVPN.      | password-3            | Not Specified         |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| sdwan-zone                 | Reference to created SD-WAN zone. | string                | Maximum length: 35    |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| status                     | Enable/disable Fabric VPN.        | option                | \-                    | disable               |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                            | +-------------+--------------------------------------------------------+                                  |
|                            | | Option      | Description                                            |                                  |
|                            | +=============+========================================================+                                  |
|                            | | *enable*    | Enable Fabric VPN.                                     |                                  |
|                            | +-------------+--------------------------------------------------------+                                  |
|                            | | *disable*   | Disable Fabric VPN.                                    |                                  |
|                            | +-------------+--------------------------------------------------------+                                  |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| sync-mode                  | Setting synchronised by fabric or | option                | \-                    | enable                |
|                            | manual.                           |                       |                       |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                            | +-------------+--------------------------------------------------------+                                  |
|                            | | Option      | Description                                            |                                  |
|                            | +=============+========================================================+                                  |
|                            | | *enable*    | Enable fabric led configuration synchronisation.       |                                  |
|                            | +-------------+--------------------------------------------------------+                                  |
|                            | | *disable*   | Disable fabric led configuration synchronisation.      |                                  |
|                            | +-------------+--------------------------------------------------------+                                  |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| vpn-role                   | Fabric VPN role.                  | option                | \-                    | hub                   |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                            | +-------------+--------------------------------------------------------+                                  |
|                            | | Option      | Description                                            |                                  |
|                            | +=============+========================================================+                                  |
|                            | | *hub*       | VPN hub.                                               |                                  |
|                            | +-------------+--------------------------------------------------------+                                  |
|                            | | *spoke*     | VPN spoke.                                             |                                  |
|                            | +-------------+--------------------------------------------------------+                                  |
+----------------------------+-----------------------------------------------------------------------------------------------------------+

