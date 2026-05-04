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
    set bgp-as {user}
    set branch-name {string}
    set health-checks {string}
    set loopback-address-block {ipv4-classnet-any}
    set loopback-address-block-ipam {string}
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
            set ipsec-network-id {integer}
            set ipsec-phase1 {string}
            set overlay-policy {integer}
            set overlay-tunnel-block {ipv4-classnet-any}
            set overlay-tunnel-block-ipam {string}
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

+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter                   | Description                       | Type                  | Size                  | Default               |
+=============================+===================================+=======================+=======================+=======================+
| bgp-as                      | BGP Router AS number,             | user                  | Not Specified         |                       |
|                             | asplain/asdot/asdot+ format.      |                       |                       |                       |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| branch-name                 | Branch name.                      | string                | Maximum length: 35    |                       |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| health-checks               | Underlying health checks.         | string                | Maximum length: 35    |                       |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| loopback-address-block      | IPv4 address and subnet mask for  | ipv4-classnet-any     | Not Specified         | 0.0.0.0 0.0.0.0       |
|                             | hub\'s loopback address, syntax:  | \*\*                  |                       |                       |
|                             | X.X.X.X/24.                       |                       |                       |                       |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| loopback-address-block-ipam | IPAM firewall address that will   | string                | Maximum length: 79    |                       |
| \*                          | be used for hub\'s loopback       |                       |                       |                       |
|                             | address.                          |                       |                       |                       |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| loopback-advertised-subnet  | Loopback advertised subnet        | integer               | Minimum value: 0      | 0                     |
|                             | reference.                        |                       | Maximum value:        |                       |
|                             |                                   |                       | 4294967295            |                       |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| loopback-interface          | Loopback interface.               | string                | Maximum length: 15    |                       |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| policy-rule                 | Policy creation rule.             | option                | \-                    | fabric \*\*           |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                             | +----------------+--------------------------------------------------------+                               |
|                             | | Option         | Description                                            |                               |
|                             | +================+========================================================+                               |
|                             | | *health-check* | Only create health check policy automatically (Fabric  |                               |
|                             | |                | policies are not enforced).                            |                               |
|                             | +----------------+--------------------------------------------------------+                               |
|                             | | *manual*       | All policies will be created manually (Fabric policies |                               |
|                             | |                | are not enforced).                                     |                               |
|                             | +----------------+--------------------------------------------------------+                               |
|                             | | *auto*         | Automatically create allow all policies matching       |                               |
|                             | |                | subnet access (Fabric policies are not enforced).      |                               |
|                             | +----------------+--------------------------------------------------------+                               |
|                             | | *fabric*       | Use fabric policies for automatic policy creation      |                               |
|                             | |                | (Health check policies are automatically enforced).    |                               |
|                             | +----------------+--------------------------------------------------------+                               |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| psksecret                   | Pre-shared secret for ADVPN.      | password-3            | Not Specified         |                       |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| sdwan-zone                  | Reference to created SD-WAN zone. | string                | Maximum length: 35    |                       |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| status                      | Enable/disable Fabric VPN.        | option                | \-                    | disable               |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                             | +-------------+--------------------------------------------------------+                                  |
|                             | | Option      | Description                                            |                                  |
|                             | +=============+========================================================+                                  |
|                             | | *enable*    | Enable Fabric VPN.                                     |                                  |
|                             | +-------------+--------------------------------------------------------+                                  |
|                             | | *disable*   | Disable Fabric VPN.                                    |                                  |
|                             | +-------------+--------------------------------------------------------+                                  |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| sync-mode                   | Setting synchronized by fabric or | option                | \-                    | enable                |
|                             | manual.                           |                       |                       |                       |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                             | +-------------+--------------------------------------------------------+                                  |
|                             | | Option      | Description                                            |                                  |
|                             | +=============+========================================================+                                  |
|                             | | *enable*    | Enable fabric led configuration synchronization.       |                                  |
|                             | +-------------+--------------------------------------------------------+                                  |
|                             | | *disable*   | Disable fabric led configuration synchronization.      |                                  |
|                             | +-------------+--------------------------------------------------------+                                  |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| vpn-role                    | Fabric VPN role.                  | option                | \-                    | hub                   |
+-----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                             | +-------------+--------------------------------------------------------+                                  |
|                             | | Option      | Description                                            |                                  |
|                             | +=============+========================================================+                                  |
|                             | | *hub*       | VPN hub.                                               |                                  |
|                             | +-------------+--------------------------------------------------------+                                  |
|                             | | *spoke*     | VPN spoke.                                             |                                  |
|                             | +-------------+--------------------------------------------------------+                                  |
+-----------------------------+-----------------------------------------------------------------------------------------------------------+

