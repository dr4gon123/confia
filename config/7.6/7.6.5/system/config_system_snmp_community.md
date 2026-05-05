# config system snmp community

SNMP community configuration.

## Syntax

```
config system snmp community
    Description: SNMP community configuration.
    edit <id>
        set events {option1}, {option2}, ...
        config hosts
            Description: Configure IPv4 SNMP managers (hosts).
            edit <id>
                set ha-direct [enable|disable]
                set host-type [any|query|...]
                set interface {string}
                set interface-select-method [auto|sdwan|...]
                set ip {user}
                set source-ip {ipv4-address}
                set vrf-select {integer}
            next
        end
        config hosts6
            Description: Configure IPv6 SNMP managers.
            edit <id>
                set ha-direct [enable|disable]
                set host-type [any|query|...]
                set interface {string}
                set interface-select-method [auto|sdwan|...]
                set ipv6 {ipv6-prefix}
                set source-ipv6 {ipv6-address}
                set vrf-select {integer}
            next
        end
        set mib-view {string}
        set name {string}
        set query-v1-port {integer}
        set query-v1-status [enable|disable]
        set query-v2c-port {integer}
        set query-v2c-status [enable|disable]
        set status [enable|disable]
        set trap-v1-lport {integer}
        set trap-v1-rport {integer}
        set trap-v1-status [enable|disable]
        set trap-v2c-lport {integer}
        set trap-v2c-rport {integer}
        set trap-v2c-status [enable|disable]
        set vdoms <name1>, <name2>, ...
    next
end
```

## Parameters

+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| Parameter        | Description                       | Type                    | Size                    | Default                       |
+==================+===================================+=========================+=========================+===============================+
| events           | SNMP trap events.                 | option                  | \-                      | cpu-high mem-low log-full     |
|                  |                                   |                         |                         | intf-ip vpn-tun-up            |
|                  |                                   |                         |                         | vpn-tun-down ha-switch        |
|                  |                                   |                         |                         | ha-hb-failure ips-signature   |
|                  |                                   |                         |                         | ips-anomaly av-virus          |
|                  |                                   |                         |                         | av-oversize av-pattern        |
|                  |                                   |                         |                         | av-fragmented fm-if-change    |
|                  |                                   |                         |                         | bgp-established               |
|                  |                                   |                         |                         | bgp-backward-transition       |
|                  |                                   |                         |                         | ha-member-up ha-member-down   |
|                  |                                   |                         |                         | ent-conf-change av-conserve   |
|                  |                                   |                         |                         | av-bypass av-oversize-passed  |
|                  |                                   |                         |                         | av-oversize-blocked           |
|                  |                                   |                         |                         | ips-pkg-update ips-fail-open  |
|                  |                                   |                         |                         | temperature-high              |
|                  |                                   |                         |                         | voltage-alert power-supply    |
|                  |                                   |                         |                         | faz-disconnect faz            |
|                  |                                   |                         |                         | fan-failure wc-ap-up          |
|                  |                                   |                         |                         | wc-ap-down fswctl-session-up  |
|                  |                                   |                         |                         | fswctl-session-down           |
|                  |                                   |                         |                         | load-balance-real-server-down |
|                  |                                   |                         |                         | per-cpu-high dhcp pool-usage  |
|                  |                                   |                         |                         | ippool interface              |
|                  |                                   |                         |                         | ospf-nbr-state-change         |
|                  |                                   |                         |                         | ospf-virtnbr-state-change bfd |
|                  |                                   |                         |                         | \*\*                          |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | Option                          | Description                                            |                          |
|                  | +=================================+========================================================+                          |
|                  | | *cpu-high*                      | Send a trap when CPU usage is high.                    |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *mem-low*                       | Send a trap when used memory is high, free memory is   |                          |
|                  | |                                 | low, or freeable memory is high.                       |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *log-full*                      | Send a trap when log disk space becomes low.           |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *intf-ip*                       | Send a trap when an interface IP address is changed.   |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *vpn-tun-up*                    | Send a trap when a VPN tunnel comes up.                |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *vpn-tun-down*                  | Send a trap when a VPN tunnel goes down.               |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *ha-switch*                     | Send a trap after an HA failover when the backup unit  |                          |
|                  | |                                 | has taken over.                                        |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *ha-hb-failure*                 | Send a trap when HA heartbeats are not received.       |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *ips-signature*                 | Send a trap when IPS detects an attack.                |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *ips-anomaly*                   | Send a trap when IPS finds an anomaly.                 |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *av-virus*                      | Send a trap when AntiVirus finds a virus.              |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *av-oversize*                   | Send a trap when AntiVirus finds an oversized file.    |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *av-pattern*                    | Send a trap when AntiVirus finds file matching         |                          |
|                  | |                                 | pattern.                                               |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *av-fragmented*                 | Send a trap when AntiVirus finds a fragmented file.    |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *fm-if-change*                  | Send a trap when FortiManager interface changes. Send  |                          |
|                  | |                                 | a FortiManager trap.                                   |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *fm-conf-change*                | Send a trap when a configuration change is made by a   |                          |
|                  | |                                 | FortiGate administrator and the FortiGate is managed   |                          |
|                  | |                                 | by FortiManager.                                       |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *bgp-established*               | Send a trap when a BGP FSM transitions to the          |                          |
|                  | |                                 | established state.                                     |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *bgp-backward-transition*       | Send a trap when a BGP FSM goes from a high numbered   |                          |
|                  | |                                 | state to a lower numbered state.                       |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *ha-member-up*                  | Send a trap when an HA cluster member goes up.         |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *ha-member-down*                | Send a trap when an HA cluster member goes down.       |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *ent-conf-change*               | Send a trap when an entity MIB change occurs           |                          |
|                  | |                                 | (RFC4133).                                             |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *av-conserve*                   | Send a trap when the FortiGate enters conserve mode.   |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *av-bypass*                     | Send a trap when the FortiGate enters bypass mode.     |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *av-oversize-passed*            | Send a trap when AntiVirus passes an oversized file.   |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *av-oversize-blocked*           | Send a trap when AntiVirus blocks an oversized file.   |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *ips-pkg-update*                | Send a trap when the IPS signature database or engine  |                          |
|                  | |                                 | is updated.                                            |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *ips-fail-open*                 | Send a trap when the IPS network buffer is full.       |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *temperature-high*              | Send a trap when a temperature sensor registers a      |                          |
|                  | |                                 | temperature that is too high.                          |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *voltage-alert*                 | Send a trap when a voltage sensor registers a voltage  |                          |
|                  | |                                 | that is outside of the normal range.                   |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *power-supply*                  | Send a trap when a power supply fails or restores.     |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *faz-disconnect*                | Send a trap when a FortiAnalyzer disconnects from the  |                          |
|                  | |                                 | FortiGate.                                             |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *faz*                           | Send a trap when Fortianalyzer main server failover    |                          |
|                  | |                                 | and alternate server take over, or alternate server    |                          |
|                  | |                                 | failover and main server take over.                    |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *fan-failure*                   | Send a trap when a fan fails.                          |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *wc-ap-up*                      | Send a trap when a managed FortiAP comes up.           |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *wc-ap-down*                    | Send a trap when a managed FortiAP goes down.          |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *fswctl-session-up*             | Send a trap when a FortiSwitch controller session      |                          |
|                  | |                                 | comes up.                                              |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *fswctl-session-down*           | Send a trap when a FortiSwitch controller session goes |                          |
|                  | |                                 | down.                                                  |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *load-balance-real-server-down* | Send a trap when a server load balance real server     |                          |
|                  | |                                 | goes down.                                             |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *device-new*                    | Send a trap when a new device is found.                |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *per-cpu-high*                  | Send a trap when per-CPU usage is high.                |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *dhcp*                          | Send a trap when the DHCP server exhausts the IP pool, |                          |
|                  | |                                 | an IP address already is in use, or a DHCP client      |                          |
|                  | |                                 | interface received a DHCP-NAK.                         |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *pool-usage*                    | Send a trap about ippool usage.                        |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *ippool*                        | Send a trap for ippool events.                         |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *interface*                     | Send a trap for interface event.                       |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *ospf-nbr-state-change*         | Send a trap when there has been a change in the state  |                          |
|                  | |                                 | of a non-virtual OSPF neighbor.                        |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *ospf-virtnbr-state-change*     | Send a trap when there has been a change in the state  |                          |
|                  | |                                 | of an OSPF virtual neighbor.                           |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
|                  | | *bfd*                           | Send a trap for bfd event.                             |                          |
|                  | +---------------------------------+--------------------------------------------------------+                          |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| id               | Community ID.                     | integer                 | Minimum value: 0        | 0                             |
|                  |                                   |                         | Maximum value:          |                               |
|                  |                                   |                         | 4294967295              |                               |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| mib-view         | SNMP access control MIB view.     | string                  | Maximum length: 32      |                               |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| name             | Community name.                   | string                  | Maximum length: 35      |                               |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| query-v1-port    | SNMP v1 query port (default =     | integer                 | Minimum value: 1        | 161                           |
|                  | 161).                             |                         | Maximum value: 65535    |                               |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| query-v1-status  | Enable/disable SNMP v1 queries.   | option                  | \-                      | enable                        |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | Option      | Description                                            |                                              |
|                  | +=============+========================================================+                                              |
|                  | | *enable*    | Enable setting.                                        |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *disable*   | Disable setting.                                       |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| query-v2c-port   | SNMP v2c query port (default =    | integer                 | Minimum value: 0        | 161                           |
|                  | 161).                             |                         | Maximum value: 65535    |                               |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| query-v2c-status | Enable/disable SNMP v2c queries.  | option                  | \-                      | enable                        |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | Option      | Description                                            |                                              |
|                  | +=============+========================================================+                                              |
|                  | | *enable*    | Enable setting.                                        |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *disable*   | Disable setting.                                       |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| status           | Enable/disable this SNMP          | option                  | \-                      | enable                        |
|                  | community.                        |                         |                         |                               |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | Option      | Description                                            |                                              |
|                  | +=============+========================================================+                                              |
|                  | | *enable*    | Enable setting.                                        |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *disable*   | Disable setting.                                       |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| trap-v1-lport    | SNMP v1 trap local port (default  | integer                 | Minimum value: 1        | 162                           |
|                  | = 162).                           |                         | Maximum value: 65535    |                               |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| trap-v1-rport    | SNMP v1 trap remote port (default | integer                 | Minimum value: 1        | 162                           |
|                  | = 162).                           |                         | Maximum value: 65535    |                               |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| trap-v1-status   | Enable/disable SNMP v1 traps.     | option                  | \-                      | enable                        |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | Option      | Description                                            |                                              |
|                  | +=============+========================================================+                                              |
|                  | | *enable*    | Enable setting.                                        |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *disable*   | Disable setting.                                       |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| trap-v2c-lport   | SNMP v2c trap local port (default | integer                 | Minimum value: 1        | 162                           |
|                  | = 162).                           |                         | Maximum value: 65535    |                               |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| trap-v2c-rport   | SNMP v2c trap remote port         | integer                 | Minimum value: 1        | 162                           |
|                  | (default = 162).                  |                         | Maximum value: 65535    |                               |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| trap-v2c-status  | Enable/disable SNMP v2c traps.    | option                  | \-                      | enable                        |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | Option      | Description                                            |                                              |
|                  | +=============+========================================================+                                              |
|                  | | *enable*    | Enable setting.                                        |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *disable*   | Disable setting.                                       |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| vdoms `<name>`   | SNMP access control VDOMs.        | string                  | Maximum length: 79      |                               |
|                  |                                   |                         |                         |                               |
|                  | VDOM name.                        |                         |                         |                               |
+------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+

